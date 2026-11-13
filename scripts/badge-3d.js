/* ==================== 3D INTERACTIVE EVIDENCE BADGE INSPECTOR ==================== */
// Uses Three.js to render authentic, physical 3D interactive credential medallions
const THREE = window.THREE || (typeof globalThis !== 'undefined' ? globalThis.THREE : null);
import { playTypewriterClick } from './audio.js';
import { BADGE_BASE64 } from './data/badge-images.js';

export const BADGE_DATA = [
  {
    id: 'cisco-analyst',
    title: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'Cisco Networking Academy',
    recipient: 'Arya vardhan Gelli',
    badgeId: 'baf50dae-b67b-41f2-a45f-c1f854e6567e',
    verifyUrl: 'https://www.credly.com/badges/baf50dae-b67b-41f2-a45f-c1f854e6567e',
    accentColor: '#00bceb',
    metalColor: 0xd4af37, // Burnished Gold
    description: 'Cisco verifies successful completion of the Junior Cybersecurity Analyst Career Path. Proficient in monitoring and protecting networks, firewalls, cloud security, cryptography, vulnerability assessment, risk management, and forensic incident response.',
    skills: ['Vulnerability Assessment', 'Threat Intelligence', 'Network Monitoring', 'Incident Response', 'Cryptography', 'Cloud Defense']
  },
  {
    id: 'cisco-networking',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    recipient: 'Arya vardhan Gelli',
    badgeId: '0aa99b23-f8f8-4e09-b4ab-2ee9e76d9331',
    verifyUrl: 'https://www.credly.com/badges/0aa99b23-f8f8-4e09-b4ab-2ee9e76d9331',
    accentColor: '#00bceb',
    metalColor: 0x3a6073, // Cyber Steel Blue
    description: 'Cisco verifies completion of Networking Basics. Covers network architecture, packet transport, IP addressing (IPv4/IPv6 subnetting), transport & application protocols, and 13 Cisco Packet Tracer activities.',
    skills: ['IPv4 / IPv6 Addressing', 'Subnetting & Topologies', 'Packet Tracer Labs', 'Routing & Switching', 'Network Protocols']
  },
  {
    id: 'htb-foundations',
    title: 'Solid basis — Network Foundations',
    issuer: 'Hack The Box Academy',
    recipient: 'Arya Vardhan Gelli',
    badgeId: 'ba738bc3-efc1-11ef-864f-bea50ffe6cb4',
    verifyUrl: 'https://academy.hackthebox.com/achievement/badge/ba738bc3-efc1-11ef-864f-bea50ffe6cb4',
    accentColor: '#9fef00',
    metalColor: 0x223322, // Stealth Dark Titanium with Green Sheen
    description: 'Awarded by Hack The Box Academy for successfully passing the Network Foundations module. Validated practical skills in network traffic inspection, protocol analysis, and penetration testing foundations.',
    skills: ['Packet Analysis (Wireshark)', 'Protocol Stack Anatomy', 'Network Reconnaissance', 'Offensive Security Fundamentals']
  }
];

let currentBadgeIndex = 0;
let scene, camera, renderer, coinGroup;
let frontMesh, backMesh, rimMesh;
let edgeMaterial, frontMaterial, backMaterial;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let autoRotate = true;
let targetRotation = { x: 0.12, y: -0.2 };
let pointLight, spotLight;
let animFrameId = null;

// Texture cache to prevent redundant re-creation
const TEXTURE_CACHE = {};

function getBadgeImage(badgeId) {
  return new Promise((resolve) => {
    const dataUri = BADGE_BASE64[badgeId];
    if (!dataUri) {
      resolve(null);
      return;
    }
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = dataUri;
  });
}

function createCiscoShieldShape() {
  const shape = new THREE.Shape();
  const w = 2.05;
  const topY = 2.25;
  const midY = 0.45;
  const botY = -2.35;
  const cornerR = 0.22;

  shape.moveTo(-w + cornerR, topY);
  shape.lineTo(w - cornerR, topY);
  shape.quadraticCurveTo(w, topY, w, topY - cornerR);
  shape.lineTo(w, midY);
  shape.quadraticCurveTo(w, -0.9, 0, botY);
  shape.quadraticCurveTo(-w, -0.9, -w, midY);
  shape.lineTo(-w, topY - cornerR);
  shape.quadraticCurveTo(-w, topY, -w + cornerR, topY);
  return shape;
}

function createHTBCrestShape() {
  const shape = new THREE.Shape();
  const w = 2.05;
  const topY = 2.25;
  const chamfer = 0.65;
  const midY = 0.25;
  const botY = -2.35;

  shape.moveTo(-w + chamfer, topY);
  shape.lineTo(w - chamfer, topY);
  shape.lineTo(w, topY - chamfer);
  shape.lineTo(w, midY);
  shape.lineTo(0, botY);
  shape.lineTo(-w, midY);
  shape.lineTo(-w, topY - chamfer);
  shape.closePath();
  return shape;
}

function getBadgeShape(badgeId) {
  if (badgeId === 'htb-foundations') {
    return createHTBCrestShape();
  }
  return createCiscoShieldShape();
}

function createFrontFaceCanvas(badge, img) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const ctx = c.getContext('2d');

  // Satin dark cardstock / backing plate background
  ctx.fillStyle = '#14100c';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle interior border matching badge accent (satin, non-neon)
  ctx.strokeStyle = badge.accentColor;
  ctx.lineWidth = 3;
  ctx.strokeRect(12, 12, 488, 488);

  ctx.strokeStyle = 'rgba(255, 235, 200, 0.15)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(18, 18, 476, 476);

  // Draw official badge image centered & crisp with high fidelity
  if (img) {
    const size = 460;
    const offset = (512 - size) / 2;
    ctx.drawImage(img, offset, offset, size, size);
  } else {
    ctx.fillStyle = badge.accentColor;
    ctx.font = 'bold 26px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(badge.title.slice(0, 20), 256, 256);
  }

  return c;
}

function createBackFaceCanvas(badge) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const ctx = c.getContext('2d');

  // Metallic satin brushed plate background
  ctx.fillStyle = '#181410';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle brushed metal horizontal lines
  ctx.strokeStyle = 'rgba(255, 225, 180, 0.05)';
  ctx.lineWidth = 1;
  for (let y = 10; y < 512; y += 8) {
    ctx.beginPath();
    ctx.moveTo(10, y);
    ctx.lineTo(502, y);
    ctx.stroke();
  }

  // Outer border
  ctx.strokeStyle = '#c5a059';
  ctx.lineWidth = 3;
  ctx.strokeRect(14, 14, 484, 484);

  // Security Classification Header
  ctx.fillStyle = '#f4e4c1';
  ctx.font = 'bold 15px "Courier New", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('★ OFFICIAL FORENSIC CREDENTIAL ★', 256, 65);

  ctx.fillStyle = '#a89880';
  ctx.font = '11px "Courier New", monospace';
  ctx.fillText('SECURITY CLEARANCE & ACCREDITATION', 256, 88);

  // Center Metal Plate Box
  ctx.fillStyle = 'rgba(10, 8, 6, 0.9)';
  ctx.strokeStyle = '#c5a059';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(40, 115, 432, 240);
  ctx.fillRect(40, 115, 432, 240);

  // Recipient Name
  ctx.fillStyle = '#c5a059';
  ctx.font = 'bold 11px monospace';
  ctx.fillText('AUTHENTICATED RECIPIENT:', 256, 142);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 19px "Courier New", monospace';
  ctx.fillText(badge.recipient.toUpperCase(), 256, 170);

  // Badge Name
  ctx.fillStyle = badge.accentColor;
  ctx.font = 'bold 13px monospace';
  const displayTitle = badge.title.length > 32 ? badge.title.slice(0, 30) + '...' : badge.title;
  ctx.fillText(displayTitle.toUpperCase(), 256, 208);

  // Issuer
  ctx.fillStyle = '#e2d3be';
  ctx.font = '12px monospace';
  ctx.fillText(`ISSUER: ${badge.issuer.toUpperCase()}`, 256, 235);

  // Badge ID hash
  ctx.fillStyle = '#8f806e';
  ctx.font = '10px monospace';
  ctx.fillText(`CREDENTIAL UUID: ${badge.badgeId.slice(0, 24)}...`, 256, 265);

  // Verified Stamp in Center Box
  ctx.strokeStyle = '#22c55e';
  ctx.lineWidth = 2;
  ctx.strokeRect(110, 288, 292, 36);
  ctx.fillStyle = '#22c55e';
  ctx.font = 'bold 13px monospace';
  ctx.fillText('✓ OFFICIALLY VERIFIED & ACTIVE', 256, 306);

  // Simulated Laser Barcode at bottom
  ctx.fillStyle = '#d5c5a8';
  let barX = 90;
  const widths = [2, 4, 1, 3, 5, 2, 1, 4, 2, 3, 1, 5, 3, 2, 4, 1, 3, 2, 5, 1, 4, 2, 3, 4, 1, 2, 4, 2, 5, 3, 2, 4];
  for (let i = 0; i < widths.length; i++) {
    const w = widths[i];
    ctx.fillRect(barX, 385, w, 32);
    barX += w + 6;
  }

  ctx.fillStyle = '#a89880';
  ctx.font = '9px monospace';
  ctx.fillText(`VERIFICATION HASH // ${badge.badgeId.slice(0, 18).toUpperCase()}`, 256, 435);

  return c;
}

async function getOrCreateTextures(badge) {
  if (TEXTURE_CACHE[badge.id]) {
    return TEXTURE_CACHE[badge.id];
  }

  const img = await getBadgeImage(badge.id);
  const frontCanvas = createFrontFaceCanvas(badge, img);
  const backCanvas = createBackFaceCanvas(badge);

  const frontTexture = new THREE.CanvasTexture(frontCanvas);
  frontTexture.anisotropy = 4;

  const backTexture = new THREE.CanvasTexture(backCanvas);
  backTexture.anisotropy = 4;

  TEXTURE_CACHE[badge.id] = {
    front: frontTexture,
    back: backTexture
  };

  return TEXTURE_CACHE[badge.id];
}

let keyLight;

function rebuildBadgeMesh(badge) {
  if (!coinGroup) return;

  const shape = getBadgeShape(badge.id);

  // Clean up any existing children to prevent memory leaks or duplicate meshes
  while (coinGroup.children.length > 0) {
    const child = coinGroup.children[0];
    coinGroup.remove(child);
    if (child.geometry) child.geometry.dispose();
  }

  // 1. Front Face Mesh (ShapeGeometry automatically creates planar UVs)
  const frontGeo = new THREE.ShapeGeometry(shape);
  frontMesh = new THREE.Mesh(frontGeo, frontMaterial);
  frontMesh.position.z = 0.114;
  coinGroup.add(frontMesh);

  // 2. Back Face Mesh (ShapeGeometry with Y-180 rotation for authentic credential back)
  const backGeo = new THREE.ShapeGeometry(shape);
  backMesh = new THREE.Mesh(backGeo, backMaterial);
  backMesh.position.z = -0.114;
  backMesh.rotation.y = Math.PI;
  coinGroup.add(backMesh);

  // 3. Metallic Outer Rim (ExtrudeGeometry with satin bevel)
  const extrudeSettings = {
    depth: 0.22,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.04,
    bevelThickness: 0.04
  };
  const rimGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  rimMesh = new THREE.Mesh(rimGeo, edgeMaterial);
  rimMesh.position.z = -0.11;
  coinGroup.add(rimMesh);
}

export function init3DBadgeViewer() {
  const container = document.getElementById('badge-3d-canvas-container');
  if (!container || !THREE) return;

  const width = container.clientWidth || 400;
  const height = container.clientHeight || 360;

  // Scene & Camera
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 0, 7.8);

  // Renderer with smooth anti-aliasing
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Container setup
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Soft Photographic Studio Lighting (eliminates artificial AI gloss & white hotspots)
  const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.4);
  scene.add(ambientLight);

  keyLight = new THREE.DirectionalLight(0xffeedd, 0.9);
  keyLight.position.set(3, 4, 5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xddeeff, 0.45);
  fillLight.position.set(-4, -2, 3);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xffffff, 0.65);
  rimLight.position.set(0, 1, -5);
  scene.add(rimLight);

  // Coin Group: Single parent holding the 3D medallion components
  coinGroup = new THREE.Group();
  scene.add(coinGroup);

  // Satin PBR Materials (Matte Enamel + Cast Brushed Metal)
  edgeMaterial = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    metalness: 0.65,
    roughness: 0.45
  });

  frontMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.15,
    roughness: 0.68
  });

  backMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.48,
    roughness: 0.48
  });

  // Interaction handlers
  setupBadgeInteractions(container);

  // Load selected badge
  loadBadgeModel(currentBadgeIndex);

  // Start Animation Loop
  if (!animFrameId) {
    animate();
  }

  window.addEventListener('resize', onViewerResize);
}

function onViewerResize() {
  const container = document.getElementById('badge-3d-canvas-container');
  if (!container || !renderer || !camera) return;
  const width = container.clientWidth;
  const height = container.clientHeight;
  if (width === 0 || height === 0) return;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function setupBadgeInteractions(container) {
  // Drag to rotate
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    autoRotate = false;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mousemove', (e) => {
    if (keyLight && container) {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      keyLight.position.x = 3 + normX * 0.8;
      keyLight.position.y = 4 + normY * 0.8;
    }

    if (!isDragging || !coinGroup) return;
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    targetRotation.y += deltaX * 0.012;
    targetRotation.x += deltaY * 0.012;

    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch controls for mobile
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      autoRotate = false;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !coinGroup || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.y;

    targetRotation.y += deltaX * 0.014;
    targetRotation.x += deltaY * 0.014;

    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Wheel zoom
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (!camera) return;
    camera.position.z = Math.max(5.0, Math.min(10.5, camera.position.z + e.deltaY * 0.005));
  }, { passive: false });
}

export async function loadBadgeModel(index) {
  if (index < 0 || index >= BADGE_DATA.length) index = 0;
  currentBadgeIndex = index;
  const badge = BADGE_DATA[index];

  // Update UI texts in modal immediately
  updateModalBadgeDetails(badge);

  // Fetch or create textures from embedded base64 cache
  const textures = await getOrCreateTextures(badge);

  // Rebuild authentic shape geometry for this specific credential
  rebuildBadgeMesh(badge);

  // Apply textures to materials
  if (frontMaterial && backMaterial && edgeMaterial) {
    frontMaterial.map = textures.front;
    frontMaterial.needsUpdate = true;

    backMaterial.map = textures.back;
    backMaterial.needsUpdate = true;

    edgeMaterial.color.set(badge.metalColor);
    edgeMaterial.needsUpdate = true;
  }
}

function updateModalBadgeDetails(badge) {
  const titleEl = document.getElementById('badge-3d-title');
  const issuerEl = document.getElementById('badge-3d-issuer');
  const descEl = document.getElementById('badge-3d-desc');
  const verifyLink = document.getElementById('badge-3d-verify-link');
  const skillsList = document.getElementById('badge-3d-skills');
  const uuidEl = document.getElementById('badge-3d-uuid');

  if (titleEl) titleEl.textContent = badge.title;
  if (issuerEl) issuerEl.textContent = badge.issuer;
  if (descEl) descEl.textContent = badge.description;
  if (verifyLink) verifyLink.href = badge.verifyUrl;
  if (uuidEl) uuidEl.textContent = `ID: ${badge.badgeId}`;

  if (skillsList) {
    skillsList.innerHTML = badge.skills.map(s => 
      `<span class="px-2 py-0.5 rounded bg-[#1e1711] border border-[#4a3b2c] text-amber-300 font-mono text-[10px]">${s}</span>`
    ).join(' ');
  }

  // Update active tab buttons
  document.querySelectorAll('.badge-tab-btn').forEach((btn, i) => {
    if (i === currentBadgeIndex) {
      btn.classList.add('bg-amber-500/20', 'border-amber-500', 'text-amber-300');
      btn.classList.remove('text-stone-400', 'border-stone-700');
    } else {
      btn.classList.remove('bg-amber-500/20', 'border-amber-500', 'text-amber-300');
      btn.classList.add('text-stone-400', 'border-stone-700');
    }
  });
}

function animate() {
  animFrameId = requestAnimationFrame(animate);

  if (coinGroup) {
    if (autoRotate && !isDragging) {
      targetRotation.y += 0.007;
    }

    // Smooth lerp rotation around vertical Y axis and horizontal X tilt
    coinGroup.rotation.y += (targetRotation.y - coinGroup.rotation.y) * 0.08;
    coinGroup.rotation.x += (targetRotation.x - coinGroup.rotation.x) * 0.08;

    // Gentle floating bob
    coinGroup.position.y = Math.sin(Date.now() * 0.002) * 0.06;
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

export function open3DBadgeInspector(badgeIdOrIndex = 0) {
  playTypewriterClick();

  // Dismiss evidence lightbox if open so it doesn't conflict or cover the 3D inspector
  const evModal = document.getElementById('evidence-modal');
  if (evModal) evModal.classList.remove('active');

  const modal = document.getElementById('badge-3d-modal');
  if (!modal) return;

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  // Find index
  let idx = 0;
  if (typeof badgeIdOrIndex === 'number') {
    idx = badgeIdOrIndex;
  } else if (typeof badgeIdOrIndex === 'string') {
    idx = BADGE_DATA.findIndex(b => b.id.includes(badgeIdOrIndex) || badgeIdOrIndex.includes(b.id));
    if (idx === -1) idx = 0;
  }

  // Ensure DOM container layout is resolved before Three.js computes viewport aspect
  requestAnimationFrame(() => {
    if (!renderer) {
      init3DBadgeViewer();
    } else {
      onViewerResize();
    }
    loadBadgeModel(idx);
  });
}

export function close3DBadgeInspector() {
  playTypewriterClick();
  const modal = document.getElementById('badge-3d-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

export function toggleBadgeAutoRotate() {
  autoRotate = !autoRotate;
  const btn = document.getElementById('badge-autorotate-btn');
  if (btn) {
    btn.textContent = autoRotate ? 'PAUSE SPIN' : 'AUTO SPIN';
  }
}

export function flipBadge3D() {
  if (!coinGroup) return;
  autoRotate = false;
  targetRotation.y += Math.PI;
}

// Global modal dismiss on Escape key & backdrop click
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('badge-3d-modal');
      if (modal && !modal.classList.contains('hidden')) {
        close3DBadgeInspector();
      }
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('badge-3d-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          close3DBadgeInspector();
        }
      });
    }
  });
}

// Global exposure
window.open3DBadgeInspector = open3DBadgeInspector;
window.close3DBadgeInspector = close3DBadgeInspector;
window.loadBadgeModel = loadBadgeModel;
window.toggleBadgeAutoRotate = toggleBadgeAutoRotate;
window.flipBadge3D = flipBadge3D;

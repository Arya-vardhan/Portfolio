/* ==================== 3D INTERACTIVE EVIDENCE BADGE INSPECTOR ==================== */
// Uses Three.js to render authentic, physical 3D interactive credential medallions
const THREE = window.THREE || (typeof globalThis !== 'undefined' ? globalThis.THREE : null);
import { playTypewriterClick } from './audio.js';

export const BADGE_DATA = [
  {
    id: 'cisco-analyst',
    title: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'Cisco Networking Academy',
    recipient: 'Arya vardhan Gelli',
    badgeId: 'baf50dae-b67b-41f2-a45f-c1f854e6567e',
    verifyUrl: 'https://www.credly.com/badges/baf50dae-b67b-41f2-a45f-c1f854e6567e',
    imgSrc: 'assets/badges/cisco-junior-cybersecurity-analyst.png',
    accentColor: '#00bceb',
    metalColor: 0xd4af37, // Burnished Gold
    edgeColor: 0xaa8c2c,
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
    imgSrc: 'assets/badges/cisco-networking-basics.png',
    accentColor: '#00bceb',
    metalColor: 0x3a6073, // Cyber Steel Blue
    edgeColor: 0x243b47,
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
    imgSrc: 'assets/badges/htb-network-foundations.png',
    accentColor: '#9fef00',
    metalColor: 0x223322, // Stealth Dark Titanium with Green Edge
    edgeColor: 0x182618,
    description: 'Awarded by Hack The Box Academy for successfully passing the Network Foundations module. Validated practical skills in network traffic inspection, protocol analysis, and penetration testing foundations.',
    skills: ['Packet Analysis (Wireshark)', 'Protocol Stack Anatomy', 'Network Reconnaissance', 'Offensive Security Fundamentals']
  }
];

let currentBadgeIndex = 0;
let scene, camera, renderer, badgeMesh;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let autoRotate = true;
let targetRotation = { x: 0.15, y: -0.2 };
let pointLight, spotLight;
let animFrameId = null;

export function init3DBadgeViewer() {
  const container = document.getElementById('badge-3d-canvas-container');
  if (!container || !THREE) return;

  const width = container.clientWidth || 420;
  const height = container.clientHeight || 420;

  // Scene & Camera
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(0, 0, 7.5);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Clear container and append
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xfff6e8, 0.9);
  scene.add(ambientLight);

  pointLight = new THREE.PointLight(0xffeedd, 1.8, 20);
  pointLight.position.set(3, 4, 5);
  scene.add(pointLight);

  spotLight = new THREE.SpotLight(0x00bceb, 2.2);
  spotLight.position.set(-4, -3, 4);
  spotLight.angle = Math.PI / 4;
  spotLight.penumbra = 0.6;
  scene.add(spotLight);

  const backLight = new THREE.DirectionalLight(0xffffff, 0.6);
  backLight.position.set(0, 0, -6);
  scene.add(backLight);

  // Setup interaction listeners
  setupBadgeInteractions(container);

  // Load first badge
  loadBadgeModel(0);

  // Start Animation Loop
  animate();

  // Resize listener
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
    // Dynamic light movement
    if (pointLight && container) {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      pointLight.position.x = normX * 4 + 1;
      pointLight.position.y = normY * 4 + 2;
    }

    if (!isDragging || !badgeMesh) return;
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
    if (!isDragging || !badgeMesh || e.touches.length !== 1) return;
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
    camera.position.z = Math.max(4.5, Math.min(10, camera.position.z + e.deltaY * 0.005));
  }, { passive: false });
}

function createFrontFaceCanvas(badge, img) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const ctx = c.getContext('2d');

  // Background disk with radial gradient
  const grad = ctx.createRadialGradient(256, 256, 30, 256, 256, 256);
  grad.addColorStop(0, '#1c1b18');
  grad.addColorStop(0.75, '#120f0d');
  grad.addColorStop(1, '#090807');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(256, 256, 254, 0, Math.PI * 2);
  ctx.fill();

  // Outer bezel rings
  ctx.strokeStyle = badge.accentColor;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(256, 256, 246, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(256, 256, 238, 0, Math.PI * 2);
  ctx.stroke();

  // Subtle engraved micro-dots around perimeter
  for (let i = 0; i < 36; i++) {
    const angle = (i / 36) * Math.PI * 2;
    const x = 256 + Math.cos(angle) * 230;
    const y = 256 + Math.sin(angle) * 230;
    ctx.fillStyle = (i % 3 === 0) ? badge.accentColor : 'rgba(255, 255, 255, 0.35)';
    ctx.beginPath();
    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Draw official badge image centered
  if (img) {
    const size = 370;
    const offset = (512 - size) / 2;
    ctx.drawImage(img, offset, offset, size, size);
  }

  // Specular glass shine curve across upper medallion
  const glassGrad = ctx.createLinearGradient(0, 50, 0, 260);
  glassGrad.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
  glassGrad.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
  ctx.fillStyle = glassGrad;
  ctx.beginPath();
  ctx.arc(256, 256, 240, Math.PI * 1.05, Math.PI * 1.95);
  ctx.fill();

  return c;
}

function createBackFaceCanvas(badge) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const ctx = c.getContext('2d');

  // Metallic brushed plate background
  const grad = ctx.createRadialGradient(256, 256, 20, 256, 256, 256);
  grad.addColorStop(0, '#2b231a');
  grad.addColorStop(0.7, '#191410');
  grad.addColorStop(1, '#0e0b09');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(256, 256, 254, 0, Math.PI * 2);
  ctx.fill();

  // Concentric fine micro-grooves
  for (let r = 40; r < 240; r += 16) {
    ctx.strokeStyle = 'rgba(255, 230, 180, 0.05)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(256, 256, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Outer gold rim
  ctx.strokeStyle = '#c5a059';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(256, 256, 244, 0, Math.PI * 2);
  ctx.stroke();

  // Top Arc: Security Classification
  ctx.fillStyle = '#f4e4c1';
  ctx.font = 'bold 15px "Courier New", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('★ OFFICIAL FORENSIC EVIDENCE ★', 256, 75);

  ctx.fillStyle = '#a89880';
  ctx.font = '11px "Courier New", monospace';
  ctx.fillText('SECURITY CLEARANCE & ACCREDITATION', 256, 96);

  // Center Plate Box
  ctx.fillStyle = 'rgba(10, 8, 6, 0.85)';
  ctx.strokeStyle = '#c5a059';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(60, 120, 392, 230);
  ctx.fillRect(60, 120, 392, 230);

  // Recipient Name
  ctx.fillStyle = '#c5a059';
  ctx.font = 'bold 11px monospace';
  ctx.fillText('AUTHENTICATED RECIPIENT:', 256, 148);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 20px "Courier New", monospace';
  ctx.fillText(badge.recipient.toUpperCase(), 256, 175);

  // Badge Name
  ctx.fillStyle = badge.accentColor;
  ctx.font = 'bold 13px monospace';
  const displayTitle = badge.title.length > 32 ? badge.title.slice(0, 30) + '...' : badge.title;
  ctx.fillText(displayTitle.toUpperCase(), 256, 212);

  // Issuer
  ctx.fillStyle = '#e2d3be';
  ctx.font = '12px monospace';
  ctx.fillText(`ISSUER: ${badge.issuer.toUpperCase()}`, 256, 238);

  // Badge ID hash
  ctx.fillStyle = '#8f806e';
  ctx.font = '10px monospace';
  ctx.fillText(`CREDENTIAL UUID: ${badge.badgeId.slice(0, 24)}...`, 256, 268);

  // Verified Stamp in Center Box
  ctx.strokeStyle = '#22c55e';
  ctx.lineWidth = 2;
  ctx.strokeRect(130, 290, 252, 34);
  ctx.fillStyle = '#22c55e';
  ctx.font = 'bold 13px monospace';
  ctx.fillText('✓ OFFICIALLY VERIFIED & ACTIVE', 256, 307);

  // Simulated Laser Barcode at bottom
  ctx.fillStyle = '#d5c5a8';
  let barX = 110;
  const widths = [2, 4, 1, 3, 5, 2, 1, 4, 2, 3, 1, 5, 3, 2, 4, 1, 3, 2, 5, 1, 4, 2, 3, 4, 1, 2, 4, 2, 5];
  for (let w of widths) {
    ctx.fillRect(barX, 375, w, 32);
    barX += w + 3;
  }
  ctx.fillStyle = '#a89880';
  ctx.font = '9px monospace';
  ctx.fillText(`* ${badge.badgeId.slice(0, 16)} *`, 256, 422);

  return c;
}

export function loadBadgeModel(index) {
  if (!THREE || !scene) return;
  currentBadgeIndex = index;
  const badge = BADGE_DATA[index];

  // Update UI texts in modal
  updateModalBadgeDetails(badge);

  // Remove existing mesh
  if (badgeMesh) {
    scene.remove(badgeMesh);
    if (badgeMesh.geometry) badgeMesh.geometry.dispose();
    badgeMesh = null;
  }

  // Update spotLight color to badge accent
  if (spotLight) {
    spotLight.color.set(badge.accentColor);
  }

  // Load badge image and create textures
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    buildMeshWithTextures(badge, img);
  };
  img.onerror = () => {
    buildMeshWithTextures(badge, null);
  };
  img.src = badge.imgSrc;
}

function buildMeshWithTextures(badge, img) {
  const frontCanvas = createFrontFaceCanvas(badge, img);
  const backCanvas = createBackFaceCanvas(badge);

  const frontTexture = new THREE.CanvasTexture(frontCanvas);
  const backTexture = new THREE.CanvasTexture(backCanvas);
  // Mirror U for back texture so text reads normally on back face
  backTexture.wrapS = THREE.RepeatWrapping;
  backTexture.repeat.x = -1;

  // Cylinder: radiusTop 2.3, radiusBottom 2.3, thickness 0.22, 64 segments
  const geometry = new THREE.CylinderGeometry(2.35, 2.35, 0.24, 64);

  // Materials: 0 = side rim, 1 = top (front), 2 = bottom (back)
  const edgeMaterial = new THREE.MeshStandardMaterial({
    color: badge.metalColor,
    metalness: 0.9,
    roughness: 0.22,
    bumpScale: 0.05
  });

  const frontMaterial = new THREE.MeshStandardMaterial({
    map: frontTexture,
    metalness: 0.35,
    roughness: 0.25,
    clearcoat: 0.4,
    clearcoatRoughness: 0.1
  });

  const backMaterial = new THREE.MeshStandardMaterial({
    map: backTexture,
    metalness: 0.75,
    roughness: 0.3
  });

  badgeMesh = new THREE.Mesh(geometry, [edgeMaterial, frontMaterial, backMaterial]);
  badgeMesh.castShadow = true;
  badgeMesh.receiveShadow = true;

  // Orient so front face (+Y of cylinder) faces +Z towards camera
  badgeMesh.rotation.x = Math.PI / 2;
  scene.add(badgeMesh);

  // Reset rotation targets
  targetRotation = { x: 0.18, y: -0.25 };
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

  if (badgeMesh) {
    if (autoRotate && !isDragging) {
      targetRotation.y += 0.007;
    }

    // Smooth lerp rotation
    badgeMesh.rotation.y += (targetRotation.y - badgeMesh.rotation.y) * 0.08;
    badgeMesh.rotation.x += (Math.PI / 2 + targetRotation.x - badgeMesh.rotation.x) * 0.08;

    // Gentle floating bob
    badgeMesh.position.y = Math.sin(Date.now() * 0.002) * 0.08;
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

export function open3DBadgeInspector(badgeIdOrIndex = 0) {
  playTypewriterClick();
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

  // Init 3D if not ready
  if (!renderer) {
    init3DBadgeViewer();
  } else {
    onViewerResize();
  }

  loadBadgeModel(idx);
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
  if (!badgeMesh) return;
  autoRotate = false;
  targetRotation.y += Math.PI;
}

// Global exposure
window.open3DBadgeInspector = open3DBadgeInspector;
window.close3DBadgeInspector = close3DBadgeInspector;
window.loadBadgeModel = loadBadgeModel;
window.toggleBadgeAutoRotate = toggleBadgeAutoRotate;
window.flipBadge3D = flipBadge3D;

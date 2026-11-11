/* ==================== THREE.JS 3D AMBIENT ATMOSPHERE ==================== */
// Safe global reference to THREE (works with both bundlers and native browser CDN)
const THREE = window.THREE || (typeof globalThis !== 'undefined' ? globalThis.THREE : null);

let scene, camera, renderer, particles;

export function initThreeAmbient(canvasEl) {
  if (!canvasEl || !THREE) return;

  try {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;

    renderer = new THREE.WebGLRenderer({ canvas: canvasEl, alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle dust field
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 800;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 600;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 400;

      velocities.push({
        x: (Math.random() - 0.5) * 0.15,
        y: Math.random() * 0.2 + 0.05,
        z: (Math.random() - 0.5) * 0.15
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Subtle warm amber dust motes
    const material = new THREE.PointsMaterial({
      color: 0xfef08a,
      size: 2.2,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Resize handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      const pos = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3] += velocities[i].x;

        if (pos[i * 3 + 1] > 300) pos[i * 3 + 1] = -300;
        if (pos[i * 3] > 400) pos[i * 3] = -400;
        if (pos[i * 3] < -400) pos[i * 3] = 400;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }
    animate();
  } catch (err) {
    console.warn("Three.js ambient init bypassed:", err);
  }
}

/* ==================== GSAP CAMERA CONTROLLER ==================== */
import { gsap } from 'gsap';
import { playCameraSwoosh } from './audio.js';
import { markStopVisited } from './tracker.js';

export const STOPS = [
  { id: 'overview', name: 'Full Board', x: 1800, y: 1200, scale: 0.42 },
  { id: 'center', name: 'Subject: Arya', x: 1800, y: 1100, scale: 1.25 },
  { id: 'cognizant', name: 'Cognizant AV', x: 680, y: 460, scale: 1.15 },
  { id: 'cadsys', name: 'CADSYS OSP', x: 2520, y: 440, scale: 1.15 },
  { id: 'rvm', name: 'RVM Hardware', x: 600, y: 1180, scale: 1.15 },
  { id: 'hardware', name: 'Hardware Lab', x: 760, y: 1840, scale: 1.15 },
  { id: 'cyber', name: 'Cyber Forensics', x: 1810, y: 1800, scale: 1.2 },
  { id: 'mystery', name: 'Mystery Game', x: 2950, y: 1160, scale: 1.15 },
  { id: 'academics', name: 'Academics', x: 3130, y: 460, scale: 1.15 },
  { id: 'contact', name: 'Comms Line', x: 2760, y: 1820, scale: 1.2 },
];

let currentStop = 0;
let worldEl = null;
let viewportEl = null;

export function initCamera(world, viewport) {
  worldEl = world;
  viewportEl = viewport;

  setupWheel();
  setupKeyboard();
  setupDrag();
  setupTouch();

  window.addEventListener('resize', () => {
    goToStop(currentStop, 0.4);
  });
}

export function getCurrentStop() {
  return currentStop;
}

export function flyCameraTo(targetX, targetY, targetScale, duration = 1.0) {
  playCameraSwoosh();
  const vpW = viewportEl.clientWidth;
  const vpH = viewportEl.clientHeight;

  const finalX = (vpW / 2) - (targetX * targetScale);
  const finalY = (vpH / 2) - (targetY * targetScale);

  gsap.to(worldEl, {
    x: finalX,
    y: finalY,
    scale: targetScale,
    duration: duration,
    ease: 'power3.out',
    overwrite: 'auto'
  });
}

export function goToStop(index, duration = 1.0) {
  if (index < 0) index = 0;
  if (index >= STOPS.length) index = STOPS.length - 1;
  currentStop = index;
  markStopVisited(index);

  // Update radar tabs
  document.querySelectorAll('.radar-btn').forEach((btn, i) => {
    if (i === index) {
      btn.classList.add('bg-red-950', 'text-[#faf0dc]', 'border', 'border-red-600/50');
      btn.classList.remove('text-[#a89880]');
    } else {
      btn.classList.remove('bg-red-950', 'text-[#faf0dc]', 'border', 'border-red-600/50');
      btn.classList.add('text-[#a89880]');
    }
  });

  const hint = document.getElementById('scroll-hint');
  if (hint && index > 0) hint.style.opacity = '0';

  const s = STOPS[index];
  let scale = s.scale;
  if (index === 0) {
    const fitScaleX = viewportEl.clientWidth / 3600;
    const fitScaleY = viewportEl.clientHeight / 2400;
    scale = Math.min(fitScaleX, fitScaleY) * 0.95;
  }
  flyCameraTo(s.x, s.y, scale, duration);
}

export function stepStop(dir) {
  goToStop(currentStop + dir);
}

function setupWheel() {
  let wheelCooldown = false;
  window.addEventListener('wheel', (e) => {
    const modal = document.getElementById('evidence-modal');
    if (modal && modal.classList.contains('active')) return;

    e.preventDefault();
    if (wheelCooldown) return;

    if (Math.abs(e.deltaY) > 25) {
      wheelCooldown = true;
      if (e.deltaY > 0) stepStop(1);
      else stepStop(-1);
      setTimeout(() => { wheelCooldown = false; }, 600);
    }
  }, { passive: false });
}

function setupKeyboard() {
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('evidence-modal');
    if (modal && modal.classList.contains('active')) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') stepStop(1);
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') stepStop(-1);
    else if (e.key === 'Home') goToStop(0);
    else if (e.key === 'End') goToStop(STOPS.length - 1);
  });
}

function setupDrag() {
  let isDragging = false;
  let startX, startY;
  let currentX = 0, currentY = 0;

  worldEl.addEventListener('mousedown', (e) => {
    if (e.target.closest('button, a, input, textarea, .pushpin')) return;
    isDragging = true;
    worldEl.classList.add('dragging');
    startX = e.clientX;
    startY = e.clientY;
    currentX = gsap.getProperty(worldEl, 'x');
    currentY = gsap.getProperty(worldEl, 'y');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    gsap.set(worldEl, { x: currentX + dx, y: currentY + dy });
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      worldEl.classList.remove('dragging');
    }
  });
}

function setupTouch() {
  let touchStartX, touchStartY;
  window.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1 && !e.target.closest('button, a, input, textarea')) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  });
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && touchStartX !== undefined) {
      const dy = e.touches[0].clientY - touchStartY;
      if (Math.abs(dy) > 40) {
        if (dy < 0) stepStop(1);
        else stepStop(-1);
        touchStartX = undefined;
      }
    }
  });
}


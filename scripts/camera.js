/* ==================== GSAP CAMERA CONTROLLER ==================== */
// Safe global reference to GSAP (works both with bundler and native browser CDN)
const gsap = window.gsap || (typeof globalThis !== 'undefined' ? globalThis.gsap : null);

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

  setTimeout(dismissHint, 4000);

  window.addEventListener('resize', () => {
    goToStop(currentStop, 0.4);
  });
}

export function getCurrentStop() {
  return currentStop;
}

export function flyCameraTo(targetX, targetY, targetScale, duration = 0.85) {
  try { playCameraSwoosh(); } catch (e) {}
  if (!viewportEl || !worldEl) {
    worldEl = document.getElementById('corkboard-world');
    viewportEl = document.getElementById('viewport');
  }
  if (!viewportEl || !worldEl) return;
  const vpW = viewportEl.clientWidth;
  const vpH = viewportEl.clientHeight;

  const finalX = (vpW / 2) - (targetX * targetScale);
  const finalY = (vpH / 2) - (targetY * targetScale);

  if (gsap) {
    gsap.to(worldEl, {
      x: finalX,
      y: finalY,
      scale: targetScale,
      duration: duration,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  } else {
    worldEl.style.transform = `translate(${finalX}px, ${finalY}px) scale(${targetScale})`;
  }
}

export function goToStop(index, duration = 0.85) {
  if (index < 0) index = 0;
  if (index >= STOPS.length) index = 0;
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

  // Update vertical elevator tracker if present
  const elevatorThumb = document.getElementById('elevator-thumb');
  if (elevatorThumb) {
    const percent = (index / (STOPS.length - 1)) * 100;
    elevatorThumb.style.top = `${percent}%`;
  }

  dismissHint();

  const s = STOPS[index];
  let scale = s.scale;
  if (index === 0) {
    if (!viewportEl) viewportEl = document.getElementById('viewport');
    const vpW = viewportEl ? viewportEl.clientWidth : window.innerWidth;
    const vpH = viewportEl ? viewportEl.clientHeight : window.innerHeight;
    const fitScaleX = vpW / 3600;
    const fitScaleY = vpH / 2400;
    scale = Math.min(fitScaleX, fitScaleY) * 0.95;
  }
  flyCameraTo(s.x, s.y, scale, duration);
}

export function dismissHint() {
  const hint = document.getElementById('scroll-hint');
  if (hint && hint.style.opacity !== '0') {
    hint.style.opacity = '0';
    hint.style.pointerEvents = 'none';
    setTimeout(() => {
      if (hint) hint.style.display = 'none';
    }, 400);
  }
}

export function stepStop(dir) {
  let next = currentStop + dir;
  // Looping: Scrolling down past the last node (Stop 9: Comms Line) returns smoothly to Full Board (Stop 0)
  if (next >= STOPS.length) {
    next = 0;
  } else if (next < 0) {
    next = 0;
  }
  goToStop(next);
}

/* -------------------------------------------------------------
   SMOOTH WHEEL & TRACKPAD INTERACTION
   Uses delta accumulator with decay so both mouse wheel and trackpad feel natural
   ------------------------------------------------------------- */
function setupWheel() {
  let deltaAccumulator = 0;
  let isThrottled = false;

  window.addEventListener('wheel', (e) => {
    dismissHint();
    // If modal is open, let user scroll inside modal
    const modal = document.getElementById('evidence-modal');
    if (modal && modal.classList.contains('active')) return;

    e.preventDefault();

    deltaAccumulator += e.deltaY;

    if (isThrottled) return;

    // Responsive threshold for mouse wheel vs trackpad
    const THRESHOLD = 35;

    if (deltaAccumulator > THRESHOLD) {
      isThrottled = true;
      deltaAccumulator = 0;
      stepStop(1);
      setTimeout(() => { isThrottled = false; }, 320);
    } else if (deltaAccumulator < -THRESHOLD) {
      isThrottled = true;
      deltaAccumulator = 0;
      stepStop(-1);
      setTimeout(() => { isThrottled = false; }, 320);
    }
  }, { passive: false });
}

function setupKeyboard() {
  window.addEventListener('keydown', (e) => {
    dismissHint();
    const modal = document.getElementById('evidence-modal');
    if (modal && modal.classList.contains('active')) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      stepStop(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      stepStop(-1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToStop(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToStop(STOPS.length - 1);
    }
  });
}

function setupDrag() {
  let isDragging = false;
  let startX = 0, startY = 0;
  let currentX = 0, currentY = 0;
  let dragDist = 0;
  let justDragged = false;

  // Intercept synthetic click after dragging in capture phase
  window.addEventListener('click', (e) => {
    if (justDragged) {
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();
      justDragged = false;
      return false;
    }
  }, true);

  const startDrag = (e) => {
    dismissHint();
    // Don't hijack clicks on interactive controls, links, pushpins, HUD elements or elevator
    if (e.target.closest('button, a, input, textarea, .pushpin, .hud-element, #elevator-track, #elevator-thumb')) return;
    if (e.button !== undefined && e.button !== 0) return; // Only primary mouse button

    isDragging = true;
    dragDist = 0;
    startX = e.clientX;
    startY = e.clientY;

    if (gsap) {
      gsap.killTweensOf(worldEl);
      currentX = gsap.getProperty(worldEl, 'x');
      currentY = gsap.getProperty(worldEl, 'y');
    } else {
      currentX = 0;
      currentY = 0;
    }
    worldEl.classList.add('dragging');
    if (viewportEl) viewportEl.classList.add('dragging');
  };

  const moveDrag = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    dragDist = Math.hypot(dx, dy);

    if (dragDist > 6) {
      const nextX = currentX + dx;
      const nextY = currentY + dy;

      if (gsap) {
        gsap.set(worldEl, { x: nextX, y: nextY });
      } else {
        worldEl.style.transform = `translate(${nextX}px, ${nextY}px)`;
      }
    }
  };

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    worldEl.classList.remove('dragging');
    if (viewportEl) viewportEl.classList.remove('dragging');

    if (dragDist > 6) {
      justDragged = true;
      // Allow brief window for browser to emit synthetic click and intercept it
      setTimeout(() => {
        justDragged = false;
      }, 150);
    }
  };

  if (viewportEl) {
    viewportEl.addEventListener('mousedown', startDrag);
  } else {
    worldEl.addEventListener('mousedown', startDrag);
  }
  window.addEventListener('mousemove', moveDrag);
  window.addEventListener('mouseup', endDrag);
}

function setupTouch() {
  let touchStartY;
  let touchStartX;

  window.addEventListener('touchstart', (e) => {
    dismissHint();
    if (e.touches.length === 1 && !e.target.closest('button, a, input, textarea')) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && touchStartY !== undefined) {
      const dy = e.touches[0].clientY - touchStartY;
      if (Math.abs(dy) > 35) {
        if (dy < 0) stepStop(1);
        else stepStop(-1);
        touchStartY = undefined;
      }
    }
  }, { passive: true });
}

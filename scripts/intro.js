/* ==================== CASE FOLDER INTRO CONTROLLER ==================== */
const gsap = window.gsap || (typeof globalThis !== 'undefined' ? globalThis.gsap : null);
import { playFolderRustle, playTypewriterClick } from './audio.js';
import { goToStop } from './camera.js';
import { drawYarnNetwork } from './yarn.js';

let isOpening = false;

export function initIntro() {
  const introEl = document.getElementById('case-folder-intro');
  if (!introEl) return;

  const alreadyOpened = sessionStorage.getItem('case_folder_opened') === 'true';

  if (alreadyOpened) {
    introEl.classList.add('intro-hidden');
    introEl.style.display = 'none';
    return;
  }

  // Bind clicks
  const folder = document.getElementById('dossier-folder');
  const openBtn = document.getElementById('btn-open-case');
  const skipBtn = document.getElementById('btn-skip-intro');

  if (folder) {
    folder.addEventListener('click', (e) => {
      openCaseFolder();
    });
  }

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCaseFolder();
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      skipIntro();
    });
  }

  // Keyboard accessibility: Enter or Space opens folder
  window.addEventListener('keydown', handleIntroKeydown);
}

function handleIntroKeydown(e) {
  const introEl = document.getElementById('case-folder-intro');
  if (!introEl || introEl.classList.contains('intro-hidden')) return;

  if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
    e.preventDefault();
    if (e.key === 'Escape') {
      skipIntro();
    } else {
      openCaseFolder();
    }
  }
}

export function openCaseFolder() {
  if (isOpening) return;
  isOpening = true;

  playFolderRustle();
  playTypewriterClick();

  const introEl = document.getElementById('case-folder-intro');
  const tape = document.querySelector('.evidence-seal-tape');
  const cover = document.querySelector('.folder-cover');
  const stage = document.querySelector('.folder-stage');

  sessionStorage.setItem('case_folder_opened', 'true');
  window.removeEventListener('keydown', handleIntroKeydown);

  if (gsap) {
    const tl = gsap.timeline({
      onComplete: () => {
        if (introEl) {
          introEl.classList.add('intro-hidden');
          introEl.style.display = 'none';
        }
        // Smoothly draw yarn threads and land camera on full investigation board
        drawYarnNetwork();
        goToStop(0, 0.8);
      }
    });

    // 1. Evidence seal rips / pops
    if (tape) {
      tl.to(tape, {
        scale: 1.12,
        opacity: 0,
        y: -10,
        rotate: 8,
        duration: 0.25,
        ease: 'power2.out'
      }, 0);
    }

    // 2. Folder cover hinges open in 3D perspective
    if (cover) {
      tl.to(cover, {
        rotateY: -130,
        duration: 0.85,
        ease: 'power2.inOut'
      }, 0.1);
    }

    // 3. Camera dives smoothly into folder documents
    if (stage) {
      tl.to(stage, {
        scale: 1.45,
        opacity: 0,
        duration: 0.65,
        ease: 'power2.in'
      }, 0.45);
    }

    // 4. Fade out intro overlay to reveal active investigation corkboard
    if (introEl) {
      tl.to(introEl, {
        opacity: 0,
        duration: 0.45,
        ease: 'power1.out'
      }, 0.7);
    }

  } else {
    // Fallback if GSAP is unavailable
    if (introEl) {
      introEl.classList.add('intro-hidden');
      introEl.style.display = 'none';
    }
    drawYarnNetwork();
    goToStop(0, 0.4);
  }
}

export function skipIntro() {
  isOpening = true;
  window.removeEventListener('keydown', handleIntroKeydown);
  sessionStorage.setItem('case_folder_opened', 'true');

  const introEl = document.getElementById('case-folder-intro');
  if (introEl) {
    introEl.classList.add('intro-hidden');
    introEl.style.display = 'none';
  }

  drawYarnNetwork();
  goToStop(0, 0.4);
}

// Window global helper to replay intro if user desires
if (typeof window !== 'undefined') {
  window.reopenCaseFolder = function() {
    sessionStorage.removeItem('case_folder_opened');
    location.reload();
  };
}

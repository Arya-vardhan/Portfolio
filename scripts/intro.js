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
    introEl.style.pointerEvents = 'none';
    return;
  }

  // Ensure intro element is fully clickable
  introEl.style.display = 'flex';
  introEl.style.pointerEvents = 'auto';

  // Bind clicks as secondary attachment to inline onclick
  const folder = document.getElementById('dossier-folder');
  const openBtn = document.getElementById('btn-open-case');
  const skipBtn = document.getElementById('btn-skip-intro');

  if (folder) {
    folder.addEventListener('click', () => openCaseFolder());
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
  if (!introEl || introEl.classList.contains('intro-hidden') || introEl.style.display === 'none') return;

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

  try {
    playFolderRustle();
    playTypewriterClick();
  } catch (err) {}

  const introEl = document.getElementById('case-folder-intro');
  const tape = document.querySelector('.evidence-seal-tape');
  const cover = document.querySelector('.folder-cover');
  const stage = document.querySelector('.folder-stage');

  sessionStorage.setItem('case_folder_opened', 'true');
  window.removeEventListener('keydown', handleIntroKeydown);

  let finished = false;
  const completeHandoff = () => {
    if (finished) return;
    finished = true;

    if (introEl) {
      introEl.classList.add('intro-hidden');
      introEl.style.display = 'none';
      introEl.style.pointerEvents = 'none';
    }

    try {
      drawYarnNetwork();
    } catch (e) {}

    try {
      goToStop(0, 0.8);
    } catch (e) {}

    isOpening = false;
  };

  if (gsap && cover) {
    try {
      gsap.set(cover, { transformOrigin: 'left center', transformStyle: 'preserve-3d' });

      const tl = gsap.timeline({
        onComplete: completeHandoff
      });

      // 1. Evidence seal rips / pops
      if (tape) {
        tl.to(tape, {
          scale: 1.15,
          opacity: 0,
          y: -12,
          rotation: 8,
          duration: 0.22,
          ease: 'power2.out'
        }, 0);
      }

      // 2. Folder cover hinges open in 3D perspective
      tl.to(cover, {
        rotationY: -125,
        duration: 0.8,
        ease: 'power2.inOut'
      }, 0.08);

      // 3. Camera dives smoothly into folder documents
      if (stage) {
        tl.to(stage, {
          scale: 1.35,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.in'
        }, 0.35);
      }

      // 4. Fade out intro overlay to reveal active investigation corkboard
      if (introEl) {
        tl.to(introEl, {
          opacity: 0,
          duration: 0.45,
          ease: 'power1.out'
        }, 0.55);
      }

      // Guaranteed fallback safety timeout (in case of tab backgrounding or GSAP hiccup)
      setTimeout(completeHandoff, 1400);

    } catch (e) {
      completeHandoff();
    }
  } else {
    // Fallback if GSAP is unavailable
    completeHandoff();
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
    introEl.style.pointerEvents = 'none';
  }

  try {
    drawYarnNetwork();
  } catch (e) {}

  try {
    goToStop(0, 0.4);
  } catch (e) {}

  isOpening = false;
}

// Window global exposure for inline HTML events
window.openCaseFolder = openCaseFolder;
window.skipIntro = skipIntro;
window.reopenCaseFolder = function() {
  sessionStorage.removeItem('case_folder_opened');
  location.reload();
};



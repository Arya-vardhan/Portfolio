/* ==================== CASE FOLDER INTRO CONTROLLER ==================== */
import { playFolderRustle, playTypewriterClick } from './audio.js';
import { goToStop } from './camera.js';
import { drawYarnNetwork } from './yarn.js';

// Expose sound helpers and board handoff to window for the synchronous intro sequence
window.playFolderRustle = playFolderRustle;
window.playTypewriterClick = playTypewriterClick;
window.drawYarnNetwork = drawYarnNetwork;
window.goToStop = goToStop;

export function initIntro() {
  const introEl = document.getElementById('case-folder-intro');
  if (!introEl) return;

  // Never abort or interfere if the unseal animation is actively playing
  if (window.isOpeningFolder) return;

  const alreadyOpened = sessionStorage.getItem('case_folder_opened') === 'true';
  if (alreadyOpened) {
    introEl.classList.add('intro-hidden');
    introEl.style.display = 'none';
    introEl.style.pointerEvents = 'none';
  }
}

export function openCaseFolder(e) {
  if (typeof window.openCaseFolder === 'function' && window.openCaseFolder !== openCaseFolder) {
    window.openCaseFolder(e);
  }
}

export function skipIntro(e) {
  if (typeof window.skipIntro === 'function' && window.skipIntro !== skipIntro) {
    window.skipIntro(e);
  }
}

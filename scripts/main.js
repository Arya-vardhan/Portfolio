/* ==================== MAIN APPLICATION COORDINATOR ==================== */
import { initCamera, goToStop, stepStop } from './camera.js';
import { initYarn, drawYarnNetwork } from './yarn.js';
import { initTorch, toggleTorch } from './torch.js';
import { toggleAudio, playTypewriterClick } from './audio.js';
import { initThreeAmbient } from './three-ambient.js';
import { initModal, openExamModal, closeExamModal } from './modal.js';

// Global window exposure for inline DOM events
window.goToStop = goToStop;
window.stepStop = stepStop;
window.toggleTorch = toggleTorch;
window.toggleAudio = toggleAudio;
window.openExamModal = openExamModal;
window.closeExamModal = closeExamModal;

window.handleElevatorClick = function(e) {
  const track = document.getElementById('elevator-track');
  if (!track) return;
  const rect = track.getBoundingClientRect();
  const clickY = e.clientY - rect.top;
  const percent = Math.max(0, Math.min(1, clickY / rect.height));
  const stopIndex = Math.round(percent * 9);
  goToStop(stopIndex);
};

window.copyContact = function(text, btn) {
  playTypewriterClick();
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    if (toastText) toastText.textContent = `Copied "${text}" to clipboard`;
    if (toast) {
      toast.classList.remove('-translate-y-12', 'opacity-0', 'pointer-events-none');
      setTimeout(() => {
        toast.classList.add('-translate-y-12', 'opacity-0', 'pointer-events-none');
      }, 2500);
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const world = document.getElementById('corkboard-world');
  const viewport = document.getElementById('viewport');
  const yarnCanvas = document.getElementById('yarn-canvas');
  const torchOverlay = document.getElementById('torch-overlay');
  const threeCanvas = document.getElementById('three-canvas');
  const modal = document.getElementById('evidence-modal');

  // Initialize Subsystems
  initCamera(world, viewport);
  initYarn(yarnCanvas);
  initTorch(torchOverlay);
  initThreeAmbient(threeCanvas);
  initModal(modal);

  // Initial Camera Landing
  goToStop(0, 0.1);
});


/* ==================== MAIN APPLICATION COORDINATOR ==================== */
import { initCamera, goToStop, stepStop } from './camera.js';
import { initYarn, drawYarnNetwork } from './yarn.js';
import { initTorch, toggleTorch } from './torch.js';
import { toggleAudio, playTypewriterClick } from './audio.js';
import { initThreeAmbient } from './three-ambient.js';
import { initModal, openExamModal, closeExamModal } from './modal.js';
import { open3DBadgeInspector, close3DBadgeInspector, loadBadgeModel, flipBadge3D, toggleBadgeAutoRotate } from './badge-3d.js';

// Global window exposure for inline DOM events
window.goToStop = goToStop;
window.stepStop = stepStop;
window.toggleTorch = toggleTorch;
window.toggleAudio = toggleAudio;
window.openExamModal = openExamModal;
window.closeExamModal = closeExamModal;
window.open3DBadgeInspector = open3DBadgeInspector;
window.close3DBadgeInspector = close3DBadgeInspector;
window.loadBadgeModel = loadBadgeModel;
window.flipBadge3D = flipBadge3D;
window.toggleBadgeAutoRotate = toggleBadgeAutoRotate;

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

  // Attach 3D Tactile Hover Physics to Physical Evidence Badges
  document.querySelectorAll('.physical-evidence-badge').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(500px) rotateY(${x * 22}deg) rotateX(${-y * 22}deg) translateZ(8px)`;
      const glare = card.querySelector('.badge-glare');
      if (glare) {
        glare.style.opacity = '1';
        glare.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.35) 0%, transparent 65%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg) translateZ(0)';
      const glare = card.querySelector('.badge-glare');
      if (glare) glare.style.opacity = '0';
    });
  });

  // Initial Camera Landing
  goToStop(0, 0.1);
});


/* ==================== DYNAMIC FLASHLIGHT / DESK LAMP BEAM ==================== */
import { playTypewriterClick } from './audio.js';

let torchEnabled = true;

export function initTorch(torchOverlayEl) {
  window.addEventListener('mousemove', (e) => {
    if (torchEnabled) {
      document.documentElement.style.setProperty('--torch-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--torch-y', `${e.clientY}px`);
    }
  });
}

export function toggleTorch() {
  torchEnabled = !torchEnabled;
  const overlay = document.getElementById('torch-overlay');
  const label = document.getElementById('torch-label');
  if (overlay) overlay.classList.toggle('torch-off', !torchEnabled);
  if (label) label.textContent = torchEnabled ? 'TORCH: ON' : 'TORCH: OFF';
  playTypewriterClick();
  return torchEnabled;
}


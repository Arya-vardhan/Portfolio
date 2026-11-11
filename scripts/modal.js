/* ==================== EVIDENCE LIGHTBOX / MODAL CONTROLLER ==================== */
import { EVIDENCE_DETAILS } from './data/cases.js';
import { playFolderRustle } from './audio.js';

let modalEl = null;

export function initModal(modalElement) {
  modalEl = modalElement;

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl && modalEl.classList.contains('active')) {
      closeExamModal();
    }
  });

  if (modalEl) {
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) closeExamModal();
    });
  }
}

export function openExamModal(key) {
  playFolderRustle();
  if (!modalEl) modalEl = document.getElementById('evidence-modal');
  const data = EVIDENCE_DETAILS[key] || EVIDENCE_DETAILS.center;

  const titleEl = document.getElementById('modal-title');
  const subEl = document.getElementById('modal-subtitle');
  const stampEl = document.getElementById('modal-stamp');
  const contentEl = document.getElementById('modal-content');

  if (titleEl) titleEl.textContent = data.title;
  if (subEl) subEl.textContent = data.subtitle;
  if (stampEl) stampEl.textContent = data.stamp;
  if (contentEl) contentEl.innerHTML = data.content;

  if (modalEl) modalEl.classList.add('active');
}

export function closeExamModal() {
  playFolderRustle();
  if (!modalEl) modalEl = document.getElementById('evidence-modal');
  if (modalEl) modalEl.classList.remove('active');
}


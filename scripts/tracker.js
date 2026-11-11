/* ==================== CASE INVESTIGATION PROGRESS TRACKER ==================== */

const visitedStops = new Set([1]); // Subject starts visited

export function markStopVisited(index) {
  if (index > 0) visitedStops.add(index);
  const count = visitedStops.size;
  const counterEl = document.getElementById('clue-counter');
  if (counterEl) counterEl.textContent = `${count} / 9`;

  if (count === 9) {
    const banner = document.getElementById('case-solved-banner');
    if (banner && !banner.classList.contains('shown')) {
      banner.classList.add('shown');
      banner.classList.remove('-translate-y-24', 'opacity-0', 'pointer-events-none');
      setTimeout(() => {
        banner.classList.add('-translate-y-24', 'opacity-0', 'pointer-events-none');
      }, 5000);
    }
  }
}

export function getVisitedCount() {
  return visitedStops.size;
}


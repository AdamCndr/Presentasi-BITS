import { subscribe, next, prev } from '../state.js';

export function mountArrows(containerEl) {
  containerEl.innerHTML = `
    <div class="nav-arrow nav-arrow--prev" id="prevBtn">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
    </div>
    <div class="nav-arrow nav-arrow--next" id="nextBtn">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
    </div>
  `;

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', () => prev());
  nextBtn.addEventListener('click', () => next());

  subscribe((state) => {
    prevBtn.classList.toggle('disabled', state.currentIndex === 0);
    nextBtn.classList.toggle('disabled', state.currentIndex === state.total - 1);
  });
}

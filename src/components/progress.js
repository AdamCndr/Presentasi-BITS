import { subscribe } from '../state.js';

export function mountProgress(containerEl, totalSlides) {
  containerEl.innerHTML = `
    <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
  `;

  const fill = document.getElementById('progressFill');

  subscribe((state) => {
    const pct = totalSlides <= 1 ? 100 : (state.currentIndex / (totalSlides - 1)) * 100;
    fill.style.width = pct + '%';
  });
}

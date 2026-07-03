import { subscribe } from '../state.js';
import { navigateTo } from '../router.js';

export function mountDots(containerEl, slides) {
  containerEl.innerHTML = '';

  const dotsEl = document.createElement('div');
  dotsEl.className = 'dots-nav';
  dotsEl.id = 'dotsNav';

  const dotElements = slides.map((slide, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.dataset.label = slide.title;
    d.addEventListener('click', () => navigateTo(slide.id));
    return d;
  });

  dotElements.forEach(d => dotsEl.appendChild(d));
  containerEl.appendChild(dotsEl);

  subscribe((state) => {
    dotElements.forEach((d, i) => {
      d.classList.toggle('active', i === state.currentIndex);
    });
  });
}

import cover from './slides/cover.js';
import tim from './slides/tim.js';
import latarBelakang from './slides/latar-belakang.js';
import solusi from './slides/solusi.js';
import arsitektur from './slides/arsitektur.js';
import techStack from './slides/tech-stack.js';
import admin from './slides/admin.js';
import user from './slides/user.js';
import timeline from './slides/timeline.js';
import metrik from './slides/metrik.js';
import kesimpulan from './slides/kesimpulan.js';
import penutup from './slides/penutup.js';

// ── Core modules ──
import { setTotal, subscribe, getState, next, prev, goFirst, goLast } from './state.js';
import { initRouter, syncHash } from './router.js';

// ── UI Components ──
import { mountHeader } from './components/header.js';
import { mountProgress } from './components/progress.js';
import { mountDots } from './components/nav-dots.js';
import { mountArrows } from './components/nav-arrows.js';

// ═══════════════════════════════════════════
// 1. Build the ordered slide registry
// ═══════════════════════════════════════════
const slides = [
  cover, tim, latarBelakang, solusi, arsitektur,
  techStack, admin, user, timeline, metrik,
  kesimpulan, penutup,
].sort((a, b) => a.order - b.order);

// ═══════════════════════════════════════════
// 2. Initialize state
// ═══════════════════════════════════════════
setTotal(slides.length);

// ═══════════════════════════════════════════
// 3. Mount global UI components
// ═══════════════════════════════════════════
mountHeader(document.getElementById('headerMount'), slides);
mountProgress(document.getElementById('progressMount'), slides.length);
mountDots(document.getElementById('dotsMount'), slides);
mountArrows(document.getElementById('arrowsMount'));

// ═══════════════════════════════════════════
// 4. Render all slides into the deck
// ═══════════════════════════════════════════
const deck = document.getElementById('deck');

const slideElements = slides.map((slide, i) => {
  const section = document.createElement('section');
  section.className = 'slide';
  section.dataset.title = slide.title;
  section.dataset.id = slide.id;
  section.innerHTML = slide.render();
  deck.appendChild(section);
  return section;
});

// ═══════════════════════════════════════════
// 5. Subscribe to state → update slide classes
// ═══════════════════════════════════════════
function renderSlides(state) {
  slideElements.forEach((el, i) => {
    el.classList.remove('active', 'prev');
    if (i === state.currentIndex) {
      el.classList.add('active');
      el.scrollTop = 0;
    } else if (i < state.currentIndex) {
      el.classList.add('prev');
    }
  });
}

subscribe(renderSlides);

subscribe(syncHash);

// ═══════════════════════════════════════════
// 6. Initialize the router (reads initial hash)
// ═══════════════════════════════════════════
initRouter(slides);

renderSlides(getState());

// ═══════════════════════════════════════════
// 7. Keyboard navigation
// ═══════════════════════════════════════════
document.addEventListener('keydown', (e) => {
  if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(e.key)) {
    e.preventDefault();
    next();
  }
  if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
    e.preventDefault();
    prev();
  }
  if (e.key === 'Home') goFirst();
  if (e.key === 'End') goLast();
});

// ═══════════════════════════════════════════
// 8. Touch / swipe navigation
// ═══════════════════════════════════════════
let touchX = null;

deck.addEventListener('touchstart', (e) => {
  touchX = e.touches[0].clientX;
}, { passive: true });

deck.addEventListener('touchend', (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 55) {
    dx < 0 ? next() : prev();
  }
  touchX = null;
}, { passive: true });

// ═══════════════════════════════════════════
// 9. Mouse glow effect (follows cursor)
// ═══════════════════════════════════════════
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth * 100).toFixed(1);
  const y = (e.clientY / window.innerHeight * 100).toFixed(1);
  document.documentElement.style.setProperty('--glow-x', `${x}%`);
  document.documentElement.style.setProperty('--glow-y', `${y}%`);
});

// ═══════════════════════════════════════════
// 10. Splash screen
// ═══════════════════════════════════════════
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').classList.add('hide');
  }, 900);
});

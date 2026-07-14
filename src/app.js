import cover from './slides/cover.js';
import tim from './slides/tim.js';
import latarBelakang from './slides/latar-belakang.js';
import solusi from './slides/solusi.js';
import arsitektur from './slides/arsitektur.js';
import techStack from './slides/tech-stack.js';
import admin from './slides/admin.js';
import user from './slides/user.js';
import timeline from './slides/timeline.js';
import demo from './slides/demo.js';
import kesimpulan from './slides/kesimpulan.js';
import penutup from './slides/penutup.js';

// ── Core modules ──
import { setTotal, subscribe, getState, next, prev, goFirst, goLast } from './state.js';
import { initRouter, syncHash } from './router.js';

// ── UI Components ──
import { mountHeader } from './components/header.js';
import { mountProgress } from './components/progress.js';

// ═══════════════════════════════════════════
// 1. Build the ordered slide registry
// ═══════════════════════════════════════════
const slides = [
  cover, tim, latarBelakang, solusi, arsitektur,
  techStack, admin, user, demo, timeline,
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
let isStarted = false;

function startPresentation() {
  if (isStarted) return;
  const waitingScreen = document.getElementById('waiting-screen');
  const splash = document.getElementById('splash');

  if (waitingScreen) waitingScreen.classList.add('hide');
  if (splash) {
    splash.classList.remove('uninitialized');
    setTimeout(() => {
      splash.classList.add('hide');
      isStarted = true;
    }, 1800);
  } else {
    isStarted = true;
  }
}

document.addEventListener('keydown', (e) => {
  if (!isStarted) {
    if (['ArrowRight', 'ArrowDown', ' ', 'PageDown', 'Enter'].includes(e.key)) {
      e.preventDefault();
      startPresentation();
    }
    return;
  }

  // Escape closes slide picker modal
  if (e.key === 'Escape') {
    const modal = document.getElementById('slidePickerModal');
    if (modal && modal.classList.contains('open')) {
      modal.classList.remove('open');
      return;
    }
  }

  // Hotkeys 1-9 and 0 for slide points selection
  if (/^[0-9]$/.test(e.key)) {
    const activeSlide = document.querySelector('.slide.active');
    if (activeSlide) {
      const wrapper = activeSlide.querySelector('[data-active]');
      if (wrapper) {
        let val = e.key === '0' ? '10' : e.key;
        const targetElement = wrapper.querySelector(`[data-id="${val}"]`);
        if (targetElement) {
          wrapper.dataset.active = val;
        }
      }
    }
  }

  // Reset hotkey (backtick) for slide points selection
  if (e.key === '`') {
    const activeSlide = document.querySelector('.slide.active');
    if (activeSlide) {
      const wrapper = activeSlide.querySelector('[data-active]');
      if (wrapper) {
        wrapper.dataset.active = '0';
      }
    }
  }

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
  if (!isStarted) return;
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
// 10. Waiting screen click listener
// ═══════════════════════════════════════════
window.addEventListener('load', () => {
  const waitingScreen = document.getElementById('waiting-screen');
  if (waitingScreen) {
    waitingScreen.addEventListener('click', startPresentation);
  }
});


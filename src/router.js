import { setCurrentIndex, getState } from './state.js';

let slideRegistry = [];

/**
 * Initialize the router with the ordered slide list.
 * @param {Array<{id:string, title:string, order:number, render:Function}>} slides
 */
export function initRouter(slides) {
  slideRegistry = slides;

  window.addEventListener('hashchange', () => handleHash());

  handleHash();
}

function handleHash() {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();

  if (!hash) {
    setCurrentIndex(0);
    return;
  }

  const index = slideRegistry.findIndex(s => s.id === hash);
  if (index !== -1) {
    setCurrentIndex(index);
  } else {
    setCurrentIndex(0);
  }
}

/**
 * Navigate to a slide by its id (updates the hash).
 * @param {string} slideId
 */
export function navigateTo(slideId) {
  window.location.hash = '#/' + slideId;
}

/**
 * Navigate to a slide by index (updates the hash).
 * @param {number} index
 */
export function navigateToIndex(index) {
  const clamped = Math.max(0, Math.min(slideRegistry.length - 1, index));
  navigateTo(slideRegistry[clamped].id);
}

export function syncHash(state) {
  const expectedHash = '#/' + slideRegistry[state.currentIndex].id;
  if (window.location.hash !== expectedHash) {
    history.replaceState(null, '', expectedHash);
  }
}

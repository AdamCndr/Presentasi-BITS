import { subscribe, getState } from '../state.js';

export function mountHeader(containerEl, slides) {
  containerEl.innerHTML = `
    <header class="app-header">
      <div class="app-header__backdrop"></div>
      <div class="app-header__inner">
        <div class="brandmark">
          <img src="assets/brand/bitshorizontal.png" alt="BITS" style="height:32px; width:auto; object-fit:contain;">
        </div>
        <div class="header-title">Presentasi Kerja Praktek 2026 · <b id="slideTitleTxt">Cover</b></div>
        <div class="header-right">
          <div class="header-counter"><b id="curNum">01</b>&nbsp;/&nbsp;<span id="totNum">${String(slides.length).padStart(2, '0')}</span></div>
          <button class="header-fs-btn" id="fsBtn" title="Fullscreen">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
          </button>
        </div>
      </div>
    </header>
  `;

  // Fullscreen toggle
  document.getElementById('fsBtn').addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => { });
    } else {
      document.exitFullscreen();
    }
  });

  // Subscribe to state changes
  const curNum = document.getElementById('curNum');
  const slideTitleTxt = document.getElementById('slideTitleTxt');

  subscribe((state) => {
    curNum.textContent = String(state.currentIndex + 1).padStart(2, '0');
    slideTitleTxt.textContent = slides[state.currentIndex].title;
  });
}

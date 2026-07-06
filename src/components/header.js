import { subscribe, getState } from '../state.js';
import { navigateTo } from '../router.js';

export function mountHeader(containerEl, slides) {
  containerEl.innerHTML = `
    <header class="app-header">
      <div class="app-header__backdrop"></div>
      <div class="app-header__inner">
        <div class="header-logos-left">
          <img src="assets/images/logoberdampak.png" alt="Berdampak" class="header-inst-logo" />
          <div class="header-inst-sep"></div>
          <img src="assets/images/Tiga Serangkai University.png" alt="Tiga Serangkai University" class="header-inst-logo" />
          <div class="header-inst-sep"></div>
          <img src="assets/images/tiga-serangkai-logo.png" alt="Tiga Serangkai" class="header-inst-logo" />
        </div>

        <button class="header-slide-picker-btn" id="slidePickerBtn" title="Pilih halaman">
          <span class="header-slide-title" id="headerSlideTitle">Cover</span>
          <svg class="header-slide-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        <div class="header-right">
          <div class="header-counter"><b id="curNum">01</b>&nbsp;/&nbsp;<span id="totNum">${String(slides.length).padStart(2, '0')}</span></div>
          <img src="assets/brand/bitshorizontal.png" alt="BITS" class="header-bits-logo" />
        </div>
      </div>
    </header>

    <!-- Slide Picker Modal -->
    <div class="slide-picker-modal" id="slidePickerModal">
      <div class="slide-picker-backdrop" id="slidePickerBackdrop"></div>
      <div class="slide-picker-panel">
        <div class="slide-picker-header">
          <div class="slide-picker-title">
            <div class="slide-picker-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </div>
            <span>Navigasi Presentasi</span>
          </div>
          <button class="slide-picker-close" id="slidePickerClose">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="slide-picker-list" id="slidePickerList">
          ${slides.map((slide, i) => `
            <button class="slide-picker-item${i === 0 ? ' active' : ''}" data-index="${i}" data-id="${slide.id}">
              <span class="slide-picker-num">${String(i + 1).padStart(2, '0')}</span>
              <span class="slide-picker-name">${slide.title}</span>
              <svg class="slide-picker-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Slide picker open/close
  const modal = document.getElementById('slidePickerModal');
  const pickerBtn = document.getElementById('slidePickerBtn');
  const closeBtn = document.getElementById('slidePickerClose');
  const backdrop = document.getElementById('slidePickerBackdrop');

  pickerBtn.addEventListener('click', () => modal.classList.toggle('open'));
  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  backdrop.addEventListener('click', () => modal.classList.remove('open'));

  // Slide picker item click
  document.getElementById('slidePickerList').addEventListener('click', (e) => {
    const item = e.target.closest('.slide-picker-item');
    if (!item) return;
    navigateTo(item.dataset.id);
    modal.classList.remove('open');
  });

  // Subscribe to state changes
  const curNum = document.getElementById('curNum');
  const headerSlideTitle = document.getElementById('headerSlideTitle');
  const pickerItems = document.querySelectorAll('.slide-picker-item');

  subscribe((state) => {
    const idx = state.currentIndex;
    const padded = String(idx + 1).padStart(2, '0');
    curNum.textContent = padded;
    headerSlideTitle.textContent = slides[idx].title;
    pickerItems.forEach((item, i) => item.classList.toggle('active', i === idx));
  });
}

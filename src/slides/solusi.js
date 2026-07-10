// Slide: Solusi
export default {
  id: 'solusi',
  title: 'Solusi',
  order: 3,
  assets: [],

  render() {
    return `
      <div class="slide-inner sol-slide" data-active="0">
        <div class="sol-ambient" aria-hidden="true"></div>
        <div class="eyebrow">Solusi</div>
        <h1 class="slide-title">Apa yang Kami <span>Bangun?</span></h1>
        <p class="slide-lead">Untuk menyelesaikan permasalahan di atas, kami membangun portal BITS dengan empat pilar solusi berikut.</p>
        <div class="grid-4">
          <div class="card sol-card" data-id="1">
            <div class="sol-num">01</div>
            <div class="sol-icon" style="background:linear-gradient(135deg,var(--primary-color),var(--primary-dark));">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
            </div>
            <div class="sol-title">Satu Antarmuka Terpusat</div>
            <div class="sol-desc">Menggabungkan 6 platform BI berbeda ke dalam satu portal menggunakan metode <i>embed</i> dinamis.</div>
          </div>
          <div class="card sol-card" data-id="2">
            <div class="sol-num">02</div>
            <div class="sol-icon" style="background:linear-gradient(135deg,var(--accent-primary),#0284c7);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>
            </div>
            <div class="sol-title">Kontrol Akses Berbasis Jabatan</div>
            <div class="sol-desc">Mengatur siapa yang bisa melihat dashboard apa secara terpusat melalui manajemen Hak Akses Jabatan.</div>
          </div>
          <div class="card sol-card" data-id="3">
            <div class="sol-num">03</div>
            <div class="sol-icon" style="background:linear-gradient(135deg,#8b5cf6,#7c3aed);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </div>
            <div class="sol-title">Mode Presentasi (Slideshow)</div>
            <div class="sol-desc">Menambahkan fitur <i>slideshow</i> untuk menayangkan berbagai laporan dashboard secara berurutan tanpa perlu berpindah menu secara manual.</div>
          </div>
          <div class="card sol-card" data-id="4">
            <div class="sol-num">04</div>
            <div class="sol-icon" style="background:linear-gradient(135deg,#f59e0b,#d97706);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="10" y1="19" x2="14" y2="19"/></svg>
            </div>
            <div class="sol-title">Aplikasi Mobile (Android)</div>
            <div class="sol-desc">Membuat aplikasi BITS tidak hanya dapat diakses via web, tetapi juga dapat berjalan di perangkat Android secara <i>native</i>.</div>
          </div>
        </div>
        </div>
        <style>
          .sol-slide {
            transition: all 0.3s ease;
          }
          .sol-slide[data-active="1"] .sol-card[data-id="1"],
          .sol-slide[data-active="2"] .sol-card[data-id="2"],
          .sol-slide[data-active="3"] .sol-card[data-id="3"],
          .sol-slide[data-active="4"] .sol-card[data-id="4"] {
            opacity: 1;
            transform: translateY(-6px) scale(1.03);
            filter: grayscale(0%);
            z-index: 2;
          }
          
          .sol-slide[data-active="1"] .sol-card[data-id="1"] {
            border-color: rgba(13, 148, 136, .6);
            box-shadow: 0 20px 50px rgba(13, 148, 136, 0.35), 0 0 0 1px rgba(13, 148, 136, 0.5);
          }
          .sol-slide[data-active="2"] .sol-card[data-id="2"] {
            border-color: rgba(14, 165, 233, .6);
            box-shadow: 0 20px 50px rgba(14, 165, 233, 0.35), 0 0 0 1px rgba(14, 165, 233, 0.5);
          }
          .sol-slide[data-active="3"] .sol-card[data-id="3"] {
            border-color: rgba(139, 92, 246, .6);
            box-shadow: 0 20px 50px rgba(139, 92, 246, 0.35), 0 0 0 1px rgba(139, 92, 246, 0.5);
          }
          .sol-slide[data-active="4"] .sol-card[data-id="4"] {
            border-color: rgba(245, 158, 11, .6);
            box-shadow: 0 20px 50px rgba(245, 158, 11, 0.35), 0 0 0 1px rgba(245, 158, 11, 0.5);
          }
          
          .sol-slide[data-active="1"] .sol-card[data-id="1"] .sol-icon,
          .sol-slide[data-active="2"] .sol-card[data-id="2"] .sol-icon,
          .sol-slide[data-active="3"] .sol-card[data-id="3"] .sol-icon,
          .sol-slide[data-active="4"] .sol-card[data-id="4"] .sol-icon {
            transform: scale(1.08) rotate(-2deg);
          }
        </style>
      </div>
    `;
  },
};

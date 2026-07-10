// Slide: Kesimpulan
export default {
  id: 'kesimpulan',
  title: 'Kesimpulan',
  order: 10,
  assets: [],

  render() {
    return `
      <div class="slide-inner kesim-slide-wrapper" data-active="0">
        <div class="eyebrow">Kesimpulan</div>
        <h1 class="slide-title">Hasil Akhir & <span>Dampak</span></h1>
        <p class="slide-lead">Implementasi portal BITS memberikan tiga transformasi utama bagi operasional PT Tiga Serangkai Inti Corpora.</p>
        
        <div class="grid-3">

          <!-- Card 1: Efisiensi -->
          <div class="card check-card" data-id="1">
            <div class="check-ic-wrap" style="background:linear-gradient(135deg,var(--primary-color),var(--primary-dark));">
              <svg class="check-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 7v5l3.5 2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <div class="check-title">Efisiensi Operasional</div>
              <div class="check-desc">Menghilangkan proses manual dan login berulang. Pemantauan data lintas platform kini jauh lebih cepat dan terpusat.</div>
            </div>
          </div>
          
          <!-- Card 2: Keamanan -->
          <div class="card check-card" data-id="2">
            <div class="check-ic-wrap" style="background:linear-gradient(135deg,var(--accent-primary),#0284c7);">
              <svg class="check-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/>
                <rect x="9.5" y="11.5" width="5" height="4" rx="1"/>
                <path d="M10.5 11.5v-1.5a1.5 1.5 0 0 1 3 0v1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="check-title">Tata Kelola & Keamanan</div>
              <div class="check-desc">Mencegah kebocoran informasi melalui sistem manajemen hak akses (RBAC) yang ketat dan tersentralisasi.</div>
            </div>
          </div>
          
          <!-- Card 3: Fleksibilitas -->
          <div class="card check-card" data-id="3">
            <div class="check-ic-wrap" style="background:linear-gradient(135deg,#f59e0b,#d97706);">
              <svg class="check-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="1.5" y="4" width="13.5" height="9.5" rx="1.5"/>
                <path d="M5.5 17h5.5" stroke-linecap="round"/>
                <rect x="15" y="8.5" width="7.5" height="12.5" rx="1.5"/>
                <path d="M17.7 18.3h2.1" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="check-title">Fleksibilitas Monitoring</div>
              <div class="check-desc">Memastikan data selalu dapat diakses kapan pun dan di mana pun, baik via layar rapat (Slideshow) maupun aplikasi Android.</div>
            </div>
          </div>

        </div>
        
        <div class="quote-block" style="margin-top: 30px;">
          Secara keseluruhan, <b>Sistem BITS terbukti berhasil</b> mengubah ekosistem data yang sebelumnya tersebar menjadi satu portal cerdas yang aman, efisien, dan siap mendukung pertumbuhan bisnis Tiga Serangkai ke depannya.
        </div>

        <style>
          /* ── ICON WRAPPER ── */
          .check-ic-wrap {
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }

          .check-ic-wrap::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,.6) 50%, transparent 70%);
            transform: translateX(-160%) skewX(-20deg);
            pointer-events: none;
          }

          .check-svg {
            width: 20px;
            height: 20px;
            color: #fff;
            display: block;
            position: relative;
            z-index: 1;
          }

          /* ── OPENING ANIMATIONS ── */
          @keyframes kesimpulanFadeUp {
            from { opacity: 0; transform: translateY(24px); filter: blur(8px); }
            to   { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes kesimpulanCardIn {
            from { opacity: 0; transform: translateY(30px) scale(0.95); filter: blur(10px); }
            to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
          @keyframes kesimpulanQuoteIn {
            from { opacity: 0; transform: scaleX(0.92); filter: blur(5px); }
            to   { opacity: 1; transform: scaleX(1); filter: blur(0); }
          }

          /* Card: soft glow */
          @keyframes kesimpulanCardGlow {
            0%, 100% { box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            50%       { box-shadow: 0 12px 28px rgba(13,148,136,0.10), 0 0 0 1px rgba(13,148,136,0.07); }
          }

          /* STAGGERED ENTRANCE */
          .slide[data-id="kesimpulan"].active .eyebrow {
            animation: kesimpulanFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
          }
          .slide[data-id="kesimpulan"].active h1.slide-title {
            animation: kesimpulanFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }
          .slide[data-id="kesimpulan"].active .slide-lead {
            animation: kesimpulanFadeUp 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
          }
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(1) {
            animation: kesimpulanCardIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
          }
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(2) {
            animation: kesimpulanCardIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
          }
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(3) {
            animation: kesimpulanCardIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.75s both;
          }
          .slide[data-id="kesimpulan"].active .quote-block {
            animation: kesimpulanQuoteIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.95s both;
          }

          /* Icon: entrance pop + idle glow, sama seperti sol-icon di solusi.js */
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(1) .check-ic-wrap {
            animation: iconPop 0.55s var(--ease-spring) 0.57s backwards,
              iconGlowTeal 3.4s ease-in-out 1.3s infinite;
          }
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(2) .check-ic-wrap {
            animation: iconPop 0.55s var(--ease-spring) 0.67s backwards,
              iconGlowSky 3.4s ease-in-out 1.6s infinite;
          }
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(3) .check-ic-wrap {
            animation: iconPop 0.55s var(--ease-spring) 0.77s backwards,
              iconGlowAmber 3.4s ease-in-out 1.9s infinite;
          }

          /* Icon: occasional light glint sweep, offset per card */
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(1) .check-ic-wrap::before {
            animation: iconGlint 4.6s ease-in-out 1.8s infinite;
          }
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(2) .check-ic-wrap::before {
            animation: iconGlint 4.6s ease-in-out 2.9s infinite;
          }
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(3) .check-ic-wrap::before {
            animation: iconGlint 4.6s ease-in-out 4s infinite;
          }

          /* IDLE: card glow */
          .slide[data-id="kesimpulan"].active .check-card {
            animation-name: kesimpulanCardIn, kesimpulanCardGlow;
            animation-duration: 1s, 5s;
            animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1), ease-in-out;
            animation-iteration-count: 1, infinite;
            animation-fill-mode: both, none;
          }
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(1) { animation-delay: 0.45s, 2.5s; }
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(2) { animation-delay: 0.6s, 2.5s; }
          .slide[data-id="kesimpulan"].active .grid-3 .check-card:nth-child(3) { animation-delay: 0.75s, 2.5s; }

          /* ── HOVER ── */
          .slide[data-id="kesimpulan"] .check-card {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                        box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            z-index: 1;
          }
          .slide[data-id="kesimpulan"] .check-card:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 20px 40px rgba(13, 148, 136, 0.12), 0 0 0 1px rgba(13, 148, 136, 0.15);
            z-index: 2;
          }
          .slide[data-id="kesimpulan"] .check-ic-wrap {
            transition: transform 0.35s var(--ease-out-expo);
          }
          .slide[data-id="kesimpulan"] .check-card:hover .check-ic-wrap {
            transform: scale(1.08) rotate(-2deg);
          }

          /* HOTKEYS ACTIVE STATES */
          .kesim-slide-wrapper {
            transition: all 0.3s ease;
          }
          .kesim-slide-wrapper .check-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
          
          .kesim-slide-wrapper[data-active="1"] .check-card[data-id="1"],
          .kesim-slide-wrapper[data-active="2"] .check-card[data-id="2"],
          .kesim-slide-wrapper[data-active="3"] .check-card[data-id="3"] {
            transform: translateY(-6px) scale(1.03) !important;
            z-index: 2;
          }
          
          .kesim-slide-wrapper[data-active="1"] .check-card[data-id="1"] {
            border-color: rgba(13, 148, 136, .6) !important;
            box-shadow: 0 20px 50px rgba(13, 148, 136, 0.35), 0 0 0 1px rgba(13, 148, 136, 0.5) !important;
          }
          .kesim-slide-wrapper[data-active="2"] .check-card[data-id="2"] {
            border-color: rgba(14, 165, 233, .6) !important;
            box-shadow: 0 20px 50px rgba(14, 165, 233, 0.35), 0 0 0 1px rgba(14, 165, 233, 0.5) !important;
          }
          .kesim-slide-wrapper[data-active="3"] .check-card[data-id="3"] {
            border-color: rgba(245, 158, 11, .6) !important;
            box-shadow: 0 20px 50px rgba(245, 158, 11, 0.35), 0 0 0 1px rgba(245, 158, 11, 0.5) !important;
          }
          
          .kesim-slide-wrapper[data-active="1"] .check-card[data-id="1"] .check-ic-wrap,
          .kesim-slide-wrapper[data-active="2"] .check-card[data-id="2"] .check-ic-wrap,
          .kesim-slide-wrapper[data-active="3"] .check-card[data-id="3"] .check-ic-wrap {
            transform: scale(1.08) rotate(-2deg);
          }
        </style>
      </div>
    `;
  },
};
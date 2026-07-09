// Slide: Metrik & Dampak
export default {
  id: 'metrik',
  title: 'Metrik & Dampak',
  order: 9,
  assets: [],

  render() {
    return `
      <div class="slide-inner">
        <div class="eyebrow">Dampak</div>
        <h1 class="slide-title">Sebelum vs <span>Sesudah BITS</span></h1>
        <div class="card metrik-table-card">
          <div class="metric-row head"><span>Aspek</span><span>Sebelum BITS</span><span>Sesudah BITS</span></div>
          
          <div class="metric-row"><div class="metric-label">Platform yang perlu dibuka</div><div class="metric-before">6 platform terpisah</div><div class="metric-after">1 portal terpadu</div></div>
          
          <div class="metric-row"><div class="metric-label">Proses Login</div><div class="metric-before">Berkali-kali (tiap platform)</div><div class="metric-after">1x Login Terpusat</div></div>
          
          <div class="metric-row"><div class="metric-label">Manajemen Hak Akses</div><div class="metric-before">Diatur di masing-masing platform</div><div class="metric-after">Terpusat Berdasarkan Jabatan</div></div>
          
          <div class="metric-row"><div class="metric-label">Mode Presentasi Laporan</div><div class="metric-before">Tidak tersedia</div><div class="metric-after">Tersedia (Slideshow Otomatis)</div></div>
          
          <div class="metric-row"><div class="metric-label">Akses Perangkat Mobile</div><div class="metric-before">Terbatas (Hanya Web Desktop)</div><div class="metric-after">Aplikasi Native Android (APK)</div></div>
          
          <div class="metric-row" style="border-bottom:none;"><div class="metric-label">Struktur Navigasi Data</div><div class="metric-before">Berantakan / Tidak terstruktur</div><div class="metric-after">Dinamis (Company → Branch → Dept)</div></div>
        </div>

        <style>
          /* ── OPENING ANIMATIONS ── */
          @keyframes metrikFadeUp {
            from { opacity: 0; transform: translateY(24px); filter: blur(8px); }
            to   { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes metrikCardIn {
            from { opacity: 0; transform: translateY(20px); filter: blur(6px); }
            to   { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes metrikRowIn {
            from { opacity: 0; transform: translateX(-16px); filter: blur(4px); }
            to   { opacity: 1; transform: translateX(0); filter: blur(0); }
          }
          @keyframes metrikAfterGlow {
            0%, 100% { box-shadow: none; }
            50%       { box-shadow: inset 0 0 0 1px rgba(13, 148, 136, 0.25); }
          }

          /* STAGGERED ENTRANCE */
          .slide[data-id="metrik"].active .eyebrow {
            animation: metrikFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
          }
          .slide[data-id="metrik"].active h1.slide-title {
            animation: metrikFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }
          .slide[data-id="metrik"].active .metrik-table-card {
            animation: metrikCardIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
          }

          /* Header row */
          .slide[data-id="metrik"].active .metric-row.head {
            animation: metrikRowIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
          }

          /* Data rows staggered */
          .slide[data-id="metrik"].active .metric-row:nth-child(2) {
            animation: metrikRowIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both;
          }
          .slide[data-id="metrik"].active .metric-row:nth-child(3) {
            animation: metrikRowIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both;
          }
          .slide[data-id="metrik"].active .metric-row:nth-child(4) {
            animation: metrikRowIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.75s both;
          }
          .slide[data-id="metrik"].active .metric-row:nth-child(5) {
            animation: metrikRowIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.85s both;
          }
          .slide[data-id="metrik"].active .metric-row:nth-child(6) {
            animation: metrikRowIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.95s both;
          }
          .slide[data-id="metrik"].active .metric-row:nth-child(7) {
            animation: metrikRowIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.05s both;
          }

          /* ── IDLE: "sesudah" cells gently glow to draw attention ── */
          .slide[data-id="metrik"].active .metric-after {
            animation: metrikAfterGlow 4s ease-in-out 2s infinite;
            border-radius: 6px;
            transition: background 0.3s ease;
          }

          /* ── HOVER ── */
          .slide[data-id="metrik"] .metric-row:not(.head) {
            transition: background 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            border-radius: 8px;
          }
          .slide[data-id="metrik"] .metric-row:not(.head):hover {
            background: rgba(13, 148, 136, 0.05);
            transform: translateX(4px);
          }
          .slide[data-id="metrik"] .metric-row:not(.head):hover .metric-after {
            color: var(--primary-color);
            font-weight: 700;
          }
          .slide[data-id="metrik"] .metric-row:not(.head):hover .metric-before {
            opacity: 0.5;
            text-decoration: line-through;
          }
        </style>
      </div>
    `;
  },
};

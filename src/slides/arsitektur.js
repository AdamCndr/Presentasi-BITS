// Slide: Arsitektur
export default {
  id: 'arsitektur',
  title: 'Arsitektur',
  order: 4,
  assets: [],

  render() {
    return `
      <div class="slide-inner arch-slide-wrapper" data-active="0">
        <div class="eyebrow">Arsitektur</div>
        <h1 class="slide-title">Arsitektur Sistem <span>Lengkap</span></h1>
        <p class="slide-lead">Sistem BITS dibangun menggunakan arsitektur modern yang memisahkan antara antarmuka pengguna, layanan API, dan pusat penyimpanan data.</p>


        <div class="arch-wrap">
          <div class="arch-row">
            <div class="arch-box strong" data-id="1">
              <div class="arch-ic" style="background:linear-gradient(135deg,var(--primary-color),var(--primary-dark));color:#fff;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div class="arch-name">Frontend User</div>
              <div class="arch-desc">Vue.js 3 — Portal BI User + Android</div>
            </div>
            <div class="arch-box strong" data-id="2">
              <div class="arch-ic" style="background:linear-gradient(135deg,var(--accent-primary),#0284c7);color:#fff;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <div class="arch-name">Frontend Admin</div>
              <div class="arch-desc">Vue.js 3 — Panel Manajemen untuk Tim IT</div>
            </div>
          </div>
          <div class="arch-conn-wrap" style="width:222px; height:40px;">
            <svg width="222" height="40" style="overflow:visible;">
              <path class="arch-path" d="M 0,0 L 0,15 A 5 5 0 0 0 5 20 L 106 20 A 5 5 0 0 1 111 25 L 111 40" />
              <path class="arch-path" d="M 222,0 L 222,15 A 5 5 0 0 1 217 20 L 116 20 A 5 5 0 0 0 111 25 L 111 40" />
            </svg>
          </div>
          <div class="arch-row">
            <div class="arch-box" data-id="3">
              <div class="arch-ic" style="background:linear-gradient(135deg,#334155,#1e293b);color:#fff;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="6" rx="1.5"/><rect x="2" y="14" width="20" height="6" rx="1.5"/><line x1="6" y1="7" x2="6.01" y2="7"/><line x1="6" y1="17" x2="6.01" y2="17"/></svg>
              </div>
              <div class="arch-name">Backend API</div>
              <div class="arch-desc">Node.js + Express</div>
            </div>
          </div>
          <div class="arch-conn-wrap" style="width:444px; height:40px;">
            <svg width="444" height="40" style="overflow:visible;">
              <!-- Tengah: ke MS SQL Server -> flow ke atas (reverse) -->
              <path class="arch-path arch-path-reverse" d="M 222,0 L 222,40" />
              <!-- Kiri: ke PostgreSQL -> flow ke atas (reverse) -->
              <path class="arch-path arch-path-reverse" d="M 222,0 L 222,15 A 5 5 0 0 1 217 20 L 5 20 A 5 5 0 0 0 0 25 L 0 40" />
              <!-- Kanan: ke Dashboard Server -> tetap flow ke bawah -->
              <path class="arch-path" d="M 222,0 L 222,15 A 5 5 0 0 0 227 20 L 439 20 A 5 5 0 0 1 444 25 L 444 40" />
            </svg>
          </div>
          <div class="arch-row">
            <div class="arch-box" data-id="4">
              <div class="arch-ic" style="background:linear-gradient(135deg,#0f766e,#0d5c56);color:#fff;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
              </div>
              <div class="arch-name">PostgreSQL</div>
              <div class="arch-desc">Database relasional utama</div>
            </div>
            <div class="arch-box" data-id="5">
              <div class="arch-ic" style="background:linear-gradient(135deg,#dc2626,#b91c1c);color:#fff;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
              </div>
              <div class="arch-name">MS SQL Server</div>
              <div class="arch-desc">Sumber Data Eksternal (Dashboard DevExpress)</div>
            </div>
            <div class="arch-box" data-id="6">
              <div class="arch-ic" style="background:linear-gradient(135deg,#8b5cf6,#7c3aed);color:#fff;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <div class="arch-name">Dashboard Server</div>
              <div class="arch-desc">ASP.NET Core — khusus DevExpress</div>
            </div>
          </div>
        </div>
        
        <style>
          /* ── ARCHITECTURE ANIMATIONS ── */
          
          @keyframes archTitleIn {
            from { opacity: 0; transform: translateY(-20px); filter: blur(8px); }
            to   { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes archBoxIn {
            from { opacity: 0; transform: translateY(30px) scale(0.95); filter: blur(10px); }
            to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
          @keyframes archDrawPath {
            from { clip-path: inset(0 0 100% 0); opacity: 0; }
            to   { clip-path: inset(0 0 0 0); opacity: 1; }
          }
          @keyframes archFlowDash {
            to { stroke-dashoffset: -28; }
          }
          @keyframes archGlowPulse {
            0%, 100% { box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            50%       { box-shadow: 0 12px 28px rgba(13,148,136,0.15), 0 0 0 1px rgba(13,148,136,0.08); }
          }

          .arch-conn-wrap {
            margin: 0 auto;
            display: flex;
            justify-content: center;
          }
          .arch-path {
            fill: none;
            stroke: var(--primary-color);
            stroke-width: 2px;
            stroke-dasharray: 8 6;
            stroke-linecap: round;
            filter: drop-shadow(0 0 4px rgba(13, 148, 136, 0.3));
            animation: archFlowDash 1.7s linear infinite;
          }

          .arch-path-reverse {
            animation-direction: reverse;
          }

          /* OPENING TITLE */
          .slide[data-id="arsitektur"].active .eyebrow {
            animation: archTitleIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
          }
          .slide[data-id="arsitektur"].active h1.slide-title {
            animation: archTitleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }
          .slide[data-id="arsitektur"].active .slide-lead {
            animation: archTitleIn 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
          }

          /* TOP ROW (Frontend) */
          .slide[data-id="arsitektur"].active .arch-row:nth-child(1) .arch-box:nth-child(1) {
            animation: archBoxIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
          }
          .slide[data-id="arsitektur"].active .arch-row:nth-child(1) .arch-box:nth-child(2) {
            animation: archBoxIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
          }

          /* CONNECTORS TO BACKEND */
          .slide[data-id="arsitektur"].active .arch-wrap > div:nth-child(2) {
            animation: archDrawPath 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both;
          }

          /* MIDDLE ROW (Backend) */
          .slide[data-id="arsitektur"].active .arch-row:nth-child(3) .arch-box {
            animation: archBoxIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both;
          }

          /* CONNECTORS TO DBs */
          .slide[data-id="arsitektur"].active .arch-wrap > div:nth-child(4) {
            animation: archDrawPath 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both;
          }

          /* BOTTOM ROW (Databases/Dashboard Server) */
          .slide[data-id="arsitektur"].active .arch-row:nth-child(5) .arch-box:nth-child(1) {
            animation: archBoxIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.3s both;
          }
          .slide[data-id="arsitektur"].active .arch-row:nth-child(5) .arch-box:nth-child(2) {
            animation: archBoxIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.4s both;
          }
          .slide[data-id="arsitektur"].active .arch-row:nth-child(5) .arch-box:nth-child(3) {
            animation: archBoxIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.5s both;
          }

          /* IDLE */
          .slide[data-id="arsitektur"].active .arch-box {
            /* Keep original entrance animation, append idle */
            animation-name: archBoxIn, archGlowPulse;
            animation-duration: 1.2s, 6s;
            animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1), ease-in-out;
            animation-iteration-count: 1, infinite;
            animation-fill-mode: both, none;
          }
          
          /* Need to re-declare delays for idle glow so they don't break */
          .slide[data-id="arsitektur"].active .arch-row:nth-child(1) .arch-box:nth-child(1) { animation-delay: 0.4s, 2s; }
          .slide[data-id="arsitektur"].active .arch-row:nth-child(1) .arch-box:nth-child(2) { animation-delay: 0.5s, 2s; }
          .slide[data-id="arsitektur"].active .arch-row:nth-child(3) .arch-box { animation-delay: 0.9s, 2s; }
          .slide[data-id="arsitektur"].active .arch-row:nth-child(5) .arch-box:nth-child(1) { animation-delay: 1.3s, 2s; }
          .slide[data-id="arsitektur"].active .arch-row:nth-child(5) .arch-box:nth-child(2) { animation-delay: 1.4s, 2s; }
          .slide[data-id="arsitektur"].active .arch-row:nth-child(5) .arch-box:nth-child(3) { animation-delay: 1.5s, 2s; }

          /* HOTKEYS ACTIVE STATES */
          .arch-slide-wrapper {
            transition: all 0.3s ease;
          }
          .arch-box {
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }
          
          /* Highlight active cards */
          .arch-slide-wrapper[data-active="1"] .arch-box[data-id="1"],
          .arch-slide-wrapper[data-active="2"] .arch-box[data-id="2"],
          .arch-slide-wrapper[data-active="3"] .arch-box[data-id="3"],
          .arch-slide-wrapper[data-active="4"] .arch-box[data-id="4"],
          .arch-slide-wrapper[data-active="5"] .arch-box[data-id="5"],
          .arch-slide-wrapper[data-active="6"] .arch-box[data-id="6"] {
            opacity: 1;
            transform: scale(1.05);
            filter: grayscale(0%);
            z-index: 2;
            border-color: rgba(13, 148, 136, .6) !important;
            box-shadow: 0 20px 40px rgba(13, 148, 136, 0.3), 0 0 0 1px rgba(13, 148, 136, 0.5) !important;
          }
          
          /* Match glow colors to icons for specific boxes */
          .arch-slide-wrapper[data-active="2"] .arch-box[data-id="2"] {
             border-color: rgba(14, 165, 233, .6) !important;
             box-shadow: 0 20px 40px rgba(14, 165, 233, 0.3), 0 0 0 1px rgba(14, 165, 233, 0.5) !important;
          }
          .arch-slide-wrapper[data-active="3"] .arch-box[data-id="3"] {
             border-color: rgba(51, 65, 85, .6) !important;
             box-shadow: 0 20px 40px rgba(51, 65, 85, 0.3), 0 0 0 1px rgba(51, 65, 85, 0.5) !important;
          }
          .arch-slide-wrapper[data-active="5"] .arch-box[data-id="5"] {
             border-color: rgba(220, 38, 38, .6) !important;
             box-shadow: 0 20px 40px rgba(220, 38, 38, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.5) !important;
          }
          .arch-slide-wrapper[data-active="6"] .arch-box[data-id="6"] {
             border-color: rgba(139, 92, 246, .6) !important;
             box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.5) !important;
          }

        </style>
      </div>
    `;
  },
};
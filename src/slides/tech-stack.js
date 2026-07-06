// Slide: Tech Stack
export default {
  id: 'tech-stack',
  title: 'Tech Stack',
  order: 5,
  assets: [],

  render() {
    return `
      <div class="slide-inner">
        <div class="eyebrow">Teknologi</div>
        <h1 class="slide-title">Tech Stack <span>Full Sistem</span></h1>
        <p class="slide-lead">Kombinasi tools yang dipilih untuk kebutuhan performa, skalabilitas, dan integrasi lintas platform BI.</p>
        <div class="grid-3">
          
          <div class="card">
            <div class="stack-col-title">Backend API</div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">Node.js</span></div>
              <div class="stack-reason">Runtime JavaScript yang ringan dan async-first</div>
            </div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">Express.js</span></div>
              <div class="stack-reason">Framework API yang cepat dengan ekosistem besar</div>
            </div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">PostgreSQL</span></div>
              <div class="stack-reason">Robust, ACID-compliant untuk data relasional</div>
            </div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">Sequelize ORM</span></div>
              <div class="stack-reason">Migrasi schema, query builder, dan manajemen relasi model</div>
            </div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">JWT</span></div>
              <div class="stack-reason">Stateless auth — cocok untuk SPA multi-client</div>
            </div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">MS SQL Server</span></div>
              <div class="stack-reason">Sumber data eksternal (XML) untuk DevExpress</div>
            </div>
          </div>
          
          <div class="card">
            <div class="stack-col-title">Dashboard Server</div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">ASP.NET Core (.NET 8)</span></div>
              <div class="stack-reason">Runtime yang dibutuhkan DevExpress SDK — tidak berjalan di Node.js</div>
            </div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">DevExpress Dashboard</span></div>
              <div class="stack-reason">SDK enterprise untuk render dashboard secara native</div>
            </div>
          </div>
          
          <div class="card">
            <div class="stack-col-title">Frontend</div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">Vue.js 3</span></div>
              <div class="stack-reason">SPA Composition API — modular &amp; reusable</div>
            </div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">Pinia</span></div>
              <div class="stack-reason">State management auth (token persist)</div>
            </div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">Vue Flow</span></div>
              <div class="stack-reason">Pembuatan diagram flow struktur Company/Branch/Dept</div>
            </div>
            <div class="stack-item">
              <div class="stack-name-row"><span class="stack-name">Capacitor</span></div>
              <div class="stack-reason">Konversi web app menjadi APK Android native</div>
            </div>
          </div>
          
        </div>
        
        <style>
          /* ── TECH STACK ANIMATIONS ── */
          
          @keyframes stackTitleIn {
            from { opacity: 0; transform: translateY(-20px); filter: blur(8px); }
            to   { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes stackCardIn {
            from { opacity: 0; transform: translateY(40px) scale(0.96); filter: blur(10px); }
            to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
          @keyframes stackItemStagger {
            from { opacity: 0; transform: translateX(-16px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes stackGlowPulse {
            0%, 100% { box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
            50%       { box-shadow: 0 16px 40px rgba(13,148,136,0.1), 0 0 0 1px rgba(13,148,136,0.05); }
          }

          /* OPENING */
          .slide[data-id="tech-stack"].active .eyebrow {
            animation: stackTitleIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
          }
          .slide[data-id="tech-stack"].active h1.slide-title {
            animation: stackTitleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }
          .slide[data-id="tech-stack"].active .slide-lead {
            animation: stackTitleIn 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
          }

          /* CARDS */
          .slide[data-id="tech-stack"].active .grid-3 .card:nth-child(1) {
            animation: stackCardIn 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
          }
          .slide[data-id="tech-stack"].active .grid-3 .card:nth-child(2) {
            animation: stackCardIn 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.40s both;
          }
          .slide[data-id="tech-stack"].active .grid-3 .card:nth-child(3) {
            animation: stackCardIn 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both;
          }

          /* ITEMS INSIDE CARDS (Cascade delay) */
          .slide[data-id="tech-stack"].active .grid-3 .card .stack-item:nth-child(2) { animation: stackItemStagger 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
          .slide[data-id="tech-stack"].active .grid-3 .card .stack-item:nth-child(3) { animation: stackItemStagger 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
          .slide[data-id="tech-stack"].active .grid-3 .card .stack-item:nth-child(4) { animation: stackItemStagger 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s both; }
          .slide[data-id="tech-stack"].active .grid-3 .card .stack-item:nth-child(5) { animation: stackItemStagger 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s both; }
          .slide[data-id="tech-stack"].active .grid-3 .card .stack-item:nth-child(6) { animation: stackItemStagger 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s both; }
          .slide[data-id="tech-stack"].active .grid-3 .card .stack-item:nth-child(7) { animation: stackItemStagger 0.8s cubic-bezier(0.16,1,0.3,1) 0.9s both; }

          /* IDLE */
          .slide[data-id="tech-stack"].active .grid-3 .card {
            animation: stackCardIn 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both,
                       stackGlowPulse 6s ease-in-out 1.5s infinite;
          }
        </style>
      </div>
    `;
  },
};

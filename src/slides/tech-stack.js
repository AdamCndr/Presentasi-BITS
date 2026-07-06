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
      </div>
    `;
  },
};

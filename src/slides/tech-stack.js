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
            <div class="stack-col-title">Backend</div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">Node.js + Express</span><span class="stack-ver">^5.2.1</span></div><div class="stack-reason">Ringan, async-first, ekosistem besar</div></div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">PostgreSQL</span></div><div class="stack-reason">Robust, ACID-compliant untuk data relasional</div></div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">Sequelize ORM</span><span class="stack-ver">^6.37.8</span></div><div class="stack-reason">Migrasi schema, query builder, relasi model bersih</div></div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">JWT</span><span class="stack-ver">^9.0.3</span></div><div class="stack-reason">Stateless auth — cocok SPA multi-client</div></div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">mssql</span><span class="stack-ver">^12.2.1</span></div><div class="stack-reason">Koneksi ke sumber data Microsoft SQL Server</div></div>
          </div>
          <div class="card">
            <div class="stack-col-title">Dashboard Server</div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">ASP.NET Core (.NET 8)</span></div><div class="stack-reason">Runtime yang dibutuhkan DevExpress Dashboard SDK — tidak berjalan di Node.js</div></div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">DevExpress Dashboard</span></div><div class="stack-reason">SDK enterprise untuk render dashboard XML secara native</div></div>
          </div>
          <div class="card">
            <div class="stack-col-title">Frontend</div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">Vue.js 3 + Vite</span></div><div class="stack-reason">SPA Composition API — modular &amp; reusable</div></div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">CoreUI + Sass</span></div><div class="stack-reason">UI library enterprise, dikustom sesuai branding</div></div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">Pinia</span></div><div class="stack-reason">State management auth (token persist)</div></div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">Vue Flow</span></div><div class="stack-reason">Diagram flow struktur Company/Branch/Dept</div></div>
            <div class="stack-item"><div class="stack-name-row"><span class="stack-name">Capacitor</span></div><div class="stack-reason">Konversi web app → APK Android native</div></div>
          </div>
        </div>
      </div>
    `;
  },
};

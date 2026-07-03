// Slide: Cover
export default {
  id: 'cover',
  title: 'Cover',
  order: 0,
  assets: [
    'assets/brand/bits.png',
    'assets/icons/powerbi.png',
    'assets/icons/looker.png',
    'assets/icons/lookerstudio.png',
    'assets/icons/metabase.png',
    'assets/icons/tableau.png',
    'assets/icons/devexpress.png',
  ],

  render() {
    return `
      <div class="cover">
        <div class="cover-content">
          <div class="cover-badge">PT Tiga Serangkai Inti Corpora · <b>Kerja Praktek 2026</b></div>
          <img src="assets/brand/bits.png" alt="BITS" style="height:110px; width:auto; object-fit:contain; margin-top:12px; margin-bottom:12px; display:block;">
          <div class="cover-full">Business Intelligence Tiga Serangkai Portal</div>
          <p class="cover-quote">Satu portal. Semua dashboard. Akses seluruh data bisnis dari <i>Power BI</i> hingga <i>DevExpress</i> dalam satu antarmuka yang seragam.</p>
          <div class="cover-meta"><span>Presentasi Full Tim</span><span class="sep"></span><span>Februari – Juni 2026</span></div>
          <div class="platform-row">
            <div class="platform-chip"><img src="assets/icons/powerbi.png" class="plat-ic" style="background:transparent; object-fit:contain; padding:2px;" alt="PB">Power BI</div>
            <div class="platform-chip"><img src="assets/icons/looker.png" class="plat-ic" style="background:transparent; object-fit:contain; padding:2px;" alt="LK">Looker</div>
            <div class="platform-chip"><img src="assets/icons/lookerstudio.png" class="plat-ic" style="background:transparent; object-fit:contain; padding:2px;" alt="LS">Looker Studio</div>
            <div class="platform-chip"><img src="assets/icons/metabase.png" class="plat-ic" style="background:transparent; object-fit:contain; padding:2px;" alt="MB">Metabase</div>
            <div class="platform-chip"><img src="assets/icons/tableau.png" class="plat-ic" style="background:transparent; object-fit:contain; padding:2px;" alt="TB">Tableau</div>
            <div class="platform-chip"><img src="assets/icons/devexpress.png" class="plat-ic" style="background:transparent; object-fit:contain; padding:2px;" alt="DX">DevExpress</div>
          </div>
        </div>
        <div class="cover-floats">
          <div class="fcard fc1"><div class="fcard-dot" style="background:var(--accent-primary)"></div><div><div class="fcard-label">Platform BI</div><div class="fcard-value">6</div></div></div>
          <div class="fcard fc2"><div class="fcard-dot" style="background:var(--accent-secondary)"></div><div><div class="fcard-label">Developer</div><div class="fcard-value">4</div></div></div>
          <div class="fcard fc3"><div class="fcard-dot" style="background:#8b5cf6"></div><div><div class="fcard-label">Portal Terpusat</div><div class="fcard-value">1</div></div></div>
        </div>
      </div>
    `;
  },
};

// Slide: Cover
export default {
  id: 'cover',
  title: 'Cover',
  order: 0,
  assets: [
    'assets/brand/bitshorizontal.png',
    'assets/images/MockupHome.png',
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
          <div class="cover-badge">PT Tiga Serangkai Inti Corpora · <b>Magang Mandiri 2026</b></div>
          <div class="cover-logo">
            <img src="assets/brand/bitshorizontal.png" alt="BITS" style="height:72px; width:auto; object-fit:contain; display:block;">
          </div>
          <div class="cover-full">Business Intelligence Tiga Serangkai Portal</div>
          <p class="cover-quote">BITS Portal dikembangkan sebagai portal web internal Perusahaan untuk mengintegrasikan berbagai platform Business Intelligence
<i> (Power BI, Google Looker, Looker Studio, Tableau, Metabase, Devexpress Dashboard)</i> dalam satu sistem terpusat.</p>
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
          <div class="cover-mockup-wrapper">
            <img src="assets/images/MockupHome.png" alt="Portal Mockup" class="cover-mockup" />
          </div>
        </div>
      </div>
    `;
  },
};
// Slide: Frontend User
export default {
  id: 'user',
  title: 'Frontend User',
  order: 7,
  assets: [
    'assets/images/MockupHome.png',
    'assets/images/DashboardHub.png',
    'assets/images/Slideshow.png',
    'assets/images/UserInfo.png',
  ],

  render() {
    return `
      <div class="slide-inner">
        <div class="eyebrow">Frontend User</div>
        <h1 class="slide-title">Portal Utama <span>untuk Karyawan</span></h1>
        <div class="grid-2" style="margin-bottom:16px;">
          <div class="card" style="display:flex;flex-direction:column;gap:12px;">
            <div><div class="mini-label">Halaman Beranda</div><div style="font-size:13px;color:var(--text-secondary);line-height:1.7;">Hero statistik akses, Platform Insight, Dashboard Hub dengan Org Chart interaktif, dan Profile Card.</div></div>
            <img src="assets/images/MockupHome.png" alt="Mockup Home" style="width:100%; border-radius:8px; border:1px solid var(--border-color); margin-top:auto;">
          </div>
          <div class="card" style="display:flex;flex-direction:column;gap:12px;">
            <div><div class="mini-label">Dashboard Hub &amp; Hierarki</div><div style="font-size:13px;color:var(--text-secondary);line-height:1.7;">Menampilkan navigasi interaktif untuk eksplorasi data perusahaan.</div></div>
            <img src="assets/images/DashboardHub.png" alt="Dashboard Hub" style="width:100%; border-radius:8px; border:1px solid var(--border-color); margin-top:auto;">
          </div>
          <div class="card" style="display:flex;flex-direction:column;gap:12px;">
            <div><div class="mini-label">Slideshow Mode</div><div style="font-size:13px;color:var(--text-secondary);line-height:1.7;">Preset playlist, mode Auto/Manual, fullscreen tanpa UI navigasi.</div></div>
            <img src="assets/images/Slideshow.png" alt="Slideshow Mode" style="width:100%; border-radius:8px; border:1px solid var(--border-color); margin-top:auto;">
          </div>
          <div class="card" style="display:flex;flex-direction:column;gap:12px;">
            <div><div class="mini-label">Profile &amp; Navigasi</div><div style="font-size:13px;color:var(--text-secondary);line-height:1.7;">Informasi profil pengguna dan sidebar navigasi dinamis (di-build ke Android Capacitor).</div></div>
            <img src="assets/images/UserInfo.png" alt="User Info" style="width:100%; border-radius:8px; border:1px solid var(--border-color); margin-top:auto;">
          </div>
        </div>
        <div class="card" style="padding:0;overflow:hidden;">
          <table class="tbl">
            <thead><tr><th>Platform</th><th>Komponen</th><th>Metode Integrasi</th></tr></thead>
            <tbody>
              <tr><td><b>Microsoft Power BI</b></td><td>powerbi.vue</td><td>SDK powerbi-client (token dari backend)</td></tr>
              <tr><td><b>Google Looker</b></td><td>looker.vue</td><td>iframe embed</td></tr>
              <tr><td><b>Looker Studio</b></td><td>lookerstudio.vue</td><td>iframe embed</td></tr>
              <tr><td><b>Metabase</b></td><td>metabase.vue</td><td>iframe embed</td></tr>
              <tr><td><b>Tableau</b></td><td>DashboardEmbed.vue</td><td>iframe dinamis via /dashboard/:id</td></tr>
              <tr><td><b>DevExpress</b></td><td>DashboardEmbed.vue</td><td>Proxy backend → Dashboard Server ASP.NET</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  },
};

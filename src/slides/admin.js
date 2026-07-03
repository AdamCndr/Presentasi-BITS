// Slide: Frontend Admin
export default {
  id: 'admin',
  title: 'Frontend Admin',
  order: 6,
  assets: [
    'assets/images/OrgChartAdmin.png',
    'assets/images/MenuManajemen.png',
    'assets/images/UserManajemen.png',
    'assets/images/DevExpressRepository.png',
  ],

  render() {
    return `
      <div class="slide-inner">
        <div class="eyebrow">Frontend Admin</div>
        <h1 class="slide-title">6 Halaman Manajemen <span>untuk Tim IT</span></h1>
        <div class="grid-3">
          <div class="card feat-card" style="display:flex;flex-direction:column;gap:12px;">
            <div><div class="feat-num">1</div><div class="feat-title">Beranda (Home)</div><ul class="feat-list"><li>Statistik ringkasan perusahaan, jabatan, pengguna</li><li>Log Aktivitas Admin (audit trail)</li></ul></div>
          </div>
          <div class="card feat-card" style="display:flex;flex-direction:column;gap:12px;">
            <div><div class="feat-num">2</div><div class="feat-title">Company Management</div><ul class="feat-list"><li>CRUD perusahaan, branch, departemen</li><li>Visualisasi hierarki via Vue Flow</li></ul></div>
            <img src="assets/images/OrgChartAdmin.png" alt="Company Management" style="width:100%; border-radius:8px; border:1px solid var(--border-color); margin-top:auto;">
          </div>
          <div class="card feat-card" style="display:flex;flex-direction:column;gap:12px;">
            <div><div class="feat-num">3</div><div class="feat-title">Position Management</div><ul class="feat-list"><li>CRUD jabatan struktural</li><li>Mapping jabatan → dashboard (PositionMenu)</li></ul></div>
          </div>
          <div class="card feat-card" style="display:flex;flex-direction:column;gap:12px;">
            <div><div class="feat-num">4</div><div class="feat-title">Menu Management</div><ul class="feat-list"><li>CRUD dashboard, bulk delete</li><li>Preview embed langsung dari admin panel</li></ul></div>
            <img src="assets/images/MenuManajemen.png" alt="Menu Management" style="width:100%; border-radius:8px; border:1px solid var(--border-color); margin-top:auto;">
          </div>
          <div class="card feat-card" style="display:flex;flex-direction:column;gap:12px;">
            <div><div class="feat-num">5</div><div class="feat-title">User Management</div><ul class="feat-list"><li>CRUD akun karyawan, assign jabatan</li><li>Reset password oleh admin</li></ul></div>
            <img src="assets/images/UserManajemen.png" alt="User Management" style="width:100%; border-radius:8px; border:1px solid var(--border-color); margin-top:auto;">
          </div>
          <div class="card feat-card" style="display:flex;flex-direction:column;gap:12px;">
            <div><div class="feat-num">6</div><div class="feat-title">DevExpress Repository</div><ul class="feat-list"><li>Konfigurasi &amp; test koneksi Dashboard Server</li><li>Sinkronisasi dashboard XML</li></ul></div>
            <img src="assets/images/DevExpressRepository.png" alt="DevExpress Repository" style="width:100%; border-radius:8px; border:1px solid var(--border-color); margin-top:auto;">
          </div>
        </div>
      </div>
    `;
  },
};

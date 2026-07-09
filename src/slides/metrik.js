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
        <div class="card">
          <div class="metric-row head"><span>Aspek</span><span>Sebelum BITS</span><span>Sesudah BITS</span></div>
          
          <div class="metric-row"><div class="metric-label">Platform yang perlu dibuka</div><div class="metric-before">6 platform terpisah</div><div class="metric-after">1 portal terpadu</div></div>
          
          <div class="metric-row"><div class="metric-label">Proses Login</div><div class="metric-before">Berkali-kali (tiap platform)</div><div class="metric-after">1x Login Terpusat</div></div>
          
          <div class="metric-row"><div class="metric-label">Manajemen Hak Akses</div><div class="metric-before">Diatur di masing-masing platform</div><div class="metric-after">Terpusat Berdasarkan Jabatan</div></div>
          
          <div class="metric-row"><div class="metric-label">Mode Presentasi Laporan</div><div class="metric-before">Tidak tersedia</div><div class="metric-after">Tersedia (Slideshow Otomatis)</div></div>
          
          <div class="metric-row"><div class="metric-label">Akses Perangkat Mobile</div><div class="metric-before">Terbatas (Hanya Web Desktop)</div><div class="metric-after">Aplikasi Native Android (APK)</div></div>
          
          <div class="metric-row" style="border-bottom:none;"><div class="metric-label">Struktur Navigasi Data</div><div class="metric-before">Berantakan / Tidak terstruktur</div><div class="metric-after">Dinamis (Company → Branch → Dept)</div></div>
        </div>
      </div>
    `;
  },
};

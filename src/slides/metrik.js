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
          <div class="metric-row head"><span>Aspek</span><span>Sebelum</span><span>Sesudah</span></div>
          <div class="metric-row"><div class="metric-label">Platform yang perlu dibuka</div><div class="metric-before">6 platform terpisah</div><div class="metric-after">1 portal (BITS)</div></div>
          <div class="metric-row"><div class="metric-label">Login yang diperlukan</div><div class="metric-before">Banyak (per platform)</div><div class="metric-after">1x login</div></div>
          <div class="metric-row"><div class="metric-label">Kontrol akses</div><div class="metric-before">Masing-masing platform</div><div class="metric-after">Terpusat via PositionMenu</div></div>
          <div class="metric-row"><div class="metric-label">Mode monitoring / kiosk</div><div class="metric-before">Tidak ada</div><div class="metric-after">Slideshow + Fullscreen</div></div>
          <div class="metric-row"><div class="metric-label">Akses mobile</div><div class="metric-before">Tidak ada</div><div class="metric-after">APK Android native</div></div>
          <div class="metric-row" style="border-bottom:none;"><div class="metric-label">Navigasi berbasis jabatan</div><div class="metric-before">Tidak ada</div><div class="metric-after">Sidebar dinamis Company→Branch→Dept</div></div>
        </div>
      </div>
    `;
  },
};

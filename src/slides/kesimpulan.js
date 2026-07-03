// Slide: Kesimpulan
export default {
  id: 'kesimpulan',
  title: 'Kesimpulan',
  order: 10,
  assets: [],

  render() {
    return `
      <div class="slide-inner">
        <div class="eyebrow">Kesimpulan</div>
        <h1 class="slide-title">Masalah <span>Terjawab?</span></h1>
        <div class="grid-2">
          <div class="card check-card"><div class="check-ic">✓</div><div><div class="check-title">Integrasi 6 Platform BI</div><div class="check-desc">Terselesaikan dengan komponen embed dinamis (DashboardEmbed.vue) — 6 platform BI diakses dalam satu antarmuka seragam.</div></div></div>
          <div class="card check-card"><div class="check-ic">✓</div><div><div class="check-title">Sentralisasi Akses Berbasis Jabatan</div><div class="check-desc">Terselesaikan dengan Navigation Guard, autentikasi JWT, dan sidebar dinamis berdasarkan relasi PositionMenu.</div></div></div>
          <div class="card check-card"><div class="check-ic">✓</div><div><div class="check-title">Mode Presentasi / Kiosk</div><div class="check-desc">Terselesaikan dengan halaman SlideShow.vue — preset, navigasi auto/manual, dan mode fullscreen.</div></div></div>
          <div class="card check-card"><div class="check-ic">✓</div><div><div class="check-title">Akses Mobile Android</div><div class="check-desc">Terselesaikan dengan Capacitor — codebase web Vue.js diubah menjadi APK native Android.</div></div></div>
        </div>
        <div class="quote-block">Portal BITS berhasil menggantikan akses tersebar ke 6 platform BI yang berbeda dengan satu sistem terpusat yang aman, efisien, dan fleksibel — dapat diakses melalui web browser maupun perangkat Android, dengan kontrol akses yang granular berbasis jabatan.</div>
      </div>
    `;
  },
};

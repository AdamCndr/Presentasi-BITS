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
        <h1 class="slide-title">Hasil Akhir & <span>Dampak</span></h1>
        <p class="slide-lead">Implementasi portal BITS memberikan tiga transformasi utama bagi operasional PT Tiga Serangkai Inti Corpora.</p>
        
        <div class="grid-3">
          <div class="card check-card">
            <div class="check-ic" style="color: var(--primary-color);">⏱️</div>
            <div>
              <div class="check-title">Efisiensi Operasional</div>
              <div class="check-desc">Menghilangkan proses manual dan login berulang. Pemantauan data lintas platform kini jauh lebih cepat dan terpusat.</div>
            </div>
          </div>
          
          <div class="card check-card">
            <div class="check-ic" style="color: var(--accent-primary);">🔒</div>
            <div>
              <div class="check-title">Tata Kelola & Keamanan</div>
              <div class="check-desc">Mencegah kebocoran informasi melalui sistem manajemen hak akses (RBAC) yang ketat dan tersentralisasi.</div>
            </div>
          </div>
          
          <div class="card check-card">
            <div class="check-ic" style="color: #f59e0b;">📱</div>
            <div>
              <div class="check-title">Fleksibilitas Monitoring</div>
              <div class="check-desc">Memastikan data selalu dapat diakses kapan pun dan di mana pun, baik via layar rapat (Slideshow) maupun aplikasi Android.</div>
            </div>
          </div>
        </div>
        
        <div class="quote-block" style="margin-top: 30px;">
          Secara keseluruhan, <b>Sistem BITS terbukti berhasil</b> mengubah ekosistem data yang sebelumnya tersebar menjadi satu portal cerdas yang aman, efisien, dan siap mendukung pertumbuhan bisnis Tiga Serangkai ke depannya.
        </div>
      </div>
    `;
  },
};

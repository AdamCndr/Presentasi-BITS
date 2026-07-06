// Slide: Latar Belakang
export default {
  id: 'latar-belakang',
  title: 'Latar Belakang',
  order: 2,
  assets: [],

  render() {
    return `
      <div class="slide-inner">
        <div class="eyebrow">Masalah</div>
        <h1 class="slide-title">Kondisi Sebelum <span>BITS</span></h1>
        <p class="slide-lead">PT Tiga Serangkai Inti Corpora adalah <i>holding company</i> yang menaungi unit bisnis mulai dari penerbitan, ritel (Assalam Hypermarket), distribusi, hingga pendidikan (Tiga Serangkai University &amp; Al Firdaus).</p>
        <div class="grid-2">
          <div class="card problem-card">
            <div class="problem-num">01</div>
            <div>
              <div class="problem-title">6 Platform BI Berjalan Terpisah — Power BI, Looker, Looker Studio, Metabase, Tableau, DevExpress</div>
              <div class="problem-impact"><b>Dampak:</b> Akses data menjadi tidak efisien karena karyawan harus login dan berpindah antar 6 platform berbeda secara bergantian untuk memantau laporan.</div>
            </div>
          </div>
          <div class="card problem-card">
            <div class="problem-num">02</div>
            <div>
              <div class="problem-title">Tidak Ada Sistem Portal Terpadu Dengan Kontrol Akses Berdasarkan Jabatan.</div>
              <div class="problem-impact"><b>Dampak:</b> Pengelolaan "dashboard apa untuk jabatan apa" menjadi rumit dan rentan terjadi kebocoran hak akses data (tidak sesuai kewenangan).</div>
            </div>
          </div>
          <div class="card problem-card">
            <div class="problem-num">03</div>
            <div>
              <div class="problem-title">Tidak Mendukung Mode Presentasi</div>
              <div class="problem-impact"><b>Dampak:</b> Pengguna harus membuka dan berpindah platform secara manual ketika ingin menyajikan beberapa laporan data secara berurutan.</div>
            </div>
          </div>
          <div class="card problem-card">
            <div class="problem-num">04</div>
            <div>
              <div class="problem-title">Akses Terbatas pada Perangkat Desktop</div>
              <div class="problem-impact"><b>Dampak:</b> Pengguna kehilangan fleksibilitas untuk memantau evaluasi kinerja secara <i>mobile</i> atau saat berada di lapangan.</div>
            </div>
          </div>
        </div>
        <div class="closing-line"><b>Intinya:</b> Platform BI yang tersebar menghambat efisiensi karyawan dalam memantau data, sekaligus merumitkan kontrol wewenang antar jabatan.</div>
      </div>
    `;
  },
};

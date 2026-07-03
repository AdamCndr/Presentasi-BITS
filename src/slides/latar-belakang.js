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
              <div class="problem-title">6 platform BI berjalan terpisah — Power BI, Looker, Looker Studio, Metabase, Tableau, DevExpress</div>
              <div class="problem-impact"><b>Dampak:</b> karyawan harus login &amp; berpindah antar 6 sistem berbeda hanya untuk data lintas departemen.</div>
            </div>
          </div>
          <div class="card problem-card">
            <div class="problem-num">02</div>
            <div>
              <div class="problem-title">Tidak ada kontrol akses terpusat</div>
              <div class="problem-impact"><b>Dampak:</b> pengelolaan "siapa boleh lihat dashboard apa" bergantung tiap platform, tidak konsisten.</div>
            </div>
          </div>
          <div class="card problem-card">
            <div class="problem-num">03</div>
            <div>
              <div class="problem-title">Tidak ada mode presentasi / kiosk terpusat</div>
              <div class="problem-impact"><b>Dampak:</b> monitoring real-time di layar publik tidak bisa dilakukan dari satu titik.</div>
            </div>
          </div>
          <div class="card problem-card">
            <div class="problem-num">04</div>
            <div>
              <div class="problem-title">Akses hanya via browser desktop</div>
              <div class="problem-impact"><b>Dampak:</b> manajemen tidak bisa memantau data dari perangkat mobile.</div>
            </div>
          </div>
        </div>
        <div class="closing-line"><b>Intinya:</b> data analytics yang harusnya mempercepat keputusan, justru menimbulkan overhead karena tersebar di mana-mana.</div>
      </div>
    `;
  },
};

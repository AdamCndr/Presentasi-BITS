// Slide: Latar Belakang
export default {
  id: 'latar-belakang',
  title: 'Latar Belakang',
  order: 2,
  assets: [],

  render() {
    return `
      <div class="slide-inner latar-slide-wrapper" data-active="0">
        <div class="eyebrow">Masalah</div>
        <h1 class="slide-title">Kondisi Sebelum <span>BITS</span></h1>
        <p class="slide-lead">PT Tiga Serangkai Inti Corpora adalah <i>holding company</i> yang menaungi unit bisnis mulai dari penerbitan, ritel (Assalam Hypermarket), distribusi, hingga pendidikan (Tiga Serangkai University &amp; Al Firdaus).</p>
        <div class="grid-2">
          <div class="card problem-card" data-id="1">
            <div class="problem-num">01</div>
            <div>
              <div class="problem-title">6 Platform BI Berjalan Terpisah — Power BI, Looker, Looker Studio, Metabase, Tableau, DevExpress</div>
              <div class="problem-impact"><b>Dampak:</b> Akses data menjadi tidak efisien karena karyawan harus login dan berpindah antar 6 platform berbeda secara bergantian untuk memantau laporan.</div>
            </div>
          </div>
          <div class="card problem-card" data-id="2">
            <div class="problem-num">02</div>
            <div>
              <div class="problem-title">Tidak Ada Sistem Portal Terpadu Dengan Kontrol Akses Berdasarkan Jabatan.</div>
              <div class="problem-impact"><b>Dampak:</b> Pengelolaan "dashboard apa untuk jabatan apa" menjadi rumit dan rentan terjadi kebocoran hak akses data (tidak sesuai kewenangan).</div>
            </div>
          </div>
          <div class="card problem-card" data-id="3">
            <div class="problem-num">03</div>
            <div>
              <div class="problem-title">Tidak Mendukung Mode Presentasi</div>
              <div class="problem-impact"><b>Dampak:</b> Pengguna harus membuka dan berpindah platform secara manual ketika ingin menyajikan beberapa laporan data secara berurutan.</div>
            </div>
          </div>
          <div class="card problem-card" data-id="4">
            <div class="problem-num">04</div>
            <div>
              <div class="problem-title">Akses Terbatas pada Perangkat Desktop</div>
              <div class="problem-impact"><b>Dampak:</b> Pengguna kehilangan fleksibilitas untuk memantau evaluasi kinerja secara <i>mobile</i> atau saat berada di lapangan.</div>
            </div>
          </div>
        </div>
        <div class="closing-line"><b>Intinya:</b> Platform BI yang tersebar menghambat efisiensi karyawan dalam memantau data, sekaligus merumitkan kontrol wewenang antar jabatan.</div>
        
        <style>
          /* ── OPENING ANIMATIONS ── */
          @keyframes fadeUpBlur {
            from { opacity: 0; transform: translateY(24px); filter: blur(8px); }
            to   { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes cardIn {
            from { opacity: 0; transform: translateY(30px) scale(0.95); filter: blur(10px); }
            to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
          @keyframes closingIn {
            from { opacity: 0; transform: scaleX(0.9); filter: blur(5px); }
            to   { opacity: 1; transform: scaleX(1); filter: blur(0); }
          }

          /* STAGGERED ENTRANCE */
          .slide[data-id="latar-belakang"].active .eyebrow {
            animation: fadeUpBlur 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
          }
          .slide[data-id="latar-belakang"].active h1.slide-title {
            animation: fadeUpBlur 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }
          .slide[data-id="latar-belakang"].active .slide-lead {
            animation: fadeUpBlur 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
          }
          .slide[data-id="latar-belakang"].active .grid-2 .problem-card:nth-child(1) {
            animation: cardIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
          }
          .slide[data-id="latar-belakang"].active .grid-2 .problem-card:nth-child(2) {
            animation: cardIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
          }
          .slide[data-id="latar-belakang"].active .grid-2 .problem-card:nth-child(3) {
            animation: cardIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
          }
          .slide[data-id="latar-belakang"].active .grid-2 .problem-card:nth-child(4) {
            animation: cardIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both;
          }
          .slide[data-id="latar-belakang"].active .closing-line {
            animation: closingIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both;
          }

          /* ── IDLE & HOVER ANIMATIONS ── */
          .slide[data-id="latar-belakang"] .problem-card {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            z-index: 1;
          }
          .slide[data-id="latar-belakang"] .problem-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(13, 148, 136, 0.15), 0 0 0 1px rgba(13, 148, 136, 0.2);
            z-index: 2;
          }
          .slide[data-id="latar-belakang"] .problem-card:hover .problem-num {
            background: var(--primary-color);
            color: #fff;
            transform: scale(1.1) rotate(-5deg);
            box-shadow: 0 8px 20px rgba(13, 148, 136, 0.4);
          }
          .slide[data-id="latar-belakang"] .problem-num {
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          /* HOTKEY ACTIVE STATES */
          .latar-slide-wrapper {
            transition: all 0.3s ease;
          }
          .latar-slide-wrapper:not([data-active="0"]) .problem-card {
            opacity: 0.4;
            transform: scale(0.95);
            filter: grayscale(80%);
            box-shadow: none;
            border-color: var(--border-color);
          }
          .latar-slide-wrapper[data-active="1"] .problem-card[data-id="1"],
          .latar-slide-wrapper[data-active="2"] .problem-card[data-id="2"],
          .latar-slide-wrapper[data-active="3"] .problem-card[data-id="3"],
          .latar-slide-wrapper[data-active="4"] .problem-card[data-id="4"] {
            opacity: 1;
            transform: translateY(-8px) scale(1.05);
            filter: grayscale(0%);
            box-shadow: 0 20px 40px rgba(13, 148, 136, 0.15), 0 0 0 2px var(--primary-color);
            z-index: 2;
          }
          .latar-slide-wrapper[data-active="1"] .problem-card[data-id="1"] .problem-num,
          .latar-slide-wrapper[data-active="2"] .problem-card[data-id="2"] .problem-num,
          .latar-slide-wrapper[data-active="3"] .problem-card[data-id="3"] .problem-num,
          .latar-slide-wrapper[data-active="4"] .problem-card[data-id="4"] .problem-num {
            background: var(--primary-color);
            color: #fff;
            transform: scale(1.1) rotate(-5deg);
            box-shadow: 0 8px 20px rgba(13, 148, 136, 0.4);
          }
        </style>
      </div>
    `;
  },
};

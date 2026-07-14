// Slide: Frontend Admin
export default {
  id: 'admin',
  title: 'Frontend Admin',
  order: 6,
  assets: [
    'assets/images/Admin-Home.png',
    'assets/images/Admin-Company.png',
    'assets/images/Admin-OrgChart.png',
    'assets/images/Admin-Position.png',
    'assets/images/Admin-User.png',
    'assets/images/Admin-Menu.png',
    'assets/images/DevExpressRepository.png',
  ],

  render() {
    return `
      <div class="slide-inner admin-slide-wrapper" id="adminSlideWrapper" data-active="1">
        <div class="admin-content-layout">
          
          <!-- Area Kiri: Judul & List Fitur -->
          <div class="admin-left-panel">
            <div class="eyebrow">Frontend Admin</div>
            <h1 class="slide-title" style="margin-bottom: 24px; font-size: 2.2rem; line-height: 1.2;">7 Halaman Manajemen <br><span>untuk Tim IT</span></h1>
            
            <div class="admin-cards-list">
              <div class="card feat-card admin-feature-card" data-id="1" onclick="document.getElementById('adminSlideWrapper').dataset.active = '1'">
                <div class="feat-num">1</div><div class="feat-title">Beranda (Home)</div>
              </div>
              <div class="card feat-card admin-feature-card" data-id="2" onclick="document.getElementById('adminSlideWrapper').dataset.active = '2'">
                <div class="feat-num">2</div><div class="feat-title">Company Management</div>
              </div>
              <div class="card feat-card admin-feature-card" data-id="3" onclick="document.getElementById('adminSlideWrapper').dataset.active = '3'">
                <div class="feat-num">3</div><div class="feat-title">Org Chart</div>
              </div>
              <div class="card feat-card admin-feature-card" data-id="4" onclick="document.getElementById('adminSlideWrapper').dataset.active = '4'">
                <div class="feat-num">4</div><div class="feat-title">Position Management</div>
              </div>
              <div class="card feat-card admin-feature-card" data-id="5" onclick="document.getElementById('adminSlideWrapper').dataset.active = '5'">
                <div class="feat-num">5</div><div class="feat-title">User Management</div>
              </div>
              <div class="card feat-card admin-feature-card" data-id="6" onclick="document.getElementById('adminSlideWrapper').dataset.active = '6'">
                <div class="feat-num">6</div><div class="feat-title">Menu Management</div>
              </div>
              <div class="card feat-card admin-feature-card" data-id="7" onclick="document.getElementById('adminSlideWrapper').dataset.active = '7'">
                <div class="feat-num">7</div><div class="feat-title">DevExpress Repository</div>
              </div>
            </div>
          </div>

          <!-- Area Kanan: Penjelasan & Gambar -->
          <div class="admin-details-area">
            <div class="admin-detail" data-id="1">
              <ul class="feat-list">
                <li>Melihat ringkasan total perusahaan, jabatan, dan pengguna terdaftar</li>
                <li>Memantau rekam jejak (log aktivitas) apa saja yang dilakukan oleh tim Admin</li>
              </ul>
              <img src="assets/images/Admin-Home.png" alt="Beranda">
            </div>
            <div class="admin-detail" data-id="2">
              <ul class="feat-list">
                <li>Menambah, mengubah, atau menghapus data Campany, Branch, dan Departemen</li>
                <li>Mengatur status aktif/nonaktif suatu entitas bisnis dengan mudah</li>
              </ul>
              <img src="assets/images/Admin-Company.png" alt="Company Management">
            </div>
            <div class="admin-detail" data-id="3">
              <ul class="feat-list">
                <li>Menampilkan struktur organisasi secara visual (berbentuk bagan)</li>
                <li>Memudahkan pengaturan ulang struktur hanya dengan menggeser (drag & drop)</li>
              </ul>
              <img src="assets/images/Admin-OrgChart.png" alt="Org Chart">
            </div>
            <div class="admin-detail" data-id="4">
              <ul class="feat-list">
                <li>Menambah, mengubah, dan menonaktifkan data jabatan secara terpusat</li>
                <li>Memetakan posisi setiap jabatan secara akurat ke dalam hierarki perusahaan</li>
              </ul>
              <img src="assets/images/Admin-Position.png" alt="Position Management">
            </div>
            <div class="admin-detail" data-id="5">
              <ul class="feat-list">
                <li>Membuat akun pengguna dan menugaskannya ke satu atau beberapa jabatan sekaligus</li>
                <li>Membantu melakukan reset password jika pengguna lupa kata sandi</li>
              </ul>
              <img src="assets/images/Admin-User.png" alt="User Management">
            </div>
            <div class="admin-detail" data-id="6">
              <ul class="feat-list">
                <li>Mengatur daftar dashboard yang tampil di portal dan menentukan jabatan apa saja yang boleh mengaksesnya</li>
                <li>Melihat cuplikan (preview) langsung tampilan dashboard sebelum dipublikasikan</li>
              </ul>
              <img src="assets/images/Admin-Menu.png" alt="Menu Management">
            </div>
            <div class="admin-detail" data-id="7">
              <ul class="feat-list">
                <li>Pusat pengaturan sumber data untuk laporan DevExpress</li>
                <li>Mengambil daftar dashboard beserta file XML-nya melalui proses sinkronisasi</li>
              </ul>
              <img src="assets/images/DevExpressRepository.png" alt="DevExpress Repository">
            </div>
          </div>
        </div>
        
        <style>
          .admin-slide-wrapper {
            position: relative;
            width: 100%;
            height: auto;
            min-height: 100%;
            display: flex;
            flex-direction: column;
            max-width: 1400px !important; /* Agar lebih lebar dari default 1120px */
            padding-left: 0 !important; /* Pojokkan ke kiri */
          }
          .admin-content-layout {
            display: flex;
            flex: 1;
            gap: 2%; /* Gap 2% */
            margin-top: 0;
            min-height: 0;
            width: 100%;
            align-items: flex-start; /* Agar child (terutama area kanan) tingginya menyesuaikan isi */
            transition: all 0.5s ease;
          }
          
          .admin-left-panel {
            display: flex;
            flex-direction: column;
            width: 100%;
            transition: all 0.5s ease;
          }

          /* State 0 (Awal) - Grid Penuh */
          .admin-cards-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            width: 100%;
            align-content: start;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          /* Card untuk State 0 */
          .admin-slide-wrapper[data-active="0"] .admin-cards-list .admin-feature-card:nth-child(7) {
            grid-column: 1 / -1;
            max-width: 400px;
            margin: 0 auto;
          }

          .admin-feature-card {
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            transition: all 0.3s;
            border: 1px solid var(--border-color);
            background: var(--bg-card);
            border-radius: 12px;
          }
          .admin-feature-card:hover {
            transform: translateY(-4px);
            box-shadow: none;
            border-color: var(--primary-color);
          }
          
          /* Override margin dari global CSS agar align-items center bekerja sempurna */
          .admin-feature-card .feat-num {
            margin-bottom: 0 !important;
            flex-shrink: 0;
          }
          .admin-feature-card .feat-title {
            margin-bottom: 0 !important;
            line-height: 1.2;
          }
          
          .admin-details-area {
            flex: 1;
            position: relative;
            display: none;
            opacity: 0;
            transition: opacity 0.5s ease;
            background: var(--bg-card);
            border-radius: 16px;
            border: 1px solid var(--border-color);
            overflow: hidden;
            height: auto; /* Dinamis */
          }

          /* State > 0 (Ada yang dipilih) */
          .admin-slide-wrapper:not([data-active="0"]) .admin-left-panel {
            flex: 0 0 28%; /* Kiri sekitar 28% */
            max-width: 28%;
            position: sticky;
            top: 24px; /* Agar kiri bisa sticky jika kanan panjang */
          }
          .admin-slide-wrapper:not([data-active="0"]) .admin-details-area {
            flex: 0 0 70%; /* Detail area 70% */
            max-width: 70%;
          }

          .admin-slide-wrapper:not([data-active="0"]) .admin-cards-list {
            grid-template-columns: 1fr;
            width: 100%;
            overflow-y: visible; /* Tidak perlu scroll internal jika halaman bisa discroll */
            overflow-x: visible;
            padding: 8px 8px 24px 8px; /* Padding agar shadow dan hover tidak kepotong */
            margin: -8px -8px 0 -8px; /* Offset padding agar posisi tetap sejajar */
            flex: 1;
            min-height: 0;
          }
          .admin-slide-wrapper:not([data-active="0"]) .admin-cards-list .admin-feature-card:nth-child(7) {
            grid-column: auto;
            max-width: 100%;
            margin: 0;
          }
          .admin-slide-wrapper:not([data-active="0"]) .admin-details-area {
            display: flex;
            opacity: 1;
            box-shadow: 0 12px 32px rgba(0,0,0,0.05);
          }

          .admin-detail {
            padding: 24px;
            display: none;
            flex-direction: column;
            gap: 12px;
            opacity: 0;
            width: 100%;
            height: auto;
          }
          
          /* Tampilkan detail yang sesuai data-active */
          .admin-slide-wrapper[data-active="1"] .admin-detail[data-id="1"],
          .admin-slide-wrapper[data-active="2"] .admin-detail[data-id="2"],
          .admin-slide-wrapper[data-active="3"] .admin-detail[data-id="3"],
          .admin-slide-wrapper[data-active="4"] .admin-detail[data-id="4"],
          .admin-slide-wrapper[data-active="5"] .admin-detail[data-id="5"],
          .admin-slide-wrapper[data-active="6"] .admin-detail[data-id="6"],
          .admin-slide-wrapper[data-active="7"] .admin-detail[data-id="7"] {
            display: flex;
            opacity: 1;
            z-index: 2;
          }

          /* Style card aktif di list */
          .admin-slide-wrapper[data-active="1"] .admin-feature-card[data-id="1"],
          .admin-slide-wrapper[data-active="2"] .admin-feature-card[data-id="2"],
          .admin-slide-wrapper[data-active="3"] .admin-feature-card[data-id="3"],
          .admin-slide-wrapper[data-active="4"] .admin-feature-card[data-id="4"],
          .admin-slide-wrapper[data-active="5"] .admin-feature-card[data-id="5"],
          .admin-slide-wrapper[data-active="6"] .admin-feature-card[data-id="6"],
          .admin-slide-wrapper[data-active="7"] .admin-feature-card[data-id="7"] {
            border-color: var(--primary-color);
            background: var(--primary-color);
            color: #ffffff;
            box-shadow: none;
            transform: none;
          }
          
          .admin-slide-wrapper[data-active="1"] .admin-feature-card[data-id="1"] .feat-title,
          .admin-slide-wrapper[data-active="2"] .admin-feature-card[data-id="2"] .feat-title,
          .admin-slide-wrapper[data-active="3"] .admin-feature-card[data-id="3"] .feat-title,
          .admin-slide-wrapper[data-active="4"] .admin-feature-card[data-id="4"] .feat-title,
          .admin-slide-wrapper[data-active="5"] .admin-feature-card[data-id="5"] .feat-title,
          .admin-slide-wrapper[data-active="6"] .admin-feature-card[data-id="6"] .feat-title,
          .admin-slide-wrapper[data-active="7"] .admin-feature-card[data-id="7"] .feat-title {
            color: #ffffff !important;
          }
          
          .admin-slide-wrapper[data-active="1"] .admin-feature-card[data-id="1"] .feat-num,
          .admin-slide-wrapper[data-active="2"] .admin-feature-card[data-id="2"] .feat-num,
          .admin-slide-wrapper[data-active="3"] .admin-feature-card[data-id="3"] .feat-num,
          .admin-slide-wrapper[data-active="4"] .admin-feature-card[data-id="4"] .feat-num,
          .admin-slide-wrapper[data-active="5"] .admin-feature-card[data-id="5"] .feat-num,
          .admin-slide-wrapper[data-active="6"] .admin-feature-card[data-id="6"] .feat-num,
          .admin-slide-wrapper[data-active="7"] .admin-feature-card[data-id="7"] .feat-num {
            background: rgba(255, 255, 255, 0.2);
            color: #ffffff;
          }
          
          .admin-detail img {
            width: 100%;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            margin-top: 8px;
            object-fit: contain;
            object-position: top;
            max-height: 550px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.05);
          }
          
          .admin-detail .feat-list {
            margin-bottom: 8px;
          }
          .admin-detail .feat-list li {
            font-size: 1.05rem;
            color: var(--text-secondary);
            margin-bottom: 4px;
          }
          /* ── ADMIN PREMIUM ANIMATIONS ── */

          /* Keyframes */
          @keyframes adminPanelIn {
            from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
            to   { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes adminDetailIn {
            from { opacity: 0; transform: translateY(50px) scale(0.96); filter: blur(12px); }
            to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
          @keyframes adminCardStagger {
            from { opacity: 0; transform: perspective(1000px) rotateX(15deg) translateY(24px); filter: blur(8px); }
            to   { opacity: 1; transform: perspective(1000px) rotateX(0deg) translateY(0); filter: blur(0); }
          }
          @keyframes adminTitleIn {
            from { opacity: 0; transform: translateY(-20px); filter: blur(8px); }
            to   { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes adminBorderPulse {
            0%, 100% { border-color: var(--border-color); }
            50%       { border-color: rgba(13,148,136,0.3); }
          }
          @keyframes adminGlowPulse {
            0%, 100% { box-shadow: 0 12px 32px rgba(0,0,0,0.03); }
            50%       { box-shadow: 0 24px 56px rgba(13,148,136,0.12), 0 0 0 1px rgba(13,148,136,0.05); }
          }

          /* ── OPENING: dipicu oleh .slide[data-id="admin"].active ── */
          .slide[data-id="admin"].active .eyebrow {
            animation: adminTitleIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
          }
          .slide[data-id="admin"].active h1.slide-title {
            animation: adminTitleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }
          .slide[data-id="admin"].active .admin-left-panel {
            animation: adminPanelIn 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
          }
          .slide[data-id="admin"].active .admin-details-area {
            animation: adminDetailIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
          }
          .slide[data-id="admin"].active .admin-cards-list .admin-feature-card:nth-child(1) { animation: adminCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
          .slide[data-id="admin"].active .admin-cards-list .admin-feature-card:nth-child(2) { animation: adminCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
          .slide[data-id="admin"].active .admin-cards-list .admin-feature-card:nth-child(3) { animation: adminCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.45s both; }
          .slide[data-id="admin"].active .admin-cards-list .admin-feature-card:nth-child(4) { animation: adminCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
          .slide[data-id="admin"].active .admin-cards-list .admin-feature-card:nth-child(5) { animation: adminCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.65s both; }
          .slide[data-id="admin"].active .admin-cards-list .admin-feature-card:nth-child(6) { animation: adminCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.75s both; }
          .slide[data-id="admin"].active .admin-cards-list .admin-feature-card:nth-child(7) { animation: adminCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.85s both; }

          /* ── IDLE: berjalan terus saat slide aktif ── */
          .slide[data-id="admin"].active .admin-details-area {
            animation: adminDetailIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both,
                       adminGlowPulse 6s ease-in-out 1.5s infinite;
          }
          .slide[data-id="admin"].active .admin-slide-wrapper:not([data-active="0"]) .admin-details-area {
            animation: adminDetailIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both,
                       adminBorderPulse 6s ease-in-out 1.5s infinite;
          }
        </style>
      </div>
    `;
  },
};

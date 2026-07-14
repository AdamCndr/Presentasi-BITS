// Slide: Frontend User
export default {
  id: 'user',
  title: 'Frontend User',
  order: 7,
  assets: [
    'assets/images/User-Home.png',
    'assets/images/User-DashboardHub.png',
    'assets/images/User-Dashboard.png',
    'assets/images/User-Slideshow.png',
    'assets/images/User-Profile.png',
  ],

  render() {
    return `
      <div class="slide-inner user-slide-wrapper" id="userSlideWrapper" data-active="1">
        <div class="user-content-layout">
          
          <!-- Area Kiri: Judul & List Fitur -->
          <div class="user-left-panel">
            <div class="eyebrow">Frontend User</div>
            <h1 class="slide-title" style="margin-bottom: 24px; font-size: 2.2rem; line-height: 1.2;">Portal Utama <br><span>Akses Dashboard</span></h1>
            
            <div class="user-cards-list">
              <div class="card feat-card user-feature-card" data-id="1" onclick="document.getElementById('userSlideWrapper').dataset.active = '1'">
                <div class="feat-num">1</div><div class="feat-title">Halaman Beranda</div>
              </div>
              <div class="card feat-card user-feature-card" data-id="2" onclick="document.getElementById('userSlideWrapper').dataset.active = '2'">
                <div class="feat-num">2</div><div class="feat-title">Dashboard Hub</div>
              </div>
              <div class="card feat-card user-feature-card" data-id="3" onclick="document.getElementById('userSlideWrapper').dataset.active = '3'">
                <div class="feat-num">3</div><div class="feat-title">Dashboard Preview</div>
              </div>
              <div class="card feat-card user-feature-card" data-id="4" onclick="document.getElementById('userSlideWrapper').dataset.active = '4'">
                <div class="feat-num">4</div><div class="feat-title">Mode Slideshow</div>
              </div>
              <div class="card feat-card user-feature-card" data-id="5" onclick="document.getElementById('userSlideWrapper').dataset.active = '5'">
                <div class="feat-num">5</div><div class="feat-title">Halaman Profil</div>
              </div>
              <div class="card feat-card user-feature-card" data-id="6" onclick="document.getElementById('userSlideWrapper').dataset.active = '6'">
                <div class="feat-num">6</div><div class="feat-title">Platform Integrasi</div>
              </div>
            </div>
          </div>

          <!-- Area Kanan: Penjelasan & Gambar -->
                    <!-- Area Kanan: Penjelasan & Gambar -->
          <div class="user-details-area">
            
            <div class="user-detail" data-id="1">
              <ul class="feat-list">
                <li>Menampilkan ringkasan hak akses pengguna berupa total keseluruhan dashboard yang dapat diakses, jumlah penempatan jabatan, dan ragam platform yang aktif</li>
                <li>Menyajikan <strong>Platform Insight</strong> yang mengedukasi pengguna tentang karakteristik tiap-tiap platform BI beserta kartu profil ringkas</li>
              </ul>
              <img src="assets/images/User-Home.png" alt="Beranda">
            </div>
            
            <div class="user-detail" data-id="2">
              <ul class="feat-list">
                <li>Memetakan posisi setiap dashboard secara rapi ke dalam struktur hierarki (Company → Branch → Departemen) agar pengguna paham konteks laporan tersebut</li>
                <li>Dilengkapi fitur pencarian dan filter interaktif untuk mempermudah navigasi eksplorasi laporan di lingkungan perusahaan berskala besar</li>
              </ul>
              <img src="assets/images/User-DashboardHub.png" alt="Dashboard Hub">
            </div>
            
            <div class="user-detail" data-id="3">
              <ul class="feat-list">
                <li>Merender laporan langsung di dalam portal melalui sistem embed dinamis, memberikan pengalaman yang terpadu tanpa perlu pindah aplikasi</li>
                <li>Pengguna dapat berinteraksi dengan laporan sama seperti di platform aslinya</li>
              </ul>
              <img src="assets/images/User-Dashboard.png" alt="Dashboard Preview">
            </div>
            
            <div class="user-detail" data-id="4">
              <ul class="feat-list">
                <li>Memutar presentasi gabungan laporan dari berbagai platform berbeda secara otomatis dalam mode layar penuh (fullscreen)</li>
                <li>Menyediakan fitur pembuatan <strong>Preset</strong> pribadi, di mana pengguna bisa mengatur urutan kemunculan dashboard lengkap dengan durasi rotasinya (misal: tiap 30 detik)</li>
              </ul>
              <img src="assets/images/User-Slideshow.png" alt="Slideshow">
            </div>
            
            <div class="user-detail" data-id="5">
              <ul class="feat-list">
                <li>Menampilkan informasi terpusat mencakup data diri, role sistem, dan daftar seluruh penugasan multi-jabatan yang diemban pengguna</li>
              </ul>
              <img src="assets/images/User-Profile.png" alt="Profil">
            </div>
            
            <div class="user-detail" data-id="6">
              <ul class="feat-list">
                <li>Mendukung 6 platform Business Intelligence terkemuka dunia yang disatukan secara mulus di bawah satu payung antarmuka</li>
                <li>Menggunakan pendekatan integrasi khusus yang disesuaikan dengan infrastruktur keamanan masing-masing platform BI</li>
              </ul>
              <div class="card" style="padding:0; overflow:hidden; flex-shrink: 0;">
                <table class="tbl" style="margin: 0; font-size: 0.9em; width: 100%;">
                  <thead><tr><th style="padding: 12px;">Platform</th><th style="padding: 12px;">Metode Integrasi</th></tr></thead>
                  <tbody>
                    <tr><td style="padding: 8px 12px;"><b>Microsoft Power BI</b></td><td style="padding: 8px 12px;">SDK powerbi-client (menggunakan Access Token dari backend)</td></tr>
                    <tr><td style="padding: 8px 12px;"><b>Google Looker</b></td><td style="padding: 8px 12px;">Iframe Embed Dinamis</td></tr>
                    <tr><td style="padding: 8px 12px;"><b>Looker Studio</b></td><td style="padding: 8px 12px;">Iframe Embed Dinamis</td></tr>
                    <tr><td style="padding: 8px 12px;"><b>Metabase</b></td><td style="padding: 8px 12px;">Iframe Embed Dinamis</td></tr>
                    <tr><td style="padding: 8px 12px;"><b>Tableau</b></td><td style="padding: 8px 12px;">Tableau Embedding API v3 (Web Component)</td></tr>
                    <tr><td style="padding: 8px 12px;"><b>DevExpress</b></td><td style="padding: 8px 12px;">Reverse Proxy Backend → Dashboard Server ASP.NET</td></tr>
                  </tbody>
                </table>
              </div>  
            </div>
            
          </div>
        
        </div>
        
        <style>
          .user-slide-wrapper {
            position: relative;
            width: 100%;
            height: auto;
            min-height: 100%;
            display: flex;
            flex-direction: column;
            max-width: 1400px !important;
            padding-left: 0 !important;
          }
          .user-content-layout {
            display: flex;
            flex: 1;
            gap: 2%;
            margin-top: 0;
            min-height: 0;
            width: 100%;
            align-items: flex-start; /* Agar tinggi mengikuti isi, bukan stretch */
            transition: all 0.5s ease;
          }
          
          .user-left-panel {
            display: flex;
            flex-direction: column;
            width: 100%;
            transition: all 0.5s ease;
          }

          .user-feature-card {
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
          .user-feature-card:hover {
            transform: translateY(-4px);
            box-shadow: none;
            border-color: var(--primary-color);
          }
          
          .user-feature-card .feat-num {
            margin-bottom: 0 !important;
            flex-shrink: 0;
          }
          .user-feature-card .feat-title {
            margin-bottom: 0 !important;
            line-height: 1.2;
          }
          
          .user-details-area {
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

          .user-slide-wrapper:not([data-active="0"]) .user-left-panel {
            flex: 0 0 28%;
            max-width: 28%;
            position: sticky;
            top: 24px; /* Left panel sticky saat scroll */
          }
          .user-slide-wrapper:not([data-active="0"]) .user-details-area {
            flex: 0 0 70%;
            max-width: 70%;
          }

          .user-slide-wrapper:not([data-active="0"]) .user-cards-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
            overflow-y: visible;
            overflow-x: visible;
            padding: 8px 8px 24px 8px;
            margin: -8px -8px 0 -8px;
            flex: 1;
            min-height: 0;
          }
          .user-slide-wrapper:not([data-active="0"]) .user-details-area {
            display: flex;
            opacity: 1;
            box-shadow: 0 12px 32px rgba(0,0,0,0.05);
          }

          .user-detail {
            padding: 24px;
            display: none;
            flex-direction: column;
            gap: 12px;
            opacity: 0;
            width: 100%;
            height: auto;
          }
          
          .user-slide-wrapper[data-active="1"] .user-detail[data-id="1"],
          .user-slide-wrapper[data-active="2"] .user-detail[data-id="2"],
          .user-slide-wrapper[data-active="3"] .user-detail[data-id="3"],
          .user-slide-wrapper[data-active="4"] .user-detail[data-id="4"],
          .user-slide-wrapper[data-active="5"] .user-detail[data-id="5"],
          .user-slide-wrapper[data-active="6"] .user-detail[data-id="6"] {
            display: flex;
            opacity: 1;
            z-index: 2;
          }

          .user-slide-wrapper[data-active="1"] .user-feature-card[data-id="1"],
          .user-slide-wrapper[data-active="2"] .user-feature-card[data-id="2"],
          .user-slide-wrapper[data-active="3"] .user-feature-card[data-id="3"],
          .user-slide-wrapper[data-active="4"] .user-feature-card[data-id="4"],
          .user-slide-wrapper[data-active="5"] .user-feature-card[data-id="5"],
          .user-slide-wrapper[data-active="6"] .user-feature-card[data-id="6"] {
            border-color: var(--primary-color);
            background: var(--primary-color);
            color: #ffffff;
            box-shadow: none;
            transform: none;
          }
          
          .user-slide-wrapper[data-active="1"] .user-feature-card[data-id="1"] .feat-title,
          .user-slide-wrapper[data-active="2"] .user-feature-card[data-id="2"] .feat-title,
          .user-slide-wrapper[data-active="3"] .user-feature-card[data-id="3"] .feat-title,
          .user-slide-wrapper[data-active="4"] .user-feature-card[data-id="4"] .feat-title,
          .user-slide-wrapper[data-active="5"] .user-feature-card[data-id="5"] .feat-title,
          .user-slide-wrapper[data-active="6"] .user-feature-card[data-id="6"] .feat-title {
            color: #ffffff !important;
          }
          
          .user-slide-wrapper[data-active="1"] .user-feature-card[data-id="1"] .feat-num,
          .user-slide-wrapper[data-active="2"] .user-feature-card[data-id="2"] .feat-num,
          .user-slide-wrapper[data-active="3"] .user-feature-card[data-id="3"] .feat-num,
          .user-slide-wrapper[data-active="4"] .user-feature-card[data-id="4"] .feat-num,
          .user-slide-wrapper[data-active="5"] .user-feature-card[data-id="5"] .feat-num,
          .user-slide-wrapper[data-active="6"] .user-feature-card[data-id="6"] .feat-num {
            background: rgba(255, 255, 255, 0.2);
            color: #ffffff;
          }
          
          .user-detail img {
            width: 100%;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            margin-top: 8px;
            object-fit: contain;
            object-position: top;
            max-height: 550px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.05);
          }
          
          .user-detail .feat-list {
            margin-bottom: 8px;
          }
          .user-detail .feat-list li {
            font-size: 1.05rem;
            color: var(--text-secondary);
            margin-bottom: 4px;
          }
          /* ── USER PREMIUM ANIMATIONS ── */

          /* Keyframes */
          @keyframes userPanelIn {
            from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
            to   { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes userDetailIn {
            from { opacity: 0; transform: translateY(50px) scale(0.96); filter: blur(12px); }
            to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
          @keyframes userCardStagger {
            from { opacity: 0; transform: perspective(1000px) rotateX(15deg) translateY(24px); filter: blur(8px); }
            to   { opacity: 1; transform: perspective(1000px) rotateX(0deg) translateY(0); filter: blur(0); }
          }
          @keyframes userTitleIn {
            from { opacity: 0; transform: translateY(-20px); filter: blur(8px); }
            to   { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes userBorderPulse {
            0%, 100% { border-color: var(--border-color); }
            50%       { border-color: rgba(13,148,136,0.3); }
          }
          @keyframes userGlowPulse {
            0%, 100% { box-shadow: 0 12px 32px rgba(0,0,0,0.03); }
            50%       { box-shadow: 0 24px 56px rgba(13,148,136,0.12), 0 0 0 1px rgba(13,148,136,0.05); }
          }

          /* ── OPENING: dipicu oleh .slide[data-id="user"].active ── */
          .slide[data-id="user"].active .eyebrow {
            animation: userTitleIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
          }
          .slide[data-id="user"].active h1.slide-title {
            animation: userTitleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }
          .slide[data-id="user"].active .user-left-panel {
            animation: userPanelIn 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
          }
          .slide[data-id="user"].active .user-details-area {
            animation: userDetailIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
          }
          .slide[data-id="user"].active .user-cards-list .user-feature-card:nth-child(1) { animation: userCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
          .slide[data-id="user"].active .user-cards-list .user-feature-card:nth-child(2) { animation: userCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
          .slide[data-id="user"].active .user-cards-list .user-feature-card:nth-child(3) { animation: userCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.45s both; }
          .slide[data-id="user"].active .user-cards-list .user-feature-card:nth-child(4) { animation: userCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
          .slide[data-id="user"].active .user-cards-list .user-feature-card:nth-child(5) { animation: userCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.65s both; }
          .slide[data-id="user"].active .user-cards-list .user-feature-card:nth-child(6) { animation: userCardStagger 1.1s cubic-bezier(0.16,1,0.3,1) 0.75s both; }

          /* ── IDLE: berjalan terus saat slide aktif ── */
          .slide[data-id="user"].active .user-details-area {
            animation: userDetailIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both,
                       userGlowPulse 6s ease-in-out 1.5s infinite;
          }
          .slide[data-id="user"].active .user-slide-wrapper:not([data-active="0"]) .user-details-area {
            animation: userDetailIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both,
                       userBorderPulse 6s ease-in-out 1.5s infinite;
          }
        </style>
      </div>
    `;
  },
};


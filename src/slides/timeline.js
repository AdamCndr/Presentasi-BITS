// Slide: Timeline
export default {
  id: 'timeline',
  title: 'Timeline',
  order: 9,
  assets: [],

  render() {
    return `
      <div class="slide-inner timeline-slide-wrapper" data-active="0">
        <div class="eyebrow">Proses Pengerjaan</div>
        <h1 class="slide-title">Alur Kerja <span>Tim</span></h1>

        <div class="timeline-infographic">
          <div class="tl-nodes-row">

            <!-- Node 1 (Feb) -->
            <div class="tl-node" data-id="1" style="--c: #64748b;">
              <div class="tl-node-top">
                <div class="tl-n-month">Februari</div>
                <div class="tl-n-phase">Orientasi & Persiapan</div>
                <div class="tl-n-icon-circle">1</div>
                <div class="tl-n-line"></div>
              </div>
              <div class="tl-arrow-segment" style="--c: #64748b;"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom"></div>
            </div>

            <!-- Node 2 (Mar) -->
            <div class="tl-node" data-id="2" style="--c: var(--primary-color);">
              <div class="tl-node-top">
                <div class="tl-n-month">Maret</div>
                <div class="tl-n-phase">Arsitektur & Core System</div>
                <div class="tl-n-icon-circle">2</div>
                <div class="tl-n-line"></div>
              </div>
              <div class="tl-arrow-segment" style="--c: var(--primary-color);"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom"></div>
            </div>

            <!-- Node 3 (Apr) -->
            <div class="tl-node" data-id="3" style="--c: var(--accent-primary);">
              <div class="tl-node-top">
                <div class="tl-n-month">April</div>
                <div class="tl-n-phase">Implementasi Fitur</div>
                <div class="tl-n-icon-circle">3</div>
                <div class="tl-n-line"></div>
              </div>
              <div class="tl-arrow-segment" style="--c: var(--accent-primary);"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom"></div>
            </div>

            <!-- Node 4 (Mei) -->
            <div class="tl-node" data-id="4" style="--c: var(--accent-purple);">
              <div class="tl-node-top">
                <div class="tl-n-month">Mei</div>
                <div class="tl-n-phase">Optimasi &amp; Mobile</div>
                <div class="tl-n-icon-circle">4</div>
                <div class="tl-n-line"></div>
              </div>
              <div class="tl-arrow-segment" style="--c: var(--accent-purple);"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom"></div>
            </div>

            <!-- Node 5 (Jun) -->
            <div class="tl-node" data-id="5" style="--c: #f59e0b;">
              <div class="tl-node-top">
                <div class="tl-n-month">Juni</div>
                <div class="tl-n-phase">Penyelesaian</div>
                <div class="tl-n-icon-circle">5</div>
                <div class="tl-n-line"></div>
              </div>
              <div class="tl-arrow-segment" style="--c: #f59e0b;"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom"></div>
            </div>

          </div><!-- end .tl-nodes-row -->
          
          <!-- Full-width descriptions -->
          <div class="tl-descriptions-container">
            <div class="tl-desc-card" data-id="1">Memulai masa magang dengan orientasi perusahaan, perkenalan dengan mentor, dan mempelajari sistem serta teknologi yang akan digunakan dalam project BITS.</div>
            <div class="tl-desc-card" data-id="2">Merancang arsitektur sistem, membangun struktur database, mengembangkan backend API, menginisiasi Frontend Admin dan User, serta mengintegrasikan embed awal untuk Power BI, Metabase, dan Looker Studio.</div>
            <div class="tl-desc-card" data-id="3">Melengkapi integrasi embed Tableau dan DevExpress, mengembangkan fitur Slideshow dengan Preset, membangun tampilan Org Chart interaktif, serta menambahkan Activity Log dan enkripsi kredensial BI.</div>
            <div class="tl-desc-card" data-id="4">Mengintegrasikan Capacitor untuk membangun aplikasi Android, melakukan rebranding tampilan ke BI-TS, serta mengoptimalkan performa dan tampilan mobile.</div>
            <div class="tl-desc-card" data-id="5">Menyelesaikan perbaikan bug, menyusun laporan akhir, dan mempersiapkan materi presentasi.</div>
          </div>
        </div>
        
        <style>
          .timeline-slide-wrapper {
            transition: all 0.3s ease;
          }
          
          /* Animasi individual node */
          .tl-node {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }

          /* Jika ada yang aktif, redupkan yang tidak aktif */
          .timeline-slide-wrapper:not([data-active="0"]) .tl-node {
            opacity: 0.3;
            transform: scale(0.95);
            filter: grayscale(80%);
          }

          /* Styling untuk node yang terpilih */
          .timeline-slide-wrapper[data-active="1"] .tl-node[data-id="1"],
          .timeline-slide-wrapper[data-active="2"] .tl-node[data-id="2"],
          .timeline-slide-wrapper[data-active="3"] .tl-node[data-id="3"],
          .timeline-slide-wrapper[data-active="4"] .tl-node[data-id="4"],
          .timeline-slide-wrapper[data-active="5"] .tl-node[data-id="5"] {
            opacity: 1;
            transform: translateY(-10px) scale(1.05);
            filter: grayscale(0%);
            z-index: 2;
          }

          /* Container deskripsi (full width) */
          .tl-descriptions-container {
            position: relative;
            width: 100%;
            height: 120px;
            margin-top: 20px;
          }

          /* Styling deskripsi baru (Lebar penuh) */
          .tl-desc-card {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            opacity: 0;
            pointer-events: none;
            transform: translateY(-15px);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            line-height: 1.6;
            background: #fff;
            padding: 24px 32px;
            border-radius: 12px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.1);
            border: 1px solid var(--border-color);
            text-align: center;
          }

          /* Memunculkan deskripsi HANYA ketika node aktif */
          .timeline-slide-wrapper[data-active="1"] .tl-desc-card[data-id="1"],
          .timeline-slide-wrapper[data-active="2"] .tl-desc-card[data-id="2"],
          .timeline-slide-wrapper[data-active="3"] .tl-desc-card[data-id="3"],
          .timeline-slide-wrapper[data-active="4"] .tl-desc-card[data-id="4"],
          .timeline-slide-wrapper[data-active="5"] .tl-desc-card[data-id="5"] {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
            z-index: 10;
          }
          
          /* Aksen border pada deskripsi menyesuaikan warna panah */
          .tl-desc-card[data-id="1"] { border-top: 4px solid #64748b; }
          .tl-desc-card[data-id="2"] { border-top: 4px solid var(--primary-color); }
          .tl-desc-card[data-id="3"] { border-top: 4px solid var(--accent-primary); }
          .tl-desc-card[data-id="4"] { border-top: 4px solid var(--accent-purple); }
          .tl-desc-card[data-id="5"] { border-top: 4px solid #f59e0b; }
        </style>
      </div>
    `;
  },
};

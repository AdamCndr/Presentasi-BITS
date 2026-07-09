// Slide: Timeline
export default {
  id: 'timeline',
  title: 'Timeline',
  order: 8,
  assets: [],

  render() {
    return `
      <div class="slide-inner">
        <div class="eyebrow">Proses Pengerjaan</div>
        <h1 class="slide-title">Alur Kerja <span>Tim</span></h1>

        <div class="timeline-infographic">
          <div class="tl-nodes-row">

            <!-- Node 1 (Feb): Konten BAWAH garis -->
            <div class="tl-node" style="--c: #64748b;">
              <div class="tl-node-top">
                <div class="tl-n-desc">Memulai masa magang dengan orientasi perusahaan, perkenalan dengan mentor, dan mempelajari sistem serta teknologi yang akan digunakan dalam project BITS.</div>
                <div class="tl-n-month">Februari</div>
              </div>
              <div class="tl-arrow-segment" style="--c: #64748b;"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom">
                <div class="tl-n-line"></div>
                <div class="tl-n-icon-circle">1</div>
                <div class="tl-n-phase">Orientasi & Persiapan</div>
              </div>
            </div>

            <!-- Node 2 (Mar): Konten ATAS garis -->
            <div class="tl-node" style="--c: var(--primary-color);">
              <div class="tl-node-top">
                <div class="tl-n-phase">Fondasi Sistem</div>
                <div class="tl-n-icon-circle">2</div>
                <div class="tl-n-line"></div>
              </div>
              <div class="tl-arrow-segment" style="--c: var(--primary-color);"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom">
                <div class="tl-n-month">Maret</div>
                <div class="tl-n-desc">Merancang arsitektur sistem, membangun struktur database, mengembangkan backend API, menginisiasi Frontend Admin dan User, serta mengintegrasikan embed awal untuk Power BI, Metabase, dan Looker Studio.</div>
              </div>
            </div>

            <!-- Node 3 (Apr): Konten BAWAH garis -->
            <div class="tl-node" style="--c: var(--accent-primary);">
              <div class="tl-node-top">
                <div class="tl-n-desc">Melengkapi integrasi embed Tableau dan DevExpress, mengembangkan fitur Slideshow dengan Preset, membangun tampilan Org Chart interaktif, serta menambahkan Activity Log dan enkripsi kredensial BI.</div>
                <div class="tl-n-month">April</div>
              </div>
              <div class="tl-arrow-segment" style="--c: var(--accent-primary);"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom">
                <div class="tl-n-line"></div>
                <div class="tl-n-icon-circle">3</div>
                <div class="tl-n-phase">Fitur Utama</div>
              </div>
            </div>

            <!-- Node 4 (Mei): Konten ATAS garis -->
            <div class="tl-node" style="--c: var(--accent-purple);">
              <div class="tl-node-top">
                <div class="tl-n-phase">Stabilisasi &amp; Mobile</div>
                <div class="tl-n-icon-circle">4</div>
                <div class="tl-n-line"></div>
              </div>
              <div class="tl-arrow-segment" style="--c: var(--accent-purple);"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom">
                <div class="tl-n-month">Mei</div>
                <div class="tl-n-desc">Mengintegrasikan Capacitor untuk membangun aplikasi Android, melakukan rebranding tampilan ke BI-TS, serta mengoptimalkan performa dan tampilan mobile.</div>
              </div>
            </div>

            <!-- Node 5 (Jun): Konten BAWAH garis -->
            <div class="tl-node" style="--c: #f59e0b;">
              <div class="tl-node-top">
                <div class="tl-n-desc">Menyelesaikan perbaikan bug, menyusun laporan akhir, dan mempersiapkan materi presentasi.</div>
                <div class="tl-n-month">Juni</div>
              </div>
              <div class="tl-arrow-segment" style="--c: #f59e0b;"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom">
                <div class="tl-n-line"></div>
                <div class="tl-n-icon-circle">5</div>
                <div class="tl-n-phase">Penyelesaian</div>
              </div>
            </div>

          </div><!-- end .tl-nodes-row -->
        </div>
      </div>
    `;
  },
};

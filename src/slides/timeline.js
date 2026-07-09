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

          <!-- Nodes row: content alternating above/below -->
          <div class="tl-nodes-row">

            <!-- Node 1: icon below track -->
            <div class="tl-node" style="--c: var(--primary-color);">
              <div class="tl-node-top">
                <div class="tl-n-desc">Meeting arsitektur, setup tabel DB, backend middleware, inisiasi Frontend Admin &amp; User.</div>
                <div class="tl-n-month">Maret</div>
              </div>
              <div class="tl-arrow-segment" style="--c: var(--primary-color);"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom">
                <div class="tl-n-line"></div>
                <div class="tl-n-icon-circle">1</div>
                <div class="tl-n-phase">Fondasi Sistem</div>
              </div>
            </div>

            <!-- Node 2: icon above track -->
            <div class="tl-node" style="--c: var(--accent-primary);">
              <div class="tl-node-top">
                <div class="tl-n-phase">Fitur Utama</div>
                <div class="tl-n-icon-circle">2</div>
                <div class="tl-n-line"></div>
              </div>
              <div class="tl-arrow-segment" style="--c: var(--accent-primary);"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom">
                <div class="tl-n-month">April</div>
                <div class="tl-n-desc">Fitur Slideshow, DevExpress Dashboard Server, integrasi DevExpress, env config, redesign landing page.</div>
              </div>
            </div>

            <!-- Node 3: icon below track -->
            <div class="tl-node" style="--c: var(--accent-purple);">
              <div class="tl-node-top">
                <div class="tl-n-desc">Konversi ke aplikasi Android (Capacitor), pengembangan fitur Org Chart, rebranding BI-TS.</div>
                <div class="tl-n-month">Mei</div>
              </div>
              <div class="tl-arrow-segment" style="--c: var(--accent-purple);"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom">
                <div class="tl-n-line"></div>
                <div class="tl-n-icon-circle">3</div>
                <div class="tl-n-phase">Stabilisasi &amp; Mobile</div>
              </div>
            </div>

            <!-- Node 4: icon above track -->
            <div class="tl-node" style="--c: #f59e0b;">
              <div class="tl-node-top">
                <div class="tl-n-phase">Penyelesaian</div>
                <div class="tl-n-icon-circle">4</div>
                <div class="tl-n-line"></div>
              </div>
              <div class="tl-arrow-segment" style="--c: #f59e0b;"><div class="tl-arrow-dot"></div></div>
              <div class="tl-node-bottom">
                <div class="tl-n-month">Juni</div>
                <div class="tl-n-desc">Penyelesaian bug, penyusunan laporan, dan persiapan presentasi.</div>
              </div>
            </div>

          </div><!-- end .tl-nodes-row -->

        </div>
      </div>
    `;
  },
};

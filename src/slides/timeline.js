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
        <div class="team-strip">
          <div class="team-pill"><div class="team-avatar" style="background:var(--primary-color);">A</div><div><div class="team-pill-text">Adam</div><div class="team-pill-role">fe-user</div></div></div>
          <div class="team-pill"><div class="team-avatar" style="background:var(--accent-primary);">N</div><div><div class="team-pill-text">Nopwal</div><div class="team-pill-role">fe-admin</div></div></div>
          <div class="team-pill"><div class="team-avatar" style="background:#8b5cf6;">S</div><div><div class="team-pill-text">Septian</div><div class="team-pill-role">be + dashboard-server</div></div></div>
          <div class="team-pill"><div class="team-avatar" style="background:#f59e0b;">B</div><div><div class="team-pill-text">Bevan</div><div class="team-pill-role">be + infra</div></div></div>
        </div>
        <div class="timeline">
          <div class="tl-item"><div class="tl-dot"></div><div class="tl-phase">Fondasi Sistem</div><div class="tl-month">Maret 2026</div><div class="tl-desc">Meeting arsitektur, setup tabel DB, backend middleware, inisiasi Frontend Admin &amp; User, integrasi Company &amp; Position Management.</div></div>
          <div class="tl-item"><div class="tl-dot"></div><div class="tl-phase">Fitur Utama &amp; Integrasi</div><div class="tl-month">April 2026</div><div class="tl-desc">Fitur Slideshow, DevExpress Dashboard Server, integrasi DevExpress, env config, redesign landing page, perbaikan Menu Management.</div></div>
          <div class="tl-item"><div class="tl-dot"></div><div class="tl-phase">Stabilisasi &amp; Mobile</div><div class="tl-month">Mei 2026</div><div class="tl-desc">Konversi ke aplikasi Android (Capacitor), pengembangan fitur Org Chart, rebranding BI-TS, optimasi UI/UX layar mobile.</div></div>
          <div class="tl-item"><div class="tl-dot"></div><div class="tl-phase">Penyelesaian</div><div class="tl-month">Juni 2026</div><div class="tl-desc">Penyelesaian bug, penyusunan laporan, dan persiapan presentasi.</div></div>
        </div>
      </div>
    `;
  },
};

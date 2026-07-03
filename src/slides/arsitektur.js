// Slide: Arsitektur
export default {
  id: 'arsitektur',
  title: 'Arsitektur',
  order: 4,
  assets: [],

  render() {
    return `
      <div class="slide-inner">
        <div class="eyebrow">Arsitektur</div>
        <h1 class="slide-title">Arsitektur Sistem <span>Lengkap</span></h1>
        <p class="slide-lead">Sistem BITS terdiri dari 4 komponen inti yang bekerja bersama, seluruhnya di-hosting <i>on-premise</i> di intranet perusahaan.</p>

        <div class="arch-wrap">
          <div class="arch-row">
            <div class="arch-box strong">
              <div class="arch-ic" style="background:var(--primary-color);">FU</div>
              <div class="arch-name">Frontend User</div>
              <div class="arch-desc">Vue.js 3 — Portal BI Karyawan + Android</div>
            </div>
            <div class="arch-box strong">
              <div class="arch-ic" style="background:var(--accent-primary);">FA</div>
              <div class="arch-name">Frontend Admin</div>
              <div class="arch-desc">Vue.js 3 — Panel Manajemen untuk Tim IT</div>
            </div>
          </div>
          <div style="display:flex;gap:22px;justify-content:center;width:100%;max-width:445px;">
            <div class="arch-connector"></div><div class="arch-connector"></div>
          </div>
          <div class="arch-row">
            <div class="arch-box">
              <div class="arch-ic" style="background:#334155;">BE</div>
              <div class="arch-name">Backend API</div>
              <div class="arch-desc">Node.js + Express</div>
            </div>
          </div>
          <div class="arch-row" style="gap:60px;margin-top:0;">
            <div class="arch-connector"></div>
            <div class="arch-connector"></div>
          </div>
          <div class="arch-row">
            <div class="arch-box">
              <div class="arch-ic" style="background:#0f766e;">DB</div>
              <div class="arch-name">PostgreSQL</div>
              <div class="arch-desc">Database relasional utama</div>
            </div>
            <div class="arch-box">
              <div class="arch-ic" style="background:#8b5cf6;">DS</div>
              <div class="arch-name">Dashboard Server</div>
              <div class="arch-desc">ASP.NET Core — khusus DevExpress</div>
            </div>
          </div>
        </div>
        <div style="text-align:center;">
          <div class="arch-onprem">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>
            Seluruh infrastruktur di-hosting on-premise di intranet PT Tiga Serangkai Inti Corpora
          </div>
        </div>
      </div>
    `;
  },
};

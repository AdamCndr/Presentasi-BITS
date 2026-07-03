// Slide: Penutup
export default {
  id: 'penutup',
  title: 'Penutup',
  order: 11,
  assets: [],

  render() {
    return `
      <div class="slide-inner">
        <div class="eyebrow">Penutup</div>
        <div class="thanks-title">Terima Kasih</div>
        <div class="grid-2" style="margin-bottom:8px;">
          <div class="card">
            <div class="mini-label">Tim Pengembang — 4 Developer</div>
            <div style="display:flex;flex-direction:column;gap:16px;margin-top:6px;">
              <div class="dev-card"><div class="dev-avatar" style="background:var(--primary-color);">A</div><div><div class="dev-name">Adam</div><div class="dev-role">Frontend User</div></div></div>
              <div class="dev-card"><div class="dev-avatar" style="background:var(--accent-primary);">N</div><div><div class="dev-name">Nopwal</div><div class="dev-role">Frontend Admin</div></div></div>
              <div class="dev-card"><div class="dev-avatar" style="background:#8b5cf6;">S</div><div><div class="dev-name">Septian</div><div class="dev-role">Backend API + Dashboard Server</div></div></div>
              <div class="dev-card"><div class="dev-avatar" style="background:#f59e0b;">B</div><div><div class="dev-name">Bevan</div><div class="dev-role">Backend API + Infrastructure</div></div></div>
            </div>
          </div>
          <div class="card">
            <div class="mini-label">Dibimbing Oleh</div>
            <div class="mentor-block">
              <div class="mentor-group-title">Dosen Pembimbing — Univ. Tiga Serangkai</div>
              <div class="mentor-item"><b>Ilham Fannani, S.Kom., M.Kom.</b></div>
              <div class="mentor-item"><b>Luthfia Nurma Hapsari, S.Kom., M.Cs.</b></div>
              <div class="mentor-group-title">PT Tiga Serangkai Inti Corpora</div>
              <div class="mentor-item"><b>Erfan Zaenuddin, S.P.</b> — Centre of Excellence</div>
              <div class="mentor-item"><b>Andang Tris Yuliadi, S.T</b> &amp; Tim P&amp;D — Manajer Divisi P&amp;D</div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

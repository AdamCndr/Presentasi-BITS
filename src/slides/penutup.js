// Slide: Penutup
export default {
  id: 'penutup',
  title: 'Penutup',
  order: 11,
  assets: [
    'assets/team/adam.jpeg',
    'assets/team/naufal.png',
    'assets/team/septian.png',
    'assets/team/bevan.jpeg',
  ],

  render() {
    return `
      <div class="slide-inner">
        <div class="eyebrow">Penutup</div>
        <div class="thanks-title">Terima Kasih</div>
        <div class="grid-2" style="margin-bottom:8px;">
          <div class="card">
            <div class="mini-label">Tim Pengembang — 4 Developer</div>
            <div style="display:flex;flex-direction:column;gap:16px;margin-top:6px;">
              <div class="dev-card"><div class="dev-avatar"><img src="assets/team/adam.jpeg" alt="Adam Candra Kirana Wardana"></div><div><div class="dev-name">Adam Candra Kirana Wardana</div><div class="dev-role">Frontend User</div></div></div>
              <div class="dev-card"><div class="dev-avatar"><img src="assets/team/naufal.png" alt="Muhammad Naufal Irfani"></div><div><div class="dev-name">Muhammad Naufal Irfani</div><div class="dev-role">Frontend Admin</div></div></div>
              <div class="dev-card"><div class="dev-avatar"><img src="assets/team/septian.png" alt="Septian Gilang Dwi Prasetyo"></div><div><div class="dev-name">Septian Gilang Dwi Prasetyo</div><div class="dev-role">Backend API + Dashboard Server</div></div></div>
              <div class="dev-card"><div class="dev-avatar"><img src="assets/team/bevan.jpeg" alt="Aurellius Bevan Yudira" style="object-position:top;"></div><div><div class="dev-name">Aurellius Bevan Yudira</div><div class="dev-role">Backend API + Infrastructure</div></div></div>
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
              <div class="mentor-item"><b>Andang Tris Yuliadi, S.T &amp; Tim P&amp;D</b></div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

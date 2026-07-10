// Slide: Tim Kami
export default {
  id: 'tim-kami',
  title: 'Tim Kami',
  order: 1,
  assets: [],

  render() {
    return `
      <div class="slide-inner team-slide-wrapper" data-active="0">
        <div class="team-head">
          <div class="team-eyebrow">Tim Kami</div>
          <h1 class="slide-title">Meet Our <span>Team</span></h1>
          <div class="team-divider"></div>
        </div>
        <div class="team-grid">

          <div class="card team-card" data-id="1">
            <div class="team-photo">
              <div class="team-photo-veil"></div>
              <img src="assets/team/adam.jpeg" alt="Adam" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="team-body" style="min-height:84px;">
              <div class="team-name">Adam Candra Kirana Wardana</div>
              <div class="team-meta"><b>Tiga Serangkai University</b><br>NIM 23430018</div>
            </div>
            <div class="team-footer">
              <div class="team-role-ic" style="background:var(--primary-color);">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div class="team-role-text">Frontend</div>
            </div>
          </div>

          <div class="card team-card" data-id="2">
            <div class="team-photo">
              <div class="team-photo-veil"></div>
              <img src="assets/team/naufal.png" alt="Naufal" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="team-body" style="min-height:84px;">
              <div class="team-name">Muhammad Naufal Irfani</div>
              <div class="team-meta"><b>Tiga Serangkai University</b><br>NIM 23430008</div>
            </div>
            <div class="team-footer">
              <div class="team-role-ic" style="background:var(--primary-color);">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div class="team-role-text">Frontend</div>
            </div>
          </div>

          <div class="card team-card" data-id="3">
            <div class="team-photo">
              <div class="team-photo-veil"></div>
              <img src="assets/team/septian.png" alt="Septian" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="team-body" style="min-height:84px;">
              <div class="team-name">Septian Gilang Dwi Prasetyo</div>
              <div class="team-meta"><b>Universitas Tiga Serangkai</b><br>NIM 23430025</div>
            </div>
            <div class="team-footer">
              <div class="team-role-ic" style="background:var(--accent-primary);">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
              </div>
              <div class="team-role-text">Backend</div>
            </div>
          </div>

          <div class="card team-card" data-id="4">
            <div class="team-photo" style="background:linear-gradient(160deg,#0ea5e9,#0284c7);">
              <div class="team-photo-veil"></div>
              <span class="team-photo-initial">AB</span>
            </div>
            <div class="team-body" style="min-height:84px;">
              <div class="team-name">Aurellius Bevan Yudira</div>
              <div class="team-meta"><b>Universitas Gadjah Mada</b></div>
            </div>
            <div class="team-footer">
              <div class="team-role-ic" style="background:var(--accent-primary);">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
              </div>
              <div class="team-role-text">Backend</div>
            </div>
          </div>

        </div>
        <style>
          .team-slide-wrapper {
            transition: all 0.3s ease;
          }
          .team-slide-wrapper:not([data-active="0"]) .team-card {
            opacity: 0.4;
            transform: scale(0.95);
            filter: grayscale(80%);
            box-shadow: none;
            border-color: var(--border-color);
          }
          .team-slide-wrapper[data-active="1"] .team-card[data-id="1"],
          .team-slide-wrapper[data-active="2"] .team-card[data-id="2"],
          .team-slide-wrapper[data-active="3"] .team-card[data-id="3"],
          .team-slide-wrapper[data-active="4"] .team-card[data-id="4"] {
            opacity: 1;
            transform: translateY(-8px) scale(1.05);
            filter: grayscale(0%);
            box-shadow: 0 20px 40px rgba(13, 148, 136, 0.15), 0 0 0 2px var(--primary-color);
            z-index: 2;
          }
          .team-card {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }
        </style>
      </div>
    `;
  },
};
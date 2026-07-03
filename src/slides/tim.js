// Slide: Tim Kami
export default {
  id: 'tim-kami',
  title: 'Tim Kami',
  order: 1,
  assets: [],

  render() {
    return `
      <div class="slide-inner">
        <div class="team-head">
          <div class="team-eyebrow">Tim Kami</div>
          <h1 class="slide-title">Empat orang di balik <span>BITS</span>, membangun portal BI yang cepat, rapi, dan personal.</h1>
          <div class="team-divider"></div>
        </div>
        <div class="team-grid">

          <div class="card team-card">
            <div class="team-photo" style="background:linear-gradient(160deg,#0d9488,#0f766e);">
              <span class="team-photo-initial">AC</span>
            </div>
            <div class="team-body">
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

          <div class="card team-card">
            <div class="team-photo" style="background:linear-gradient(160deg,#8b5cf6,#7c3aed);">
              <span class="team-photo-initial">MN</span>
            </div>
            <div class="team-body">
              <div class="team-name">Muhammad Naufal Irfani</div>
              <div class="team-meta"><b>Tiga Serangkai University</b><br>NIM 23430008</div>
            </div>
            <div class="team-footer">
              <div class="team-role-ic" style="background:#8b5cf6;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div class="team-role-text">Frontend</div>
            </div>
          </div>

          <div class="card team-card">
            <div class="team-photo" style="background:linear-gradient(160deg,#f59e0b,#d97706);">
              <span class="team-photo-initial">SG</span>
            </div>
            <div class="team-body">
              <div class="team-name">Septian Gilang Dwi Prasetyo</div>
              <div class="team-meta"><b>Universitas Tiga Serangkai</b><br>NIM 23430025</div>
            </div>
            <div class="team-footer">
              <div class="team-role-ic" style="background:#f59e0b;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
              </div>
              <div class="team-role-text">Backend</div>
            </div>
          </div>

          <div class="card team-card">
            <div class="team-photo" style="background:linear-gradient(160deg,#0ea5e9,#0284c7);">
              <span class="team-photo-initial">AB</span>
            </div>
            <div class="team-body">
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
      </div>
    `;
  },
};

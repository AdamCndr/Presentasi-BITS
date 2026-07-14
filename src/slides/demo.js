// Slide: Demo Aplikasi
export default {
  id: 'demo',
  title: 'Demo',
  order: 8,
  assets: [],

  render() {
    return `
      <div class="slide-inner demo-slide-wrapper">
        <div class="demo-bg-glow"></div>

        <div class="demo-content">
          <h1 class="demo-title">Demo<br><span>BITS Portal</span></h1>
          <p class="demo-subtitle">Demo interaktif aplikasi BI-TS — Business Intelligence Tiga Serangkai</p>

          <div class="demo-features">
            <div class="demo-feature-item">
              <div class="demo-feature-icon" style="background: linear-gradient(135deg, var(--primary-color), #06b6d4);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <div>
                <div class="demo-feature-label">Dashboard Admin</div>
                <div class="demo-feature-sub">Manajemen & monitoring BI</div>
              </div>
            </div>
            <div class="demo-feature-item">
              <div class="demo-feature-icon" style="background: linear-gradient(135deg, var(--accent-primary), #38bdf8);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <div class="demo-feature-label">Frontend User</div>
                <div class="demo-feature-sub">Tampilan embed & slideshow</div>
              </div>
            </div>
          </div>


        </div>

        <style>
          .demo-slide-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }

          .demo-bg-glow {
            position: absolute;
            inset: 0;
            background:
              radial-gradient(ellipse 60% 50% at 70% 50%, rgba(13, 148, 136, 0.08) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 20% 30%, rgba(99, 102, 241, 0.06) 0%, transparent 60%);
            pointer-events: none;
          }

          .demo-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 28px;
            max-width: 700px;
            z-index: 1;
          }

          .demo-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, var(--primary-color), #06b6d4);
            color: #fff;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 8px 20px;
            border-radius: 999px;
            box-shadow: 0 4px 20px rgba(13, 148, 136, 0.35);
            animation: demo-pulse 2.5s ease-in-out infinite;
          }

          @keyframes demo-pulse {
            0%, 100% { box-shadow: 0 4px 20px rgba(13, 148, 136, 0.35); }
            50% { box-shadow: 0 4px 35px rgba(13, 148, 136, 0.6); }
          }

          .demo-title {
            font-size: clamp(2.6rem, 4.5vw, 4rem);
            font-weight: 800;
            color: var(--text-primary);
            line-height: 1.15;
            margin: 0;
          }

          .demo-title span {
            background: linear-gradient(135deg, var(--primary-color), #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .demo-subtitle {
            font-size: 1.1rem;
            color: var(--text-secondary);
            margin: 0;
            line-height: 1.6;
          }

          .demo-features {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .demo-feature-item {
            display: flex;
            align-items: center;
            gap: 14px;
            background: #fff;
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 16px 22px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.05);
            text-align: left;
            min-width: 200px;
          }

          .demo-feature-icon {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            flex-shrink: 0;
          }

          .demo-feature-label {
            font-size: 14px;
            font-weight: 700;
            color: var(--text-primary);
          }

          .demo-feature-sub {
            font-size: 12px;
            color: var(--text-secondary);
            margin-top: 2px;
          }

          .demo-hint {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            color: var(--text-secondary);
            opacity: 0.7;
          }

          .demo-hint kbd {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--border-color);
            border-radius: 5px;
            padding: 2px 8px;
            font-size: 12px;
            font-family: inherit;
            color: var(--text-primary);
            border: 1px solid rgba(0,0,0,0.1);
          }
        </style>
      </div>
    `;
  },
};

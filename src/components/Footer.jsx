import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container-site" style={{ paddingBlock: '3.5rem' }}>
        <div style={{
          display: 'grid',
          gap: '2.5rem',
          gridTemplateColumns: '1fr',
        }}>
          {/* Brand */}
          <div>
            <p className="font-display text-display-md text-content">Ange Muhorakeye</p>
            <p className="text-small text-content-muted" style={{ marginTop: '0.25rem' }}>UI/UX Designer · Kigali, Rwanda</p>
            <p className="text-small text-content-muted" style={{ marginTop: '1.5rem', maxWidth: '28rem' }}>
              Designing experiences that feel clear, useful and unmistakably human.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: '1fr 1fr' }}>
            {/* Sitemap */}
            <nav aria-label="Footer">
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>Sitemap</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {['/', '/work', '/about', '/services', '/contact'].map((path) => {
                  const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
                  return (
                    <li key={path}>
                      <Link to={path} className="link-underline text-small text-content-muted" style={{ transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--content)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--content-muted)'}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Connect */}
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>Connect</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <li className="text-small text-content-faint">LinkedIn — to be added</li>
                <li className="text-small text-content-faint">Behance — to be added</li>
                <li className="text-small text-content-faint">Dribbble — to be added</li>
                <li>
                  <a
                    href="mailto:hello@ange.example"
                    className="link-underline text-small text-content-muted"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--content)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--content-muted)'}
                  >
                    <Mail size={14} aria-hidden="true" />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: '3.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--line)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}>
          <p className="text-micro text-content-faint">© {year} Ange Muhorakeye. Designed with intention. Built with care.</p>
          <p className="text-micro text-content-faint">UI/UX Designer · Kigali, Rwanda</p>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          footer .footer-grid { grid-template-columns: 1.4fr 1fr 1fr !important; }
          footer .bottom-bar { flex-direction: row !important; align-items: center !important; justify-content: space-between !important; }
        }
      `}</style>
    </footer>
  );
}

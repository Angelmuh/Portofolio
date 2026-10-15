import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, Home } from 'lucide-react';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

export default function Header() {
  const progress = useScrollProgress();
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('am-theme', isDark ? 'dark' : 'light');
    setDark(isDark);
  };

  const navLinks = [
    { to: '/',         label: 'Home' },
    { to: '/work',     label: 'Work' },
    { to: '/about',    label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact',  label: 'Contact' },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
      />

      <header
        style={{
          position: 'fixed',
          insetInline: 0,
          top: 0,
          zIndex: 50,
          borderBottom: '1px solid',
          borderColor: 'var(--line)',
          backgroundColor: 'color-mix(in srgb, var(--surface) 82%, transparent)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          transition: 'all 0.3s',
        }}
      >
        <div
          className="container-site"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: scrolled ? '3.5rem' : '4rem',
            transition: 'height 0.3s',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Ange Muhorakeye, home"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <Home size={18} aria-hidden="true" style={{ color: 'var(--content)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 600, letterSpacing: '-0.05em' }}>
              AM.
            </span>
            <span style={{ display: 'none', height: '1rem', width: '1px', backgroundColor: 'var(--line-strong)' }} className="sm-divider" />
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Ange Muhorakeye</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                style={{ paddingBlock: '0.5rem' }}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              type="button"
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
              onClick={toggleTheme}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '2.5rem', height: '2.5rem',
                borderRadius: 'var(--radius-md)',
                color: 'var(--content-muted)',
                transition: 'background-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--surface-2)'; e.currentTarget.style.color = 'var(--content)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--content-muted)'; }}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(o => !o)}
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 'var(--radius-md)',
                color: 'var(--content)',
              }}
              id="mobile-menu-btn"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={menuOpen ? 'open' : ''}
        aria-hidden={!menuOpen}
      >
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          nav[aria-label="Primary"] { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
          .sm-divider { display: none !important; }
        }
        @media (min-width: 640px) {
          .sm-divider { display: block !important; }
        }
      `}</style>
    </>
  );
}

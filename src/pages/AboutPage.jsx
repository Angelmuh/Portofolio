import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, ArrowUp } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

/* ── Capabilities list ─────────────────────────────────────── */
const capabilities = [
  'UX research', 'Product strategy', 'Information architecture',
  'User flows', 'Wireframing', 'Interaction design',
  'UI design', 'Prototyping', 'Usability testing',
  'Design systems', 'Accessibility', 'Developer handoff',
];

/* ── Tools list ────────────────────────────────────────────── */
const tools = ['Figma', 'FigJam', 'Adobe Creative Suite', 'Miro', 'Maze', 'Notion'];

/* ── Values list ───────────────────────────────────────────── */
const values = [
  'Evidence over opinion',
  'Clarity over cleverness',
  'Accessibility by default',
  'Honest feedback loops',
  'Design that explains itself',
];

/* ── Interests ─────────────────────────────────────────────── */
const interests = [
  'Visual storytelling',
  'Design education for young designers in Africa',
  'Long-form reading and typography',
];

/* ── Timeline item component ───────────────────────────────── */
function TimelineItem({ period, title, org, description, active = false }) {
  return (
    <li style={{ position: 'relative', borderLeft: '1px solid var(--line)', paddingBottom: '2.5rem', paddingLeft: '1.5rem' }}>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute', left: '-4px', top: '6px',
          width: '8px', height: '8px', borderRadius: '50%',
          backgroundColor: active ? 'var(--emerald)' : 'var(--gold)',
        }}
      />
      <p className="text-micro text-content-faint" style={{ textTransform: 'uppercase', letterSpacing: '0.12em' }}>{period}</p>
      <p style={{ marginTop: '0.25rem', fontWeight: 600 }} className="text-content">{title}</p>
      {org && <p className="text-small text-content-muted">{org}</p>}
      {description && (
        <p className="text-small text-content-muted" style={{ marginTop: '0.5rem', maxWidth: '60ch' }}>{description}</p>
      )}
    </li>
  );
}

/* ── Back to top ───────────────────────────────────────────── */
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '2.75rem', height: '2.75rem',
        borderRadius: '50%',
        border: '1px solid var(--line)',
        backgroundColor: 'var(--surface)',
        color: 'var(--content)',
        boxShadow: 'var(--shadow-soft)',
        transition: 'opacity 0.3s, transform 0.3s, border-color 0.2s',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        pointerEvents: visible ? 'auto' : 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--content)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--line)'}
    >
      <ArrowUp size={16} aria-hidden="true" />
    </button>
  );
}

/* ════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Ange Muhorakeye is an Information Technology professional and a UI/UX designer based in Rwanda, turning complex problems into clear, human digital experiences through research, strategy, prototyping and iteration."
        url="https://ange.design/about"
      />

      <main id="main-content">
        <div style={{ opacity: 1 }}>
          <div className="container-site" style={{ paddingTop: 'clamp(7rem, 12vw, 10rem)' }}>

            <Reveal>
              {/* ── Hero ──────────────────────────────────────────────── */}
              <header className="about-hero" style={{
                display: 'grid',
                alignItems: 'center',
                gap: '4rem',
                gridTemplateColumns: '1fr',
              }}>
                {/* Left column */}
                <div>
                  <p className="eyebrow" style={{ marginBottom: '1rem' }}>About</p>
                  <h1 className="heading-display text-balance">Designing from a point of view</h1>

                  <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p className="text-lead text-content-muted">
                      I'm Ange Muhorakeye, a UI/UX designer based in Rwanda. I approach design as a conversation between people, systems and business goals. My work begins with understanding what users are trying to achieve and develops through experimentation, testing and careful visual execution.
                    </p>
                    <p className="text-lead text-content-muted">
                      Design is a practice of asking better questions. I research to understand real behavior, define problems with evidence, and prototype to learn quickly. I care as much about how a product feels to move through as how it looks — rhythm, clarity and trust are decisions I make on every screen.
                    </p>
                  </div>

                  <ul style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <li style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      borderRadius: '9999px', border: '1px solid var(--line)',
                      padding: '0.5rem 1rem',
                    }} className="text-small text-content-muted">
                      <MapPin size={14} className="text-gold" aria-hidden="true" style={{ color: 'var(--gold)', flexShrink: 0 }} />
                      Kigali, Rwanda
                    </li>
                    <li style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      borderRadius: '9999px', border: '1px solid var(--line)',
                      padding: '0.5rem 1rem',
                    }} className="text-small text-content-muted">
                      <span aria-hidden="true" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--emerald)', flexShrink: 0 }} />
                      Available for selected opportunities
                    </li>
                  </ul>
                </div>

                {/* Right column — photo */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '24rem', margin: '0 auto' }}>
                  <div aria-hidden="true" style={{
                    position: 'absolute', inset: '-12px', zIndex: -1,
                    borderRadius: 'var(--radius-2xl)',
                    border: '1px solid var(--line-strong)',
                  }} />
                  <div aria-hidden="true" style={{
                    position: 'absolute', right: '-3rem', top: '-3rem', zIndex: -1,
                    width: '14rem', height: '14rem', borderRadius: '50%',
                    backgroundColor: 'var(--emerald-subtle)',
                    filter: 'blur(48px)',
                  }} />

                  <div style={{
                    position: 'relative', overflow: 'hidden',
                    backgroundColor: 'var(--surface-2)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--line)',
                    boxShadow: 'var(--shadow-lift)',
                  }}>
                    <img
                      src="/images/Me.jpeg"
                      alt="Portrait of Ange Muhorakeye, UI/UX designer, wearing a deep green blazer"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Floating card */}
                  <div style={{
                    position: 'absolute', bottom: '-24px', left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'min(90%, 17rem)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '1rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--line)',
                    backgroundColor: 'color-mix(in srgb, var(--surface-2) 95%, transparent)',
                    padding: '1rem 1.25rem',
                    boxShadow: 'var(--shadow-lift)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}>
                    <div style={{ minWidth: 0 }}>
                      <p className="font-display text-content" style={{ fontSize: '1.125rem', lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        UI/UX Designer based in Rwanda
                      </p>
                      <p className="text-micro text-content-muted" style={{ marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        <MapPin size={14} aria-hidden="true" style={{ flexShrink: 0 }} />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Kigali, Rwanda</span>
                      </p>
                    </div>
                    <span aria-hidden="true" style={{ height: '2rem', width: '1px', flexShrink: 0, backgroundColor: 'var(--gold)' }} />
                  </div>
                </div>
              </header>
            </Reveal>

            {/* ── Philosophy ─────────────────────────────────────────── */}
            <section
              className="about-philosophy"
              style={{ marginTop: '6rem', display: 'grid', gap: '3.5rem', gridTemplateColumns: '1fr' }}
              aria-label="Design philosophy"
            >
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Philosophy</p>
                <p className="font-display text-display-md text-balance" style={{ lineHeight: 1.35 }}>
                  Good design is invisible until it solves a real problem. I design for the person who uses the product first, and the business that supports it second — but never in that order alone. Every decision is a trade-off, and my job is to make those trade-offs explicit, tested and intentional.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>What I value</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {values.map((v) => (
                    <li key={v} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }} className="text-body text-content-muted">
                      <span aria-hidden="true" style={{ marginTop: '8px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--gold)', flexShrink: 0 }} />
                      {v}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>

            {/* ── Capabilities ───────────────────────────────────────── */}
            <section style={{ marginTop: '6rem' }} aria-label="Capabilities">
              <Reveal>
                <h2 className="eyebrow" style={{ marginBottom: '1.5rem' }}>Capabilities</h2>
              </Reveal>
              <ul className="capabilities-grid" style={{
                display: 'grid',
                gap: '1px',
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--line)',
                backgroundColor: 'var(--line)',
                gridTemplateColumns: 'repeat(1, 1fr)',
              }}>
                {capabilities.map((cap, i) => (
                  <li key={cap} style={{ backgroundColor: 'var(--surface)', padding: '1.5rem' }}>
                    <span className="font-display text-gold" style={{ fontSize: '0.875rem' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-body text-content" style={{ display: 'block', marginTop: '0.5rem', fontWeight: 500 }}>
                      {cap}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Tools ──────────────────────────────────────────────── */}
            <section style={{ marginTop: '6rem' }} aria-label="Tools">
              <Reveal>
                <h2 className="eyebrow" style={{ marginBottom: '1.5rem' }}>Tools in my kit</h2>
              </Reveal>
              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {tools.map((tool) => (
                  <li key={tool} style={{
                    borderRadius: '9999px',
                    border: '1px solid var(--line)',
                    padding: '0.625rem 1.25rem',
                  }} className="text-small text-content-muted">
                    {tool}
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Experience & Education ─────────────────────────────── */}
            <section
              className="about-timeline"
              style={{ marginTop: '6rem', display: 'grid', gap: '4rem', gridTemplateColumns: '1fr' }}
              aria-label="Experience and education"
            >
              {/* Experience */}
              <Reveal>
                <div>
                  <h2 className="eyebrow" style={{ marginBottom: '1.5rem' }}>Experience</h2>
                  <ol style={{ listStyle: 'none' }}>
                    <TimelineItem
                      period="[July,2026 – October,2026]"
                      title="[Trainee]"
                      org="[SOLVIT AFRICA]"
                      description="[Completed training where i gained hands on experience about UI/UX design]"
                    />
                    <TimelineItem
                      period="[Insert start year] – present"
                      title="Independent design work"
                      org="Freelance · Kigali, Rwanda"
                      description="Sample entry — replace before publishing. Add a summary of freelance projects, client types and outcomes here."
                      active
                    />
                  </ol>
                </div>
              </Reveal>

              {/* Education + Certifications */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <Reveal>
                  <div>
                    <h2 className="eyebrow" style={{ marginBottom: '1.5rem' }}>Education</h2>
                    <ol style={{ listStyle: 'none' }}>
                      <TimelineItem
                        period="[2022-2026]"
                        title="[Information Technology]"
                        org="[University of Rwanda]"
                        description="[Insert relevant focus areas and achievements.]"
                      />
                    </ol>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div>
                    <h2 className="eyebrow" style={{ marginBottom: '1.5rem' }}>Certifications</h2>
                    <ol style={{ listStyle: 'none' }}>
                      <TimelineItem
                        period="[Insert year]"
                        title="[Insert certification]"
                        org="[Insert provider]"
                        description="[Insert what it covers.]"
                      />
                    </ol>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* ── Beyond the screen ──────────────────────────────────── */}
            <section style={{ marginTop: '6rem' }} aria-label="Outside design">
              <Reveal>
                <h2 className="eyebrow" style={{ marginBottom: '1.5rem' }}>Beyond the screen</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {interests.map((item) => (
                    <li key={item} className="font-display text-display-sm text-content-muted">{item}</li>
                  ))}
                </ul>
              </Reveal>
            </section>

            {/* ── CTA ────────────────────────────────────────────────── */}
            <Reveal>
              <div style={{
                marginTop: '6rem',
                borderTop: '1px solid var(--line)',
                paddingBlock: '4rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
              }}>
                <div>
                  <h2 className="font-display text-display-md text-content">Let's build something considered.</h2>
                  <p className="text-small text-content-muted" style={{ marginTop: '0.5rem', maxWidth: '28rem' }}>
                    If you have a product problem, a rough idea or a team that needs design support — my inbox is open.
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <Link to="/contact" className="btn-primary">
                    Contact me
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </main>

      <BackToTop />

      {/* Responsive grid styles */}
      <style>{`
        @media (min-width: 1024px) {
          .about-hero { grid-template-columns: 1.05fr 0.95fr !important; gap: 5rem !important; }
          .about-philosophy { grid-template-columns: 1fr 1fr !important; }
          .about-timeline { grid-template-columns: 1fr 1fr !important; }
          .capabilities-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 640px) {
          .capabilities-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .about-hero-photo { max-width: none !important; }
        }
      `}</style>
    </>
  );
}

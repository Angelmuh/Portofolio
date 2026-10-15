import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

const services = [
  {
    num: '01',
    title: 'UX Research & Strategy',
    description: 'User interviews, competitive analysis, journey mapping and problem definition — so every design decision has an evidence base.',
  },
  {
    num: '02',
    title: 'UI Design & Prototyping',
    description: 'High-fidelity interfaces and interactive prototypes built in Figma, ready for usability testing and developer handoff.',
  },
  {
    num: '03',
    title: 'Design Systems',
    description: 'Scalable component libraries and documentation that keep product teams consistent and ship faster.',
  },
  {
    num: '04',
    title: 'Usability Testing',
    description: 'Moderated and unmoderated testing sessions that surface real friction and inform confident iteration.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="UI/UX design services by Ange Muhorakeye — research, strategy, UI design, prototyping and design systems."
        url="https://ange.design/services"
      />
      <main id="main-content">
        <div className="container-site" style={{ paddingTop: 'clamp(7rem, 12vw, 10rem)', paddingBottom: '6rem' }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Services</p>
            <h1 className="heading-display text-balance">How I can help</h1>
            <p className="text-lead text-content-muted" style={{ marginTop: '1.5rem', maxWidth: '52ch' }}>
              I offer focused design services for startups and product teams who want to build things that actually work for people.
            </p>
          </Reveal>

          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--line)', backgroundColor: 'var(--line)' }}>
            {services.map(({ num, title, description }) => (
              <Reveal key={num}>
                <div style={{ backgroundColor: 'var(--surface)', padding: '2rem' }}>
                  <span className="font-display text-gold" style={{ fontSize: '0.875rem' }}>{num}</span>
                  <h2 className="font-display text-display-sm text-content" style={{ marginTop: '0.5rem' }}>{title}</h2>
                  <p className="text-body text-content-muted" style={{ marginTop: '0.75rem', maxWidth: '60ch' }}>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div style={{
              marginTop: '4rem',
              borderTop: '1px solid var(--line)',
              paddingTop: '3rem',
              display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem',
            }}>
              <div>
                <h2 className="font-display text-display-md text-content">Ready to work together?</h2>
                <p className="text-small text-content-muted" style={{ marginTop: '0.5rem' }}>Let's start with a conversation.</p>
              </div>
              <Link to="/contact" className="btn-primary">
                Get in touch <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}

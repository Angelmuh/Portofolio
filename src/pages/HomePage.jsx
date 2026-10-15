import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Send } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const projects = [
  {
    id: 1,
    title: 'Tasks',
    description: 'Tasks management project',
    image: '/images/figma1.png',
    url: 'https://www.figma.com/design/VbdbZtL0T7fpkx9KGecKJV/tasks?node-id=911-114&t=RbgsCgE2HSOQIQKQ-1',
  },
  {
    id: 2,
    title: 'Tasks',
    description: 'Tasks project design',
    image: '/images/figma2.png',
    url: 'https://www.figma.com/design/VbdbZtL0T7fpkx9KGecKJV/tasks?node-id=35-4&t=RbgsCgE2HSOQIQKQ-1',
  },
  {
    id: 3,
    title: 'Tasks',
    description: 'Tasks project design',
    image: '/images/figma3.png',
    url: 'https://www.figma.com/design/VbdbZtL0T7fpkx9KGecKJV/tasks?node-id=23-41&t=RbgsCgE2HSOQIQKQ-1',
  },
  {
    id: 4,
    title: 'Benediction Club',
    description: 'Benediction Club project',
    image: '/images/figma4.png',
    url: 'https://www.figma.com/design/BFKApg4C0BNTDOOUAOCh9G/Benediction-Club?node-id=0-1&t=gmxk5G13ZJTYo0iI-1',
  },
];

export default function HomePage() {
  return (
    <>
      <SEO
        title={null}
        description="Ange Muhorakeye is a UI/UX designer based in Rwanda, crafting clear, human digital experiences."
        url="https://ange.design"
      />

      <main id="main-content">
        <div className="container-site" style={{ paddingTop: 'clamp(7rem, 12vw, 10rem)', paddingBottom: '6rem' }}>

          <Reveal>
            <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>UI/UX Designer · Kigali, Rwanda</p>
            <h1 className="heading-display text-balance" style={{ maxWidth: '18ch' }}>
              Designing experiences that feel unmistakably human.
            </h1>
            <p className="text-lead text-content-muted" style={{ marginTop: '1.5rem', maxWidth: '52ch' }}>
              I turn complex problems into clear, intuitive interfaces — from research and strategy through to polished UI and developer handoff.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link to="/work" className="btn-primary">
                View my work <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/about" className="btn-secondary">
                About me
              </Link>
            </div>
          </Reveal>

          {/* Project grid */}
          <Reveal delay={0.15}>
            <div style={{
              marginTop: '6rem',
              display: 'grid',
              gap: '1.5rem',
              gridTemplateColumns: '1fr',
            }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Selected work</p>
              {projects.map((project) => (
                <div key={project.id} style={{
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--line)',
                  backgroundColor: 'var(--surface-2)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}>
                  <div style={{
                    width: '100%', height: '14rem',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--surface-3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <p className="font-display text-display-sm text-content" style={{ marginTop: '0.5rem' }}>{project.title}</p>
                  <p className="text-small text-content-muted">{project.description}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-small" style={{ color: 'var(--gold)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    View on Figma <ArrowUpRight size={14} />
                  </a>
                </div>
              ))}
              <div style={{ marginTop: '1rem' }}>
                <Link to="/work" className="btn-secondary">View all work</Link>
              </div>
            </div>
          </Reveal>

          {/* About Preview */}
          <Reveal delay={0.2}>
            <div style={{ marginTop: '6rem' }}>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>About</p>
              <h2 className="heading-display text-balance" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>Designing for people, not pixels.</h2>
              <p className="text-lead text-content-muted" style={{ marginTop: '1.5rem', maxWidth: '52ch' }}>
                I'm a UI/UX designer based in Kigali, Rwanda. I focus on turning complex problems into clear, intuitive experiences.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/about" className="btn-secondary">Learn more about me <ArrowUpRight size={16} /></Link>
              </div>
            </div>
          </Reveal>

          {/* Services Preview */}
          <Reveal delay={0.25}>
            <div style={{ marginTop: '6rem' }}>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>Services</p>
              <h2 className="heading-display text-balance" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>How I can help</h2>
              <p className="text-lead text-content-muted" style={{ marginTop: '1.5rem', maxWidth: '52ch' }}>
                UX research, UI design, prototyping, design systems, and developer handoff.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/services" className="btn-secondary">View services <ArrowUpRight size={16} /></Link>
              </div>
            </div>
          </Reveal>

          {/* Contact Preview */}
          <Reveal delay={0.3}>
            <div style={{ marginTop: '6rem', marginBottom: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>Contact</p>
              <h2 className="heading-display text-balance" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>Let's work together</h2>
              <p className="text-lead text-content-muted" style={{ marginTop: '1.5rem', maxWidth: '52ch' }}>
                Have a project in mind? Get in touch.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/contact" className="btn-secondary"><Send size={16} style={{ marginRight: '0.5rem' }} />Get in touch</Link>
              </div>
            </div>
          </Reveal>

        </div>
      </main>

      <style>{`
        @media (min-width: 768px) {
          #main-content .grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          #main-content .grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}

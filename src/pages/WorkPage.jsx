import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { ArrowUpRight } from 'lucide-react';

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

export default function WorkPage() {
  return (
    <>
      <SEO
        title="Work"
        description="Case studies and selected projects by Ange Muhorakeye, UI/UX designer based in Kigali, Rwanda."
        url="https://ange.design/work"
      />
      <main id="main-content">
        <div className="container-site" style={{ paddingTop: 'clamp(7rem, 12vw, 10rem)', paddingBottom: '6rem' }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Work</p>
            <h1 className="heading-display text-balance">Selected projects</h1>
            <p className="text-lead text-content-muted" style={{ marginTop: '1.5rem', maxWidth: '52ch' }}>
              A curated selection of case studies. Each project starts with a problem and ends with something measurably better.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              marginTop: '4rem',
              display: 'grid',
              gap: '1.5rem',
              gridTemplateColumns: '1fr',
            }}>
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
                    width: '100%', height: '16rem',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--surface-3)',
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
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}

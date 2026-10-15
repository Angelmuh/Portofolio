import { useState } from 'react';
import { Send } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your preferred form handling (Formspree, Netlify Forms, etc.)
    setSent(true);
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: 'var(--surface-2)',
    border: '1px solid var(--line-strong)',
    borderRadius: 'var(--radius-md)',
    padding: '0.75rem 1rem',
    color: 'var(--content)',
    fontSize: '0.9375rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Ange Muhorakeye for UI/UX design projects, collaborations or just a conversation."
        url="https://ange.design/contact"
      />
      <main id="main-content">
        <div className="container-site" style={{ paddingTop: 'clamp(7rem, 12vw, 10rem)', paddingBottom: '6rem' }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Contact</p>
            <h1 className="heading-display text-balance">Let's talk</h1>
            <p className="text-lead text-content-muted" style={{ marginTop: '1.5rem', maxWidth: '48ch' }}>
              Have a project in mind, a question, or just want to say hello? My inbox is open — reach out any time.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              marginTop: '3rem',
              maxWidth: '38rem',
              backgroundColor: 'var(--surface-2)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
            }}>
              {sent ? (
                <div style={{ textAlign: 'center', paddingBlock: '2rem' }}>
                  <p className="font-display text-display-sm text-content">Message received 👋</p>
                  <p className="text-small text-content-muted" style={{ marginTop: '0.75rem' }}>I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label htmlFor="name" className="text-small text-content-muted" style={{ display: 'block', marginBottom: '0.375rem' }}>
                      Name
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'var(--line-strong)'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-small text-content-muted" style={{ display: 'block', marginBottom: '0.375rem' }}>
                      Email
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'var(--line-strong)'}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-small text-content-muted" style={{ display: 'block', marginBottom: '0.375rem' }}>
                      Message
                    </label>
                    <textarea
                      id="message" name="message" required rows={6}
                      value={form.message} onChange={handleChange}
                      placeholder="Tell me about your project…"
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '8rem' }}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'var(--line-strong)'}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Send message <Send size={15} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}

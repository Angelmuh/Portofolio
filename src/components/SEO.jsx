import { useEffect } from 'react';

export default function SEO({ title, description, url, image }) {
  const siteName = 'Ange Muhorakeye';
  const fullTitle = title ? `${title} — ${siteName}, UI/UX Designer` : `${siteName} — UI/UX Designer`;
  const ogImage = image || 'https://ange.design/assets/og-image.svg';
  const canonical = url || 'https://ange.design';

  useEffect(() => {
    document.title = fullTitle;
    const set = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    if (description) {
      set('description', description);
      set('og:description', description, 'property');
      set('twitter:description', description, 'name');
    }
    set('og:title', fullTitle, 'property');
    set('og:site_name', siteName, 'property');
    set('og:type', 'website', 'property');
    set('og:url', canonical, 'property');
    set('og:image', ogImage, 'property');
    set('twitter:card', 'summary_large_image');
    set('twitter:title', fullTitle);
    set('twitter:image', ogImage);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;
  }, [fullTitle, description, canonical, ogImage]);

  return null;
}

'use client';

import { useEffect } from 'react';

// Exposes the footer's height as --footer-h so the closing CTA band can fill the rest of the screen.
export default function FooterHeight() {
  useEffect(() => {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;
    const root = document.documentElement;
    const update = () => root.style.setProperty('--footer-h', `${footer.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return null;
}

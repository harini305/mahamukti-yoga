'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Native <details> (works without JS), with a GSAP height tween when motion is allowed.
export default function Faq({ items }) {
  const onToggleClick = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    e.preventDefault();
    const details = e.currentTarget.parentElement;
    const body = details.querySelector('.faq__body');

    if (details.open) {
      gsap.to(body, {
        height: 0,
        duration: 0.45,
        ease: 'power3.inOut',
        onComplete: () => {
          details.open = false;
          gsap.set(body, { clearProps: 'height' });
          ScrollTrigger.refresh();
        },
      });
    } else {
      details.open = true;
      gsap.fromTo(body, { height: 0 }, {
        height: 'auto',
        duration: 0.55,
        ease: 'power3.out',
        clearProps: 'height',
        onComplete: () => ScrollTrigger.refresh(),
      });
    }
  };

  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q} data-reveal onToggle={() => ScrollTrigger.refresh()}>
          <summary onClick={onToggleClick}>
            {item.q}
            <span className="plus" aria-hidden="true" />
          </summary>
          <div className="faq__body">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

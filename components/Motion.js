'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Wires GSAP to data attributes in the page markup. Content is fully visible without it.
//   data-hero / data-hero-line / data-hero-media  entrance timeline
//   data-reveal         fade up once on scroll
//   data-reveal-image   clip reveal for image frames
//   data-parallax       image drifts inside its frame
//   data-drift          horizontal strip slides with scroll (desktop)
//   data-expand         full-bleed image opens out (desktop)
//   data-count          number counts up once
//   data-pin            column pinned while its sibling scrolls (desktop)
export default function Motion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = document.documentElement;
    const main = document.getElementById('main');
    const mm = gsap.matchMedia();

    mm.add(
      { motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 961px)' },
      ({ conditions }) => {
        const cleanups = [];
        const cleanup = () => cleanups.forEach((fn) => fn());

        if (conditions.desktop) {
          const header = () =>
            (document.querySelector('.site-header')?.offsetHeight || 0) +
            (main.querySelector('[data-subnav]')?.offsetHeight || 0);
          const offset = () => header() + 32;

          // Pinned sequence: the section's content holds while scrolling steps through its items.
          // The inner wrapper is pinned (never the section itself) so GSAP's pin-spacer stays inside
          // the section and React can still remove the section when the route changes.
          main.querySelectorAll('[data-steps]').forEach((section) => {
            const pinEl = section.firstElementChild;
            const padTop = () => parseFloat(getComputedStyle(section).paddingTop) || 0;
            const items = [...section.querySelectorAll('[data-step]')];
            const images = [...section.querySelectorAll('[data-step-img]')];
            const bar = section.querySelector('[data-step-progress]');
            let current = -1;
            const show = (i) => {
              if (i === current) return;
              current = i;
              items.forEach((el, k) => el.toggleAttribute('data-on', k === i));
              images.forEach((el, k) => el.toggleAttribute('data-on', k === i));
            };
            const reset = () => {
              section.removeAttribute('data-stepping');
              section.removeAttribute('data-ready');
              items.forEach((el) => el.removeAttribute('data-on'));
              images.forEach((el, k) => el.toggleAttribute('data-on', k === 0));
            };

            section.setAttribute('data-stepping', '');
            show(0);
            // Only pin when the compact stepped layout fits the space below the header.
            if (pinEl.offsetHeight + padTop() * 2 > window.innerHeight - header()) {
              reset();
              return;
            }
            // Transitions stay off (no data-ready) until the collapsed layout has been measured.
            requestAnimationFrame(() => section.setAttribute('data-ready', ''));
            ScrollTrigger.create({
              trigger: pinEl,
              start: () => `top top+=${header() + padTop()}`,
              end: () => `+=${items.length * window.innerHeight * 0.45}`,
              pin: pinEl,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                show(Math.min(items.length - 1, Math.floor(self.progress * items.length)));
                if (bar) gsap.set(bar, { scaleY: self.progress });
              },
            });
            cleanups.push(reset);
          });

          // Pinned columns: hold below the header and in-page nav while the partner column scrolls.
          main.querySelectorAll('[data-pin]').forEach((el) => {
            const container = el.parentElement;
            if (container.offsetHeight <= el.offsetHeight + 40) return;
            ScrollTrigger.create({
              trigger: el,
              start: () => `top top+=${offset()}`,
              endTrigger: container,
              end: () => `bottom top+=${offset() + el.offsetHeight}`,
              pin: true,
              pinSpacing: false,
              invalidateOnRefresh: true,
            });
          });
        }

        if (!conditions.motion) {
          root.classList.add('motion-ready');
          return cleanup;
        }

        const below = (el) => el.getBoundingClientRect().top > window.innerHeight * 0.92;

        // Hero entrance
        const hero = main.querySelector('[data-hero]');
        const lines = hero ? hero.querySelectorAll('[data-hero-line]') : [];
        const media = hero ? hero.querySelectorAll('[data-hero-media]') : [];
        gsap.set(lines, { opacity: 0, y: 34 });
        gsap.set(media, { clipPath: 'inset(100% 0% 0% 0%)', opacity: 1 });
        root.classList.add('motion-ready');
        if (hero) {
          gsap
            .timeline({ defaults: { ease: 'expo.out' } })
            .to(media, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, stagger: 0.18, ease: 'expo.inOut' }, 0)
            .from(hero.querySelectorAll('[data-hero-media] img'), { scale: 1.16, duration: 2, stagger: 0.18 }, 0.15)
            .to(lines, { opacity: 1, y: 0, duration: 1.2, stagger: 0.08 }, 0.25);
        }

        // Fade-up reveals, batched so neighbours stagger
        const reveals = gsap.utils.toArray(main.querySelectorAll('[data-reveal]')).filter(below);
        gsap.set(reveals, { opacity: 0, y: 40 });
        ScrollTrigger.batch(reveals, {
          start: 'top 90%',
          once: true,
          onEnter: (els) =>
            gsap.to(els, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.09, overwrite: true }),
        });

        // Image frame reveals
        gsap.utils.toArray(main.querySelectorAll('[data-reveal-image]')).filter(below).forEach((frame) => {
          const img = frame.querySelector('img');
          gsap
            .timeline({ scrollTrigger: { trigger: frame, start: 'top 85%', once: true } })
            .fromTo(frame, { clipPath: 'inset(12% 8% 12% 8%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.out' })
            .from(img, { scale: 1.2, duration: 1.6, ease: 'expo.out' }, 0);
        });

        // Parallax inside frames
        main.querySelectorAll('[data-parallax]').forEach((frame) => {
          gsap.fromTo(
            frame.querySelector('img'),
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: 'none',
              scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
            }
          );
        });

        // Counters
        main.querySelectorAll('[data-count]').forEach((el) => {
          const target = Number(el.dataset.count);
          const counter = { value: 0 };
          gsap.to(counter, {
            value: target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            onUpdate: () => (el.textContent = Math.round(counter.value).toLocaleString('en-US')),
          });
        });

        if (conditions.desktop) {
          // Horizontal drift strip
          main.querySelectorAll('[data-drift]').forEach((track) => {
            gsap.to(track, {
              x: () => -(track.scrollWidth - track.parentElement.clientWidth),
              ease: 'none',
              scrollTrigger: {
                trigger: track.parentElement,
                start: 'top 85%',
                end: 'bottom 15%',
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            });
          });

          // Full-bleed image opening out
          main.querySelectorAll('[data-expand]').forEach((el) => {
            gsap.fromTo(
              el,
              { clipPath: 'inset(0% 7% 0% 7%)' },
              {
                clipPath: 'inset(0% 0% 0% 0%)',
                ease: 'none',
                scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 25%', scrub: true },
              }
            );
          });
        }

        return cleanup;
      }
    );

    let cancelled = false;
    document.fonts?.ready.then(() => !cancelled && ScrollTrigger.refresh());

    return () => {
      cancelled = true;
      mm.revert();
    };
  }, [pathname]);

  return null;
}

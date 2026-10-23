'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { contact, nav } from '@/lib/content';
import { useEnquiry } from './Enquiry';

export default function Header() {
  const pathname = usePathname();
  const { open: openEnquiry } = useEnquiry();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    tl.current = gsap
      .timeline({ paused: true })
      .fromTo(menu, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: reduce ? 0 : 0.6, ease: 'expo.out' })
      .from(menu.querySelectorAll('nav li, .mobile-menu__foot > *'), {
        y: reduce ? 0 : 24,
        opacity: 0,
        duration: reduce ? 0 : 0.5,
        stagger: 0.05,
        ease: 'power3.out',
      }, reduce ? 0 : 0.15);
    return () => tl.current.kill();
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (menuOpen) {
      menu.classList.add('is-open');
      document.body.classList.add('is-locked');
      tl.current.timeScale(1).play();
      menu.querySelector('a')?.focus({ preventScroll: true });
    } else if (menu.classList.contains('is-open')) {
      document.body.classList.remove('is-locked');
      tl.current
        .timeScale(2)
        .reverse()
        .eventCallback('onReverseComplete', () => menu.classList.remove('is-open'));
    }
  }, [menuOpen]);

  // Close the menu on navigation and when resizing up to the desktop layout.
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)');
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const isCurrent = (href) => (href === pathname ? 'page' : undefined);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container site-header__inner">
          <Link prefetch={false} href="/" className="brand" aria-label="Mahamukti Yoga Bali, home">
            <img src="/images/mahamukti-yoga-bali-logo.png" alt="Mahamukti Yoga Retreats Bali" width="278" height="72" />
          </Link>

          <nav className="main-nav" aria-label="Main">
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link prefetch={false} href={item.href} aria-current={isCurrent(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button type="button" className="btn" onClick={(e) => openEnquiry(undefined, e.currentTarget)}>
              Enquire
            </button>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? 'Close' : 'Menu'}
            <span className="menu-toggle__bars" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div id="mobile-menu" ref={menuRef} className="mobile-menu" inert={!menuOpen}>
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link prefetch={false} href={item.href} aria-current={isCurrent(item.href)} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <button
            type="button"
            className="btn"
            onClick={(e) => {
              setMenuOpen(false);
              openEnquiry(undefined, toggleRef.current ?? e.currentTarget);
            }}
          >
            Enquire about a programme
          </button>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <br />
            <a href={contact.phoneHref}>{contact.phone}</a>
          </p>
        </div>
      </div>
    </>
  );
}

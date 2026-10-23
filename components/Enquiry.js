'use client';

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState } from 'react';
import gsap from 'gsap';
import { contact, programmes } from '@/lib/content';

const EnquiryContext = createContext({ open: () => {} });

export function useEnquiry() {
  return useContext(EnquiryContext);
}

export function EnquiryButton({ programme, className = 'btn', children }) {
  const { open } = useEnquiry();
  return (
    <button type="button" className={className} onClick={(e) => open(programme, e.currentTarget)}>
      {children}
    </button>
  );
}

export function EnquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [programme, setProgramme] = useState(programmes[0]);
  const [submitted, setSubmitted] = useState(false);
  const rootRef = useRef(null);
  const drawerRef = useRef(null);
  const scrimRef = useRef(null);
  const returnFocus = useRef(null);
  const tl = useRef(null);
  const titleId = useId();

  const open = useCallback((name, trigger) => {
    if (name) setProgramme(name);
    setSubmitted(false);
    returnFocus.current = trigger ?? document.activeElement;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    tl.current = gsap
      .timeline({ paused: true })
      .to(scrimRef.current, { opacity: 1, duration: reduce ? 0 : 0.4, ease: 'power2.out' }, 0)
      .to(drawerRef.current, { xPercent: -100, duration: reduce ? 0 : 0.6, ease: 'expo.out' }, 0);
    return () => tl.current.kill();
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (isOpen) {
      root.classList.add('is-open');
      document.body.classList.add('is-locked');
      tl.current.timeScale(1).play();
      drawerRef.current.querySelector('input, .drawer__done h3')?.focus({ preventScroll: true });
    } else if (root.classList.contains('is-open')) {
      document.body.classList.remove('is-locked');
      tl.current
        .timeScale(1.6)
        .reverse()
        .eventCallback('onReverseComplete', () => root.classList.remove('is-open'));
      returnFocus.current?.focus?.({ preventScroll: true });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key !== 'Tab') return;
      const focusable = drawerRef.current.querySelectorAll('a[href], button, input, select, textarea');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  const onSubmit = (e) => {
    e.preventDefault();
    // Demo only: nothing is sent anywhere.
    setSubmitted(true);
    requestAnimationFrame(() => drawerRef.current.querySelector('.drawer__done h3')?.focus());
  };

  return (
    <EnquiryContext.Provider value={{ open }}>
      {children}
      <div ref={rootRef} className="drawer-root" inert={!isOpen}>
        <div ref={scrimRef} className="drawer-scrim" onClick={close} aria-hidden="true" />
        <div ref={drawerRef} className="drawer" role="dialog" aria-modal="true" aria-labelledby={titleId}>
          <div className="drawer__head">
            <h2 id={titleId}>Enquire</h2>
            <button type="button" className="drawer__close" onClick={close} aria-label="Close enquiry form">
              ×
            </button>
          </div>
          <div className="drawer__body">
            {submitted ? (
              <div className="drawer__done" aria-live="polite">
                <h3 tabIndex={-1}>Preview complete</h3>
                <p>
                  This is a design demonstration, so your enquiry about <strong>{programme}</strong> has not
                  been sent anywhere. To reach the school directly, use the details below.
                </p>
                <button type="button" className="btn btn--ghost" onClick={() => setSubmitted(false)}>
                  Back to the form
                </button>
              </div>
            ) : (
              <>
                <p className="demo-note">
                  Demo form: entries stay in your browser and are not submitted to Mahamukti Yoga.
                </p>
                <form className="form" onSubmit={onSubmit}>
                  <div className="field">
                    <label htmlFor="enq-name">Name</label>
                    <input id="enq-name" name="name" autoComplete="name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="enq-email">Email</label>
                    <input id="enq-email" name="email" type="email" autoComplete="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="enq-programme">Programme</label>
                    <select
                      id="enq-programme"
                      name="programme"
                      value={programme}
                      onChange={(e) => setProgramme(e.target.value)}
                    >
                      {programmes.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="enq-month">Preferred month (optional)</label>
                    <input id="enq-month" name="month" placeholder="e.g. early next year" />
                  </div>
                  <div className="field">
                    <label htmlFor="enq-message">Message</label>
                    <textarea id="enq-message" name="message" />
                  </div>
                  <button type="submit" className="btn">
                    Preview enquiry
                  </button>
                </form>
              </>
            )}
            <div className="drawer__direct">
              <p>
                Email <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <br />
                Call <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </EnquiryContext.Provider>
  );
}

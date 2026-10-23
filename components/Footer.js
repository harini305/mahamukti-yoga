import Link from 'next/link';
import { contact, nav, socials } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/footer-logo.png" alt="Mahamukti Yoga Retreats Bali" width="200" height="52" loading="lazy" />
            <p>Yoga teacher training and retreats in Ubud, Bali, led by Akhilesh Bodhi.</p>
          </div>
          <div className="footer-col footer-explore">
            <h2>Explore</h2>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link prefetch={false} href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>{contact.location}</li>
            </ul>
          </div>
          <div className="footer-col footer-follow">
            <h2>Follow</h2>
            <ul>
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Mahamukti Yoga Bali. All rights reserved.</p>
          <p>Yoga Alliance certified courses</p>
        </div>
      </div>
    </footer>
  );
}

import Img from './Img';
import { EnquiryButton } from './Enquiry';
import { contact, testimonials } from '@/lib/content';

export function Testimonials({ title = 'Words from our students' }) {
  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="sr-only">
          {title}
        </h2>
        <div className="quote-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="quote" data-reveal>
              <blockquote>
                <p>“{t.quote}”</p>
              </blockquote>
              <footer>
                <cite>{t.name}</cite>, {t.country}
              </footer>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// Closing screen: sized with the footer (--footer-h) so both fill the viewport below the header.
export function CtaBand({ title, text, image, programme, button = 'Enquire now', position }) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-band__bg" data-parallax>
        <Img name={image} sizes="100vw" alt="" position={position} />
      </div>
      <div className="container cta-band__inner">
        <div className="cta-band__text">
          <h2 id="cta-title" data-reveal>
            {title}
          </h2>
          <p data-reveal>{text}</p>
        </div>
        <div className="cta-band__actions" data-reveal>
          <EnquiryButton programme={programme} className="btn btn--light">
            {button}
          </EnquiryButton>
          <p className="cta-band__direct">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

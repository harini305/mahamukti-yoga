import Link from 'next/link';
import Img from '@/components/Img';
import Arrow from '@/components/Arrow';
import { EnquiryButton } from '@/components/Enquiry';
import { CtaBand } from '@/components/Blocks';
import s from './retreat.module.css';

const PROGRAMME = 'Awaken the Body Yoga Retreat';

export const metadata = {
  title: 'Awaken the Body: Yoga Retreat in Ubud, Bali',
  description:
    'A four-night residential yoga retreat in Ubud combining Hatha Yoga Flow, Kundalini Yoga, breathwork, meditation and Vedic philosophy, guided by Akhilesh Bodhi.',
};

const practices = ['Hatha Yoga Flow', 'Kundalini Yoga', 'Breathwork', 'Meditation', 'Vedic Philosophy'];

const quickInfo = [
  ['Location', 'Ubud, Bali'],
  ['Length', '4 nights'],
  ['Check-in', 'After 1:00 PM'],
  ['Check-out', '11:30 AM, last day'],
  ['Group', 'Small, limited spots'],
];

const pillars = [
  {
    title: 'Body',
    sub: 'Yoga flow',
    points: ['Slow, profound yoga flow', 'Deep stretching for the inner layers', 'Awaken dormant muscles and ligaments'],
  },
  {
    title: 'Breath',
    sub: 'Pranayama',
    points: ['Rejuvenate the nervous system', 'Release stored tension and stress', 'Support overall vitality'],
  },
  {
    title: 'Mind',
    sub: 'Meditation',
    points: ['Dynamic and guided meditation', 'Clarity, calm and focus', 'Philosophy with Q&A sessions'],
  },
];

const gains = [
  'Awaken the natural flow of energy through slow, mindful movement.',
  'Dynamic and guided meditation to become more focused and calm.',
  'Breathing exercises to rejuvenate the body and help release past traumas.',
  'The philosophy of the Vedas and yoga, to understand purpose and practise self-inquiry.',
];

const dayOne = [
  ['Arrival', 'Check-in and a welcome drink'],
  ['4:00 PM', 'Introduction, yoga and Yoga Nidra'],
  ['6:30 PM', 'Dinner'],
  ['8:30 PM', 'Mantra singing and meditation'],
];

const rooms = [
  ['Private room', 'A room to yourself for all four nights.'],
  ['Shared room', 'Available when another participant also chooses to share.'],
];

const included = ['Accommodation', 'Two meals a day', 'All teaching', 'Yoga shala and mats', 'Drinking water'];

export default function BaliRetreat() {
  return (
    <>
      <section className={s.hero} data-hero>
        <div className={`container ${s.heroInner}`}>
          <h1 className={s.title}>
            <span data-hero-line>Awaken</span> <span data-hero-line>the Body</span>
          </h1>
          <p className={`lead ${s.heroLead}`} data-hero-line>
            A four-night yoga retreat in Ubud that helps you feel grounded, energised and fully present.
          </p>
          <ul className={s.practices} data-hero-line>
            {practices.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className={`btn-row ${s.heroBtns}`} data-hero-line>
            <EnquiryButton programme={PROGRAMME}>Enquire about dates</EnquiryButton>
            <a className="btn btn--ghost" href="#day">
              A day on retreat
            </a>
          </div>
        </div>
      </section>

      <div className={s.wide} data-expand>
        <div className={`frame ${s.wideFrame}`} data-parallax>
          <Img name="group-shala" sizes="100vw" position="50% 45%" />
        </div>
      </div>

      <section className={s.quick} aria-label="Retreat at a glance">
        <div className="container">
          <dl className={s.quickList}>
            {quickInfo.map(([k, v]) => (
              <div key={k} data-reveal>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="about-title">
        <div className={`container ${s.about}`}>
          <div className={s.aboutMedia}>
            <div className="frame frame--3x4" data-reveal-image>
              <Img name="shala-meditation" sizes="(max-width: 860px) 100vw, 40vw" position="50% 65%" />
            </div>
          </div>
          <div className={s.aboutText}>
            <h2 id="about-title" data-reveal>
              Body, breath and awareness
            </h2>
            <p className="lead" data-reveal>
              Awakening the body means bringing awareness to it through Hatha Yoga Flow, Kundalini Yoga, breathwork,
              meditation and the philosophy of life.
            </p>
            <p data-reveal>
              The body is one of our greatest instruments, bringing information from the world so that we can live,
              enjoy and experience happiness. Excessive thinking can disturb its natural healing intelligence.
              Ancient yoga practices help restore that innate ability: recharging vitality, calming the mind and
              allowing prana to flow freely.
            </p>

            <div className={s.pillars}>
              {pillars.map((p) => (
                <div key={p.title} className={s.pillar} data-reveal>
                  <h3>
                    {p.title} <span>{p.sub}</span>
                  </h3>
                  <ul>
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="gains-title">
        <div className="container">
          <h2 id="gains-title" className={s.gainsTitle} data-reveal>
            What you can take from these four days
          </h2>
          <ul className={s.gains}>
            {gains.map((g) => (
              <li key={g} data-reveal>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="day" className="section" aria-labelledby="day-title">
        <div className={`container ${s.day}`}>
          <div>
            <h2 id="day-title" data-reveal>
              Day one, arrival
            </h2>
            <p data-reveal>
              The retreat opens gently, with practice that settles you in after travelling. The full daily schedule is
              shared when you enquire.
            </p>
          </div>
          <ol className={s.timeline}>
            {dayOne.map(([time, what]) => (
              <li key={time} data-reveal>
                <span className={s.time}>{time}</span>
                <span className={s.what}>{what}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`section section--white ${s.staySection}`} aria-labelledby="stay-title">
        <div className={s.stay}>
          <div className={s.stayText}>
            <h2 id="stay-title" data-reveal>
              Your stay
            </h2>
            <p className="lead" data-reveal>
              Four nights of practice and rest near Ubud, with everything you need in one place.
            </p>

            <dl className={s.rooms} data-reveal>
              {rooms.map(([name, text]) => (
                <div key={name}>
                  <dt>{name}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>

            <h3 className={s.includedTitle} data-reveal>
              Included
            </h3>
            <ul className={s.includedList} data-reveal>
              {included.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <div className={s.stayCta} data-reveal>
              <EnquiryButton programme={PROGRAMME}>Check availability</EnquiryButton>
              <p className="muted">Dates and room fees are confirmed on enquiry.</p>
            </div>
          </div>
          <div className={`frame ${s.stayImage}`} data-parallax>
            <Img name="hero-shala" sizes="(max-width: 860px) 100vw, 55vw" position="50% 60%" />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="facilitator-title">
        <div className={`container ${s.facilitator}`}>
          <div className={`frame ${s.facilitatorImage}`} data-reveal-image>
            <Img name="smiles" sizes="(max-width: 760px) 100vw, 30vw" position="70% 40%" />
          </div>
          <div>
            <h2 id="facilitator-title" data-reveal>
              Guided by Akhilesh Bodhi
            </h2>
            <p className="lead" data-reveal>
              Akhilesh personally guides every participant with attention and care throughout the retreat, keeping
              the group small so that each person is seen.
            </p>
            <Link prefetch={false} href="/about" className="text-link" data-reveal>
              About Akhilesh <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Come and awaken the body"
        text="Spaces are limited and groups stay small. Tell us when you would like to come and we will share upcoming dates."
        image="tirta-empul"
        programme={PROGRAMME}
        button="Enquire about the retreat"
        position="50% 40%"
      />
    </>
  );
}

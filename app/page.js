import Link from 'next/link';
import Img from '@/components/Img';
import Arrow from '@/components/Arrow';
import { EnquiryButton } from '@/components/Enquiry';
import { CtaBand, Testimonials } from '@/components/Blocks';
import s from './home.module.css';

export const metadata = {
  title: { absolute: 'Mahamukti Yoga Bali | Yoga Teacher Training & Retreats in Ubud' },
  description:
    'Yoga Alliance certified 200 hour yoga teacher training and residential yoga retreats in Ubud, Bali, led by Akhilesh Bodhi.',
};

const alsoOffered = [
  { name: '100 Hour Meditation Teacher Training', note: 'Ten-day residential course' },
  { name: '100 Hour Yin Yang Yoga Course', note: 'Residential course' },
  { name: '50 Hour Meditation & Breath Training', note: 'Breathwork and meditation' },
];

const rhythm = [
  {
    title: 'Daily yoga & meditation',
    text: 'Immerse yourself in daily yoga and meditation sessions designed to enhance your practice and bring peace to your mind.',
  },
  {
    title: 'Fully residential',
    text: 'Comfortable, hygienic accommodation and nourishing meals, so every hour of the day can support your practice.',
  },
  {
    title: 'Group & personal discussions',
    text: 'Meaningful conversations with fellow students and personal guidance from your teachers.',
  },
];

const strip = [
  { name: 'temple-gate', caption: 'Temple visit near Ubud', w: 1.27 },
  { name: 'pool-garden', caption: 'Gardens and pool', w: 1.45 },
  { name: 'temple-blessing', caption: 'A blessing in sarongs', w: 0.9 },
  { name: 'veranda', caption: 'Rest between sessions', w: 1.27 },
  { name: 'ceremony', caption: 'Opening ceremony', w: 1.45 },
  { name: 'aerial', caption: 'Jungle and rice fields', w: 1.27 },
];

export default function Home() {
  return (
    <>
      <section className={`section ${s.hero}`} data-hero>
        <div className={`container ${s.heroGrid}`}>
          <div className={s.heroText}>
            <h1>
              <span data-hero-line>Yoga teacher</span> <span data-hero-line>training in Bali</span>
            </h1>
            <p className="lead" data-hero-line>
              A sanctuary where ancient yoga wisdom meets modern comfort. Residential trainings and retreats in Ubud,
              led by Akhilesh Bodhi and open to every level of practice.
            </p>
            <div className="btn-row" data-hero-line>
              <Link prefetch={false} className="btn" href="/200-hour-yoga-teacher-training">
                Explore the 200 hour training
              </Link>
              <Link prefetch={false} className="btn btn--ghost" href="/bali-retreat">
                Bali retreat
              </Link>
            </div>
            <ul className={s.heroFacts} data-hero-line>
              <li>Yoga Alliance certified</li>
              <li>Fully residential</li>
              <li>Ubud, Bali</li>
            </ul>
          </div>
          <div className={s.heroMedia}>
            <div className={`frame ${s.heroMain}`} data-hero-media>
              <Img name="hero-shala" priority sizes="(max-width: 960px) 100vw, 44vw" position="50% 62%" />
            </div>
            <div className={`frame ${s.heroInset}`} data-hero-media>
              <Img name="tirta-empul" sizes="220px" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="programmes-title">
        <div className="container">
          <div className="section-head">
            <h2 id="programmes-title" data-reveal>
              Programmes in Ubud
            </h2>
            <p data-reveal>
              Each course combines daily practice, meditation and organic meals in a residential setting, offering
              physical wellbeing and a deeper connection to yourself.
            </p>
          </div>

          <div className={s.features}>
            <article className={s.feature}>
              <Link prefetch={false} href="/200-hour-yoga-teacher-training" className={s.featureLink}>
                <div className="frame frame--4x5" data-reveal-image>
                  <Img name="class-openair" sizes="(max-width: 760px) 100vw, 45vw" />
                </div>
                <p className={s.featureMeta} data-reveal>
                  200 hours · Yoga Alliance certified
                </p>
                <h3 data-reveal>200 Hour Yoga Teacher Training</h3>
              </Link>
              <p data-reveal>
                Hatha, Vinyasa and Ashtanga, pranayama, anatomy, philosophy and teaching practice: the foundation to
                teach with confidence, or simply to deepen your own practice.
              </p>
              <Link prefetch={false} href="/200-hour-yoga-teacher-training" className="text-link" data-reveal>
                View the training <Arrow />
              </Link>
            </article>

            <article className={s.feature}>
              <Link prefetch={false} href="/bali-retreat" className={s.featureLink}>
                <div className="frame frame--4x5" data-reveal-image>
                  <Img name="shala-meditation" sizes="(max-width: 760px) 100vw, 45vw" position="50% 70%" />
                </div>
                <p className={s.featureMeta} data-reveal>
                  4-night retreat · All levels
                </p>
                <h3 data-reveal>Awaken the Body Yoga Retreat</h3>
              </Link>
              <p data-reveal>
                Hatha Yoga Flow, Kundalini Yoga, breathwork, meditation and Vedic philosophy, to help you feel
                grounded, energised and fully present.
              </p>
              <Link prefetch={false} href="/bali-retreat" className="text-link" data-reveal>
                View the retreat <Arrow />
              </Link>
            </article>
          </div>

          <div className={s.also}>
            <h3 className={s.alsoTitle} data-reveal>
              Also offered
            </h3>
            <ul>
              {alsoOffered.map((p) => (
                <li key={p.name} className={s.alsoRow} data-reveal>
                  <span className={s.alsoName}>{p.name}</span>
                  <span className={s.alsoMeta}>
                    <span className={s.alsoNote}>{p.note} · Dates to be announced</span>
                    <EnquiryButton programme={p.name} className={`text-link ${s.alsoBtn}`}>
                      Ask about dates <span className="sr-only">for {p.name}</span>
                    </EnquiryButton>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="rhythm-title">
        <div className={`container ${s.rhythm}`}>
          <div className={`frame ${s.rhythmImage}`} data-parallax>
            <Img name="circle-garden" sizes="(max-width: 860px) 100vw, 44vw" />
          </div>
          <div>
            <h2 id="rhythm-title" data-reveal>
              A residential rhythm
            </h2>
            <p className="lead" data-reveal>
              Living where you study keeps the day simple: practise, eat well, rest and reflect with people on the
              same path.
            </p>
            <ul className={s.rhythmList}>
              {rhythm.map((r) => (
                <li key={r.title} data-reveal>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="teacher-title">
        <div className={`container ${s.teacher}`}>
          <div className={`frame frame--4x5 ${s.teacherImage}`} data-parallax>
            <Img name="akhilesh-garden" sizes="(max-width: 860px) 100vw, 40vw" position="50% 30%" />
          </div>
          <div className={s.teacherText}>
            <h2 id="teacher-title" data-reveal>
              Akhilesh Bodhi
            </h2>
            <p className={s.teacherRole} data-reveal>
              Founder of Mahamukti Yoga, E-RYT yoga teacher and Reiki master
            </p>
            <p data-reveal>
              Akhilesh has taught yoga and meditation in India and around the world, leading retreats and workshops
              in countries including Austria, Turkey and Indonesia. His teaching integrates Hatha, Ashtanga and Raja
              Yoga to help students find balance, mindfulness and self-awareness.
            </p>
            <blockquote className={s.teacherQuote} data-reveal>
              <p>“Knowledge of yoga is the real knowledge of life.”</p>
            </blockquote>
            <Link prefetch={false} href="/about" className={`text-link ${s.lightLink}`} data-reveal>
              About Akhilesh and the school <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${s.life}`} aria-labelledby="life-title">
        <div className="container">
          <div className="section-head">
            <h2 id="life-title" data-reveal>
              Practice, rest and Balinese ritual
            </h2>
            <p data-reveal>
              Open-air shalas, temple visits and water blessings, quiet gardens between sessions. Time in Ubud is
              part of the teaching.
            </p>
          </div>
        </div>
        <div className={s.stripViewport}>
          <ul className={s.strip} data-drift>
            {strip.map((item) => (
              <li key={item.name} style={{ '--ratio': item.w }}>
                <div className="frame">
                  <Img name={item.name} sizes="(max-width: 760px) 75vw, 520px" />
                </div>
                <p className="caption">{item.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      <CtaBand
        title="Begin your journey"
        text="Tell us which programme interests you and we will share upcoming dates, fees and accommodation options."
        image="group-shala"
        button="Enquire about dates"
        position="50% 40%"
      />
    </>
  );
}

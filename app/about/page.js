import Img from '@/components/Img';
import { EnquiryButton } from '@/components/Enquiry';
import { CtaBand, Testimonials } from '@/components/Blocks';
import s from './about.module.css';

export const metadata = {
  title: 'About Mahamukti Yoga & Akhilesh Bodhi',
  description:
    'Mahamukti Yoga Center has offered traditional yoga training since 2006. Meet founder and lead teacher Akhilesh Bodhi, E-RYT yoga teacher and Reiki master.',
};

const reasons = [
  {
    title: 'Experienced, certified instructors',
    text: 'Qualified teachers who are passionate about teaching and lifelong students of yoga themselves, with a deep understanding of yoga philosophy.',
    image: 'class-shala',
  },
  {
    title: 'Programmes for every level',
    text: 'From Yoga Alliance teacher training to meditation retreats, each programme is designed so that beginners and experienced practitioners both find their path.',
    image: 'temple-blessing',
  },
  {
    title: 'A peaceful place to learn',
    text: "Our Bali settings are chosen for their calm, natural surroundings. Ubud's lush landscapes support focused, uninterrupted practice.",
    image: 'pool-garden',
  },
];

export default function About() {
  return (
    <>
      <section className={s.hero} data-hero>
        <div className={`container ${s.heroGrid}`}>
          <div>
            <h1 className={s.title}>
              <span data-hero-line>Mahamukti</span> <span data-hero-line>Yoga Center</span>
            </h1>
            <p className="lead" data-hero-line>
              Rooted in India and extending to the tranquil landscapes of Bali, Mahamukti Yoga has been a home for
              traditional yoga training since 2006.
            </p>
            <p data-hero-line>
              Our mission is authentic yoga education, steeped in ancient practice yet accessible today. Whether you
              are beginning or deepening an established practice, Mahamukti Yoga Bali is a place for learning, growth
              and transformation.
            </p>
          </div>
          <div className={`frame ${s.heroImage}`} data-hero-media>
            <Img name="temple-gate" priority sizes="(max-width: 860px) 100vw, 42vw" position="50% 60%" />
          </div>
        </div>
      </section>

      <section className={s.stats} aria-label="Mahamukti Yoga in numbers">
        <div className="container">
          <dl className={s.statList}>
            <div data-reveal>
              <dt>
                <span data-count="1000">1,000</span>+
              </dt>
              <dd>Students who have completed our retreats and teacher trainings</dd>
            </div>
            <div data-reveal>
              <dt>Since 2006</dt>
              <dd>Offering traditional yoga training in India and worldwide</dd>
            </div>
            <div data-reveal>
              <dt>Yoga Alliance</dt>
              <dd>Certified courses, recognised internationally</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <div className="section-head">
            <h2 id="why-title" data-reveal>
              Why students choose us
            </h2>
            <p data-reveal>
              Teacher training or a restorative retreat: every programme shares the same foundation of tradition,
              care and small groups.
            </p>
          </div>
          <ul className={s.reasons}>
            {reasons.map((r) => (
              <li key={r.title}>
                <div className="frame frame--4x3" data-reveal-image>
                  <Img name={r.image} sizes="(max-width: 860px) 100vw, 30vw" />
                </div>
                <h3 data-reveal>{r.title}</h3>
                <p data-reveal>{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="teacher-title">
        <div className={`container ${s.teacher}`}>
          <div className={s.teacherMedia}>
            <div className={`frame frame--4x5 ${s.teacherMain}`} data-reveal-image>
              <Img name="akhilesh-white" sizes="(max-width: 860px) 100vw, 38vw" position="52% 40%" />
            </div>
            <figure className={s.teacherArchive}>
              <div className="frame frame--1x1" data-reveal-image>
                <Img name="akhilesh-guru" sizes="200px" position="50% 30%" />
              </div>
              <figcaption className="caption">Akhilesh with his yoga guru</figcaption>
            </figure>
          </div>
          <div className={s.teacherText}>
            <h2 id="teacher-title" data-reveal>
              Akhilesh Bodhi
            </h2>
            <p className={s.role} data-reveal>
              Founder, yoga teacher and retreat facilitator
            </p>
            <p data-reveal>
              Akhilesh Bodhi is a yoga instructor, Reiki master and spiritual mentor. His journey began with a deep
              passion for ancient yogic traditions, which he combines with modern practice in a comprehensive
              approach to teaching.
            </p>
            <p data-reveal>
              His teaching integrates Hatha, Ashtanga and Raja Yoga to help students achieve balance, mindfulness and
              self-awareness. He has taught from Bali to Europe and the United States, leading retreats and workshops
              in countries including Austria and Turkey.
            </p>

            <h3 className={s.philosophyTitle} data-reveal>
              Teaching philosophy
            </h3>
            <p data-reveal>
              Inspired by masters such as B.K.S. Iyengar and K. Pattabhi Jois, Akhilesh blends structure with
              flexibility and adapts to each student. He encourages students to explore yoga beyond the mat, through
              the mind, ego and consciousness, as a holistic way of life.
            </p>
            <blockquote className={s.quote} data-reveal>
              <p>“Knowledge of yoga is the real knowledge of life.”</p>
            </blockquote>
            <div data-reveal>
              <EnquiryButton className="btn btn--ghost">Ask Akhilesh a question</EnquiryButton>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaBand
        title="Begin your journey to transformation"
        text="Explore our trainings and retreats and find the right time to join us in the calm of Ubud."
        image="aerial"
        button="Enquire about a programme"
      />
    </>
  );
}

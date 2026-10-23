import Img from '@/components/Img';
import Arrow from '@/components/Arrow';
import Faq from '@/components/Faq';
import { EnquiryButton } from '@/components/Enquiry';
import { CtaBand } from '@/components/Blocks';
import s from './ttc.module.css';

const PROGRAMME = '200 Hour Yoga Teacher Training';

export const metadata = {
  title: '200 Hour Yoga Teacher Training in Bali',
  description:
    'A fully residential, Yoga Alliance certified 200 hour yoga teacher training in Ubud, Bali: asana, pranayama, meditation, anatomy, philosophy and teaching practice.',
};

const heroFacts = [
  ['Certification', 'Yoga Alliance, 200 hours'],
  ['Format', 'Fully residential'],
  ['Meals', 'Daily vegetarian'],
  ['Intakes', 'Monthly, dates on request'],
];

const styles = ['Hatha', 'Vinyasa', 'Ashtanga', 'Meditation', 'Pranayama'];

const curriculum = [
  {
    title: 'Comprehensive training',
    image: 'study',
    text: 'From yoga philosophy to refining postures and instruction: the origins of yoga, correct alignment in each pose, and breathing methods that deepen your practice.',
  },
  {
    title: 'Teaching experience',
    image: 'class-adjust',
    text: 'You learn by doing, with plenty of chances to practise teaching in a supportive setting, building confidence and your own teaching voice.',
  },
  {
    title: 'Anatomy & physiology',
    image: 'class-shala',
    text: 'How the body works in relation to yoga, and how to apply that understanding when guiding a class.',
  },
  {
    title: 'Mindfulness & meditation',
    image: 'shala-meditation',
    text: 'Yoga is as much a calm mind as a physical practice. You will be guided through meditation techniques you can bring into your own classes.',
  },
  {
    title: 'Yogic lifestyle',
    image: 'circle-garden',
    text: 'Beyond the mat: a balanced diet, mental focus and personal growth as part of a yogic way of living.',
  },
];

const outcomes = [
  ['Personal transformation', 'Students come to learn postures and leave understanding themselves better.'],
  ['A new perspective', 'Away from daily routine, in nature and among like-minded people, things start to look different.'],
  ['Lasting friendships', 'Practising and learning together creates connections that last well beyond the course.'],
  ['Professional opportunities', 'A recognised certificate opens the door to teaching, whether as a career change or alongside your work.'],
  ['Knowing your body', 'A clear understanding of how the body is built and how it moves, on and off the mat.'],
  ['Self-assurance', 'Learning to lead a room builds confidence that carries into the rest of your life.'],
];

const reasons = [
  ['Experienced educators', 'Dedicated teachers who are passionate about sharing their knowledge and support you throughout.'],
  ['A beautiful setting', "Bali's natural surroundings make an ideal environment for practice, reflection and change."],
  ['Small groups', 'Small class sizes mean more individual time with your teachers.'],
  ['A supportive community', 'Many former students describe finding a second family during their training.'],
];

const faq = [
  {
    q: 'Do I need to be highly flexible to take part?',
    a: 'Absolutely not. Students of all ages have completed the training successfully. Your enthusiasm and willingness to learn matter far more than touching your toes.',
  },
  {
    q: 'How intense is the training?',
    a: 'It can be demanding. Days begin early and are full, but we build up gradually and modifications are always available. Listen to your body and rest when you need to.',
  },
  {
    q: "What's the food like? I'm vegetarian or vegan.",
    a: 'The school is very veggie-friendly: healthy, mostly vegetarian meals with vegan options always available, plus wonderful local fruit.',
  },
  {
    q: "I'm not sure I want to teach. Should I still do the training?",
    a: 'Yes. Many people take the training simply to deepen their own practice, and some who were sure they would never teach now run their own classes.',
  },
  {
    q: "What's the accommodation like?",
    a: 'Comfortable rather than luxurious, with everything you need and some beautiful views.',
  },
  {
    q: 'What level of yoga experience do I need?',
    a: 'Experience matters less than commitment. Dedicated newcomers have excelled on the course.',
  },
  {
    q: 'What if I struggle during the training?',
    a: "That's normal. Teachers and staff support you closely, the group looks out for one another, and wi-fi is available so you can stay in touch with home.",
  },
  {
    q: 'What certification will I receive?',
    a: 'A Yoga Alliance certified 200 hour certificate, recognised internationally, so you can teach around the world.',
  },
];

export default function TeacherTraining() {
  return (
    <>
      <section className={`section section--dark ${s.hero}`} data-hero>
        <div className={`container ${s.heroGrid}`}>
          <div className={s.heroText}>
            <h1 className={s.title}>
              <span data-hero-line>200 Hour Yoga</span> <span data-hero-line>Teacher Training</span>
            </h1>
            <p className={`lead ${s.heroLead}`} data-hero-line>
              Become a certified yoga teacher, or simply deepen your own practice, during a month of residential study
              in Ubud, Bali.
            </p>
            <div className="btn-row" data-hero-line>
              <EnquiryButton programme={PROGRAMME}>Enquire about dates</EnquiryButton>
              <a className={`text-link ${s.heroLink}`} href="#curriculum">
                See the curriculum <Arrow down />
              </a>
            </div>
          </div>
          <div className={`frame ${s.heroImage}`} data-hero-media>
            <Img name="class-openair" priority sizes="(max-width: 860px) 100vw, 40vw" position="58% 45%" />
          </div>
          <dl className={s.facts} data-hero-line>
            {heroFacts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <nav className={s.subnav} aria-label="On this page" data-subnav>
        <div className="container">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#curriculum">Curriculum</a></li>
            <li><a href="#included">What’s included</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </nav>

      <section id="overview" className="section" aria-labelledby="overview-title">
        <div className={`container ${s.overview}`}>
          <div className={s.overviewHead}>
            <h2 id="overview-title" data-reveal>
              Why 200 hours?
            </h2>
            <p className={s.overviewLead} data-reveal>
              Long enough to explore yoga fully, without being overwhelmed.
            </p>
          </div>
          <div className={s.overviewText}>
            <p data-reveal>
              Not too brief and not too long, 200 hours is the standard for an internationally recognised
              certification that lets you teach almost anywhere in the world.
            </p>
            <p data-reveal>
              You will learn the fundamentals and more: asanas, breathing techniques, meditation and yoga philosophy.
              It is an excellent place to begin, whether you want to teach others or develop your personal practice.
            </p>
          </div>
          <div className={s.styles}>
            <p className={s.stylesLabel} data-reveal>
              Styles you will learn
            </p>
            <ul>
              {styles.map((x) => (
                <li key={x} data-reveal>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="curriculum"
        className={`section section--sand ${s.curriculumSection}`}
        aria-labelledby="curriculum-title"
        data-steps
      >
        <div className={`container ${s.curriculum}`}>
          <div className={s.curriculumAside}>
            <h2 id="curriculum-title">The curriculum</h2>
            <p>
              Everything you need to become a skilled, self-assured teacher, taught through daily practice, study and
              guided teaching.
            </p>
            <div className={`frame ${s.curriculumImage}`}>
              {curriculum.map((m, i) => (
                <div key={m.image} className={s.stepImage} data-step-img data-on={i === 0 ? '' : undefined}>
                  <Img name={m.image} sizes="(max-width: 860px) 100vw, 40vw" />
                </div>
              ))}
            </div>
          </div>
          <div className={s.modulesWrap}>
            <span className={s.rail} aria-hidden="true">
              <span data-step-progress />
            </span>
            <ol className={s.modules}>
              {curriculum.map((m) => (
                <li key={m.title} data-step>
                  <h3>{m.title}</h3>
                  <div className={s.moduleBody}>
                    <p>{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="included" className="section" aria-labelledby="included-title">
        <div className="container">
          <div className="section-head">
            <h2 id="included-title" data-reveal>
              What’s included
            </h2>
            <p data-reveal>Fees and current dates are shared on enquiry, with private and shared room options.</p>
          </div>
          <div className={s.included}>
            <div data-reveal>
              <h3>Included</h3>
              <ul className={s.checkList}>
                <li>Accommodation for the length of the course</li>
                <li>Daily vegetarian meals</li>
                <li>Daily yoga and meditation classes</li>
                <li>Course materials</li>
                <li>Yoga Alliance 200 hour certificate on completion</li>
              </ul>
            </div>
            <div data-reveal>
              <h3>Not included</h3>
              <ul className={s.plainList}>
                <li>Airfares</li>
                <li>Airport transfers</li>
                <li>Personal expenses, including special meal orders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Moments from the training">
        <div className={`container ${s.mosaic}`}>
          <div className="frame" data-reveal-image>
            <Img name="ceremony" sizes="(max-width: 760px) 100vw, 50vw" />
          </div>
          <div className="frame" data-reveal-image>
            <Img name="tirta-empul" sizes="(max-width: 760px) 50vw, 25vw" />
          </div>
          <div className="frame" data-reveal-image>
            <Img name="temple-blessing" sizes="(max-width: 760px) 50vw, 25vw" />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="outcomes-title">
        <div className="container">
          <h2 id="outcomes-title" className={s.outcomesTitle} data-reveal>
            What you take home
          </h2>
          <ul className={s.outcomes}>
            {outcomes.map(([t, d]) => (
              <li key={t} data-reveal>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="why-title">
        <div className={`container ${s.why}`}>
          <div>
            <h2 id="why-title" data-reveal>
              Why train with Mahamukti
            </h2>
            <div className={`frame frame--4x3 ${s.whyImage}`} data-parallax>
              <Img name="akhilesh-white" sizes="(max-width: 860px) 100vw, 40vw" position="50% 35%" />
            </div>
            <p className={s.whyCaption}>Lead teacher Akhilesh Bodhi</p>
          </div>
          <ul className={s.reasons}>
            {reasons.map(([t, d]) => (
              <li key={t} data-reveal>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="section" aria-labelledby="faq-title">
        <div className={`container ${s.faqWrap}`}>
          <div data-pin>
            <h2 id="faq-title" data-reveal>
              Questions
            </h2>
          </div>
          <Faq items={faq} />
        </div>
      </section>

      <CtaBand
        title="Turn your passion into a profession"
        text="Begin your journey as a certified yoga teacher. Ask us for the next intake dates, fees and room options."
        image="temple-gate"
        programme={PROGRAMME}
        button="Enquire about the training"
        position="50% 35%"
      />
    </>
  );
}

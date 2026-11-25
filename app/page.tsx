import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const email = 'predatorsmmagym@gmail.com';
const enquiry = (subject: string) => 'mailto:' + email + '?subject=' + encodeURIComponent(subject);
const programmes = [
  { number: '01', title: 'Brazilian jiu-jitsu', short: 'BJJ', description: 'Learn to control, escape and submit with technique. Start with fundamentals, then develop your game in Gi and No-Gi classes.', tags: ['Fundamentals', 'Gi', 'No-Gi'], image: '/images/predators-gi.jpg', alt: 'Brazilian jiu-jitsu training on the mats at Predators', className: 'programme-bjj', href: '/classes/bjj' },
  { number: '02', title: 'Kickboxing', short: 'Striking', description: 'Build footwork, timing and striking confidence. Fundamentals classes give you a solid base before advanced training.', tags: ['Fundamentals', 'Advanced'], image: '/images/predators-kickboxing-class.jpg', alt: 'Kickboxing pad work during a Predators class', className: 'programme-kickboxing', href: '/classes/kickboxing' },
  { number: '03', title: 'Mixed martial arts', short: 'MMA', description: 'Bring striking and grappling together. Advanced MMA and Saturday sparring are listed on the adult timetable.', tags: ['Advanced', 'Sparring'], image: '/images/predators-mma-class.jpg', alt: 'Grappling training on the mats at Predators MMA Academy', className: 'programme-mma', href: '/classes/mma' },
];

export default function Home() {
  return <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-photo"><Image src="/images/predators-training.jpg" alt="Members practising kickboxing at Predators MMA in Manchester" fill priority sizes="(max-width: 800px) 100vw, 60vw" /></div>
          <div className="hero-wash" />
          <div className="wrap hero-content">
            <div className="hero-copy">
              <p className="eyebrow light">Predators MMA &amp; BJJ Academy <span className="eyebrow-line" /></p>
              <h1 id="hero-title">Come train<br /><em>with us.</em></h1>
              <p className="hero-lede">Brazilian jiu-jitsu, kickboxing and MMA in Manchester. Beginners welcome. Learn the fundamentals, train with good people, and keep getting better.</p>
              <div className="hero-actions">
                <a className="button button-accent" href={enquiry('Book my free introductory class')}>Book your free class <ArrowUpRight aria-hidden="true" /></a>
                <a className="text-link light-link" href="/timetable">View the timetable <ArrowDown aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-side-note" aria-hidden="true">TRAIN HARD. FEEL AT HOME.</div>
          </div>
          <div className="hero-bottom wrap"><span>Brazilian jiu-jitsu · Kickboxing · MMA</span><span>Manchester city centre</span><a href="/classes">Explore classes <ArrowDown aria-hidden="true" /></a></div>
        </section>

        <section className="intro-strip" aria-label="Training at Predators"><div className="wrap intro-strip-inner">
          <p>Good training.<br /><strong>Good people.</strong></p>
          <p>Walk in as a beginner. Train alongside people who want you to improve. Predators has been building skill and community in Manchester since 2006.</p>
          <a className="text-link" href="/about">Meet the academy <ArrowUpRight aria-hidden="true" /></a>
        </div></section>

        <section className="section classes-section" id="classes" aria-labelledby="classes-title"><div className="wrap">
          <div className="section-heading">
            <div><p className="eyebrow">Find your discipline</p><h2 id="classes-title">Find your<br />class.</h2></div>
            <p>Start with the fundamentals, or bring your experience to the advanced sessions. Choose your discipline and find your place on the mats.</p>
          </div>
          <div className="programme-grid">
            {programmes.map((programme) => (
              <article className={'programme ' + programme.className} key={programme.number}>
                <div className="programme-image"><Image src={programme.image} alt={programme.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
                <div className="programme-content">
                  <span className="programme-number">{programme.number} / {programme.short}</span>
                  <div><h3>{programme.title}</h3><p>{programme.description}</p>
                    <div className="programme-tags">{programme.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a className="programme-link" href={programme.href}>Explore the class <ArrowUpRight aria-hidden="true" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="gi-note">
            <span className="gi-note-index">BJJ / TWO FORMATS</span>
            <div><strong>GI</strong><p>Train in the traditional jacket and trousers. Work with grips, control and technique.</p></div>
            <div><strong>NO-GI</strong><p>Train without the jacket. Focus on movement, control and submissions without clothing grips.</p></div>
            <a href="/classes/bjj" aria-label="Learn about Gi and No-Gi Brazilian jiu-jitsu"><ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div></section>

        <section className="quote-section" aria-label="Member testimonial"><div className="wrap quote-inner">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote><p>I thought it would be really intimidating. How wrong I was! Predators is welcoming for all abilities.</p><footer>Mike / Predators member</footer></blockquote>
          <span className="quote-rule" aria-hidden="true" />
        </div></section>

    <section className="section home-next"><div className="wrap home-next-grid">
      <div><p className="eyebrow light">Plan your first visit</p><h2>Find your time.<br />Find your people.</h2></div>
      <div><p>Morning and evening training, fundamentals and advanced sessions, plus Gi and No-Gi BJJ. See the full adult timetable and find a class that fits.</p><Link className="button button-accent" href="/timetable">Explore the timetable <ArrowUpRight aria-hidden="true" /></Link><Link className="text-link light-link" href="/contact">Get in touch <ArrowUpRight aria-hidden="true" /></Link></div>
    </div></section>
  </main>;
}

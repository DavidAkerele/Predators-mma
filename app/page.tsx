import Image from 'next/image';
import { ArrowDown, ArrowUp, ArrowUpRight, Camera, Mail, MapPin, Phone } from 'lucide-react';
import Navigation from './navigation';
import Schedule from './schedule';

const email = 'predatorsmmagym@gmail.com';
const enquiry = (subject: string) => 'mailto:' + email + '?subject=' + encodeURIComponent(subject);

const programmes = [
  {
    number: '01', title: 'Brazilian jiu-jitsu', short: 'BJJ',
    description: 'Learn to control, escape and submit with technique. Start with fundamentals, then develop your game in Gi and No-Gi classes.',
    tags: ['Fundamentals', 'Gi', 'No-Gi'],
    image: '/images/predators-gi.jpg',
    alt: 'Brazilian jiu-jitsu training on the mats at Predators',
    className: 'programme-bjj',
  },
  {
    number: '02', title: 'Kickboxing', short: 'Striking',
    description: 'Build footwork, timing and striking confidence. Fundamentals classes give you a solid base before advanced training.',
    tags: ['Fundamentals', 'Advanced'],
    image: '/images/predators-kickboxing-class.jpg',
    alt: 'Kickboxing pad work during a Predators class',
    className: 'programme-kickboxing',
  },
  {
    number: '03', title: 'Mixed martial arts', short: 'MMA',
    description: 'Bring striking and grappling together. Advanced MMA and Saturday sparring are listed on the adult timetable.',
    tags: ['Advanced', 'Sparring'],
    image: '/images/predators-mma-class.jpg',
    alt: 'Grappling training on the mats at Predators MMA Academy',
    className: 'programme-mma',
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="topline"><div className="wrap topline-inner">
        <span>Manchester, UK <span aria-hidden="true">/</span> Est. 2006</span>
        <span>All levels welcome <span aria-hidden="true">/</span> Your first class is free</span>
      </div></div>
      <Navigation />

      <main id="main">
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
                <a className="text-link light-link" href="#timetable">View the timetable <ArrowDown aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-side-note" aria-hidden="true">TRAIN HARD. FEEL AT HOME.</div>
          </div>
          <div className="hero-bottom wrap"><span>Brazilian jiu-jitsu · Kickboxing · MMA</span><span>Manchester city centre</span><a href="#classes">Explore classes <ArrowDown aria-hidden="true" /></a></div>
        </section>

        <section className="intro-strip" aria-label="Training at Predators"><div className="wrap intro-strip-inner">
          <p>Good training.<br /><strong>Good people.</strong></p>
          <p>Walk in as a beginner. Train alongside people who want you to improve. Predators has been building skill and community in Manchester since 2006.</p>
          <a className="text-link" href="#about">Meet the academy <ArrowUpRight aria-hidden="true" /></a>
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
                    <a className="programme-link" href="#timetable">See class times <ArrowUpRight aria-hidden="true" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="gi-note">
            <span className="gi-note-index">BJJ / TWO FORMATS</span>
            <div><strong>GI</strong><p>Train in the traditional jacket and trousers. Work with grips, control and technique.</p></div>
            <div><strong>NO-GI</strong><p>Train without the jacket. Focus on movement, control and submissions without clothing grips.</p></div>
            <a href="#timetable" aria-label="See Gi and No-Gi times in the timetable"><ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div></section>

        <Schedule />

        <section className="section story-section" id="about" aria-labelledby="story-title"><div className="wrap story-grid">
          <div className="story-image"><Image src="/images/predators-nogi.jpg" alt="Coach demonstrating a grappling technique to a Predators class" fill sizes="(max-width: 760px) 100vw, 48vw" /><span className="image-caption">THE WORK IS BETTER TOGETHER.</span></div>
          <div className="story-copy"><p className="eyebrow">Our academy</p><h2 id="story-title">Train hard.<br /><em>Feel at home.</em></h2>
            <p>Gavin Boardman founded Predators in 2006 to create a positive place to train. The idea is simple: solid fundamentals, steady improvement and a group that helps every member grow.</p>
            <p>Whether you&apos;re taking your first class or preparing to compete, you&apos;ll train with respect and be part of the team.</p>
            <a className="button button-dark" href={enquiry('Visit Predators MMA Academy')}>Come and meet us <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div></section>

        <section className="section social-section" id="instagram" aria-labelledby="social-title"><div className="wrap">
          <div className="social-heading">
            <div><p className="eyebrow light">Inside the academy</p><h2 id="social-title">Life on<br />the mats.</h2></div>
            <div><p>From padwork to grappling rounds, the best way to understand Predators is to see the team train. Follow the gym for a closer look.</p>
              <a className="button button-accent" href="https://www.instagram.com/predators_mma_gym/" target="_blank" rel="noopener noreferrer">Follow us on Instagram <Camera aria-hidden="true" /></a>
            </div>
          </div>
          <div className="social-gallery">
            <figure><div className="social-photo"><Image src="/images/predators-padwork.jpg" alt="Predators member working punches with a coach holding pads" fill sizes="(max-width: 650px) 90vw, 34vw" /></div><figcaption><span>01 / STRIKING</span><strong>PUT IN THE ROUNDS.</strong></figcaption></figure>
            <figure><div className="social-photo"><Image src="/images/predators-gi-training.jpg" alt="Two Predators members practising Brazilian jiu-jitsu in the Gi" fill sizes="(max-width: 650px) 90vw, 30vw" /></div><figcaption><span>02 / GI</span><strong>LEARN THE DETAILS.</strong></figcaption></figure>
            <figure><div className="social-photo"><Image src="/images/predators-nogi-training.jpg" alt="Predators members practising No-Gi grappling in class" fill sizes="(max-width: 650px) 90vw, 34vw" /></div><figcaption><span>03 / NO-GI</span><strong>KEEP MOVING.</strong></figcaption></figure>
          </div>
          <p className="social-credit">Training photographs from the academy website. See the gym&apos;s Instagram for current posts.</p>
        </div></section>

        <section className="section videos-section" id="videos" aria-labelledby="videos-title"><div className="wrap">
          <div className="section-heading videos-heading">
            <div><p className="eyebrow">See it for yourself</p><h2 id="videos-title">Watch the<br />team train.</h2></div>
            <p>Get a feel for a class before you visit. These videos are from the academy&apos;s own channel; you can find more everyday training clips on Instagram.</p>
          </div>
          <div className="video-grid">
            <article className="video-item"><div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/JC3x1hedbLo" title="See Brazilian jiu-jitsu, kickboxing and MMA classes at Predators" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><h3>Inside Predators</h3><p>Take a look at the academy and the people you&apos;ll train with.</p></article>
            <article className="video-item"><div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/BWK5ka7vf7A" title="Watch a kickboxing fundamentals class at Predators" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><h3>A kickboxing class</h3><p>See the fundamentals in action, including partner drills and padwork.</p></article>
          </div>
          <a className="text-link video-instagram-link" href="https://www.instagram.com/predators_mma_gym/reels/" target="_blank" rel="noopener noreferrer">Watch more videos on Instagram <Camera aria-hidden="true" /></a>
        </div></section>

        <section className="quote-section" aria-label="Member testimonial"><div className="wrap quote-inner">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote><p>I thought it would be really intimidating. How wrong I was! Predators is welcoming for all abilities.</p><footer>Mike / Predators member</footer></blockquote>
          <span className="quote-rule" aria-hidden="true" />
        </div></section>

        <section className="visit-section" id="contact" aria-labelledby="visit-title"><div className="wrap visit-grid">
          <div><p className="eyebrow">Your first step</p><h2 id="visit-title">Your first class<br /><em>starts here.</em></h2><p>Tell us what you&apos;d like to try. We&apos;ll help you find the right first class.</p><a className="button button-accent" href={enquiry('Book my free class at Predators MMA')}>Book your free class <ArrowUpRight aria-hidden="true" /></a></div>
          <div className="visit-details">
            <div><span><MapPin aria-hidden="true" /> Visit</span><p>1st Floor, 15 Chatley Street<br />Entrance on Whitfield Street<br />Manchester M3 1HU</p><a href="https://www.google.com/maps/search/?api=1&query=15+Chatley+Street+Manchester+M3+1HU" target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight aria-hidden="true" /></a></div>
            <div><span><Phone aria-hidden="true" /> Call</span><a href="tel:+447897313488">07897 313 488 <ArrowUpRight aria-hidden="true" /></a></div>
            <div><span><Mail aria-hidden="true" /> Email</span><a href={'mailto:' + email}>{email} <ArrowUpRight aria-hidden="true" /></a></div>
            <div><span><Camera aria-hidden="true" /> Follow</span><a href="https://www.instagram.com/predators_mma_gym/" target="_blank" rel="noopener noreferrer">@predators_mma_gym <ArrowUpRight aria-hidden="true" /></a></div>
          </div>
        </div></section>
      </main>
      <footer className="site-footer"><div className="wrap footer-inner"><a className="footer-brand" href="#top" aria-label="Predators MMA, back to top">Predators MMA</a><span>© 2026 Predators MMA &amp; BJJ Academy</span><a href="#timetable">Timetable <ArrowUp aria-hidden="true" /></a></div></footer>
    </>
  );
}

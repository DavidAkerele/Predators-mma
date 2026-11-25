import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Dumbbell, ShieldCheck, UsersRound, Camera } from 'lucide-react';

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

        <section className="section home-benefits" aria-labelledby="benefits-title"><div className="wrap home-benefits-grid">
          <div className="home-benefits-photo"><Image src="/images/predators-home-benefits.jpg" alt="A Predators member practising a kickboxing kick with a pad holder" fill sizes="(max-width: 800px) 100vw, 48vw" /><span>GET FIT WHILE LEARNING MARTIAL ARTS</span></div>
          <div className="home-benefits-copy"><p className="eyebrow">More than a workout</p><h2 id="benefits-title">Build skill.<br />Feel stronger.</h2><p>Train your body, learn useful skills and become part of something positive. Classes give you a place to work on strength, balance and confidence while learning martial arts.</p>
            <div className="home-benefit-list">
              <div><Dumbbell aria-hidden="true" /><div><h3>Move with purpose</h3><p>Work on fitness, flexibility and coordination through real training.</p></div></div>
              <div><ShieldCheck aria-hidden="true" /><div><h3>Learn practical skills</h3><p>Develop striking, grappling and self-defence fundamentals with coaches.</p></div></div>
              <div><UsersRound aria-hidden="true" /><div><h3>Train together</h3><p>Find partners who help you improve, whatever brought you to the gym.</p></div></div>
            </div>
          </div>
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

        <section className="section home-founder" aria-labelledby="founder-title"><div className="wrap home-founder-grid">
          <div className="home-founder-copy"><p className="eyebrow light">Since 2006</p><h2 id="founder-title">Built by people<br /><em>who love training.</em></h2><p>Gavin Boardman founded Predators to create a positive place to learn and improve. His approach starts with solid fundamentals, small improvements and a room where the group helps each person grow.</p><p>White belt or black belt, first timer or fighter: everyone shares the mats and leaves their ego at the door.</p><Link className="text-link light-link" href="/about">Meet the academy <ArrowUpRight aria-hidden="true" /></Link></div>
          <div className="home-founder-photo"><Image src="/images/predators-home-story.jpg" alt="Two members practising a grappling takedown at Predators" fill sizes="(max-width: 800px) 100vw, 48vw" /><span>THE GROUP MAKES YOU BETTER.</span></div>
        </div></section>

        <section className="section home-gallery" aria-labelledby="gallery-title"><div className="wrap">
          <div className="section-heading home-gallery-heading"><div><p className="eyebrow light">Inside the gym</p><h2 id="gallery-title">The work<br />looks like this.</h2></div><div><p>Padwork, partner drills and rounds on the mats. Every session is a chance to learn something and put it into practice.</p><Link className="text-link light-link" href="/videos">Watch the team train <Camera aria-hidden="true" /></Link></div></div>
          <div className="home-gallery-grid">
            <figure><div><Image src="/images/predators-home-kickboxing.jpg" alt="Predators member kicking a pad during kickboxing training" fill sizes="(max-width: 700px) 80vw, 33vw" /></div><figcaption>01 / KICKBOXING</figcaption></figure>
            <figure><div><Image src="/images/predators-home-striking.jpg" alt="Two Predators members practising striking drills" fill sizes="(max-width: 700px) 80vw, 33vw" /></div><figcaption>02 / PARTNER DRILLS</figcaption></figure>
            <figure><div><Image src="/images/predators-home-rounds.jpg" alt="Predators members practising a knee strike on the mats" fill sizes="(max-width: 700px) 80vw, 33vw" /></div><figcaption>03 / PUT IN THE ROUNDS</figcaption></figure>
          </div>
        </div></section>

        <section className="section home-voices" aria-labelledby="voices-title"><div className="wrap"><div className="home-voices-heading"><p className="eyebrow">What members say</p><h2 id="voices-title">A place to belong.</h2></div><div className="home-voices-grid">
          <blockquote className="home-voice-featured"><p>“Welcoming for all abilities.”</p><footer>Mike / Predators member</footer></blockquote>
          <div><blockquote><p>“Something special about the place.”</p><footer>Steve / Predators member</footer></blockquote><blockquote><p>“An ego free zone.”</p><footer>Wasim / Predators member</footer></blockquote></div>
        </div></div></section>

        <section className="section home-youth" aria-labelledby="youth-title"><div className="wrap home-youth-grid">
          <div className="home-youth-photo"><Image src="/images/predators-home-youth.jpg" alt="Two young students practising Brazilian jiu-jitsu at Predators" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
          <div className="home-youth-copy"><p className="eyebrow">For younger athletes</p><h2 id="youth-title">A good start<br />on the mats.</h2><p>The academy also offers martial arts for children and young people. The programme focuses on focus, discipline, respect and confidence through energetic training.</p><p>Ask the team about current youth sessions and the right class for your child.</p><Link className="button button-dark" href="/contact">Ask about youth classes <ArrowUpRight aria-hidden="true" /></Link></div>
        </div></section>

    <section className="section home-next"><div className="home-next-photo"><Image src="/images/predators-home-cta.jpg" alt="Predators members working through striking drills on the mats" fill sizes="100vw" /></div><div className="wrap home-next-grid">
      <div><p className="eyebrow light">Plan your first visit</p><h2>Find your time.<br />Find your people.</h2></div>
      <div><p>Weekday evening and Saturday training, fundamentals and advanced sessions, plus Gi and No-Gi BJJ. See the full adult timetable and find a class that fits.</p><Link className="button button-accent" href="/timetable">Explore the timetable <ArrowUpRight aria-hidden="true" /></Link><Link className="text-link light-link" href="/contact">Get in touch <ArrowUpRight aria-hidden="true" /></Link></div>
    </div></section>
  </main>;
}

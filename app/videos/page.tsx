import Image from 'next/image';
import { ArrowUpRight, Camera } from 'lucide-react';
import type { Metadata } from 'next';
import { pageMetadata } from '../metadata';
import PageHero from '../page-hero';
export const metadata: Metadata = pageMetadata('Videos & Life on the Mats | Predators MMA', 'See Brazilian jiu-jitsu, kickboxing and MMA training at Predators in Manchester. Watch academy videos and visit our Instagram Reels.', '/videos');
export default function VideosPage() { return <main id="main">
<PageHero eyebrow="The gym in action" title={<>See life<br /><em>on the mats.</em></>} description="Get a feel for the sessions, the people and the work before you step through the door." image="/images/predators-videos-hero.jpg" imageAlt="Predators member practising striking during a gym session" imagePosition="58% 48%" />
        <section className="section social-section" id="instagram" aria-labelledby="social-title"><div className="wrap">
          <div className="social-heading">
            <div><p className="eyebrow light">Inside the academy</p><h2 id="social-title">Life on<br />the mats.</h2></div>
            <div><p>From padwork to grappling rounds, the best way to understand Predators is to see the team train. Follow the gym for a closer look.</p>
              <a className="button button-accent" href="https://www.instagram.com/predators_mma_gym/" target="_blank" rel="noopener noreferrer">Follow us on Instagram <Camera aria-hidden="true" /></a>
            </div>
          </div>
          <div className="social-gallery">
            <figure><div className="social-photo"><Image src="/images/predators-kickboxing-detail.jpg" alt="Predators member practising kickboxing with a coach holding pads" fill sizes="(max-width: 650px) 90vw, 34vw" /></div><figcaption><span>01 / STRIKING</span><strong>PUT IN THE ROUNDS.</strong></figcaption></figure>
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

</main>; }

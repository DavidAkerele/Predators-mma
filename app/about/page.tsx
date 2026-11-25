import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Our Academy | Predators MMA Manchester', description: 'Meet Predators MMA and BJJ Academy, founded in Manchester in 2006. A welcoming place to train Brazilian jiu-jitsu, kickboxing and MMA.' };
export default function AboutPage() { return <main id="main">
<section className="page-intro"><div className="wrap"><p className="eyebrow light">Our academy</p><h1>Built on good training.<br /><em>And good people.</em></h1><p>Since 2006, Predators has brought people together to learn, work hard and improve on the mats in Manchester.</p></div></section>
        <section className="section story-section" id="about" aria-labelledby="story-title"><div className="wrap story-grid">
          <div className="story-image"><Image src="/images/predators-nogi.jpg" alt="Coach demonstrating a grappling technique to a Predators class" fill sizes="(max-width: 760px) 100vw, 48vw" /><span className="image-caption">THE WORK IS BETTER TOGETHER.</span></div>
          <div className="story-copy"><p className="eyebrow">Our academy</p><h2 id="story-title">Train hard.<br /><em>Feel at home.</em></h2>
            <p>Gavin Boardman founded Predators in 2006 to create a positive place to train. The idea is simple: solid fundamentals, steady improvement and a group that helps every member grow.</p>
            <p>Whether you&apos;re taking your first class or preparing to compete, you&apos;ll train with respect and be part of the team.</p>
            <a className="button button-dark" href="/contact">Come and meet us <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div></section>

<section className="section values-section"><div className="wrap"><p className="eyebrow light">What to expect</p><div className="values-grid"><div><span>01</span><h2>Start where you are.</h2><p>New to martial arts? Fundamentals sessions help you learn at your own pace with experienced coaches and training partners.</p></div><div><span>02</span><h2>Keep improving.</h2><p>Build strong habits, develop technique and move into advanced training when you are ready.</p></div><div><span>03</span><h2>Be part of the team.</h2><p>People come here for different reasons. Everyone shares the mats and helps the room get better.</p></div></div><Link className="button button-accent" href="/classes">Explore our classes <ArrowUpRight aria-hidden="true" /></Link></div></section>
</main>; }

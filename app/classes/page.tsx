import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { pageMetadata } from '../metadata';

export const metadata: Metadata = pageMetadata('Classes | Predators MMA Manchester', 'Explore Brazilian jiu-jitsu, kickboxing and mixed martial arts at Predators MMA and BJJ Academy in Manchester.', '/classes');

const classes = [
  { number: '01', name: 'Brazilian jiu-jitsu', note: 'Grappling / Gi & No-Gi', text: 'Learn to control, escape and submit on the ground. Build your foundation, then explore Gi and No-Gi training.', href: '/classes/bjj', formats: 'Fundamentals · Gi advanced · No-Gi advanced' },
  { number: '02', name: 'Kickboxing', note: 'Striking / Footwork & timing', text: 'Build striking skills and confidence through coaching, partner drills and padwork.', href: '/classes/kickboxing', formats: 'Fundamentals · Advanced' },
  { number: '03', name: 'Mixed martial arts', note: 'Striking + grappling', text: 'Bring your skills together with MMA training and supervised sparring.', href: '/classes/mma', formats: 'Advanced · Saturday sparring' },
];

export default function ClassesPage() {
  return <main id="main">
    <section className="page-intro"><div className="wrap"><p className="eyebrow light">Train with us</p><h1>Find your<br /><em>discipline.</em></h1><p>Three ways to train. A place for people starting from scratch and those sharpening their skills.</p></div></section>
    <section className="section class-index-section"><div className="wrap">
      <div className="class-index-intro"><p className="eyebrow light">Adult programmes</p><p>Start with a fundamentals class or explore the advanced sessions. Your first introductory class is free.</p></div>
      <div className="class-index-list">
        {classes.map((item) => <Link className="class-index-item" href={item.href} key={item.number}>
          <span className="class-index-number">{item.number}</span><div><p className="class-index-note">{item.note}</p><h2>{item.name}</h2><p>{item.text}</p><span className="class-index-formats">{item.formats}</span></div><ArrowUpRight aria-hidden="true" />
        </Link>)}
      </div>
      <div className="class-index-bottom"><p>Unsure where to begin? Tell us what you&apos;re interested in and we&apos;ll help you choose a first session.</p><Link className="button button-accent" href="/contact">Ask about a class <ArrowUpRight aria-hidden="true" /></Link></div>
    </div></section>
  </main>;
}

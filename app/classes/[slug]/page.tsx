import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { pageMetadata } from '../../metadata';

const classes = {
  bjj: {
    eyebrow: 'Brazilian jiu-jitsu', title: 'Make the mats your own.', lead: 'Learn to control, escape and submit through technique, movement and practice with your training partners.',
    image: '/images/predators-bjj-detail.jpg', alt: 'Predators members training Brazilian jiu-jitsu in the Gi',
    intro: 'BJJ is ground based grappling. At Predators, fundamentals give you a clear starting point, whether you want to train for fitness, self defence or competition. As you develop, you can train in both Gi and No-Gi.',
    formats: [
      { name: 'Fundamentals', text: 'Learn positions, escapes and core techniques with a welcoming group. A good place to start.' },
      { name: 'Gi', text: 'Train in the traditional jacket and trousers. Grips, control and patient technique open up a different game.' },
      { name: 'No-Gi', text: 'Train without the jacket. Develop movement, control and submissions without clothing grips.' },
    ],
    timetable: 'BJJ fundamentals run weekday evenings and Saturday morning. Advanced Gi and No-Gi sessions are listed separately on the adult timetable.',
  },
  kickboxing: {
    eyebrow: 'Kickboxing', title: 'Find your rhythm. Build your skill.', lead: 'Build footwork, timing and striking confidence with coaching, partner drills and padwork.',
    image: '/images/predators-padwork.jpg', alt: 'Predators member working kickboxing combinations with a pad holder',
    intro: 'Kickboxing at Predators is a practical way to get moving and learn striking skills. Fundamentals sessions focus on the basics; advanced sessions give experienced members a place to keep developing.',
    formats: [
      { name: 'Fundamentals', text: 'Work on stance, footwork, combinations and defensive movement at a steady pace.' },
      { name: 'Advanced', text: 'Keep sharpening timing, technique and conditioning with experienced training partners.' },
    ],
    timetable: 'Kickboxing fundamentals run weekday evenings and Saturday midday. Advanced kickboxing appears on Tuesday and Thursday evenings.',
  },
  mma: {
    eyebrow: 'Mixed martial arts', title: 'Bring it all together.', lead: 'Connect your striking and grappling in a challenging, supportive training environment.',
    image: '/images/predators-mma-detail.jpg', alt: 'Predators members practising MMA grappling techniques',
    intro: 'MMA combines skills from Brazilian jiu-jitsu, wrestling, kickboxing and boxing. Predators welcomes different goals, from getting fitter to preparing to compete. If you are new, our team can help you choose a suitable first class.',
    formats: [
      { name: 'Advanced MMA', text: 'Develop how your striking and grappling work together with coached training.' },
      { name: 'Sparring', text: 'Saturday MMA sparring is listed on the adult timetable for members ready to take part.' },
    ],
    timetable: 'Advanced MMA runs Monday and Wednesday evenings on Mat B. Saturday MMA sparring is listed at 14:00.',
  },
} as const;

type Slug = keyof typeof classes;
export function generateStaticParams() { return Object.keys(classes).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!(slug in classes)) return {};
  const item = classes[slug as Slug];
  return pageMetadata(`${item.eyebrow} classes | Predators MMA Manchester`, item.lead, `/classes/${slug}`);
}

export default async function ClassPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in classes)) notFound();
  const item = classes[slug as Slug];
  return <main id="main">
    <section className="class-hero"><div className="class-hero-image"><Image src={item.image} alt={item.alt} fill priority sizes="(max-width: 800px) 100vw, 60vw" /></div><div className="class-hero-wash" /><div className="wrap class-hero-content"><Link href="/classes" className="class-back"><ArrowLeft aria-hidden="true" /> All classes</Link><p className="eyebrow light">{item.eyebrow} / Predators Manchester</p><h1>{item.title}</h1><p>{item.lead}</p><Link className="button button-accent" href="/contact">Try a free class <ArrowUpRight aria-hidden="true" /></Link></div></section>
    <section className="section class-detail-section"><div className="wrap class-detail-grid"><div><p className="eyebrow">The discipline</p><h2>Start here.<br />Keep growing.</h2><p>{item.intro}</p></div><div className="class-formats"><p className="eyebrow">Training formats</p>{item.formats.map((format) => <div className="class-format" key={format.name}><Check aria-hidden="true" /><div><h3>{format.name}</h3><p>{format.text}</p></div></div>)}</div></div></section>
    <section className="section class-times-section"><div className="wrap class-times-grid"><div><p className="eyebrow light">When to train</p><h2>Find your<br />time on the mats.</h2></div><div><p>{item.timetable}</p><div className="action-row"><Link className="button button-accent" href="/timetable">View the full timetable <ArrowUpRight aria-hidden="true" /></Link><Link className="text-link light-link" href="/contact">Ask us a question <ArrowUpRight aria-hidden="true" /></Link></div></div></div></section>
  </main>;
}

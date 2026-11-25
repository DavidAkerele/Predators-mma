import type { Metadata } from 'next';
import Schedule from '../schedule';
export const metadata: Metadata = { title: 'Adult Class Timetable | Predators MMA Manchester', description: 'See the adult BJJ, kickboxing and MMA timetable at Predators. Find fundamentals, Gi, No-Gi, advanced classes and Saturday sessions.' };
export default function TimetablePage() { return <main id="main"><section className="page-intro"><div className="wrap"><p className="eyebrow light">Adult class times</p><h1>Find your<br /><em>next session.</em></h1><p>Choose a day or discipline below. All times are local to Manchester.</p></div></section><Schedule /></main>; }

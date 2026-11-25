import type { Metadata } from 'next';
import Schedule from '../schedule';
import { pageMetadata } from '../metadata';
import PageHero from '../page-hero';
export const metadata: Metadata = pageMetadata('Adult Class Timetable | Predators MMA Manchester', 'See the adult BJJ, kickboxing and MMA timetable at Predators. Find fundamentals, Gi, No-Gi, advanced classes and Saturday sessions.', '/timetable');
export default function TimetablePage() { return <main id="main"><PageHero eyebrow="Adult class times" title={<>Find your<br /><em>next session.</em></>} description="Choose a day or discipline below. All times are local to Manchester." image="/images/predators-timetable-hero.webp" imageAlt="Two Predators members practising grappling on the mats" imagePosition="55% 48%" /><Schedule /></main>; }

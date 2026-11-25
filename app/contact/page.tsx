import type { Metadata } from 'next';
import { ArrowUpRight, Camera, Mail, MapPin, Phone } from 'lucide-react';
const email = 'predatorsmmagym@gmail.com';
const enquiry = (subject: string) => 'mailto:' + email + '?subject=' + encodeURIComponent(subject);
export const metadata: Metadata = { title: 'Contact & Visit | Predators MMA Manchester', description: 'Book a free introductory class at Predators MMA and BJJ Academy. Find us at 15 Chatley Street, Manchester M3 1HU.' };
export default function ContactPage() { return <main id="main">
<section className="page-intro"><div className="wrap"><p className="eyebrow light">Come train with us</p><h1>Ready to<br /><em>get started?</em></h1><p>Beginners are welcome. Tell us which class interests you and we&apos;ll help you plan your first visit.</p></div></section>
        <section className="visit-section" id="contact" aria-labelledby="visit-title"><div className="wrap visit-grid">
          <div><p className="eyebrow">Your first step</p><h2 id="visit-title">Your first class<br /><em>starts here.</em></h2><p>Tell us what you&apos;d like to try. We&apos;ll help you find the right first class.</p><a className="button button-accent" href={enquiry('Book my free class at Predators MMA')}>Book your free class <ArrowUpRight aria-hidden="true" /></a></div>
          <div className="visit-details">
            <div><span><MapPin aria-hidden="true" /> Visit</span><p>1st Floor, 15 Chatley Street<br />Entrance on Whitfield Street<br />Manchester M3 1HU</p><a href="https://www.google.com/maps/search/?api=1&query=15+Chatley+Street+Manchester+M3+1HU" target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight aria-hidden="true" /></a></div>
            <div><span><Phone aria-hidden="true" /> Call</span><a href="tel:+447897313488">07897 313 488 <ArrowUpRight aria-hidden="true" /></a></div>
            <div><span><Mail aria-hidden="true" /> Email</span><a href={'mailto:' + email}>{email} <ArrowUpRight aria-hidden="true" /></a></div>
            <div><span><Camera aria-hidden="true" /> Follow</span><a href="https://www.instagram.com/predators_mma_gym/" target="_blank" rel="noopener noreferrer">@predators_mma_gym <ArrowUpRight aria-hidden="true" /></a></div>
          </div>
        </div></section>
</main>; }

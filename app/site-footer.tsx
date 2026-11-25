import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Camera, MapPin, Play } from 'lucide-react';

const explore = [
  { href: '/', label: 'Home' },
  { href: '/classes', label: 'All classes' },
  { href: '/timetable', label: 'Timetable' },
  { href: '/about', label: 'Our academy' },
  { href: '/videos', label: 'Videos' },
  { href: '/contact', label: 'Contact' },
];

const programmes = [
  { href: '/classes/bjj', label: 'Brazilian jiu-jitsu' },
  { href: '/classes/kickboxing', label: 'Kickboxing' },
  { href: '/classes/mma', label: 'Mixed martial arts' },
];

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="wrap footer-main">
      <div className="footer-intro">
        <Link className="footer-logo" href="/" aria-label="Predators MMA and BJJ Academy, home"><Image src="/images/predators-logo.png" alt="" width={1858} height={778} sizes="150px" /></Link>
        <p>Good training, good people. Brazilian jiu-jitsu, kickboxing and MMA in Manchester since 2006.</p>
        <Link className="button button-accent" href="/contact">Book your free class <ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <div className="footer-links">
        <nav className="footer-column" aria-label="Footer navigation"><h2>Explore</h2>{explore.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
        <nav className="footer-column" aria-label="Programmes"><h2>Train</h2>{programmes.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
      </div>
      <div className="footer-contact"><h2>Come find us</h2>
        <address>1st Floor, 15 Chatley Street<br />Entrance on Whitfield Street<br />Manchester M3 1HU</address>
        <a href="https://www.google.com/maps/search/?api=1&query=15+Chatley+Street+Manchester+M3+1HU" target="_blank" rel="noopener noreferrer">Get directions <MapPin aria-hidden="true" /></a>
        <a href="tel:+447897313488">07897 313 488</a>
        <a href="mailto:predatorsmmagym@gmail.com">predatorsmmagym@gmail.com</a>
        <div className="footer-social"><a href="https://www.instagram.com/predators_mma_gym/" target="_blank" rel="noopener noreferrer" aria-label="Predators MMA on Instagram"><Camera aria-hidden="true" /></a><a href="https://www.youtube.com/channel/UC2A9AeIcLcN81ixM3bR2uQQ" target="_blank" rel="noopener noreferrer" aria-label="Predators MMA on YouTube"><Play aria-hidden="true" /></a></div>
      </div>
    </div>
    <div className="footer-bottom"><div className="wrap"><span>© {new Date().getFullYear()} Predators MMA &amp; BJJ Academy</span><span>Manchester, United Kingdom</span></div></div>
  </footer>;
}

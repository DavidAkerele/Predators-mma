import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Navigation from './navigation';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://predator-mma.vercel.app'),
  title: 'Predators MMA & BJJ Academy | Manchester',
  description: 'Train Brazilian jiu-jitsu, kickboxing and MMA at Predators in Manchester. Explore Gi and No-Gi classes, check the adult timetable and book a free introductory class.',
  openGraph: {
    title: 'Predators MMA & BJJ Academy',
    description: 'BJJ, kickboxing and MMA in Manchester. Find your class and get on the mats.',
    images: [{ url: '/images/predators-training.jpg', width: 1920, height: 1200, alt: 'Predators MMA kickboxing training' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="topline"><div className="wrap topline-inner">
          <span>Manchester, UK <span aria-hidden="true">/</span> Est. 2006</span>
          <span>All levels welcome <span aria-hidden="true">/</span> Your first class is free</span>
        </div></div>
        <Navigation />
        {children}
        <footer className="site-footer"><div className="wrap footer-inner">
          <Link className="footer-brand" href="/">Predators MMA</Link>
          <span>© 2026 Predators MMA &amp; BJJ Academy</span>
          <Link href="/contact">Come train with us <ArrowUpRight aria-hidden="true" /></Link>
        </div></footer>
      </body>
    </html>
  );
}

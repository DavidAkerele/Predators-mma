import type { Metadata } from 'next';
import { pageMetadata } from './metadata';
import Navigation from './navigation';
import RouteScroll from './route-scroll';
import SiteFooter from './site-footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://predator-mma.vercel.app'),
  ...pageMetadata('Predators MMA & BJJ Academy | Manchester', 'Train Brazilian jiu-jitsu, kickboxing and MMA at Predators in Manchester. Explore Gi and No-Gi classes, check the adult timetable and book a free introductory class.', '/'),
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
        <RouteScroll />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: '/classes', label: 'Classes' },
    { href: '/timetable', label: 'Timetable' },
    { href: '/about', label: 'Our academy' },
    { href: '/videos', label: 'Videos' },
    { href: '/contact', label: 'Find us' },
  ];
  return (
    <header className="site-header"><div className="wrap header-inner">
      <Link className="brand" href="/" aria-label="Predators MMA and BJJ Academy, home" onClick={() => setOpen(false)}>
        <Image src="/images/predators-logo.png" alt="Predators MMA and Brazilian Jiu Jitsu Academy" width={1858} height={778} priority />
      </Link>
      <Button className="menu-toggle" variant="outline" size="icon-lg" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="site-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>
      <nav id="site-navigation" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation" onClick={() => setOpen(false)}>
        {links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href || (href === '/classes' && pathname.startsWith('/classes/')) ? 'page' : undefined}>{label}</Link>)}
        <Link className="nav-cta" href="/contact">Try a free class <ArrowUpRight aria-hidden="true" /></Link>
      </nav>
    </div></header>
  );
}

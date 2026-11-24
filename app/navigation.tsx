'use client';

import { useState } from 'react';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header"><div className="wrap header-inner">
      <a className="brand" href="#top" aria-label="Predators MMA and BJJ Academy, home" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">P<span>.</span></span>
        <span className="brand-name">PREDATORS<span>MMA &amp; BJJ ACADEMY</span></span>
      </a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="site-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <nav id="site-navigation" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation" onClick={() => setOpen(false)}>
        <a href="#classes">Classes</a><a href="#timetable">Timetable</a><a href="#about">Our academy</a><a href="#contact">Find us</a>
        <a className="nav-cta" href="mailto:predatorsmmagym@gmail.com?subject=Book%20a%20free%20introductory%20class">Book a free class <span aria-hidden="true">↗</span></a>
      </nav>
    </div></header>
  );
}

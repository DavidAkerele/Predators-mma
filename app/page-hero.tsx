import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  backToClasses?: boolean;
};

export default function PageHero({ eyebrow, title, description, image, imageAlt, imagePosition = 'center', backToClasses = false }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-image">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" style={{ objectPosition: imagePosition }} />
      </div>
      <div className="page-hero-wash" aria-hidden="true" />
      <div className="wrap page-hero-content">
        {backToClasses && <Link href="/classes" className="page-hero-back"><ArrowLeft aria-hidden="true" /> All classes</Link>}
        <div className="page-hero-copy">
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero-description">{description}</p>
          {backToClasses && <Link className="button button-accent page-hero-action" href="/contact">Try a free class <ArrowUpRight aria-hidden="true" /></Link>}
        </div>
      </div>
    </section>
  );
}

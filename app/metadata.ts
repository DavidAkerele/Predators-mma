import type { Metadata } from 'next';

const siteUrl = 'https://predator-mma.vercel.app';
const siteName = 'Predators MMA & BJJ Academy';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: 'en_GB',
      type: 'website',
      images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: `${siteName} in Manchester` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/twitter-image`],
    },
  };
}

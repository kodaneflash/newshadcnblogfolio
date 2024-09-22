import type { Metadata } from 'next'
import HeroSection from "@/components/hero-section";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export const metadata: Metadata = {
  title: 'Solopreneur MBA - The complete blueprint for building profitable one-person online businesses.',
  description: 'The complete blueprint for building profitable one-person online businesses to learn how to become a efficient solo entrepreneur to build, launch and scale fast and effectively.',
  openGraph: {
    title: 'Solopreneur MBA - The complete blueprint for building profitable one-person online businesses.',
    description: 'The complete blueprint for building profitable one-person online businesses to learn how to become a efficient solo entrepreneur to build, launch and scale fast and effectively.',
    siteName: 'James Archer',
    url: 'https://jamesarcher.io/solopreneur-mba',
    images: [
      {
        url: 'https://res.cloudinary.com/imaginify/image/upload/v1726990640/solopreneur-mba-og_abcdef.png', // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'Solopreneur MBA Course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solopreneur MBA - The complete blueprint for building profitable one-person online businesses.',
    description: 'The complete blueprint for building profitable one-person online businesses to learn how to become a efficient solo entrepreneur to build, launch and scale fast and effectively.',
    images: ['https://res.cloudinary.com/imaginify/image/upload/v1726990640/solopreneur-mba-og_abcdef.png'],
  },
}

export default function SolopreneurMBA() {
  return (
    <div className="relative">
      <HeroHighlight>
        <HeroSection
          title="Solopreneur MBA"
          description="The complete blueprint for building profitable one-person online businesses to learn how to become a efficient solo entrepreneur to build, launch and scale fast and effectively."
        />
      </HeroHighlight>
    </div>
  );
}

import { About } from "@/components/layout/about-section";
import HeroSection from "@/components/hero-section";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About James Archer | Solo Entrepreneur | Founder',
  description: 'Learn more about James Archer, a solo entrepreneur and founder helping others build successful online businesses.',
  openGraph: {
    title: 'About James Archer | Solo Entrepreneur | Founder',
    description: 'Learn more about James Archer, a solo entrepreneur and founder helping others build successful online businesses.',
    url: 'https://jamesarcher.io/about',
    siteName: 'James Archer',
    images: [
      {
        url: 'https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/about-og-image.jpg', // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'About James Archer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About James Archer | Solo Entrepreneur | Founder',
    description: 'Learn more about James Archer, a solo entrepreneur and founder helping others build successful online businesses.',
    images: ['https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/about-og-image.jpg'], // Replace with actual image URL
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen antialiased">
      <HeroHighlight>
        <HeroSection
          title="About James Archer"
          description="Solo Entrepreneur, Founder, and Online Business Mentor"
        />
      </HeroHighlight>
      <About />
    </main>
  );
}

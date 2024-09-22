import type { Metadata } from 'next'
import Newsletter from "@/components/ui/newsletter";
import { Timeline } from "@/components/ui/timeline";
import { siteConfig } from "@/config/site";
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel";
import HeroSection from "@/components/hero-section";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export const metadata: Metadata = {
  title: 'James Archer | Solo Entrepreneur | Founder',
  description: 'Learn how to build and scale successful online businesses as a solo entrepreneur.',
  openGraph: {
    title: 'James Archer | Solo Entrepreneur | Founder',
    description: 'Discover strategies and insights for building successful online businesses as a solo entrepreneur.',
    url: 'https://jamesarcher.io',
    siteName: 'James Archer',
    images: [
      {
        url: 'https://res.cloudinary.com/imaginify/image/upload/v1726992034/homepageog_nxavfe.png',
        width: 1200,
        height: 630,
        alt: 'James Archer - Solo Entrepreneur & Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'James Archer | Solo Entrepreneur | Founder',
    description: 'Learn how to build and scale successful online businesses as a solo entrepreneur.',
    images: ['https://res.cloudinary.com/imaginify/image/upload/v1726992034/homepageog_nxavfe.png'],
  },
}

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p>Ba labore sit elit nisi aute nulla sint incididunt laborum aliqua veniam ex.</p>
        {/* Add more content as needed */}
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p>Et et dolor nostrud eiusmod cupidatat id ex tempor quis nostrud.</p>
        {/* Add more content as needed */}
      </div>
    ),
  },
  // Add more timeline entries as needed
];

export default function Home() {
  return (
    <div className="relative">
      <HeroHighlight>
        <HeroSection
          title={siteConfig.title}
          description={siteConfig.description}
        />
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <Newsletter />
        </div>
      </HeroHighlight>
      
      <div className="relative z-20">
        <Timeline data={timelineData} />
      </div>
      
      <AppleCardsCarousel />
    </div>
  );
}
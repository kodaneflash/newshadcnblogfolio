import type { Metadata } from 'next'
import HeroSection from "@/components/hero-section"
import { HeroHighlight } from "@/components/ui/hero-highlight"
import Newsletter from "@/components/ui/newsletter"

export const metadata: Metadata = {
  title: 'The Solopreneur Blueprint - Your Saturday issue to find online business ideas, launch fast, and get profitable.',
  description: 'Subscribe to the Solopreneur Blueprint newsletter to find online business ideas, launch fast, and get profitable. Join 9,000+ Solopreneurs.',
  openGraph: {
    title: 'The Solopreneur Blueprint - Your Saturday issue to find online business ideas, launch fast, and get profitable.',
    description: 'Subscribe to the Solopreneur Blueprint newsletter to find online business ideas, launch fast, and get profitable. Join 9,000+ Solopreneurs.',
    siteName: 'James Archer',
    url: 'https://jamesarcher.io/newsletter',
    images: [
      {
        url: 'https://res.cloudinary.com/imaginify/image/upload/v1726990640/newsletterog_txzcm6.png',
        width: 1200,
        height: 630,
        alt: 'The Solopreneur Blueprint newsletter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Solopreneur Blueprint - Your Saturday issue to find online business ideas, launch fast, and get profitable.',
    description: 'Subscribe to the Solopreneur Blueprint newsletter to find online business ideas, launch fast, and get profitable. Join 9,000+ Solopreneurs.',
    images: ['https://res.cloudinary.com/imaginify/image/upload/v1726990640/newsletterog_txzcm6.png'],
  },
}

export default function NewsletterPage() {
  return (
    <main className="min-h-screen antialiased">
      <HeroHighlight>
        <HeroSection
          title="The Solopreneur Blueprint"
          description="Your Saturday issue to find online business ideas, launch fast, and get profitable."
        />
      </HeroHighlight>
      <div className="container mx-auto mt-8">
        <Newsletter />
        {/* Add any additional content for the newsletter page here */}
      </div>
    </main>
  )
}

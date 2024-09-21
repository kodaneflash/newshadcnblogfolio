import Newsletter from "@/components/ui/newsletter";
import { Timeline } from "@/components/ui/timeline";
import { siteConfig } from "@/config/site";
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel";
import HeroSection from "@/components/hero-section";
import { HeroHighlight } from "@/components/ui/hero-highlight";

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
    <>
      <HeroHighlight>
        <HeroSection
          title={siteConfig.title}
          description={siteConfig.description}
        />
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <Newsletter />
        </div>
      </HeroHighlight>
      
      <div className="mt-8 sm:mt-0">
        <Timeline data={timelineData} />
      </div>
      
      <AppleCardsCarousel />
    </>
  );
}
import HeroSection from "@/components/hero-section";
import Newsletter from "@/components/ui/newsletter";
import { Timeline } from "@/components/ui/timeline";
import { siteConfig } from "@/config/site";

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p>Built and launched Aceternity UI and Aceternity UI Pro from scratch</p>
        {/* Add more content as needed */}
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p>I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.</p>
        {/* Add more content as needed */}
      </div>
    ),
  },
  // Add more timeline entries as needed
];

export default function Home() {
  return (
    <>
      <HeroSection
        title={siteConfig.title}
        description={siteConfig.description}
      />
      <Timeline data={timelineData} />
      <Newsletter />
    </>
  );
}

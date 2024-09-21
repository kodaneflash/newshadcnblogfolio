import { BackgroundLines } from "@/components/ui/background-lines";
import Newsletter from "@/components/ui/newsletter";
import { Timeline } from "@/components/ui/timeline";
import { siteConfig } from "@/config/site";
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel";

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
      <BackgroundLines>
        <div className="flex flex-col items-center justify-center min-h-screen w-full text-center px-4 sm:px-6 lg:px-8 -mt-60 sm:-mt-28 md:-mt-32"> {/* Increased negative margin for mobile */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-2 sm:pb-6">
            {siteConfig.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto mt-0 sm:mt-1">
            {siteConfig.description}
          </p>
        </div>
      </BackgroundLines>
      
      <div className="w-full max-w-4xl mx-auto -mt-80 sm:-mt-32 md:-mt-40 relative z-10 px-2 sm:px-4 lg:px-6">
        <Newsletter />
      </div>
      
      <div className="mt-8 sm:mt-0"> {/* Added margin-top for mobile */}
        <Timeline data={timelineData} />
      </div>
      
      <AppleCardsCarousel />
    </>
  );
}

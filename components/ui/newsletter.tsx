import { Input } from "./input";
import { Button } from "./moving-border";

export default function Newsletter() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
      <div className="relative px-4 sm:px-6 py-8 sm:py-12 rounded-2xl overflow-hidden">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
            The Solopreneur Blueprint
          </h2>
          <p className="mb-6 text-sm sm:text-base text-neutral-300">
            How to find online business ideas, launch fast, and get profitable. 
            <br />
            Join 9,000+ Solopreneurs
          </p>
          <form className="flex flex-row items-center justify-center gap-2 w-full max-w-md mx-auto">
            <div className="flex-grow max-w-[65%] sm:flex-grow-0 sm:w-[70%]">
              <Input
                id="email"
                placeholder="email@mail.com"
                type="email"
                className="w-full bg-neutral-900/50 border-neutral-800"
              />
            </div>
            <div className="flex-shrink-0">
              <Button className="whitespace-nowrap px-4 py-2 text-sm">Subscribe</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

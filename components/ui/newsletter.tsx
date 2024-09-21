import { Input } from "./input";
import { Button } from "./moving-border";

export default function Newsletter() {
  return (
    <section className="py-0 sm:py-2">
      <div className="max-w-4xl px-1 mx-auto sm:px-2">
        <div className="relative px-2 sm:px-3 py-1 sm:py-3 rounded-2xl overflow-hidden">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-1 sm:mb-2 text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
              The Solopreneur Blueprint
            </h2>
            <p className="mb-2 sm:mb-3 text-sm sm:text-base text-neutral-300">
              How to find online business ideas, launch fast, and get profitable. 
              <br />
              Join 9,000+ Solopreneurs
            </p>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-sm mx-auto">
              <Input
                id="email"
                placeholder="email@example.com"
                type="email"
                className="w-full sm:w-auto"
              />
              <Button className="w-full sm:w-auto whitespace-nowrap px-3 py-2 text-sm">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

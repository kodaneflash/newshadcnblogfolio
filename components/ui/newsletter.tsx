import { Input } from "./input";
import { Button } from "./moving-border";

export default function Newsletter() {
  return (
    <section className="py-20">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="relative px-4 sm:px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-8 py-4 text-center text-4xl font-bold tracking-tight md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
              Stay up to date
            </h2>
            <p className="mb-8 text-lg text-neutral-300">
              Stay in the loop with articles, courses, and much more by
              subscribing to our newsletter.
            </p>
            <form className="flex flex-row items-center justify-center gap-2 w-full max-w-md mx-auto">
              <Input
                id="email"
                placeholder="johndoe@example.com"
                type="email"
                className="flex-grow min-w-0"
              />
              <Button className="whitespace-nowrap px-3 py-2 text-sm">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

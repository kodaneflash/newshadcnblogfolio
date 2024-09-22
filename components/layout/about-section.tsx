import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="w-[300px] h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">James Archer</span>
          </div>
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  James Archer
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                As a seasoned solo entrepreneur and founder, I've successfully launched and scaled multiple online businesses. With over a decade of experience in the digital landscape, I'm passionate about helping others achieve their entrepreneurial dreams.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Through my courses, newsletter, and mentorship programs, I share practical strategies and insights to help you navigate the challenges of building a profitable online business. Whether you're just starting out or looking to take your existing venture to the next level, I'm here to guide you on your journey to success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

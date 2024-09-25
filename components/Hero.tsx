import { ButtonGroup } from "@/components/ButtonGroup";
import FadeTextEffect from "./ui/fade-text-effect";

const Hero = () => {
  const industries = ["financial industry", "insurance industry"];
  return (
    <section className="flex items-center justify-center px-16 w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute">
        <div className="absolute top-0 -left-4 bg-blue-300 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
        <div className="absolute top-0 -right-4 bg-blue-300 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-8 left-4 bg-blue-300 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 right-6 bg-blue-300 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto">
        {/* Main Content */}
        <div className="flex flex-col mt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            Backed by{" "}
            <img
              src="/images/ycombinator-logo.png"
              className="inline w-32 h-8"
              alt="Y Combinator"
            />
          </p>
          <h1 className="flex flex-col items-center justify-center gap-1 text-4xl md:text-6xl font-bold mt-2">
            Automated human-like voice calls for the{" "}
            <FadeTextEffect
              className="text-blue-700 text-4xl md:text-6xl font-bold "
              words={industries}
            />
          </h1>
          <p className="mt-4 text-lg">
            Domu uses generative AI to automate and trigger real-time, 24/7
            sales calls, helping your insurance company sell more policies and
            collect more money.
          </p>
        </div>

        {/* CTA Button Group */}
        <ButtonGroup />
      </div>
    </section>
  );
};

export default Hero;

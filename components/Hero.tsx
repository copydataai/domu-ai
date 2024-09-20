import React from "react";
import { ButtonGroup } from "@/components/ButtonGroup";

const Hero: React.FC = () => {
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
          <p className="text-sm text-muted-foreground">
            Backed by{" "}
            <span className="text-orange-500 font-bold">Y Combinator</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Automated human-like voice calls for the{" "}
            <span className="px-2 py-1 rounded-md">financial industry</span>
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

import React from "react";
import Hero from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import LogoCarousel from "@/components/logo-carousel";
import GenAIAgents from "@/components/genai-agents";
import SuccessSection from "@/components/success-section";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoCarousel />
      <GenAIAgents />
      <SuccessSection />
      <Footer />
    </>
  );
};

export default Home;

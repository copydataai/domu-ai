import React from "react";
import Hero from "../components/Hero";
import { NavBar } from "../components/NavBar";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export default Home;

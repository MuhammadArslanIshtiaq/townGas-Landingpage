import React from "react";
import BannerSection from "./sections/BannerSection";
import CardsSection from "./sections/CardSection";
import ConceptOfDesign from "./sections/ConceptOfDesign";

import HeroSection from "./sections/HeroSection";
import PrizeSection from "./sections/PrizeSection";

const HomePage = () => {
  return (
    <main id="home" className="text-center lg:text-left">
      <HeroSection />
      <ConceptOfDesign />
      <CardsSection />
      <PrizeSection />
      <BannerSection />
    </main>
  );
};

export default HomePage;

import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import FaqSection from "./FaqSection";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import ModalComponents from "../../../components/modals/ModalComponents";

const BannerSection = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState("");
  let cl = i18next.language;

  return (
    <section className="relative z-20 bg-layerThree bg-cover py-16">
      <FaqSection />
    </section>
  );
};

export default BannerSection;

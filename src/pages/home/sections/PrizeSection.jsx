import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import PrizeCard from "../../../components/cards/PrizeCard";
import { useTranslation } from "react-i18next";

const PrizeSection = () => {
  const { t } = useTranslation();

  const prizeList = [
    {
      delay: 250,
      colorSet: "bg-prizeBoxTop text-secondary-600",
      title: t("Prize.t1"),
      imageUrl: "/assets/images/prize-item-0.png",
      text: t("Prize.d1"),
    },
    {
      delay: 500,
      colorSet: "bg-prizeBoxTop text-secondary-600",
      title: t("Prize.t2"),
      imageUrl: "/assets/images/prize-item-1.png",
      text: t("Prize.d2"),
    },
    {
      delay: 750,
      colorSet: "bg-prizeBoxTop text-secondary-600",
      title: t("Prize.t3"),
      imageUrl: "/assets/images/prize-item-2.png",
      text: t("Prize.d3"),
    },
    {
      delay: 250,
      colorSet: "bg-prizeBoxBlue text-primary-500",
      title: t("Prize.t4"),
      imageUrl: "/assets/images/prize-item-3.png",
      text: t("Prize.d4"),
    },
    {
      delay: 500,
      colorSet: "bg-prizeBoxBlue text-primary-500",
      title: t("Prize.t5"),
      imageUrl: "/assets/images/prize-item-4.png",
      text: t("Prize.d5"),
    },
    {
      delay: 750,
      colorSet: "bg-prizeBoxBlue text-primary-500",
      title: t("Prize.t6"),
      imageUrl: "/assets/images/prize-item-5.png",
      text: t("Prize.d6"),
    },
    {
      delay: 250,
      colorSet: "bg-prizeBoxBlue text-gray-500",
      title: t("Prize.t7"),
      imageUrl: "/assets/images/prize-placeholder.png",
      text: t("Prize.d7"),
    },
    {
      delay: 500,
      colorSet: "bg-prizeBoxBlue text-gray-500",
      title: t("Prize.t8"),
      imageUrl: "/assets/images/prize-placeholder.png",
      text: t("Prize.d8"),
    },
    {
      delay: 750,
      colorSet: "bg-prizeBoxBlue text-gray-500",
      title: t("Prize.t9"),
      imageUrl: "/assets/images/prize-item-6.png",
      text: t("Prize.d9"),
    },
  ];

  return (
    <section id="prize" className="relative z-20 bg-layerTwo bg-cover">
      <div className="lg:max-w-7xl px-6 mx-auto text-center">
        <ScrollAnimation duration={1} animateIn="fadeInUp">
          <h2 className="inline-block h-24 mb-8">
            <img
              className="block h-full w-full"
              src="/assets/images/title-3.png"
              alt=".."
            />
          </h2>
        </ScrollAnimation>

        {/* gallery start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {prizeList.map((item) => (
            <div key={item.title}>
              <ScrollAnimation
                className="h-full"
                duration={1}
                delay={item.delay}
                animateIn="fadeInLeft"
              >
                <PrizeCard item={item} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
        {/* gallery end */}
      </div>
    </section>
  );
};

export default PrizeSection;

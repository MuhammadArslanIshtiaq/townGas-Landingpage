import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import PrizeCard from "../../../components/cards/PrizeCard";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const PrizeSection = () => {
  const { t } = useTranslation();
  let cl = i18next.language;

  const prizeList = [
    {
      delay: 250,
      colorSet: "bg-prizeBoxTop text-secondary-600",
      title: t("Prize.t1"),
      imageUrl: "/assets/images/prize-item-0.png",
      text: t("Prize.d1"),
      text1: t("Prize.d1a"),
      text2: t("Prize.d1b"),
    },
    {
      delay: 500,
      colorSet: "bg-prizeBoxTop text-secondary-600",
      title: t("Prize.t2"),
      imageUrl: "/assets/images/prize-item-1.png",
      text: t("Prize.d2"),
      text1: t("Prize.d2a"),
      text2: t("Prize.d2b"),
    },
    {
      delay: 750,
      colorSet: "bg-prizeBoxTop text-secondary-600",
      title: t("Prize.t3"),
      imageUrl: "/assets/images/prize-item-2.png",
      text: t("Prize.d3"),
      text1: t("Prize.d3a"),
      text2: t("Prize.d3b"),
      text3: t("Prize.d3c"),
      text4: t("Prize.d3d"),
    },
    {
      delay: 250,
      colorSet: "bg-prizeBoxBlue text-primary-500",
      title: t("Prize.t4"),
      imageUrl: "/assets/images/prize-item-3.png",
      text: t("Prize.d4"),
      text1: t("Prize.d4a"),
      text2: t("Prize.d4b"),
      text3: t("Prize.d4c"),
    },
    {
      delay: 500,
      colorSet: "bg-prizeBoxBlue text-primary-500",
      title: t("Prize.t5"),
      imageUrl: "/assets/images/prize-item-4.png",
      text: t("Prize.d5"),
      text1: t("Prize.d5a"),
      text2: t("Prize.d5b"),
    },
    {
      delay: 750,
      colorSet: "bg-prizeBoxBlue text-primary-500",
      title: t("Prize.t6"),
      imageUrl: "/assets/images/prize-item-5.png",
      text: t("Prize.d6"),
      text1: t("Prize.d6a"),
      text2: t("Prize.d6b"),
      text3: t("Prize.d6c"),
    },
    {
      delay: 250,
      colorSet: "bg-prizeBoxBlue text-gray-500",
      title: t("Prize.t7"),
      imageUrl: "/assets/images/prize-item-fun.png",
      text: t("Prize.d7"),
      text1: t("Prize.d7a"),
      text2: t("Prize.d7b"),
    },
    {
      delay: 500,
      colorSet: "bg-prizeBoxBlue text-gray-500",
      title: t("Prize.t8"),
      imageUrl: "/assets/images/prize-item-fun.png",
      text: t("Prize.d8"),
      text1: t("Prize.d8a"),
      text2: t("Prize.d8b"),
    },
    {
      delay: 750,
      colorSet: "bg-prizeBoxBlue text-gray-500",
      title: t("Prize.t9"),
      imageUrl: "/assets/images/prize-item-6.png",
      text: t("Prize.d9"),
      text1: t("Prize.d9a"),
      text2: t("Prize.d9b"),
    },
  ];

  return (
    <section id="prize" className="relative z-20 md:bg-layerTwo bg-cover">
      {/* == */}
      <span className="md:hidden absolute left-[-10rem] top-[-2rem]">
        <img
          className="block h-full w-full"
          src="/assets/images/polygon-right.svg"
          alt=".."
        />
      </span>
      <span className="md:hidden absolute right-[-1.6rem] top-[1rem]">
        <img
          className="block h-full w-full"
          src="/assets/images/sparkle-green.svg"
          alt=".."
        />
      </span>
      <span className="block absolute z-20 top-[30rem]">
        <img
          className="block h-full w-full"
          src="/assets/images/lines-0.png"
          alt=".."
        />
      </span>
      {/* == */}
      <div className="lg:max-w-7xl px-6 mx-auto text-center">
        <ScrollAnimation duration={1} animateIn="fadeInUp">
          <h2 className="inline-block mb-8">
            {cl === "ch" ? (
              <img
                className="block h-full w-full"
                src="/assets/images/title-3.png"
                alt=".."
              />
            ) : (
              <img
                className="block h-full w-full"
                src="/assets/images/prize.png"
                alt="..."
              />
            )}
          </h2>
        </ScrollAnimation>

        {/* gallery start */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
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

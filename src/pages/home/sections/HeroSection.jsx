import React from "react";

import ScrollAnimation from "react-animate-on-scroll";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  let cl = i18next.language;

  return (
    <>
      <section className="lg:pt-36 pt-20 pb-8 lg:pb-16 md:max-h-[78rem] bg-center bg-cover md:bg-heroD relative z-20">
        {/* === */}
        <div className="bg-blue-p md:hidden" />
        <span className="md:hidden absolute right-[-12rem] top-[10rem]">
          <img
            className="block h-full w-full"
            src="/assets/images/polygon-right.svg"
            alt=".."
          />
        </span>
        <span className="md:hidden absolute left-[-4rem] top-[29rem]">
          <img
            className="block h-full w-full"
            src="/assets/images/polygon-left.svg"
            alt=".."
          />
        </span>
        {/* === */}

        <div className="px-6 lg:px-16 relative">
          <div className="grid grid-cols-4 gap-2 md:gap-6 h-full items-center">
            {/* mobile view  */}
            <div className="col-span-4 md:hidden">
              <div className="animated fadeInDown mb-3">
                {cl === "ch" ? (
                  <img
                    className="block h-full w-full"
                    src="/assets/images/hero-title.png"
                    alt="..."
                  />
                ) : (
                  <img
                    className="block h-full w-full"
                    src="/assets/images/hero-heading.png"
                    alt="..."
                  />
                )}
              </div>
              <div className="mb-0 animated fadeInLeft">
                <div>
                  <img
                    className="block h-full w-full"
                    src="/assets/images/hero-image-sm.png"
                    alt=".."
                  />
                </div>
              </div>
            </div>
            {/* /mobile view  */}
            <div className="col-span-4 lg:col-span-2 transition-all duration-300 hidden md:block">
              <div className="mb-8 animated fadeInLeft">
                <div>
                  <img
                    className="block h-full w-full"
                    src="/assets/images/hero-image-01.png"
                    alt=".."
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-2">
              <div className="hidden md:block">
                <div className="animated fadeInDown">
                  {cl === "ch" ? (
                    <img
                      className="block h-full w-full"
                      src="/assets/images/hero-title.png"
                      alt="..."
                    />
                  ) : (
                    <img
                      className="block h-full w-full"
                      src="/assets/images/hero-heading.png"
                      alt="..."
                    />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 items-center md:mt-6">
                <div className="col-span-3 sm:col-span-2">
                  <div className="flex items-center justify-center gap-3 animated fadeInLeft">
                    <h4 className="uppercase text-xl sm:text-2xl md:text-3x1 text-gray font-bold">
                      2022.8.11
                      <br />
                      Hkt 00:00
                    </h4>
                    <span className="w-[4rem] sm:w-[7rem]">
                      <img
                        className="block h-full w-full"
                        src="/assets/images/arrow.png"
                        alt="..."
                      />
                    </span>
                    <h4 className="uppercase text-xl sm:text-2xl md:text-3x1 text-gray font-bold">
                      2022.9.11
                      <br />
                      Hkt 23:59
                    </h4>
                  </div>
                  <div className="mt-4 flex justify-center animated fadeInLeft">
                    <PrimaryButton />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-1 hidden md:block">
                  <div className="animated fadeInRight">
                    {cl === "ch" ? (
                      <img
                        className="block h-full w-full"
                        src="/assets/images/160-gift.png"
                        alt="..."
                      />
                    ) : (
                      <img
                        className="block h-full w-full"
                        src="/assets/images/160-coin.png"
                        alt="..."
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 relative" id="introduction">
          <span className="block absolute z-20">
            <img
              className="block h-full w-full"
              src="/assets/images/lines-0.png"
              alt=".."
            />
          </span>
          <ScrollAnimation duration={1} animateIn="fadeInDown">
            <div className="bg-hero2M xl:bg-hero2 bg-center bg-cover xl:bg-contain bg-no-repeat xl:max-w-7xl px-6 h-[60rem] md:h-auto sm:m-[2rem] md:mx-auto">
              {/* mobile view */}
              <div className="p-6 space-y-6 h-full flex flex-col justify-center items-center xl:hidden">
                <div>
                  <span className="block h-18 w-[12rem] mx-auto">
                    {cl === "ch" ? (
                      <img
                        className="block h-full w-full"
                        src="/assets/images/title-1.png"
                        alt=".."
                      />
                    ) : (
                      <img
                        className="block h-full w-full"
                        src="/assets/images/about.png"
                        alt="..."
                      />
                    )}
                  </span>
                </div>
                <div>
                  <ScrollAnimation
                    duration={1}
                    delay={600}
                    animateIn="fadeInLeft"
                  >
                    <img
                      className="block h-12 w-auto mx-auto"
                      src="/assets/images/logo.svg"
                      alt="logo"
                    />
                  </ScrollAnimation>
                </div>
                <div>
                  <ScrollAnimation
                    duration={1}
                    delay={600}
                    animateIn="fadeInUp"
                  >
                    <p className="text-gray-400 text-base text-center">
                      {t("About")}
                    </p>
                  </ScrollAnimation>
                </div>
              </div>
              {/* mobile view */}
              <div className="hidden xl:grid grid-cols-2 gap-10 py-2 lg:py-32 lg:px-24 items-center">
                <div className="col-span-2 lg:col-span-1">
                  <ScrollAnimation
                    duration={1}
                    delay={600}
                    animateIn="fadeInLeft"
                  >
                    <img
                      className="block h-30 w-auto"
                      src="/assets/images/logo.svg"
                      alt="logo"
                    />
                  </ScrollAnimation>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <ScrollAnimation
                    duration={1}
                    delay={600}
                    animateIn="fadeInRight"
                  >
                    <span className="block h-24 w-[17rem]">
                      {cl === "ch" ? (
                        <img
                          className="block h-full w-full"
                          src="/assets/images/title-1.png"
                          alt=".."
                        />
                      ) : (
                        <img
                          className="block h-full w-full"
                          src="/assets/images/about.png"
                          alt="..."
                        />
                      )}
                    </span>
                    <p className="text-gray-400 text-lg mt-4 line-clamp-6 ">
                      {t("About")}
                    </p>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

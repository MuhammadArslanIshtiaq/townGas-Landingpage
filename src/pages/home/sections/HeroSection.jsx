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
      <section className="lg:pt-36 pt-20 pb-4 lg:pb-16 xl:max-h-[78rem] bg-bottom bg-cover md:bg-heroD block z-20 bg-pos">
        {/* === */}
        <div className="bg-blue-p md:block lg:hidden" />
        <span className="md:block lg:hidden absolute right-[0rem] top-[10rem] pl-[17rem]">
          <img
            className="block h-full w-full"
            src="/assets/images/polygon-right.svg"
            alt=".."
          />
        </span>
        <span className="md:block lg:hidden absolute left-[-4rem] top-[29rem]">
          <img
            className="block h-full w-full"
            src="/assets/images/polygon-left.svg"
            alt=".."
          />
        </span>
        {/* === */}

        <div className="px-6 lg:px-16 relative">
          <div className="grid grid-cols-5 gap-2 md:gap-6 h-full items-center">
            {/* mobile view  */}
            <div className="col-span-5 md:block lg:hidden">
              <div className="animated fadeInDown mt-20 mb-3">
                {cl === "ch" ? (
                  <img
                    className="block h-full w-full"
                    src="/assets/images/hero-title.png"
                    alt="..."
                  />
                ) : (
                  <img
                    className="block h-full w-full"
                    src="/assets/images/hero-title-en.png"
                    alt="..."
                  />
                )}
              </div>

              <div className="mt-20 mb-0 animated fadeInLeft">
                <div>
                  {cl === "ch" ? (
                    <img
                      className="block h-full w-full"
                      src="/assets/images/hero-image-mb.png"
                      alt=".."
                    />
                  ) : (
                    <img
                      className="block h-full w-full"
                      src="/assets/images/hero-image-mb-eng.png"
                      alt=".."
                    />
                  )}
                </div>
              </div>
            </div>
            {/* /mobile view  */}
            <div className="col-span-5 lg:col-span-2 transition-all duration-300 hidden lg:block">
              <div className="mb-8 animated fadeInLeft">
                <div>
                  <img
                    className="block h-full w-full"
                    src="/assets/images/hero-image-02.png"
                    alt=".."
                  />
                </div>
              </div>
            </div>
            <div className="col-span-5 lg:col-span-3">
              <div className="hidden lg:block">
                <div className="animated fadeInDown">
                  {cl === "ch" ? (
                    <img
                      className="block h-full w-full"
                      src="/assets/images/hero-title-lg.png"
                      alt="..."
                    />
                  ) : (
                    <img
                      className="block h-full w-full"
                      src="/assets/images/hero-title-lg-en.png"
                      alt="..."
                    />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 items-center md:mt-6">
                <div className="col-span-3 lg:col-span-2">
                  <div className="flex items-center justify-center gap-3 animated fadeInLeft">
                    <h4 className="uppercase text-xl sm:text-2xl md:text-3x1 text-gray font-bold">
                      2022.8.19
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
                      2022.09.13
                      <br />
                      Hkt 23:59
                    </h4>
                  </div>
                  <div className="mt-4 flex justify-center animated fadeInLeft">
                    <PrimaryButton />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-1 hidden lg:block">
                  <div className="animated fadeInRight xl:w-80 2xl:w-96">
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
          <ScrollAnimation
            duration={2}
            animateIn="fadeInDown"
            className="flex justify-center"
          >
            <div className="bg-size-400 bg-hero2M bg-center bg-cover bg-no-repeat xl:bg-hero2  xl:h-auto px-12 sm:m-[2rem] ">
              {/* mobile view */}
              <div className="p-6 space-y-6 h-full flex flex-col justify-start lg:justify-center items-center xl:hidden">
                <div className="mt-sm">
                  <span className="block md:w-9/12  xl:w-[12rem]  mx-auto">
                    {cl === "ch" ? (
                      <img
                        className="block h-full w-full"
                        src="/assets/images/title-6.png"
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
                  <img
                    className="block md:h-24 xl:h-12 w-auto mx-auto"
                    src="/assets/images/logo.svg"
                    alt="logo"
                  />
                </div>
                <div>
                  <ScrollAnimation
                    duration={2}
                    delay={300}
                    animateIn="fadeInUp"
                  >
                    {cl === "ch" ? (
                      <>
                        <p className="text-gray-400 text-base leading-normal md:text-[50px] md:leading-[70px] md:px-5 lg:text-[56px] lg:leading-[70px] xl:text-base xl:leading-normal font-semibold text-center">
                          {t("About")}
                        </p>
                        <p className="text-primary-600 mt-5 text-base leading-normal md:text-[50px] md:leading-[70px] md:px-5 lg:text-[56px] lg:leading-[70px] xl:text-base xl:leading-normal font-semibold text-center ">
                          {t("About1")}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-gray-400 text-base leading-normal md:text-[36px] md:leading-[50px] md:mt-10 md:px-5 lg:text-[40px] lg:leading-[56px] xl:text-base xl:leading-normal font-semibold text-center">
                          {t("About")}
                          <p className="text-primary-600 mt-5 text-base leading-normal md:text-[50px] md:leading-[70px] md:px-5 lg:text-[56px] lg:leading-[70px] xl:text-base xl:leading-normal font-semibold text-center ">
                            {t("About1")}
                          </p>
                        </p>
                      </>
                    )}
                  </ScrollAnimation>
                </div>
              </div>
              {/* mobile view */}
              <div className="hidden xl:grid grid-cols-2 gap-10 py-2 lg:py-32 lg:px-24 items-center">
                <div className="col-span-2 lg:col-span-1">
                  <ScrollAnimation
                    duration={2}
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
                    duration={2}
                    delay={600}
                    animateIn="fadeInRight"
                  >
                    <span className="block h-24 w-[17rem]">
                      {cl === "ch" ? (
                        <img
                          className="block h-full w-full"
                          src="/assets/images/title-6.png"
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
                    <p className="text-gray-400 md:text-base text-sm mt-4 ">
                      {t("About")}
                    </p>
                    <p className="text-primary-600 md:text-base text-sm mt-4 ">
                      {t("About1")}
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

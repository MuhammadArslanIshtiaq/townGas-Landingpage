import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const ConceptOfDesign = () => {
  const { t } = useTranslation();
  let cl = i18next.language;
  return (
    <section
      id="conceptOfDesign"
      className="block z-20 sm:mt-36 lg:mt-8 sm:pt-[40rem] pt-cod lg:pt-[10rem] xl:pt-60 pb-8 lg:pb-16 bg-layerOne bg-cover"
    >
      {/* === */}
      <span className="md:hidden absolute right-[0rem] top-[-2rem]">
        <img
          className="block h-full w-full"
          src="/assets/images/balls.svg"
          alt=".."
        />
      </span>
      <span className="md:hidden absolute left-[-1.2rem] top-[-2rem]">
        <img
          className="block h-full w-full"
          src="/assets/images/sparkle-Blue.svg"
          alt=".."
        />
      </span>
      <span className="md:hidden absolute right-[-4rem] top-[22rem]">
        <img
          className="block h-full w-full"
          src="/assets/images/polygon-left.svg"
          alt=".."
        />
      </span>
      {/* === */}
      <div className="lg:max-w-7xl px-6 mx-auto">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="col-span-3 lg:col-span-1">
            <ScrollAnimation duration={1} animateIn="fadeInLeft">
              <div>
                <span className="block h-24 w-[17rem] mx-auto lg:mx-0">
                  {cl === "ch" ? (
                    <img
                      className="block h-full w-full"
                      src="/assets/images/title-1.png"
                      alt=".."
                    />
                  ) : (
                    <img
                      className="block h-full w-full"
                      src="/assets/images/design-concept.png"
                      alt="..."
                    />
                  )}
                </span>
                <div className="lg:hidden my-6 w-[26rem] mx-auto">
                  <ScrollAnimation duration={1} animateIn="fadeInRight">
                    <div>
                      <img
                        className="block h-full w-full"
                        src="/assets/images/cod-01.png"
                        alt="..."
                      />
                    </div>
                  </ScrollAnimation>
                </div>
                <p className="text-gray-400 font-bold text-lg mt-4 line-clamp-6">
                  {t("COD")}
                </p>
                <div className="mt-6">
                  <PrimaryButton />
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-span-3 lg:col-span-2 hidden lg:block">
            <div>
              <ScrollAnimation duration={1} animateIn="fadeInRight">
                <div>
                  <img
                    className="block h-full w-full"
                    src="/assets/images/cod-01.png"
                    alt="..."
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptOfDesign;

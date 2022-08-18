import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import PrimaryButton from "../../../components/buttons/PrimaryButton2";
import ScrollComponent from "../../../components/scroll/ScrollComponent";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const ConceptOfDesign = () => {
  const { t } = useTranslation();
  let cl = i18next.language;
  return (
    <section
      id="conceptOfDesign"
      className="z-21 bg-layerOne bg-cover sm:mt-36 md:mt-0 lg:mt-0 xl:mt-[20rem] pt-cod"
    >
      {/* === */}
      <ScrollComponent>
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
        <span className="md:hidden absolute right-[0rem] top-[22rem]">
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
              <ScrollAnimation duration={2} animateIn="fadeInLeft">
                <div>
                  <span className="block w-[17rem] mx-auto lg:mx-0">
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
                  <div className="lg:hidden my-6 w-full md:w-[26rem] mx-auto">
                    <ScrollAnimation duration={2} animateIn="fadeInRight">
                      <div>
                        <img
                          className="block h-full w-full"
                          src="/assets/images/cod-01.png"
                          alt="..."
                        />
                      </div>
                    </ScrollAnimation>
                  </div>
                  <p className="text-gray-400 font-bold text-lg md:text-4xl mt-4 ">
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
                <ScrollAnimation duration={2} animateIn="fadeInRight">
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
      </ScrollComponent>
    </section>
  );
};

export default ConceptOfDesign;

import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { useTranslation } from "react-i18next";

const ConceptOfDesign = () => {
  const { t } = useTranslation();
  return (
    <section
      id="conceptOfDesign"
      className="relative z-20 sm:mt-36 sm:pt-[40rem] lg:mt-24 lg:pt-60 pb-16 bg-layerOne bg-cover"
    >
      <div className="lg:max-w-7xl px-6 mx-auto">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="col-span-3 lg:col-span-1">
            <ScrollAnimation duration={1} animateIn="fadeInLeft">
              <div>
                <span className="block h-24 w-[17rem]">
                  <img
                    className="block h-full w-full"
                    src="/assets/images/title-1.png"
                    alt=".."
                  />
                </span>
                <p className="text-gray-400 text-lg mt-4 line-clamp-6">
                  {t("COD")}
                </p>
                <div className="mt-6">
                  <PrimaryButton />
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <div>
              <ScrollAnimation duration={1} animateIn="fadeInRight">
                <div>
                  <img
                    className="block h-full w-full"
                    src="/assets/images/image-1.png"
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

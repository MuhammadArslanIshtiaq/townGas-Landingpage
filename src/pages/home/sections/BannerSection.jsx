import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import FaqSection from "./FaqSection";
import { useTranslation } from "react-i18next";

const BannerSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative z-20 bg-layerThree bg-cover py-16">
      <div className="lg:max-w-7xl px-6 mx-auto text-center">
        <ScrollAnimation animateIn="fadeInLeft">
          <div className=" bg-white/50 border-2 border-primary p-6 sm:p-8 lg:p-14 rounded-lg text-left">
            <div className="grid grid-cols-2 gap-10 items-center">
              <div className="col-span-2 lg:col-span-1 text-center">
                <div>
                  <h2 className="inline-block h-48">
                    <img
                      className="block h-full w-full"
                      src="/assets/images/title-4.png"
                      alt=".."
                    />
                  </h2>

                  <div className="mt-6">
                    <Link
                      to
                      className="bg-primary hover:bg-primary-600 text-white inline-flex justify-center items-center gap-4 py-4 px-8 rounded-xl text-2xl"
                    >
                      <span className="block h-12 min-w-[2.8rem]">
                        <img
                          className="block w-full h-full"
                          src="/assets/images/sign.svg"
                          alt="..."
                        />
                      </span>
                      <span className="line-clamp-2">
                        {t("Button.2a")}
                        <br />
                        {t("Button.2b")}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="space-y-4 text-gray-400 text-lg">
                  <p>{t("Step.title")}</p>
                  <div>
                    <p>
                      {t("Step.1a")} <br />
                      <a
                        href="https://metamask.io/download/"
                        className="cursor-pointer text-secondary underline hover:opacity-80"
                      >
                        {t("Step.1b")}
                      </a>
                    </p>
                    <p>{t("Step.2")}</p>
                    <p>{t("Step.3")}</p>
                  </div>
                  <p>{t("Step.4")}</p>
                  <p>
                    {t("Step.5")}
                    <a
                      href="#"
                      className="cursor-pointer text-primary hover:opacity-80 mx-2"
                    >
                      {t("Step.6")}
                    </a>
                    {t("Step.7")}
                    <a
                      href="#"
                      className="cursor-pointer text-primary hover:opacity-80 mx-1"
                    >
                      {t("Step.8")}
                    </a>
                    {t("Step.9")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <FaqSection />
    </section>
  );
};

export default BannerSection;

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
      <ModalComponents show={isOpen} onClose={() => setIsOpen("")} />

      <div className="lg:max-w-7xl px-6 mx-auto text-center">
        <ScrollAnimation animateIn="fadeInLeft" duration={2}>
          <div className=" bg-white/50 border-2 border-primary p-6 sm:p-8 lg:p-14 rounded-lg text-left">
            <div className="grid grid-cols-2 gap-10 items-center">
              <div className="col-span-2 lg:col-span-1 text-center">
                <div>
                  <h2 className="inline-block h-48">
                    {cl === "ch" ? (
                      <img
                        className="block h-full w-full"
                        src="/assets/images/title-4.png"
                        alt=".."
                      />
                    ) : (
                      <img
                        className="block h-full w-full"
                        src="/assets/images/banner-heading.png"
                        alt="..."
                      />
                    )}
                  </h2>

                  {/* hide on mobile */}
                  <div className="hidden md:block">
                    <div className="mt-6">
                      <Link
                        to
                        className="bg-1 transform duration-300 hover:scale-95 active:scale-95 text-white inline-flex justify-center items-center gap-4 py-4 px-8 rounded-xl text-2xl"
                        onClick={() => setIsOpen("formModal")}
                      >
                        <span className="block h-12 min-w-[2.8rem]">
                          <img
                            className="block w-full h-full"
                            src="/assets/images/sign.svg"
                            alt="..."
                          />
                        </span>
                        <span className="">
                          {t("Button.2a")}
                          <br />
                          {t("Button.2b")}
                        </span>
                      </Link>
                    </div>
                    <h1 className="mt-6 text-secondary text-xl font-black">
                      {t("Prize.total")}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="space-y-4 text-gray-400 cod-text md:text-lg">
                  <p>{t("Step.title")}</p>
                  <div>
                    <p>
                      {t("Step.1a")}
                      <br />
                      {t("Step.1aa")}
                      <br />
                      <br />
                      {t("Step.1b")}
                      <a
                        href="https://metamask.io/download/"
                        className="cursor-pointer text-secondary underline hover:opacity-80"
                      >
                        {t("Step.1c")}
                      </a>
                    </p>
                    <br />
                    <p>{t("Step.2")}</p>
                    <p>{t("Step.3")}</p>
                  </div>
                  <p>{t("Step.4")}</p>
                  <p>
                    {t("Step.5")}
                    <span className=" text-primary ">{t("Step.6")}</span>
                    {t("Step.7")}
                    <span className=" text-primary font-bold ">
                      {t("Step.8")}
                    </span>
                    <span className=" text-primary  mx-1">{t("Step.10")}</span>
                    {t("Step.9")}
                  </p>
                  <p className="my-3">{t("Step.11")}</p>
                  <p className="my-3">{t("Step.12")}</p>
                </div>

                {/* hide on larger devices */}
                <div className="block md:hidden">
                  <div className="mt-6 ">
                    <Link
                      to
                      className="bg-1 
                      transform 
                      duration-300 
                      hover:scale-95 
                      active:scale-95 
                      text-white 
                      flex 
                      justify-center 
                      items-center 
                      gap-4 py-4 px-8 rounded-xl font-semibold text-xl"
                      onClick={() => setIsOpen("formModal")}
                    >
                      <span className="text-center font-bold">
                        <img
                          className="w-8 h-8 m-auto mb-2"
                          src="/assets/images/sign.svg"
                          alt="..."
                        />

                        {t("Button.2a")}
                        <br />
                        {t("Button.2b")}
                      </span>
                    </Link>
                  </div>
                  <h1 className="mt-6 text-secondary text-xl font-black text-center">
                    {t("Prize.total")}
                  </h1>
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

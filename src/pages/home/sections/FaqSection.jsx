import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import ScrollAnimation from "react-animate-on-scroll";
import ScrollComponent from "../../../components/scroll/ScrollComponent";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const FaqSection = () => {
  const { t } = useTranslation();
  let cl = i18next.language;

  const faqs = [
    {
      number: "Q01.",
      question: t("Faq.Q1"),
      answer: t("Faq.A1"),
    },
    {
      number: "Q02.",
      question: t("Faq.Q2"),
      answer: t("Faq.A2"),
    },
    {
      number: "Q03",
      question: t("Faq.Q3"),
      answer: t("Faq.A3"),
    },
    {
      number: "Q04",
      question: t("Faq.Q4"),
      answer: t("Faq.A4"),
    },
    {
      number: "Q05",
      question: t("Faq.Q5"),
      answer: t("Faq.A5"),
      answer1: t("Faq.A5a"),
      answer2: t("Faq.A5b"),
      answer3: t("Faq.A5c"),
    },
    {
      number: "Q06",
      question: t("Faq.Q6"),
      answer: t("Faq.A6"),
    },
    {
      number: "Q07",
      question: t("Faq.Q7"),
      answer: t("Faq.A7"),
      answer1: t("Faq.A7a"),
      answer2: t("Faq.A7b"),
      answer3: t("Faq.A7c"),
      link: "https://drive.google.com/file/d/1R1uA8plHIq2egAqi3-oJh5dYlOYPOe41/view?usp=sharing",
    },
    {
      number: "Q08",
      question: t("Faq.Q8"),
      answer: t("Faq.A8"),
    },
    {
      number: "Q09",
      question: t("Faq.Q9"),
      answer: t("Faq.A9"),
    },
    {
      number: "Q10",
      question: t("Faq.Q10"),
      answer: t("Faq.A10"),
    },
  ];

  return (
    <div id="commonProblem" className="relative z-20 mt-12">
      {/* == */}
      <ScrollComponent>
        <span className="md:hidden absolute left-[-4rem] top-[-2rem]">
          <img
            className="block h-full w-full"
            src="/assets/images/polygon-left.svg"
            alt=".."
          />
        </span>
        <span className="md:hidden absolute right-[0rem] top-[0rem]">
          <img
            className="block h-full w-full"
            src="/assets/images/balls.svg"
            alt=".."
          />
        </span>
        {/* == */}
        <div className="lg:max-w-7xl px-6 mx-auto text-center">
          <ScrollAnimation duration={1} animateIn="fadeInUp">
            <h2 className="inline-block h-28 mb-8">
              {cl === "ch" ? (
                <img
                  className="block h-32 w-auto"
                  src="/assets/images/title-5.png"
                  alt=".."
                />
              ) : (
                <img
                  className="block h-full w-full"
                  src="/assets/images/faq.png"
                  alt="..."
                />
              )}
            </h2>
          </ScrollAnimation>
          <div>
            <dl className="grid grid-cols-2 gap-4">
              {faqs.map((faq) => (
                <Disclosure as="div" className="col-span-2 lg:col-span-1">
                  {({ open }) => (
                    <ScrollAnimation
                      duration={2}
                      animateIn="fadeInUp"
                      className="h-full"
                    >
                      <div className="min-h-[6.4rem] bg-white rounded-lg border-2 border-primary p-4 text-left">
                        <dt className="text-lg">
                          <Disclosure.Button className="text-left w-full flex justify-between items-baseline text-gray-400">
                            <div className="flex flex-col lg:flex-row gap-2 items-baseline">
                              <h1 className="text-4xl lg:text-3xl font-semibold text-shadow-primary text-white">
                                {faq.number}
                              </h1>
                              <h2 className="text-3xl lg:text-xl font-semibold text-primary line-clamp-2">
                                {faq.question}
                              </h2>
                            </div>
                            <span className="ml-6 h-7 flex items-center">
                              {open ? (
                                <MinusIcon className="h-8 w-8 text-primary-600" />
                              ) : (
                                <PlusIcon className="h-8 w-8 text-primary-600" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-4 pr-12">
                          <p className="text-sm text-gray-500">
                            {faq.link ? (
                              <>
                                <span className="text-2xl lg:text-base text-gray-500 sm:text-4xl">
                                  {faq.answer1}
                                </span>
                                <span className="text-2xl lg:text-base text-primary underline hover:opacity-80 sm:text-4xl">
                                  <a
                                    href={faq.link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {faq.answer2}
                                  </a>
                                </span>
                                <span className="text-2xl lg:text-base text-gray-500 sm:text-4xl">
                                  {faq.answer3}
                                </span>
                              </>
                            ) : (
                              <>
                                <p className="text-2xl lg:text-base text-gray-500 sm:text-4xl">
                                  {faq.answer}
                                </p>
                                {faq.answer1}{" "}
                                <span className="text-2xl lg:text-base text-gray-500 sm:text-4xl">
                                  {faq.answer2}
                                </span>
                                <p className="text-2xl lg:text-base text-gray-500 sm:text-4xl">
                                  {faq.answer3}
                                </p>
                              </>
                            )}
                          </p>
                        </Disclosure.Panel>
                      </div>
                    </ScrollAnimation>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </ScrollComponent>
    </div>
  );
};

export default FaqSection;

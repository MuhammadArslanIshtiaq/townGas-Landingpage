import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import ScrollAnimation from "react-animate-on-scroll";
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
      <div className="lg:max-w-7xl px-6 mx-auto text-center">
        <ScrollAnimation duration={1} animateIn="fadeInUp">
          <h2 className="inline-block h-28 mb-8">
            {cl === "ch" ? (
              <img
                className="block h-full w-full"
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
              <Disclosure
                as="div"
                key={faq.question}
                className="col-span-2 lg:col-span-1"
              >
                {({ open }) => (
                  <ScrollAnimation
                    duration={1}
                    animateIn="fadeInUp"
                    className="h-full"
                  >
                    <div className="h-full bg-white rounded-lg border-2 border-primary p-4 text-left">
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-baseline text-gray-400">
                          <div className="flex gap-2 items-baseline">
                            <h1 className="text-3xl font-semibold text-shadow-primary text-white">
                              {faq.number}
                            </h1>
                            <h2 className="text-xl font-semibold text-primary line-clamp-2">
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
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </div>
                  </ScrollAnimation>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

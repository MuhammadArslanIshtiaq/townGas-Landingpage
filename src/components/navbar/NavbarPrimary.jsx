/* This example requires Tailwind CSS v2.0+ */

import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarPrimary() {
  const { t, i18n } = useTranslation();
  let cl = i18next.language;

  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("");
  const [language, setLanguage] = useState("ch");
  const [title, setTitle] = useState("煤氣160周年智慧燃展未來NFT暨大抽獎");

  let keywords = document.getElementsByTagName("meta")["keywords"];
  let sitename = document.getElementsByTagName("meta")["site_name"];
  let description = document.getElementsByTagName("meta")["description"];
  let description2 = document.getElementsByTagName("meta")["description2"];
  let title2 = document.getElementsByTagName("meta")["title2"];

  let chkeywords = document.getElementsByTagName("meta")["keywords"];
  let chsitename = document.getElementsByTagName("meta")["site_name"];
  let chdescription = document.getElementsByTagName("meta")["description"];
  let chdescription2 = document.getElementsByTagName("meta")["description2"];

  const navigation = [
    { name: t("Header.1"), href: "#home" },
    { name: t("Header.2"), href: "#introduction" },
    { name: t("Header.3"), href: "#conceptOfDesign" },
    { name: t("Header.4"), href: "#prize" },
    { name: t("Header.5"), href: "#commonProblem" },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const onLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    if (lang === "en") {
      setTitle("Towngas 160th Anniversary NFT Giveaway & Lucky Draw");
      description.content =
        "Towngas will be the first public utility to debut its free NFT project– “Towngas 160th Anniversary Smart Energy for a Brighter Future NFT Giveaway & Lucky Draw”. ";
      keywords.content =
        "Towngas, TGC, Towngas promotion, appliance promotion, Towngas 160, Towngas 160th, Towngas Lucky Draw, Towngas NFT";
      sitename.content = "Towngas 160th Presents";
      title2.content = "Towngas 160th Anniversary NFT Giveaway & Lucky Draw";
      description2.content =
        "This year, Towngas reaches its 160th anniversary milestone; the company will keep abreast of the times and continue to thrive by the philosophy of ‘Smart Energy for a Brighter Future’. In celebration of this significant year, Towngas will be the first public utility among the rest to debut its free NFT project.";
    } else {
      setTitle("煤氣160周年智慧燃展未來NFT暨大抽獎");
      description.content =
        "踏入160周年，煤氣公司貫徹「智慧燃展未來」的理念，推出全港首個公用事業機構的免費NFT計劃，發行10,000張紀念NFT並同時舉辦抽獎活動，送出160份驚喜獎賞。";
      keywords.content =
        "煤氣公司，TGC，煤氣優惠，爐具優惠，煤氣160周年，煤氣抽獎，煤氣NFT，買爐抽獎";
      sitename.content = "煤氣160周年呈獻";
      title2.content = "煤氣160周年智慧燃展未來NFT暨大抽獎";
      description2.content =
        "踏入160周年，煤氣公司貫徹以「智慧燃展未來」的理念，推出全港首個公用事業機構的免費NFT計劃，發行10,000張獨一無二的紀念NFT並同時舉辦抽獎活動，送出160份驚喜獎賞，以回饋市民多年來的支持。";
    }
  };

  useEffect(() => {
    document.title = `${title}`;
  });

  window.addEventListener("scroll", changeBackground);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full left-[50%] translate-x-[-50%] top-0 z-40 transition-all duration-300  ${
        navbar ? "bg-white py-2 shadow-sm shadow-gray-400" : "bg-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 lg:px-8">
            <div className="relative flex items-center justify-between h-16 p-12">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-16 w-16" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-16 w-16" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="lg:flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex-shrink-0 flex items-center animated fadeInLeftBig">
                  {cl === "ch" ? (
                    <div className="flex flex-row content-center">
                      <a href="https://www.towngas.com/tc/Home" target="blank">
                        <img
                          className="h-16 lg:h-12 w-auto"
                          src="/assets/images/logo-main.png"
                          alt="logo"
                        />
                      </a>
                      <a
                        href="https://www.towngasappliance.com/"
                        target="blank"
                      >
                        <img
                          className="block h-14 lg:h-10 w-auto ml-2"
                          src="/assets/images/logo-main-2.png"
                          alt="logo"
                        />
                      </a>
                    </div>
                  ) : (
                  <div className="flex flex-row content-center">
                      <a href="https://www.towngas.com/en/Home" target="blank">
                        <img
                          className="h-16 lg:h-12 w-auto"
                          src="/assets/images/logo-main.png"
                          alt="logo"
                        />
                      </a>
                      <a
                        href="https://www.towngasappliance.com/"
                        target="blank"
                      >
                        <img
                          className="block h-14 lg:h-10 w-auto ml-2"
                          src="/assets/images/logo-main-2.png"
                          alt="logo"
                        />
                      </a>
                    </div>
                  )}
                </div>
                <div className="hidden lg:flex items-center mx-auto">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActive(item.name)}
                        className={classNames(
                          active === item.name
                            ? "text-primary border-primary"
                            : "text-primary border-transparent hover:border-primary",
                          "font-semibold text-[1.2rem] border-2 py-3 px-4 rounded animated fadeInDownBig capitalize",
                          item.durationClass
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="flex items-center space-x-3 animated fadeInRightBig pl-3">
                    <button
                      type="button"
                      onClick={() => onLanguageChange("ch")}
                      className={`font-semibold text-[1.2rem] pl-5 hover:text-primary ${
                        language === "ch" ? "text-primary" : "text-gray-300"
                      }`}
                    >
                      中
                    </button>
                    <span className="block w-[0.1875rem] h-4 bg-primary" />
                    <button
                      type="button"
                      onClick={() => onLanguageChange("en")}
                      className={`font-semibold text-[1.2rem] hover:text-primary ${
                        language === "en" ? "text-primary" : "text-gray-300"
                      }`}
                    >
                      ENG
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="hidden lg:flex absolute inset-y-0 right-0 items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                <div className="flex items-center space-x-3 animated fadeInRightBig">
                  <button
                    type="button"
                    onClick={() => onLanguageChange("ch")}
                    className={`font-semibold hover:text-primary ${
                      language === "ch" ? "text-primary" : "text-gray-300"
                    }`}
                  >
                    中
                  </button>
                  <span className="block w-[0.1875rem] h-4 bg-primary" />
                  <button
                    type="button"
                    onClick={() => onLanguageChange("en")}
                    className={`font-semibold hover:text-primary ${
                      language === "en" ? "text-primary" : "text-gray-300"
                    }`}
                  >
                    ENG
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white bg-opacity-95 text-center h-screen">
              <>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={() => setActive(item.name)}
                    className={classNames(
                      active === item.name
                        ? "bg-primary text-white"
                        : "text-primary  hover:bg-primary-700 hover:text-white",
                      "block px-3 py-5 mt-10 rounded-md text-7xl font-medium animated fadeInUp"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <div
                  className="flex items-center justify-center space-x-3 animated fadeInUp"
                  style={{ marginTop: "40px" }}
                >
                  <button
                    type="button"
                    onClick={() => onLanguageChange("ch")}
                    className={`text-7xl  font-semibold hover:text-primary ${
                      language === "ch" ? "text-primary" : "text-gray-300"
                    }`}
                  >
                    中
                  </button>
                  <span className="block w-[0.4rem] h-16 bg-primary" />
                  <button
                    type="button"
                    onClick={() => onLanguageChange("en")}
                    className={`text-7xl font-semibold hover:text-primary ${
                      language === "en" ? "text-primary" : "text-gray-300"
                    }`}
                  >
                    ENG
                  </button>
                </div>
              </>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

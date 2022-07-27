/* This example requires Tailwind CSS v2.0+ */

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarPrimary() {
  const { t, i18n } = useTranslation();
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("");
  const [language, setLanguage] = useState("ch");

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
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full left-[50%] translate-x-[-50%] top-0 z-40 transition-all duration-300 ${
        navbar ? "bg-white py-2 shadow-sm shadow-gray-400" : "bg-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 lg:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex-shrink-0 flex items-center animated fadeInLeftBig">
                  <img
                    className="hidden lg:block h-12 w-auto"
                    src="/assets/images/logo-1.svg"
                    alt="logo"
                  />
                  <img
                    className="block lg:hidden h-9 w-auto"
                    src="/assets/images/logo.svg"
                    alt="logo"
                  />
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
                          "font-semibold text-[1rem] border-2 py-3 px-4 rounded animated fadeInDownBig capitalize",
                          item.durationClass
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
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
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={classNames(
                    active === item.name
                      ? "bg-primary text-white"
                      : "text-gray-300 hover:bg-primary-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

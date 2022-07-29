import React from "react";
import { useTranslation } from "react-i18next";
import ModalComponents from "../modals/ModalComponents";
import i18next from "i18next";

export default function FooterPrimary() {
  const [isOpen, setIsOpen] = React.useState("");
  const { t } = useTranslation();
  let cl = i18next.language;

  return (
    <>
      <ModalComponents show={isOpen} onClose={() => setIsOpen("")} />
      <footer
        className="bg-primary text-center lg:text-left"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="lg:max-w-7xl px-6 mx-auto ">
          <div className="py-6 flex flex-wrap gap-4 md:items-center">
            <p className="text-lg text-white mx-auto lg:ml-0 lg:mr-auto">
              {cl === "ch" ? (
                <span
                  className="hover:cursor-pointer"
                  onClick={() => setIsOpen("PrivacyPolicy")}
                >
                  {t("Footer.0")}
                </span>
              ) : (
                <span
                  className="hover:cursor-pointer"
                  onClick={() => setIsOpen("PrivacyPolicyEn")}
                >
                  {t("Footer.0")}
                </span>
              )}
              {t("Footer.1")}
            </p>
            <p className="text-lg text-white">{t("Footer.2")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

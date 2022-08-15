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
        <div className="lg:max-w-7xl  mx-auto ">
          <div className="py-6 flex flex-wrap gap-4 md:items-center">
            <p className="text-lg text-white mx-auto lg:ml-0 lg:mr-auto">
              {cl === "ch" ? (
                <>
                  <a
                    href="https://www.towngas.com/tc/Info/Privacy"
                    className="mx-1"
                  >
                    私隱政策
                  </a>
                  <a
                    className="hover:cursor-pointer mx-1"
                    href="https://www.towngas.com/tc/Info/Disclaimer"
                  >
                    | 免責聲明及使用條款 |
                  </a>
                  <span
                    className="hover:cursor-pointer mx-1"
                    onClick={() => setIsOpen("PrivacyPolicy")}
                  >
                     活動條款及細則 |
                  </span>
                </>
              ) : (
                <>
                  <a
                    href="https://www.towngas.com/en/Info/Privacy"
                    className="mx-1"
                  >
                    Privacy Policy
                  </a>

                  <a
                    className="hover:cursor-pointer mx-1"
                    href="https://www.towngas.com/en/Info/Disclaimer"
                  >
                    | Disclaimer |
                  </a>
                  <span
                    className="hover:cursor-pointer mx-1"
                    onClick={() => setIsOpen("PrivacyPolicyEn")}
                  >
                   Terms & Conditions |
                  </span>
                </>
              )}

              {t("Footer.1")}
            </p>
            <p className="text-lg text-white">{t("Footer.2")}</p>
          </div>
          <p className="text-lg text-white text-right -mt-4">{t("Footer.3")}</p>
        </div>
      </footer>
    </>
  );
}

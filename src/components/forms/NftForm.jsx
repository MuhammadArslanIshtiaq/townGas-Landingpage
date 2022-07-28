import React from "react";
import CheckBox from "./CheckBox";
import InputComponent from "./InputComponent";
import ModalComponents from "../modals/ModalComponents";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const NftForm = () => {
  const { t } = useTranslation();
  let cl = i18next.language;
  const [isOpen, setIsOpen] = React.useState("");
  return (
    <>
      <ModalComponents show={isOpen} onClose={() => setIsOpen("")} />

      <form noValidate>
        <div className="animated fadeInDown max-w-[20rem] mx-auto mb-6">
          {cl === "ch" ? (
            <img
              className="block h-full w-full"
              src="/assets/images/hero-title.png"
              alt="..."
            />
          ) : (
            <img
              className="block h-full w-full"
              src="/assets/images/hero-heading.png"
              alt="..."
            />
          )}
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-4">
            <li className="col-span-2">
              <InputComponent name={`${t("Form.1")}`} type="text" />
            </li>
            <li className="col-span-2 lg:col-span-1">
              <InputComponent name={`${t("Form.2")}`} type="email" />
            </li>
            <li className="col-span-2 lg:col-span-1">
              <InputComponent name={`${t("Form.3")}`} type="text" />
            </li>
            <li className="col-span-2">
              <InputComponent name={`${t("Form.4")}`} type="text" />
            </li>
            <li className="col-span-2 lg:col-span-1 self-center">
              <div className="space-y-4 text-gray-400 text-base">
                <p className="text-primary font-semibold animated fadeInUp">
                  {t("Form.5")}
                </p>
                <p className="animated fadeInUp">{t("Form.6")}</p>
                <p className="animated fadeInUp">{t("Form.7")}</p>
                <p className="animated fadeInUp">{t("Form.8")}</p>
              </div>
            </li>
            <li className="col-span-2 lg:col-span-1 animated fadeInUp">
              <div>
                <img
                  className="block h-full w-full"
                  src="/assets/images/wallet-image.png"
                  alt=".."
                />
              </div>
            </li>
            <li className="col-span-2">
              <CheckBox name={`${t("Form.9")}`} />
            </li>
            <li className="col-span-2 lg:col-span-1">
              <InputComponent name={`${t("Form.10")}`} type="text" />
            </li>
            <li className="col-span-2 lg:col-span-1">
              <InputComponent name={`${t("Form.11")}`} type="text" />
            </li>
            <li className="col-span-2">
              <div className="text-center mt-4 animated fadeInUp">
                <button
                  onClick={() => setIsOpen("SubmitThankYou")}
                  type="button"
                  className="bg-1 transform duration-300 hover:scale-95 active:scale-95  text-white inline-flex justify-center items-center gap-4 py-4 px-8 rounded-full text-xl"
                >
                  <span className="block h-6 min-w-[1.6rem]">
                    <img
                      className="block w-full h-full"
                      src="/assets/images/sign.svg"
                      alt="..."
                    />
                  </span>
                  <span className="line-clamp-2">{t("Button.3")}</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </>
  );
};

export default NftForm;

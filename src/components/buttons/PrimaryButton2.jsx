import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ModalComponents from "../modals/ModalComponents";

const PrimaryButton = () => {
  const [isOpen, setIsOpen] = React.useState("");
  const { t } = useTranslation();

  return (
    <>
      <ModalComponents show={isOpen} onClose={() => setIsOpen("")} />

      <a
        target="_blank"
        href="https://opensea.io/collection/towngas160nft"
        className="bg-primary hover:bg-primary-600 text-white inline-flex justify-center items-center gap-2 py-4 px-8 rounded-full text-2xl sm:text-4xl md:text-xl"
      >
        <span className="block h-9 min-w-[2.5rem]">
          <img
            className="block w-full h-full"
            src="/assets/images/sign.svg"
            alt="..."
          />
        </span>
        <span className="line-clamp-2">{t("Button.1")}</span>
      </a>
    </>
  );
};

export default PrimaryButton;

import React from "react";
import { useTranslation } from "react-i18next";

const SubmitThankYou = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6 text-gray-500 text-lg text-center mb-8">
      <p className="text-primary font-semibold animated fadeInUp text-2xl">
        {t("Thankyou.1")}
      </p>
      <p className="animated fadeInUp">
        {t("Thankyou.2")}
        <br /> {t("Thankyou.3")}
      </p>

      <p className="animated fadeInUp">{t("Thankyou.4")}</p>
    </div>
  );
};

export default SubmitThankYou;

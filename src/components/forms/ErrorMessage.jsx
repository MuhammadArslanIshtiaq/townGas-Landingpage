import React from "react";
import { useTranslation } from "react-i18next";

const ErrorMessage = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6 text-gray-500 text-lg text-center mb-8 ">
      <p className="text-red-600 font-semibold animated fadeInUp text-2xl">
        ERROR MESSAGE
      </p>
      <p className="animated fadeInUp">User Aleady Regiestered.</p>

      <p className="animated fadeInUp">{t("Thankyou.4")}</p>
    </div>
  );
};

export default ErrorMessage;

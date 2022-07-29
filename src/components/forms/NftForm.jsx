import React from "react";
import { useState } from "react";
import CheckBox from "./CheckBox";
import ModalComponents from "../modals/ModalComponents";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import axios from "axios";
const url = "http://audiobar.xyz/api/user";

const NftForm = () => {
  const { t } = useTranslation();
  let cl = i18next.language;
  const [isOpen, setIsOpen] = React.useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [metaAddress, setMetaAddress] = useState("");
  const [orderNum, setOrderNum] = useState("");
  const [orderDate, setOrderDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen("SubmitThankYou");
    console.log(name, email, phone, metaAddress, orderNum, orderDate);
    try {
      const resp = axios.post(
        url,
        {
          name,
          email,
          phone,
          metaAddress,
          orderNum,
          orderDate,
        },
        {
          crossdomain: true,
        }
      );
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

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
              <div className="animated fadeInUp">
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-gray-500 capitalize"
                >
                  {t("Form.1")}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    required
                    className="p-2 shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </li>
            <li className="col-span-2 lg:col-span-1">
              <div className="animated fadeInUp">
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-500 capitalize"
                >
                  {t("Form.2")}
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    required
                    className="p-2 shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </li>
            <li className="col-span-2 lg:col-span-1">
              <div className="animated fadeInUp">
                <label
                  htmlFor="phone"
                  className="block text-base font-medium text-gray-500 capitalize"
                >
                  {t("Form.3")}
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    id="phone"
                    value={phone}
                    required
                    className="p-2 shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </li>
            <li className="col-span-2">
              <div className="animated fadeInUp">
                <label
                  htmlFor="address"
                  className="block text-base font-medium text-gray-500 capitalize"
                >
                  {t("Form.4")}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="metaAddress"
                    value={metaAddress}
                    required
                    className="p-2 shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setMetaAddress(e.target.value)}
                  />
                </div>
              </div>
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
              <div className="animated fadeInUp">
                <label
                  htmlFor="ordernum"
                  className="block text-base font-medium text-gray-500 capitalize"
                >
                  {t("Form.10")}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="orderNum"
                    value={orderNum}
                    required
                    className="p-2 shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setOrderNum(e.target.value)}
                  />
                </div>
              </div>
            </li>
            <li className="col-span-2 lg:col-span-1">
              <div className="animated fadeInUp">
                <label
                  htmlFor="orderDate"
                  className="block text-base font-medium text-gray-500 capitalize"
                >
                  {t("Form.11")}
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    id="orderDate"
                    value={orderDate}
                    className="p-2 shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setOrderDate(e.target.value)}
                  />
                </div>
              </div>
            </li>
            <li className="col-span-2">
              <div className="text-center mt-4 animated fadeInUp">
                <button
                  // onClick={() => setIsOpen("SubmitThankYou")}
                  onClick={handleSubmit}
                  type="button"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-600 text-white inline-flex justify-center items-center gap-4 py-4 px-8 rounded-full text-xl"
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
            <li className="col-span-2">
              <p className="animated fadeInUp text-center text-gray-400 text-base">
                推廣生意的競賽牌照號碼：XXXXX
              </p>
            </li>
          </ul>
        </div>
      </form>
    </>
  );
};

export default NftForm;

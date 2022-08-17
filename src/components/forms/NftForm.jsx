import React from "react";
import { useState } from "react";
import ModalComponents from "../modals/ModalComponents";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import i18next from "i18next";
import axios from "axios";
const url = "/user";

const NftForm = () => {
  const { t } = useTranslation();
  let cl = i18next.language;
  const [isOpen, setIsOpen] = React.useState("");

  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [metaAddress, setMetaAddress] = useState("");
  const [orderNum, setOrderNum] = useState("");
  const [orderDate, setOrderDate] = useState("");

  const handleSubmitForm = (e) => {
    setError(false);
    try {
      const resp = axios
        .post(
          url,
          {
            name: name,
            email: email,
            phone: phone,
            wallet_address: metaAddress,
            order_no: orderNum,
            purchase_date: orderDate,
            language: cl,
          },
          {
            crossdomain: true,
          }
        )
        .then((response) => {
          if (response.status === 400) {
            setError(true);
          } else if (response.status === 200) setIsOpen("SubmitThankYou");
        })
        .catch(function (error) {
          if (error.response) {
            setError(true);
          }
        });
    } catch (error) {
      setError(true);
    }
    setName("");
    setEmail("");
    setPhone("");
    setMetaAddress("");
    setOrderNum("");
    setOrderDate("");
  };

  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    setIsSubscribed((current) => !current);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <ModalComponents show={isOpen} onClose={() => setIsOpen("")} />

      <form onSubmit={handleSubmitForm}>
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
        {error === true ? (
          <>
            <div className="animated fadeInDown mx-auto mb-6 error">
              {cl === "ch" ? (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center"
                  role="alert"
                >
                  電話號碼 / 電郵地址 / MetaMask錢包地址已登記
                </div>
              ) : (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center"
                  role="alert"
                >
                  Phone number / Email address /MetaMask Wallet Address is
                  registered
                  {error}
                </div>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
        <div>
          <ul className="grid grid-cols-2 gap-4">
            <li className="col-span-2">
              <div className="animated fadeInUp">
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-gray-500 capitalize"
                >
                  {t("Form.1")}
                  <span className="text-xs text-red-500">
                    {t("Form.Required")}
                  </span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    value={name}
                    {...register("name", { required: true })}
                    className="p-2 shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <>
                      {cl === "ch" ? (
                        <p className="text-red-600 mt-3 text-sm">这是必填栏</p>
                      ) : (
                        <p className="text-red-600 mt-3 text-sm">
                          This field is required
                        </p>
                      )}
                    </>
                  )}
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
                  <span className="text-xs text-red-500">
                    {t("Form.Required")}
                  </span>
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    value={email}
                    required
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    className="p-2 shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {errors.email && errors.email.type === "required" && (
                    <>
                      {cl === "ch" ? (
                        <p className="text-red-600 mt-3 text-sm">这是必填栏</p>
                      ) : (
                        <p className="text-red-600 mt-3 text-sm">
                          This field is required
                        </p>
                      )}
                    </>
                  )}

                  {errors.email && errors.email.type === "pattern" && (
                    <>
                      {cl === "ch" ? (
                        <p className="text-red-600 mt-3 text-sm">
                          请确保您输入了有效的电子邮件。
                        </p>
                      ) : (
                        <p className="text-red-600 mt-3 text-sm">
                          Please make sure you have entered a valid email.
                        </p>
                      )}
                    </>
                  )}
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
                  <span className="text-xs text-red-500">
                    {t("Form.Required")}
                  </span>
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    maxLength={8}
                    minLength={8}
                    required
                    value={phone}
                    {...register("phone", {
                      required: true,
                      minLength: 8,
                      message: "error message",
                    })}
                    className="p-2 shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  {errors.phone && errors.phone.type === "required" && (
                    <>
                      {cl === "ch" ? (
                        <p className="text-red-600 mt-3 text-sm">这是必填栏</p>
                      ) : (
                        <p className="text-red-600 mt-3 text-sm">
                          This field is required
                        </p>
                      )}
                    </>
                  )}

                  {errors.phone && errors.phone.type === "minLength" && (
                    <>
                      {cl === "ch" ? (
                        <p className="text-red-600 mt-3 text-sm">
                          电话长度不能短于 8
                        </p>
                      ) : (
                        <p className="text-red-600 mt-3 text-sm">
                          Phone length cannot be shorter than 8
                        </p>
                      )}
                    </>
                  )}
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
                <p className="animated fadeInUp">
                  {t("Form.6")}
                  <span className="ml-1">
                    <a href="https://metamask.io/download/">{t("Form.6a")}</a>
                  </span>
                </p>
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
              <div className="relative flex items-start animated fadeInUp">
                <div className="flex items-center h-5">
                  <input
                    id="checkbox"
                    name="checkbox"
                    type="checkbox"
                    value={isSubscribed}
                    onChange={handleChange}
                    className="focus:ring-primary-500 h-5 w-5 text-primary-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="checkbox"
                    className="font-medium text-gray-500 cursor-pointer"
                  >
                    {t("Form.9")}
                  </label>
                </div>
              </div>
            </li>
            {isSubscribed === true ? (
              <>
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
                        maxLength={8}
                        minLength={8}
                        {...register("ordernumber", {
                          required: true,
                          minLength: 8,
                          message: "error message",
                        })}
                        className="p-2 shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                        onChange={(e) => setOrderNum(e.target.value)}
                      />

                      {errors.ordernumber &&
                        errors.ordernumber.type === "required" && (
                          <>
                            {cl === "ch" ? (
                              <p className="text-red-600 mt-3 text-sm">
                                这是必填栏
                              </p>
                            ) : (
                              <p className="text-red-600 mt-3 text-sm">
                                This field is required
                              </p>
                            )}
                          </>
                        )}

                      {errors.ordernumber &&
                        errors.ordernumber.type === "minLength" && (
                          <>
                            {cl === "ch" ? (
                              <p className="text-red-600 mt-3 text-sm">
                                訂單號長度應為 7 位。
                              </p>
                            ) : (
                              <p className="text-red-600 mt-3 text-sm">
                                Order # length should be 7 digits.
                              </p>
                            )}
                          </>
                        )}
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
              </>
            ) : (
              <></>
            )}

            <li className="col-span-2">
              <div className="text-center mt-4 animated fadeInUp">
                <button
                  onClick={handleSubmit(handleSubmitForm)}
                  type="submit"
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
                {t("Footer.1")}
              </p>
            </li>
          </ul>
        </div>
      </form>
    </>
  );
};

export default NftForm;

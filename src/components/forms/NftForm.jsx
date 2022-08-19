import React from 'react'
import { useState } from 'react'
import ModalComponents from '../modals/ModalComponents'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import i18next from 'i18next'
import axios from 'axios'
const url = '/user'

const NftForm = () => {
  const { t } = useTranslation()
  let cl = i18next.language
  const [isOpen, setIsOpen] = React.useState('')

  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [orderError, setOrderError] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [metaAddress, setMetaAddress] = useState('')
  const [orderNum, setOrderNum] = useState('')
  const [orderDate, setOrderDate] = useState('')

  const handleSubmitForm = (e) => {
    setError(false)
    setNameError(false)
    setEmailError(false)
    setPhoneError(false)
    setOrderError(false)
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
          },
        )
        .then((response) => {
          if (response.status === 400) {
            setError(true)
          } else if (response.status === 200) {
            if (response.data.error && response.data.error.length > 0) {
              setError(true)
              if (response.data.error.type === 1) {
                setNameError(true)
              } else if (response.data.error.type === 2) {
                setEmailError(true)
              } else if (response.data.error.type === 3) {
                setPhoneError(true)
              } else if (response.data.error.type === 4) {
                setOrderError(true)
              }
            } else {
              setIsOpen('SubmitThankYou')
              setTimeout(() => setIsOpen(''), 3000)
            }
          }
        })
        .catch(function (error) {
          if (error.response) {
            setError(true)
          }
        })
    } catch (error) {
      setError(true)
    }
    setName('')
    setEmail('')
    setPhone('')
    setMetaAddress('')
    setOrderNum('')
    setOrderDate('')
  }

  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked')
    } else {
      console.log('⛔️ Checkbox is NOT checked')
    }
    setIsSubscribed((current) => !current)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <ModalComponents show={isOpen} onClose={() => setIsOpen('')} />

      <form onSubmit={handleSubmitForm}>
        <div className="animated fadeInDown max-w-[20rem] mx-auto mb-6">
          {cl === 'ch' ? (
            <img
              className="block h-full w-full"
              src="/assets/images/hero-title.png"
              alt="..."
            />
          ) : (
            <img
              className="block h-full w-full"
              src="/assets/images/hero-title-en.png"
              alt="..."
            />
          )}
        </div>
        {/* Api Error Response Alert here */}

        {error === true && nameError === true ? (
          <>
            <div className="animated fadeInDown mx-auto mb-6 error">
              {cl === 'ch' ? (
                <div
                  className="p-4 mb-4 md:text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center"
                  role="alert"
                >
                  姓名已登記.
                </div>
              ) : (
                <div
                  className="p-4 mb-4 md:text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center"
                  role="alert"
                >
                  Name input cannot be empty.
                </div>
              )}
            </div>
          </>
        ) : (
          <></>
        )}

        {error === true && emailError === true ? (
          <>
            <div className="animated fadeInDown mx-auto mb-6 error">
              {cl === 'ch' ? (
                <div
                  className="p-4 mb-4 md:text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center"
                  role="alert"
                >
                  電郵已登記
                </div>
              ) : (
                <div
                  className="p-4 mb-4 md:text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center"
                  role="alert"
                >
                  Email is already registered.
                </div>
              )}
            </div>
          </>
        ) : (
          <></>
        )}

        {error === true && phoneError === true ? (
          <>
            <div className="animated fadeInDown mx-auto mb-6 error">
              {cl === 'ch' ? (
                <div
                  className="p-4 mb-4 md:text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center"
                  role="alert"
                >
                  電話號碼已登記
                </div>
              ) : (
                <div
                  className="p-4 mb-4 md:text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center"
                  role="alert"
                >
                  Phone is already registered.
                </div>
              )}
            </div>
          </>
        ) : (
          <></>
        )}

        {error === true && orderError === true ? (
          <>
            <div className="animated fadeInDown mx-auto mb-6 error">
              {cl === 'ch' ? (
                <div
                  className="p-4 mb-4 md:text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center"
                  role="alert"
                >
                  訂單號碼已登記
                </div>
              ) : (
                <div
                  className="p-4 mb-4 md:text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 text-center"
                  role="alert"
                >
                  Order number is already registered.
                </div>
              )}
            </div>
          </>
        ) : (
          <></>
        )}

        {/* Error Alert Ends here */}
        <div>
          <ul className="grid grid-cols-2 gap-4">
            <li className="col-span-2">
              <div className="animated fadeInUp">
                <label
                  htmlFor="name"
                  className="block md:text-2xl font-medium text-gray-500 capitalize sm:text-4xl"
                >
                  {t('Form.1')}
                  <span className="md:text-base text-red-500 md:text-xl">
                    {t('Form.Required')}
                  </span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    value={name}
                    {...register('name', {
                      required: true,
                      pattern: /^[A-Za-z ]+$/i,
                    })}
                    className="p-2 sm:text-4xl shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setName(e.target.value)}
                  />

                  {errors.name && errors.name.type === 'required' && (
                    <>
                      {cl === 'ch' ? (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          請提供正確資料。
                        </p>
                      ) : (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          This field is required.
                        </p>
                      )}
                    </>
                  )}

                  {errors.name && errors.name.type === 'pattern' && (
                    <>
                      {cl === 'ch' ? (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          請輸入正確姓名。
                        </p>
                      ) : (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          Please input correct info.
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
                  className="block md:text-2xl font-medium text-gray-500 capitalize sm:text-4xl"
                >
                  {t('Form.2')}
                  <span className="text-base text-red-500 md:text-xl">
                    {t('Form.Required')}
                  </span>
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    value={email}
                    required
                    {...register('email', {
                      required: true,
                      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    className="p-2 sm:text-4xl shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {errors.email && errors.email.type === 'required' && (
                    <>
                      {cl === 'ch' ? (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          請提供正確資料。
                        </p>
                      ) : (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          This field is required.
                        </p>
                      )}
                    </>
                  )}

                  {errors.email && errors.email.type === 'pattern' && (
                    <>
                      {cl === 'ch' ? (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          請填寫有效電郵。
                        </p>
                      ) : (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          Please input a valid email.
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
                  className="block md:text-2xl font-medium text-gray-500 capitalize sm:text-4xl"
                >
                  {t('Form.3')}
                  <span className="text-base text-red-500 md:text-xl">
                    {t('Form.Required')}
                  </span>
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    maxLength={8}
                    minLength={8}
                    required
                    value={phone}
                    {...register('phone', {
                      required: true,
                      minLength: 8,
                      message: 'error message',
                    })}
                    className="p-2 sm:text-4xl shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  {errors.phone && errors.phone.type === 'required' && (
                    <>
                      {cl === 'ch' ? (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          請提供正確資料。
                        </p>
                      ) : (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          This field is required.
                        </p>
                      )}
                    </>
                  )}

                  {errors.phone && errors.phone.type === 'minLength' && (
                    <>
                      {cl === 'ch' ? (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          請填寫正確電話號碼。
                        </p>
                      ) : (
                        <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                          Please input correct phone number.
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
                  className="block md:text-2xl font-medium text-gray-500 capitalize sm:text-4xl"
                >
                  {t('Form.4')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="metaAddress"
                    value={metaAddress}
                    className="p-2 sm:text-4xl shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                    onChange={(e) => setMetaAddress(e.target.value)}
                  />
                </div>
              </div>
            </li>
            <li className="col-span-2 lg:col-span-1 self-center">
              <div className="space-y-4 text-gray-400 md:text-2xl sm:text-4xl">
                <p className="text-primary font-semibold animated fadeInUp">
                  {t('Form.5')}
                </p>
                <p className="animated fadeInUp">
                  {t('Form.6')}
                  <span className="ml-1 cursor-pointer text-secondary underline hover:opacity-80">
                    <a href="https://metamask.io/download/">{t('Form.6a')}</a>
                  </span>
                </p>
                <p className="animated fadeInUp">{t('Form.7')}</p>
                <p className="animated fadeInUp">{t('Form.8')}</p>
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
              <div className="relative flex items-center animated fadeInUp">
                <div className="flex items-center h-5">
                  <input
                    id="checkbox"
                    name="checkbox"
                    type="checkbox"
                    value={isSubscribed}
                    onChange={handleChange}
                    className="sm:text-4xl sm:h-10 sm:w-10 focus:ring-primary-500 md:h-5 md:w-5 text-primary-600 border-gray-300 rounded sm:mr-2"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="checkbox"
                    className="font-medium md:text-2xl text-gray-500 cursor-pointer sm:text-4xl md:p-2"
                  >
                    {t('Form.9')}
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
                      className="block md:text-2xl font-medium text-gray-500 capitalize sm:text-4xl"
                    >
                      {t('Form.10')}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="orderNum"
                        value={orderNum}
                        required
                        maxLength={7}
                        minLength={7}
                        {...register('ordernumber', {
                          required: true,
                          minLength: 7,
                          message: 'error message',
                        })}
                        className="p-2 md:text-2xl sm:text-4xl shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
                        onChange={(e) => setOrderNum(e.target.value)}
                      />

                      {errors.ordernumber &&
                        errors.ordernumber.type === 'required' && (
                          <>
                            {cl === 'ch' ? (
                              <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                                請提供正確資料.
                              </p>
                            ) : (
                              <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                                This field is required.
                              </p>
                            )}
                          </>
                        )}

                      {errors.ordernumber &&
                        errors.ordernumber.type === 'minLength' && (
                          <>
                            {cl === 'ch' ? (
                              <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                                請輸入7位數字的單據編號.
                              </p>
                            ) : (
                              <p className="text-red-600 mt-3 md:text-sm sm:text-4xl">
                                Please input 7-digit order no.
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
                      className="block md:text-2xl font-medium text-gray-500 capitalize sm:text-4xl"
                    >
                      {t('Form.11')}
                    </label>
                    <div className="mt-1">
                      <input
                        type="date"
                        id="orderDate"
                        value={orderDate}
                        className="p-2 md:text-2xl sm:text-4xl shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
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
                  className="w-full sm:w-auto bg-primary hover:bg-primary-600 text-white inline-flex justify-center items-center gap-4 py-4 px-8 rounded-full md:text-xl sm:text-4xl"
                >
                  <span className="block h-6 min-w-[1.6rem]">
                    <img
                      className="block w-full h-full"
                      src="/assets/images/sign.svg"
                      alt="..."
                    />
                  </span>
                  <span className="line-clamp-2">{t('Button.3')}</span>
                </button>
              </div>
            </li>
            <li className="col-span-2">
              <p className="animated fadeInUp text-center text-gray-400 md:text-base sm:text-4xl">
                {t('Footer.1')}
              </p>
            </li>
          </ul>
        </div>
      </form>
    </>
  )
}

export default NftForm

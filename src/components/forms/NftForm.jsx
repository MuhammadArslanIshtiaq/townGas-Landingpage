import React from 'react';
import CheckBox from './CheckBox';
import InputComponent from './InputComponent';
import ModalComponents from '../modals/ModalComponents';

const NftForm = () => {
  const [isOpen, setIsOpen] = React.useState('');
  return (
    <>
      <ModalComponents show={isOpen} onClose={() => setIsOpen('')} />

      <form noValidate>
        <div className='animated fadeInDown max-w-[20rem] mx-auto mb-6'>
          <img
            className='block h-full w-full'
            src='/assets/images/hero-title.png'
            alt='...'
          />
        </div>
        <div>
          <ul className='grid grid-cols-2 gap-4'>
            <li className='col-span-2'>
              <InputComponent name='姓名(與身份證相同)：' type='text' />
            </li>
            <li className='col-span-2 lg:col-span-1'>
              <InputComponent name='電郵地址：' type='email' />
            </li>
            <li className='col-span-2 lg:col-span-1'>
              <InputComponent name='電話號碼：' type='text' />
            </li>
            <li className='col-span-2'>
              <InputComponent name='MetaMask錢包地址：' type='text' />
            </li>
            <li className='col-span-2 lg:col-span-1 self-center'>
              <div className='space-y-4 text-gray-400 text-base'>
                <p className='text-primary font-semibold animated fadeInUp'>
                  如何獲取METAMASK錢包地址
                </p>
                <p className='animated fadeInUp'>1) 打開METAMASK</p>
                <p className='animated fadeInUp'>2) 點擊複製錢包地址</p>
                <p className='animated fadeInUp'>3) 完成！</p>
              </div>
            </li>
            <li className='col-span-2 lg:col-span-1 animated fadeInUp'>
              <div>
                <img
                  className='block h-full w-full'
                  src='/assets/images/wallet-image.png'
                  alt='..'
                />
              </div>
            </li>
            <li className='col-span-2'>
              <CheckBox name='已購買煤氣爐具，領取額外NFT，請按剔。' />
            </li>
            <li className='col-span-2 lg:col-span-1'>
              <InputComponent name='單據編號：' type='text' />
            </li>
            <li className='col-span-2 lg:col-span-1'>
              <InputComponent name='購買日期：' type='text' />
            </li>
            <li className='col-span-2'>
              <div className='text-center mt-4 animated fadeInUp'>
                <button
                  onClick={() => setIsOpen('SubmitThankYou')}
                  type='button'
                  className='bg-1 transform duration-300 hover:scale-95 active:scale-95  text-white inline-flex justify-center items-center gap-4 py-4 px-8 rounded-full text-xl'
                >
                  <span className='block h-6 min-w-[1.6rem]'>
                    <img
                      className='block w-full h-full'
                      src='/assets/images/sign.svg'
                      alt='...'
                    />
                  </span>
                  <span className='line-clamp-2'>提交</span>
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

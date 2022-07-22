import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import FaqSection from './FaqSection';

const BannerSection = () => {
  return (
    <section className='relative z-20 bg-layerThree bg-cover py-16'>
      <div className='lg:max-w-7xl px-6 mx-auto text-center'>
        <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutRight'>
          <div className=' bg-white/50 border-2 border-primary p-6 sm:p-8 lg:p-14 rounded-lg text-left'>
            <div className='grid grid-cols-2 gap-10 items-center'>
              <div className='col-span-2 lg:col-span-1 text-center'>
                <div>
                  <h2 className='inline-block h-48'>
                    <img
                      className='block h-full w-full'
                      src='/assets/images/title-4.png'
                      alt='..'
                    />
                  </h2>

                  <div className='mt-6'>
                    <Link
                      to
                      className='bg-primary hover:bg-primary-600 text-white inline-flex justify-center items-center gap-4 py-4 px-8 rounded-xl text-2xl'
                    >
                      <span className='block h-12 min-w-[2.8rem]'>
                        <img
                          className='block w-full h-full'
                          src='/assets/images/sign.svg'
                          alt='...'
                        />
                      </span>
                      <span className='line-clamp-2'>
                        免費換領 <br /> 煤氣160週年紀念NFT
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-span-2 lg:col-span-1'>
                <div className='space-y-4 text-gray-400 text-lg'>
                  <p>
                    參加者須年滿18歲或以上及持有有效之香港居民身份證，並完成以下步驟﹕
                  </p>
                  <div>
                    <p>
                      1. 下載及開設METAMASK錢包{' '}
                      <a
                        href
                        className='cursor-pointer text-secondary underline hover:opacity-80'
                      >
                        (點撃下載)
                      </a>
                    </p>
                    <p>2. 填妥並遞交下列表格內的資料</p>
                    <p>3. 遞交後即可於24小時內獲得NFT乙張及一個抽獎名額</p>
                  </div>
                  <p>每位參加者可免費獲得NFT乙張及一個抽獎名額</p>
                  <p>
                    此外，凡於活動期間經煤氣公司
                    <a
                      href
                      className='cursor-pointer text-primary hover:opacity-80 mx-2'
                    >
                      購買爐具產品
                    </a>
                    並填寫單據編號及購買日期，
                    <a
                      href
                      className='cursor-pointer text-primary hover:opacity-80 mx-1'
                    >
                      可額外獲得NFT乙張及多一個抽獎名額。
                    </a>
                    每位參加者只可於活動期間參加抽獎一次及獲得最多兩張NFT及兩個抽獎名額。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <FaqSection />
    </section>
  );
};

export default BannerSection;

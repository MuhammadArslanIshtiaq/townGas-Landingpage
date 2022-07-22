import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

const HeroSection = () => {
  return (
    <>
      <section className='lg:pt-36 pt-20 pb-16 md:max-h-[78rem] bg-center bg-cover bg-heroD relative z-20'>
        <div className='px-6 lg:px-16 relative'>
          <div className='grid grid-cols-4 gap-6 h-full items-center'>
            <div className='col-span-4 lg:col-span-2 transition-all duration-300'>
              <div className='mb-8 animated fadeInLeft'>
                <div>
                  <img
                    className='block h-full w-full'
                    src='/assets/images/hero-image.png'
                    alt='..'
                  />
                </div>
              </div>
            </div>
            <div className='col-span-4 lg:col-span-2'>
              <div>
                <div className='animated fadeInDown'>
                  <img
                    className='block h-full w-full'
                    src='/assets/images/hero-title.png'
                    alt='...'
                  />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-3 items-center mt-6'>
                <div className='col-span-3 sm:col-span-2'>
                  <div className='flex items-center justify-center gap-3 animated fadeInLeft'>
                    <h4 className='uppercase text-2xl md:text-3x1 text-gray font-bold'>
                      2022.8.11
                      <br />
                      Hkt 00:00
                    </h4>
                    <span className='w-[7rem]'>
                      <img
                        className='block h-full w-full'
                        src='/assets/images/arrow.png'
                        alt='...'
                      />
                    </span>
                    <h4 className='uppercase text-2xl md:text-3x1 text-gray font-bold'>
                      2022.9.11
                      <br />
                      Hkt 23:59
                    </h4>
                  </div>
                  <div className='mt-4 flex justify-center animated fadeInLeft'>
                    <PrimaryButton />
                  </div>
                </div>
                <div className='col-span-3 sm:col-span-1'>
                  <div className='animated fadeInRight'>
                    <img
                      className='block h-full w-full'
                      src='/assets/images/160gift.png'
                      alt='...'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6' id='introduction'>
          <ScrollAnimation
            duration={1}
            animateIn='fadeInDown'
            animateOut='fadeOutUp'
          >
            <div className='bg-hero2 bg-contain bg-no-repeat lg:max-w-7xl px-6 mx-auto'>
              <div className='grid grid-cols-2 gap-10 py-8 lg:py-32 lg:px-24 items-center'>
                <div className='col-span-2 lg:col-span-1'>
                  <ScrollAnimation
                    duration={1}
                    delay={600}
                    animateIn='fadeInLeft'
                    animateOut='fadeOutLeft'
                  >
                    <img
                      className='block h-30 w-auto'
                      src='/assets/images/logo.svg'
                      alt='logo'
                    />
                  </ScrollAnimation>
                </div>
                <div className='col-span-2 lg:col-span-1'>
                  <ScrollAnimation
                    duration={1}
                    delay={600}
                    animateIn='fadeInRight'
                    animateOut='fadeOutRight'
                  >
                    <span className='block h-24 w-[17rem]'>
                      <img
                        className='block h-full w-full'
                        src='/assets/images/title-1.png'
                        alt='..'
                      />
                    </span>
                    <p className='text-gray-400 text-lg mt-4 line-clamp-6'>
                      香港中華煤氣有限公司(煤氣公司)於1862年成立，是香港歷史最悠久的公用事業機構，以創新和環保為本，致力發展成為亞洲地區清潔能源供應及優質服務之領先企業。踏入160
                      週年，邁進新的新里程碑，煤氣公司繼續與時並進，貫徹以「智慧燃展未來」的理念，推出全港首個公用事業機構的免費NFT計劃，發行10,000張獨一無二的紀念NFT並舉辦抽獎活動，送出160份驚喜獎賞，以回饋市民多年來的支持！
                    </p>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

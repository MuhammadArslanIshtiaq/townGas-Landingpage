import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

const ConceptOfDesign = () => {
  return (
    <section
      id='conceptOfDesign'
      className='relative z-20 sm:mt-36 sm:pt-[40rem] lg:mt-24 lg:pt-60 pb-16 bg-layerOne bg-cover'
    >
      <div className='lg:max-w-7xl px-6 mx-auto'>
        <div className='grid grid-cols-3 gap-8 items-center'>
          <div className='col-span-3 lg:col-span-1'>
            <ScrollAnimation
              duration={1}
              animateIn='fadeInLeft'
              animateOut='fadeOutLeft'
            >
              <div>
                <span className='block h-24 w-[17rem]'>
                  <img
                    className='block h-full w-full'
                    src='/assets/images/title-1.png'
                    alt='..'
                  />
                </span>
                <p className='text-gray-400 text-lg mt-4 line-clamp-4'>
                  為推動本地文化產業的發展，煤氣公司特意與香港年輕 設計師Tracy
                  Liu攜手合作，將具香港特色的文化元素融入煤氣公司多年來的標誌性爐具產品，以創新的數碼化藝術方式展現大眾眼前，別具收藏意義。
                </p>
                <div className='mt-6'>
                  <PrimaryButton />
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className='col-span-3 lg:col-span-2'>
            <div>
              <ScrollAnimation
                duration={1}
                animateIn='fadeInRight'
                animateOut='fadeOutRight'
              >
                <div>
                  <img
                    className='block h-full w-full'
                    src='/assets/images/image-1.png'
                    alt='...'
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptOfDesign;

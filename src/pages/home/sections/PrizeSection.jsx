import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PrizeCard from '../../../components/cards/PrizeCard';

const PrizeSection = () => {
  const prizeList = [
    {
      delay: 250,
      colorSet: 'bg-prizeBoxTop text-secondary-600',
      title: '頭獎',
      imageUrl: '/assets/images/prize-item-0.png',
      text: '港幣$16,000 煤氣爐具產品禮券 (名額1個)',
    },
    {
      delay: 500,
      colorSet: 'bg-prizeBoxTop text-secondary-600',
      title: '二獎',
      imageUrl: '/assets/images/prize-item-1.png',
      text: '港幣$10,000 煤氣爐具產品禮券 (名額1個)',
    },
    {
      delay: 750,
      colorSet: 'bg-prizeBoxTop text-secondary-600',
      title: '三獎',
      imageUrl: '/assets/images/prize-item-2.png',
      text: 'Dyson PURE COOL CRYPTOMIC™ 二合一空氣清新機 - TP06 [黑銅色] (名額1個)',
    },
    {
      delay: 250,
      colorSet: 'bg-prizeBoxBlue text-primary-500',
      title: '四獎',
      imageUrl: '/assets/images/prize-item-3.png',
      text: '三星雙門雪櫃 328L (銀色) RB33J3200S9/SH (名額1個)',
    },
    {
      delay: 500,
      colorSet: 'bg-prizeBoxBlue text-primary-500',
      title: '五獎',
      imageUrl: '/assets/images/prize-item-4.png',
      text: '港幣$5,000 煤氣爐具產品禮券 (名額5個)',
    },
    {
      delay: 750,
      colorSet: 'bg-prizeBoxBlue text-primary-500',
      title: '六獎',
      imageUrl: '/assets/images/prize-item-5.png',
      text: '飛利浦 ADD6911L RO 純淨飲水機 (名額1個)',
    },
    {
      delay: 250,
      colorSet: 'bg-prizeBoxBlue text-gray-500',
      title: '七獎',
      imageUrl: '/assets/images/prize-placeholder.png',
      text: '港幣$1,000 好氣Fun電子禮券 (名額10個)',
    },
    {
      delay: 500,
      colorSet: 'bg-prizeBoxBlue text-gray-500',
      title: '八獎',
      imageUrl: '/assets/images/prize-placeholder.png',
      text: '港幣$300 好氣Fun電子禮券 (名額80個)',
    },
    {
      delay: 750,
      colorSet: 'bg-prizeBoxBlue text-gray-500',
      title: '九獎',
      imageUrl: '/assets/images/prize-item-6.png',
      text: '林内 明火煮食鍋 RTR-300D1 (名額60個)',
    },
  ];

  return (
    <section id='prize' className='relative z-20 bg-layerTwo bg-cover'>
      <div className='lg:max-w-7xl px-6 mx-auto text-center'>
        <ScrollAnimation
          duration={1}
          animateIn='fadeInUp'
          animateOut='fadeOutDown'
        >
          <h2 className='inline-block h-24 mb-8'>
            <img
              className='block h-full w-full'
              src='/assets/images/title-3.png'
              alt='..'
            />
          </h2>
        </ScrollAnimation>

        {/* gallery start */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {prizeList.map((item) => (
            <div key={item.title}>
              <ScrollAnimation
                className='h-full'
                duration={1}
                delay={item.delay}
                animateIn='fadeInLeft'
                animateOut='fadeOutLeft'
              >
                <PrizeCard item={item} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
        {/* gallery end */}
      </div>
    </section>
  );
};

export default PrizeSection;

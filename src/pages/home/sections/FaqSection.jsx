import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import ScrollAnimation from 'react-animate-on-scroll';

const FaqSection = () => {
  const faqs = [
    {
      number: 'Q01.',
      question: '甚麼是NFT?',
      answer:
        '我不知道，但国旗是一个很大的优势。 Lorem ipsum dolor sit amet consectetur adipisicing elit。准cupiditate laboriosam fugiat。',
    },
    {
      number: 'Q02.',
      question: 'NFT安全嗎?',
      answer:
        '我不知道，但国旗是一个很大的优势。 Lorem ipsum dolor sit amet consectetur adipisicing elit。准cupiditate laboriosam fugiat。',
    },
    {
      number: 'Q03.',
      question: '煤氣160週年紀念NFT的總發行量是多少？',
      answer:
        '我不知道，但国旗是一个很大的优势。 Lorem ipsum dolor sit amet consectetur adipisicing elit。准cupiditate laboriosam fugiat。',
    },
    {
      number: 'Q04.',
      question: '煤氣160週年紀念NFT的總發行量是多少？',
      answer:
        '我不知道，但国旗是一个很大的优势。 Lorem ipsum dolor sit amet consectetur adipisicing elit。准cupiditate laboriosam fugiat。',
    },
    {
      number: 'Q05.',
      question: '每人只能換領一張NFT嗎？',
      answer:
        '我不知道，但国旗是一个很大的优势。 Lorem ipsum dolor sit amet consectetur adipisicing elit。准cupiditate laboriosam fugiat。',
    },
    {
      number: 'Q06.',
      question: '抽獎結果會在何時公佈？',
      answer:
        '我不知道，但国旗是一个很大的优势。 Lorem ipsum dolor sit amet consectetur adipisicing elit。准cupiditate laboriosam fugiat。',
    },
    {
      number: 'Q07.',
      question: '如何註冊Metamask錢包？',
      answer:
        '我不知道，但国旗是一个很大的优势。 Lorem ipsum dolor sit amet consectetur adipisicing elit。准cupiditate laboriosam fugiat。',
    },
    {
      number: 'Q08.',
      question: '我需要支持手續費才可獲得煤氣160週年紀念NFT嗎?',
      answer:
        '我不知道，但国旗是一个很大的优势。 Lorem ipsum dolor sit amet consectetur adipisicing elit。准cupiditate laboriosam fugiat。',
    },
    {
      number: 'Q09.',
      question: '我可以提取及轉移煤氣160週年紀念NFT嗎? 有什麼限制?',
      answer:
        '我不知道，但国旗是一个很大的优势。 Lorem ipsum dolor sit amet consectetur adipisicing elit。准cupiditate laboriosam fugiat。',
    },
    {
      number: 'Q10.',
      question: '煤氣160週年紀念NFT在哪條區塊鏈生產？',
      answer:
        '我不知道，但国旗是一个很大的优势。 Lorem ipsum dolor sit amet consectetur adipisicing elit。准cupiditate laboriosam fugiat。',
    },
  ];

  return (
    <div id='commonProblem' className='relative z-20 mt-12'>
      <div className='lg:max-w-7xl px-6 mx-auto text-center'>
        <ScrollAnimation
          duration={1}
          animateIn='fadeInUp'
          animateOut='fadeOutDown'
        >
          <h2 className='inline-block h-28 mb-8'>
            <img
              className='block h-full w-full'
              src='/assets/images/title-5.png'
              alt='..'
            />
          </h2>
        </ScrollAnimation>
        <div>
          <dl className='grid grid-cols-2 gap-4'>
            {faqs.map((faq) => (
              <Disclosure
                as='div'
                key={faq.question}
                className='col-span-2 lg:col-span-1'
              >
                {({ open }) => (
                  <ScrollAnimation
                    duration={1}
                    animateIn='fadeInUp'
                    animateOut='fadeOutDown'
                    className='h-full'
                  >
                    <div className='h-full bg-white rounded-lg border-2 border-primary p-4 text-left'>
                      <dt className='text-lg'>
                        <Disclosure.Button className='text-left w-full flex justify-between items-baseline text-gray-400'>
                          <div className='flex gap-2 items-baseline'>
                            <h1 className='text-3xl font-semibold text-shadow-primary text-white'>
                              {faq.number}
                            </h1>
                            <h2 className='text-xl font-semibold text-primary line-clamp-2'>
                              {faq.question}
                            </h2>
                          </div>
                          <span className='ml-6 h-7 flex items-center'>
                            {open ? (
                              <MinusIcon className='h-8 w-8 text-primary-600' />
                            ) : (
                              <PlusIcon className='h-8 w-8 text-primary-600' />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as='dd' className='mt-4 pr-12'>
                        <p className='text-base text-gray-500'>{faq.answer}</p>
                      </Disclosure.Panel>
                    </div>
                  </ScrollAnimation>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

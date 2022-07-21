import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = () => {
  return (
    <Link
      to
      className='bg-secondary hover:bg-secondary-600 text-white inline-flex justify-center items-center gap-2 py-4 px-8 rounded-full text-2xl'
    >
      <span className='block h-9 min-w-[2.5rem]'>
        <img
          className='block w-full h-full'
          src='/assets/images/sign.svg'
          alt='...'
        />
      </span>
      <span className='line-clamp-1'>立即換領紀念NFT</span>
      <span className=' transform rotate-[16deg] font-extrabold text-5xl'>
        !
      </span>
    </Link>
  );
};

export default PrimaryButton;

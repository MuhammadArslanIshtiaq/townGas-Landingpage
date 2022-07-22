import React from 'react';
import { Link } from 'react-router-dom';

import ModalComponents from '../modals/ModalComponents';

const PrimaryButton = () => {
  const [isOpen, setIsOpen] = React.useState('');

  return (
    <>
      <ModalComponents show={isOpen} onClose={() => setIsOpen('')} />

      <Link
        to
        className='bg-primary hover:bg-primary-600 text-white inline-flex justify-center items-center gap-2 py-4 px-8 rounded-full text-2xl'
        onClick={() => setIsOpen('formModal')}
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
    </>
  );
};

export default PrimaryButton;

import React from 'react';
import { Link } from 'react-router-dom';

const MainCard = ({ item }) => {
  return (
    <div className='py-3'>
      <Link
        to
        className='block relative p-3 md:p-6 shadow-lg rounded-lg transition duration-300 transform hover:scale-95'
      >
        <span
          className='rounded-full p-2 text-xs md:text-base md:px-8 md:py-3 absolute top-0 right-0 text-white font-bold'
          style={{ backgroundColor: `${item.btnColor}` }}
        >
          #2098
        </span>
        <img
          className='block h-full w-full object-contain'
          src='/assets/images/c-item-0.png'
          alt='..'
        />
      </Link>
    </div>
  );
};

export default MainCard;

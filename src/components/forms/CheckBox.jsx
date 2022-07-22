import React from 'react';

const CheckBox = (props) => {
  return (
    <div className='relative flex items-start animated fadeInUp'>
      <div className='flex items-center h-5'>
        <input
          id={props.name}
          name={props.name}
          type='checkbox'
          className='focus:ring-primary-500 h-5 w-5 text-primary-600 border-gray-300 rounded'
        />
      </div>
      <div className='ml-3 text-sm'>
        <label
          htmlFor={props.name}
          className='font-medium text-gray-500 cursor-pointer'
        >
          {props.name}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;

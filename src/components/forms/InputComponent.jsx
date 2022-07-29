import React from "react";

const InputComponent = (props) => {
  return (
    <div className="animated fadeInUp">
      <label
        htmlFor={props.name}
        className="block text-base font-medium text-gray-500 capitalize"
      >
        {props.name}
      </label>
      <div className="mt-1">
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          className="p-2 shadow-inner shadow-gray-200 drop-shadow bg-gray-300/5 border block w-full sm:text-sm border-gray-300 focus:ring-primary-500 rounded-md"
          placeholder={props.placeholder}
          required="required"
        />
      </div>
    </div>
  );
};

export default InputComponent;

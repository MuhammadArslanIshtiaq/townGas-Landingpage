import React from "react";

const ErrorMessage = () => {
  return (
    <div className="space-y-6 text-gray-500 text-lg text-center mb-8 ">
      <p className="text-red-600 font-semibold animated fadeInUp text-2xl">
        ERROR MESSAGE
      </p>
      <p className="animated fadeInUp">User Aleady Regiestered.</p>
    </div>
  );
};

export default ErrorMessage;

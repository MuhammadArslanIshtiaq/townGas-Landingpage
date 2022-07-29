import React from "react";
import { Link } from "react-router-dom";

const PrizeCard = ({ item }) => {
  return (
    <Link
      to
      className={`h-full block rounded-md shadow-sm p-8 transition duration-300 transform hover:scale-95 ${item.colorSet}`}
    >
      <h3 className="text-3xl font-semibold capitalize line-clamp-1">
        {item.title}
      </h3>
      <div className="py-[4rem] relative bg-title bg-cover bg-center bg-no-repeat">
        <img className="block h-full w-full" src={item.imageUrl} alt=".." />
      </div>
      <h4 className="text-lg font-semibold capitalize line-clamp-3">
        {item.text}
      </h4>
      <h4 className="text-lg font-semibold capitalize line-clamp-3">
        {item.text1}
      </h4>
      <h4 className="text-lg font-semibold capitalize line-clamp-3">
        {item.text2}
      </h4>
      <h4 className="text-lg font-semibold capitalize line-clamp-3">
        {item.text3}
      </h4>
      <h4 className="text-lg font-semibold capitalize line-clamp-3">
        {item.text4}
      </h4>
    </Link>
  );
};

export default PrizeCard;

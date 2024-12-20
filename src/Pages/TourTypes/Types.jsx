import React from "react";
import {
  FaHiking,
  FaMosque,
  FaTree,
  FaCrown,
  FaCity,
  FaUmbrellaBeach,
  FaChild,
} from "react-icons/fa";
const icons = {
  FaHiking,
  FaMosque,
  FaTree,
  FaCrown,
  FaCity,
  FaUmbrellaBeach,
  FaChild,
};

const Types = ({ place }) => {
  const { type_name, icon } = place;
  const Palace = icons[icon];
  return (
    <div className="card bg-red-100 md:w-44 shadow-lg">
      <div className="card-body flex justify-center items-center 
      bg-gradient-to-r from-pink-500 via-red-300 to-yellow-300
     hover:text-white cursor-pointer rounded-lg">
        <h2 className="card-title text-4xl">
          <Palace />
        </h2>
        <h2 className="card-title">{type_name}</h2>
      </div>
    </div>
  );
};

export default Types;

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
import { Link } from "react-router-dom";
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
      <div
        className="card-body flex justify-center items-center 
      bg-gradient-to-r from-teal-300 via-red-300 to-yellow-300
     hover:text-white rounded-lg"
      >
        <Link to="bookingTrip">
          <button
            // onClick={() => console.log(type_name)}
            className="card-title text-4xl cursor-pointer"
          >
            <Palace />
          </button>
        </Link>
        <h2 className="card-title">{type_name}</h2>
      </div>
    </div>
  );
};

export default Types;

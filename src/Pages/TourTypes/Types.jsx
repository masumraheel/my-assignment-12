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
    // <div
    //   className="card bg-transparent border-2 rounded-full lg:w-40 lg:h-40 
    // w-32 h-32 cursor-pointer hover:bg-red-500"
    // >
    //   <div className="card-body">
    //     <figure className="px-5 pt-5 text-3xl">
    //       <Palace />
    //     </figure>
    //     <h2 className="card-title text-base text-center lg:px-5">
    //       {type_name}
    //     </h2>
    //   </div>
    // </div>
    <div className="card bg-red-100 md:w-44 shadow-lg ">
    <div className="card-body flex justify-center items-center">
      <h2 className="card-title hover:text-red-600 text-4xl cursor-pointer"><Palace/></h2>
      <h2 className="card-title">{type_name}</h2>
    </div>
  </div>
  );
};

export default Types;

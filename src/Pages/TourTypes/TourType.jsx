import React, { useEffect, useState } from "react";
import Types from "./Types";

const TourType = () => {
  const [type, setType] = useState([]);
  useEffect(() => {
    fetch("types.json")
      .then((res) => res.json())
      .then((data) => setType(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="my-heading text-center mt-4">Tour You Explore...</h2>
      <p className="my-work text-justify px-2">
        Our tour types cater to every kind of traveler, from adrenaline-pumping
        adventure tours to immersive cultural experiences. For those who prefer
        a slower pace, our leisure tours offer relaxed itineraries and
        comfortable accommodations. No matter your style, each tour promises a
        unique and memorable journey.
      </p>
      <div className="hero bg-blue-100 min-h-96">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h2 className="text-4xl text-center text-sky-600 font-semibold">
              We care about your dreams travel
            </h2>
            <div className="divider"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mr-1">
              {type.map((place) => (
                <Types key={place._id} place={place}></Types>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourType;

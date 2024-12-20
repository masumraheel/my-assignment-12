import React, { useEffect, useState } from "react";
import PackageMenu from "./PackageMenu";

const PopularPackage = () => {
  const [tourPackage, setPackage] = useState([]);
  useEffect(() => {
    fetch("tourData.json")
      .then((res) => res.json())
      .then((data) => {
        const popularTours = data.filter((tour) => tour.type === "Cultural");
        setPackage(popularTours);
      });
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tourPackage.map((tour) => (
          <PackageMenu key={tour._id} tour={tour}></PackageMenu>
        ))}
      </div>
    </div>
  );
};

export default PopularPackage;

import React from "react";
import PackageTour from "../Pages/OurPackage/PackageTour";

const BookingTab = ({items}) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((tour) => (
          <PackageTour key={tour._id} tour={tour}></PackageTour>
        ))}
      </div>
    </div>
  );
};

export default BookingTab;

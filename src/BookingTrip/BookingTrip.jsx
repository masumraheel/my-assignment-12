import React, { useState } from "react";
import Cover from "../Components/Cover/Cover";
import bookingImage from "../assets/Cover image/booking.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import usePackages from "../hooks/usePackages";
import PackageTour from "../Pages/OurPackage/PackageTour";

const BookingTrip = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tourPackage] = usePackages();
  const adventure = tourPackage.filter((tour) => tour.type === "Adventure");
  const cultural = tourPackage.filter((tour) => tour.type === "Cultural");
  const wildLife = tourPackage.filter((tour) => tour.type === "Wildlife");
  const luxury = tourPackage.filter((tour) => tour.type === "Cultural");
  const beach = tourPackage.filter((tour) => tour.type === "Beach");
  const family = tourPackage.filter((tour) => tour.type === "Cultural");
  return (
    <div>
      <Cover img={bookingImage}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Adventure</Tab>
          <Tab>Cultural</Tab>
          <Tab>Wildlife</Tab>
          <Tab>Luxury</Tab>
          <Tab>Beach</Tab>
          <Tab>Family</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {adventure.map((tour) => (
              <PackageTour key={tour._id} tour={tour}></PackageTour>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cultural.map((tour) => (
              <PackageTour key={tour._id} tour={tour}></PackageTour>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wildLife.map((tour) => (
              <PackageTour key={tour._id} tour={tour}></PackageTour>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {luxury.map((tour) => (
              <PackageTour key={tour._id} tour={tour}></PackageTour>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {beach.map((tour) => (
              <PackageTour key={tour._id} tour={tour}></PackageTour>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {family.map((tour) => (
              <PackageTour key={tour._id} tour={tour}></PackageTour>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookingTrip;

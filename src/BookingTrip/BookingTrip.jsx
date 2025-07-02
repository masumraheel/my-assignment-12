import Cover from "../Components/Cover/Cover";
import bookingImage from "../assets/Cover image/booking.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import usePackages from "../hooks/usePackages";
import BookingTab from "../BookingTab/BookingTab";
import { useState } from "react";

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
          <BookingTab items={adventure}></BookingTab>
        </TabPanel>
        <TabPanel>
          <BookingTab items={cultural}></BookingTab>
        </TabPanel>
        <TabPanel>
          <BookingTab items={wildLife}></BookingTab>
        </TabPanel>
        <TabPanel>
          <BookingTab items={luxury}></BookingTab>
        </TabPanel>
        <TabPanel>
          <BookingTab items={beach}></BookingTab>
        </TabPanel>
        <TabPanel>
          <BookingTab items={family}></BookingTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookingTrip;

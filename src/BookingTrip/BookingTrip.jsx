import React, { useState } from "react";
import Cover from "../Components/Cover/Cover";
import bookingImage from "../assets/Cover image/booking.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const BookingTrip = () => {
    const [tabIndex, setTabIndex]=useState(0);
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
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default BookingTrip;

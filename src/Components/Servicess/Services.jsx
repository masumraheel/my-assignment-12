import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OverView from "./OverView";
import Team from "../../Pages/Guides/Team";

const Services = () => {
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div>
        <h2 className="text-center my-heading">
          Our Services & Our Local Guides
        </h2>
        <p className=" my-work text-justify text-black p-2">
          We offer personalized and memorable travel experiences tailored to
          your interests. From guided city tours to unique cultural activities
          and outdoor adventures, our services cover a range of experiences
          designed to showcase the best of each destination. Our expert team
          ensures seamless planning, so you can focus on enjoying your journey.
          Whether you're looking for historical tours, culinary experiences, or
          nature excursions, we've got you covered.
        </p>
      </div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Beautiful Bangladesh</Tab>
            <Tab>Our Package</Tab>
            <Tab>Our Experienced Guide</Tab>
          </TabList>
          <TabPanel><OverView></OverView></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel><Team></Team></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;

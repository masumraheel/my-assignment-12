import React from 'react';
import Banner from './Banner';
import Services from '../Components/Servicess/Services';
import TourType from './TourTypes/TourType';
import Stories from '../Components/Stories/Stories';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <TourType></TourType>
          <Stories></Stories>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import Services from '../Components/Servicess/Services';
import TourType from './TourTypes/TourType';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <TourType></TourType>
        </div>
    );
};

export default Home;
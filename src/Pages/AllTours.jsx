import React from 'react';
import Cover from '../Components/Cover/Cover';
import tourImage from '../assets/Cover image/cul.jpg'

const AllTours = () => {
    return (
        <div>
            <Cover img={tourImage} title="Explore Our All Tours"></Cover>
            <div>
                <p>this is our all tour</p>
            </div>
        </div>
    );
};

export default AllTours;
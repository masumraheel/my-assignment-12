import React from 'react';
import Cover from '../Components/Cover/Cover';
import bookingImage from "../assets/Cover image/booking.jpg"

const BookingTrip = () => {
    return (
        <div>
            <Cover img={bookingImage}></Cover>
            This is my tour
        </div>
    );
};

export default BookingTrip;
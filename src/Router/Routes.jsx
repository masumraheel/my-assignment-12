import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import AllTours from "../Pages/AllTours";
import ContactUs from "../Pages/ContactUs";
import Blogs from "../Pages/Blogs";
import Community from "../Pages/Community";
import AboutUs from "../Pages/AboutUs";
import BookingTrip from "../BookingTrip/BookingTrip";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"aboutUs",
            element:<AboutUs></AboutUs>
        },
        {
            path:"community",
            element:<Community></Community>
        },
        {
            path:"blogs",
            element:<Blogs></Blogs>
        },
        {
            path:"contactUs",
            element:<ContactUs></ContactUs>
        },
        {
            path:"allTours",
            element:<AllTours></AllTours>
        },
        {
            path:"bookingTrip/:type",
            element:<BookingTrip></BookingTrip>
        },
        {
            path:"logIn",
            element:<Login></Login>
        },
        {
            path:"register",
            element:<Register></Register>
        }
      ]
    },
  ]);
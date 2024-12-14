import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import AllTours from "../Pages/AllTours";


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
            element:<Home></Home>
        },
        {
            path:"community",
            element:<Home></Home>
        },
        {
            path:"blogs",
            element:<Home></Home>
        },
        {
            path:"contactUs",
            element:<Home></Home>
        },
        {
            path:"allTours",
            element:<AllTours></AllTours>
        },
      ]
    },
  ]);
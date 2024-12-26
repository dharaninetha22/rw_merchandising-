import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
// import Calender from "../pages/Calender";
// import { Details } from "@mui/icons-material";
import {Details,CalendarComponent  } from '../pages/Exports';
import GetDetails from "../pages/CalendarComponent/GetDetails";
import Layout from "../components/Layout/Layout";
import Dashboard from "../pages/Dashboard";
import ShoppingCart from "../pages/Addcart/AddtoCart";
import LoginForm from "../pages/Login";
import SignUpForm from "../pages/SignUpForm";
import Forgotpassword from "../pages/ForgotPassword";
import Products from "../pages/Products";
import Kits from "../pages/Kits";
import ProductDetails from "../pages/ProductsFindOne/ProductInfo";
import ProductsFindOne from "../pages/ProductsFindOne";
import ScrollToTop from "../components/ScrollToTop";
import ProductsAllDetails from "../pages/Products/ProductsAllDetails/ProductAllInfo";
import KitsProductDetails from "../pages/Kits/KitsProductDetails/KitsProductInfo";
import { useEffect } from "react";



const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <CalendarComponent />,
  //   errorElement: <NotFound />, 
  // },
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <NotFound />, 
  },

  {
    path: '/details', // Add the route for the Details page
    element: <Details />, // The component to render for /details
  },
  {
    path: '/getdetails', // Add the route for the Details page
    element: <GetDetails />, // The component to render for /details
  },

  {
    path:"shoppingcart", // Add the route for the Details page
    element: <ShoppingCart open={true} onClose={() => console.log("Dialog closed")}/>, // The component to render for /details
  },
 
  {
    // Separate layout for HeaderTwo with nested routes
    element: <Layout />,

    children: [
      {
        path: "/home",
        element: <Dashboard/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/kits",
        element: <Kits/>,
      },
      {
        path: "/productsfindone",
        element: <ProductsFindOne/>,
      },
      {
        path:"/product/:id",
        element: <ProductDetails />, 
      },
      {
        path:"/products/:id",
        element: <ProductsAllDetails />, 
      },
      {
        path:"/kits/:id",
        element: <KitsProductDetails />, 
      },
  //       {
  //   path:"/product/:id",
  //   element: <ProductsFindOne />, 
  // },
      
    ],
  },
  
    // {
    //   path:"/login", 
    //   element: <LoginForm />, 
    // },
    // {
    //   path:"/signup", 
    //   element: <SignUpForm/>, 
    // },
    // {
    //   path:"/forgotpassword", 
    //   element: <Forgotpassword/>, 
    // },
   
  


]);



export default router;

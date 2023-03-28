import React from 'react';
import { createBrowserRouter } from 'react-router-dom';


import Main from '../../layout/Main/Main';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import AllUsers from '../../Pages/AllUsers/AllUsers';
import BookingList from '../../Pages/BookinngList/BookingList';
import Review from '../../Pages/BookinngList/Review/Review';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import ServiceInfo from '../../Pages/ServicesProduct/ServiceInfo';

import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';




const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/dashboard',
        element: <BookingList></BookingList>
      },
      {
        path: '/review',
        element: <Review></Review>
      },
      {
        path: '/addservice',
        element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
      },
      {
        path: '/services',
        element: <ServiceInfo></ServiceInfo>
      },
      {
        path: '/allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },



    ]
  },

  // dashboard
  // {
  //   path: '/dashboard',
  //   element: <Dashboard></Dashboard>,
  //   children: [

  //   ]
  // }


])

export default router



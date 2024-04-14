import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import Orders from './Components/Orders';
import PrivateRoutes from './Routes/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
      path: "/login",
      element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/orders",
        element:<PrivateRoutes> <Orders></Orders></PrivateRoutes>
      }
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>,
)

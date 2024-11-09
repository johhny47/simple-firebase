import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';

import Login from './Component/Login.jsx';
import Home from './Component/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
    
      {
        path:"/",
        element:<Home></Home>
     },
     {
      path:"/login",
      element:<Login></Login>
    }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Product from './common/product';  // Ensure this matches your file name
import Productm from './common/product eyeM';  // Ensure this matches your file name
import Menseye from './pages/mens';
import HomePage from './pages/home';
import Womenssun from './pages/women';
import Productf from './common/product copy';  // Ensure this matches your file name
import Womenseye from './pages/women frame';
import Producteyef from './common/product eyeF';
import Meneye from './pages/men frame';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './pages/aboutus';


const root = ReactDOM.createRoot(document.getElementById('root'));

const NavRoutes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'sunglasses/mens',
    element: <Menseye />,
  },
  {
    path: 'mens/:model',
    element: <Product />,
  },
  {
    path: 'sunglasses/womens',
    element: <Womenssun />,
  },
  {
    path: 'womens/:model',
    element: <Productf />,
  },
  {
    path: 'eyewear/womens',
    element: <Womenseye />,
  },
  {
    path: 'women/:model',
    element: <Producteyef />,
  },
  {
    path: 'eyewear/men',
    element: <Meneye />,
  },
  {
    path: 'men/:model',
    element: <Productm />,
  },
  {
    path: 'aboutus',
    element: <AboutUs />,
  },
  {
    path: '*',  // Fallback route
    element: <div>404 Not Found</div>,  // Optional: You can replace this with a dedicated 404 component
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={NavRoutes} />
  </React.StrictMode>
);

reportWebVitals();

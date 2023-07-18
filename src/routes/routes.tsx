
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import { NotFound } from '../pages/NotFound';
import AddProducts from '../pages/AddProducts';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Reading from '../pages/Reading';
import { WishList } from '../pages/Wishlist';
import { Products } from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';




const routes = createBrowserRouter([
  {
    path: '/auth',
    element: <App />,
    children: [
      {
        path: '/auth/login',
        element: <Login/>,
      },
      {
        path: '/auth/signup',
        element: <Signup/>,
      },
  
    ]
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
   
      {
        path:'/home',
        element:<Home/>
      },
      
      {
        path: '/products',
        element: <Products/>
      },
      {
        path: '/wishlist',
        element: <WishList/>
      },
      {
        path: '/reading',
        element: <Reading/>
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: '/book/:id',
        element: <ProductDetails/>,
      },
    
    ],
  },

  {
    path: '*',
    element: <NotFound/>,
  },
]);

export default routes;
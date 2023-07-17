import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navber';

export default function MainLayout() {
  return (
    <div>
    <Navbar></Navbar>
    <Outlet></Outlet>
    {/* <Footer></Footer> */}

</div>

  );
}

import { Link } from "react-router-dom";
export default function Navbar() {

  return (
    <div className="navbar bg-green-300 ">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
     
      </div>
      <a className="btn btn-ghost normal-case text-xl">Book Shelf</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
        <Link to="/home">Home</Link>
      

        </li>
        <li>
        <Link to="/products">Products</Link>
      

        </li>
        <li>
        <Link to="/addProduct">Add Product</Link>
      

        </li>
      
        <li>
        <Link to="auth/login">Login</Link>
      

        </li>
      </ul>
    </div>
    <div className="navbar-end">
  
    </div>
  </div>
  )
}
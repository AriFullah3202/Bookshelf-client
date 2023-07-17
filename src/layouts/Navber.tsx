
import { Link } from "react-router-dom";
import { useGetUserDetailsQuery } from "../redux/feature/auth/authAciton";
import { useDispatch, useSelector } from "react-redux";
import { logout, setCredentials } from "../redux/feature/user/userSlice";
import { useEffect } from "react";
export default function Navbar() {


  const { user } = useSelector((state) => state.auth)
  console.log(user, "this si header")
  const dispatch = useDispatch()

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
  // perform a refetch every 15mins
    pollingInterval: 900000,
  })
console.log("first")

  useEffect(() => {
    console.log("second")
    if (data) dispatch(setCredentials(data?.data?.email))
  }, [data, dispatch])
  console.log(data?.data)

  const handleLogout = () => {
   dispatch(logout())
  };

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
     
        {data?.data?.email && (
          <li>

            <Link to="/addProduct">Add Product</Link>
          </li>

        )}
      

      
      
        
        {!data?.data?.email && (
                      <>
                        <li>
                        <Link to="/auth/login">Login</Link>
      

        </li>
                    
                      <li>  <Link to="auth/signup">
                          Signup
                        </Link></li>
                      </>
                    )}
  
      

  {data?.data?.email && (
        
        <li>
        <Link to="" onClick={handleLogout}>
          Logout({data?.data?.name?.firstName})
        </Link>
      </li>
                    )}
      </ul>
    </div>
    <div className="navbar-end">
  
    </div>
  </div>
  )
}
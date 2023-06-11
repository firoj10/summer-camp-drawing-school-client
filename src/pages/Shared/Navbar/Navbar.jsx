import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()

  const handleLogout = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error))
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/ins'>Instructors</Link></li>
          <li><Link to='/classes'>Classes</Link></li>

            {
              isAdmin || isInstructor || user ? <li><Link to="/dashboard">Dashboard</Link></li> : null
            }
          </ul>
        </div>
       
        <a className="btn btn-ghost normal-case p-0 m-0 text-xs md:text-xl"> Drawing School</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/ins'>Instructors</Link></li>
          <li><Link to='/classes'>Classes</Link></li>

          {
            isAdmin || isInstructor || user ? <li><Link to="/dashboard">Dashboard</Link></li> : null
          }
        </ul>
      </div>
      <div className="navbar-end">
      {
  
  user ? <>
    <img src={user?.photoURL}  className='rounded-full h-12  mx-2 w-12 ' alt="img"  />
  <button onClick={handleLogout} className="btn btn-active md:text-xl text-xs btn-ghost">Log Out</button>
  </> :<>
  <Link className="text-xs md:text-xl font-bold" to="/login">Login</Link>
  </>
 }
      </div>
    </div>

  );
};

export default Navbar;
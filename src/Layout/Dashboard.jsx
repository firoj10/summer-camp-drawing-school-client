import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../hooks/useInstructor";
import { FaBook, FaHome, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext)
  const [isInstructor] = useInstructor()


  return (

    <div className="drawer lg:drawer-open mx-10 my-20">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center pt-10">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side  bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className=""></label>
        <ul className="menu p-4 w-80 h-full   pt-[100px]  text-black ">
          {
             
            isAdmin ?
              <>      <li><NavLink to="/dashboard/allstudent"> <FaUtensils></FaUtensils>Admin user</NavLink></li>
                <li><NavLink to="/dashboard/myclass"> <FaWallet></FaWallet>admin Classes</NavLink></li></> : 

                isInstructor ?
                <>      <li><NavLink to="/dashboard/addclass"><FaUsers></FaUsers>instractor</NavLink></li>
                  <li><NavLink to="/dashboard/allclass"> <FaBook></FaBook>My Class</NavLink></li>
                  </> :
          
          
            user  ?
              <>      <li><NavLink to='/dashboard/myselectedclasses'><FaWallet></FaWallet>myselectedclasses</NavLink></li>
                <li><NavLink  to="/dashboard/paymenthistory">payment history </NavLink></li></> :null
            
          }
                <div className="divider"></div>
 
 <li><Link to='/'> <FaHome></FaHome>Home</Link></li>
 <li><NavLink to='/dashboard/myselectedclasses'><FaWallet></FaWallet>myselectedclasses</NavLink></li>
 <li><NavLink to="/dashboard/allstudent"> <FaUtensils></FaUtensils>Admin user</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;








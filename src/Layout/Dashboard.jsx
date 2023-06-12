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
    <div className="drawer lg:drawer-open  ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center pt-10">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-base-300 text-base-content">
        <label htmlFor="my-drawer-2" className=""></label>
        <ul className="menu p-4 w-80 h-full   pt-[100px]  ">
          {
             
            isAdmin ?
              <>      <li><NavLink to="/dashboard/allstudent"> <FaUtensils></FaUtensils>Manage Users</NavLink></li>
                <li><NavLink to="/dashboard/myclass"> <FaWallet></FaWallet>Manage Classes</NavLink></li></> : 

                isInstructor ?
                <>      <li><NavLink to="/dashboard/addclass"><FaUsers></FaUsers>Add a Class</NavLink></li>
                  <li><NavLink to="/dashboard/allclass"> <FaBook></FaBook>My Classes</NavLink></li>
                  </> :
          
          
            user  ?
              <>      <li><NavLink to='/dashboard/myselectedclasses'><FaWallet></FaWallet>My Selected Classes</NavLink></li>
                <li><NavLink  to="/dashboard/paymenthistory">payment history </NavLink></li></> :null
            
          }
                <div className="divider"></div>
 
 <li><Link to='/'> <FaHome></FaHome>Home</Link></li>

        </ul>

      </div>
    </div>

  );
};

export default Dashboard;








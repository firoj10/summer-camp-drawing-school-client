import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
const [isAdmin]= useAdmin();
const user = useContext(AuthContext)
const [instractor]=useInstructor()

  
    return (
  
  <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      
      {
       !isAdmin ?
  <>      <li><NavLink to="/dashboard/allstudent">Manage user</NavLink></li>
  <li><NavLink to="/dashboard/manageclass">Manage Classes</NavLink></li></>: null
      }
      {
       !instractor ?
  <>      <li><NavLink to="/dashboard/allstudent">instractor</NavLink></li>
  <li><NavLink to="/dashboard/manageclass">instractor Classes</NavLink></li></>: null
      }
      {
       !user ?
  <>      <li><NavLink to="/dashboard/allstudent">instractor</NavLink></li>
  <li><NavLink to="/dashboard/manageclass">instractor Classes</NavLink></li></>: null
      }
     
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;





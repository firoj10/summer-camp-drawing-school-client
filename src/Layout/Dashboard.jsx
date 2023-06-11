import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../hooks/useInstructor";

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
              <>      <li><NavLink to="/dashboard/allstudent">Admin user</NavLink></li>
                <li><NavLink to="/dashboard/myclass">admin Classes</NavLink></li></> : 

                isInstructor ?
                <>      <li><NavLink to="/dashboard/addclass">instractor</NavLink></li>
                  <li><NavLink to="/dashboard/allclass">My Class</NavLink></li>
                  </> :
          
          
            user  ?
              <>      <li><NavLink to='/dashboard/myselectedclasses'>myselectedclasses</NavLink></li>
                <li><NavLink >user </NavLink></li></> :null
            
          }
                <div className="divider"></div>
 <li><NavLink to="/dashboard/addclass">instractor</NavLink></li>
 <li><NavLink to="/dashboard/allstudent">Admin user</NavLink></li>
 <li><NavLink to="/dashboard/myclass">admin Classes</NavLink></li>
 <li><Link to='/'>Home</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;








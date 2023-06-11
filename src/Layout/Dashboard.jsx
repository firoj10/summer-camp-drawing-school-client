import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import useInstructor from "../hooks/useInstructor";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext)
  const [isInstructor] = useInstructor()


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
          {/* {
             
            isAdmin &&(
              <>      <li><NavLink to="/dashboard/allstudent">Admin user</NavLink></li>
                <li><NavLink to="/dashboard/myclass">admin Classes</NavLink></li></> 
            )

          } {isInstructor &&(
                <>      <li><NavLink to="/dashboard/addclass">instractor</NavLink></li>
                  <li><NavLink to="/dashboard/allclass">My Class</NavLink></li>
                  </> 
            )
          
          } {user  &&(
              <>      <li><NavLink to='/dashboard/myselectedclasses'>myselectedclasses</NavLink></li>
                <li><NavLink >user </NavLink></li></> )} */}
 <li><NavLink to="/dashboard/addclass">instractor</NavLink></li>
 <li><NavLink to="/dashboard/allstudent">Admin user</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;








import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";



const Main = () => {
    
    return (
        <div>
    <div>
       <Navbar></Navbar>
           <Outlet></Outlet> 
          <Footer></Footer>

        </div>

        </div>
    );
};

export default Main;
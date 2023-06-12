import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import AllStudent from "../pages/DashBoard/AllStudent/AllStudent";
import AddClass from "../pages/DashBoard/addClass/addClass";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import MySelectedClasses from "../pages/DashBoard/MySelectedClasses/MySelectedClasses";
import Payment from "../Payment/Payment";
import MyClass from "../pages/DashBoard/MyClass/MyClass";
import AllClass from "../pages/DashBoard/AllClass/AllClass";
import PaymentHistory from "../Payment/PaymentHistory";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


 


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        {
          path: "ins",
          element: <Instructors></Instructors>
        },
        {
          path: "classes",
          element: <Classes></Classes>
        },
       
  ]},
 
  {

    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path: "allstudent",
        element: <AllStudent></AllStudent>
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>
      
      },
      {
        path: "myclass",
        element: <MyClass></MyClass>
      },
      {
        path: "allclass",
        element: <AllClass></AllClass>
      },
      {
        path: "myselectedclasses",
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`https://summer-camp-droing-school-server-firoj10.vercel.app/selectclass/${params.id}`)
      },
      
      
 ]}

]);
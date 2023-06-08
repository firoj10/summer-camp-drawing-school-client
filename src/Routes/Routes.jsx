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
import MyClass from "../pages/DashBoard/MyClass/MyClass";


 


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        path: "allclass",
        element: <MyClass></MyClass>
      },
 ]}

]);
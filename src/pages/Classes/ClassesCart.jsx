import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const ClassesCart = ({ classe }) => {
    const {user}= useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const  { _id, classphoto, classname, instructorname, availableseats ,price} = classe;

    const handleAddToSelect = classe =>{
        console.log(classe)
        if(user && user.email){
          const classItem = {classItemId: _id, classname, classphoto, price, instructorname, email:user.email}
          fetch('http://localhost:5000/selectclass/',{
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(classItem)
          })
          .then(res =>res.json())
          .then(data=>{
        
          if(data.insertedId){
          //update the cart items
          
            Swal.fire({
              
              position: 'top-end',
              icon: 'success',
              title: 'Food added on the card',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
        }else{
           
        Swal.fire({
          title: 'Please login to order the food',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now!'
        }).then((result) => {
          if (result.isConfirmed) {
           
              navigate('/login', {state:{ from: location }})
          
          }
        })
        }
            }





    return (
        <div className="">
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">

                <figure><img src={classe?.classphoto} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">classname{classname}</h2>
                    <p>Instructor name{instructorname}</p>
                    <p>Available seats{availableseats}</p>
                    <p>Price{price}</p>
                    <div className="card-actions justify-end">
                      
                    
                        <button onClick={()=>handleAddToSelect(classe)}  className="btn btn-primary">Select Button</button>
                     
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ClassesCart;
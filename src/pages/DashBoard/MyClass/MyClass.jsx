import { useState } from 'react';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';

const MyClass = () => {
    const [myClass]= useCart()
    const [disabledButtons, setDisabledButtons] = useState([]);

    const handleMakeApprove = user => {
        fetch(`http://localhost:5000/allclass/${user?._id}`,{
          method: 'PATCH'
        })
        .then(res=> res.json())
        .then(data =>{
          if(data.modifiedCount){
            setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, user._id]);

            Swal.fire({
              title: 'Approve Successful.',
              showClass: {
                  popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
              }
          });
         
          }
        })
      }
    const handleMakeDenay = user => {
        fetch(`http://localhost:5000/allclass/denay/${user?._id}`,{
          method: 'PATCH'
        })
        .then(res=> res.json())
        .then(data =>{
          if(data.modifiedCount){
            setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, user._id]);
             Swal.fire({
              title: 'denay  Successful.',
              showClass: {
                  popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
              }
          });
          }
        })
      }

      const isButtonDisabled = (user) => {
        return disabledButtons.includes(user._id);
      };
    return (
        <div className='w-full'>
        <div className=' p-5 flex  justify-between gap-30 items-center'>
           <div> <h2 className=" font-bold  text-orange-400">Total Enrolled Students: </h2></div>

          
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Classphoto</th>
                        <th>classname</th>
                        <th>instructorname</th>
                        <th>instructoremail</th>
                        <th>availableseats</th>
                        <th>price</th>
                        <th> Default status</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {myClass?.map((user) => <tr key={user}>
                        <th><img className='h-[20px] w-[20px]' src={user.classphoto} alt="" /></th>
                        <td>{user.classname}</td>
                        <td>{user.instructorname}</td>
                        <td>{user.instructoremail}</td>
                        <td>{user.availableseats}</td>
                        <td>{user.price}</td>
                        <td>{user.status}</td>
                        <td> 
                       <div className='flex'>
                       <button  onClick={() => handleMakeApprove(user)}  disabled={isButtonDisabled(user)} className="btn btn-xs mx-2  btn-primary">Approve</button>
                       <button onClick={() => handleMakeDenay(user)} disabled={isButtonDisabled(user)} className="btn btn-xs mx-2  btn-primary">Denay</button>
                            
                                    <button className="btn btn-xs btn-accent">feedback</button> 
                       </div>
                        </td>  
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyClass;
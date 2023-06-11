
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AllStudent = () => {
  const [disabledButtons, setDisabledButtons] = useState([]);
  
    const { data: student = [], refetch } = useQuery(['student'], async () => {
        const res = await axios.get('http://localhost:5000/student')
        return res.data;
    })

    const handleMakeAdmin = user => {
      fetch(`http://localhost:5000/student/admin/${user?._id}`,{
        method: 'PATCH'
      })
      .then(res=> res.json())
      .then(data =>{
        if(data.modifiedCount){
            refetch()
            setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, user._id]);
            Swal.fire({
              title: 'Admin Successful.',
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
    const handleMakeInstructor = user => {
      fetch(`http://localhost:5000/student/instructor/${user?._id}`,{
        method: 'PATCH'
      })
      .then(res=> res.json())
      .then(data =>{
        if(data.modifiedCount){
            refetch()
            setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, user._id]);
            Swal.fire({
              title: 'Instructor Successful.',
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
           
            <h2 className='text-3xl font-semibold my-4'>Total User: {student.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                             <td>{user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} disabled={isButtonDisabled(user)} className="btn mx-2 btn-xs btn-accent bg-orange-400 text-white"> admin</button>

                            }
                            {user.role === 'instructor' ? 'instructor' :
                                <button onClick={() => handleMakeInstructor(user)} disabled={isButtonDisabled(user)} className="btn mx-2 btn-xs btn-accent bg-orange-400 text-white"> instractor</button>

                            }
                            
                            </td>
                             <td></td>
                             
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllStudent;
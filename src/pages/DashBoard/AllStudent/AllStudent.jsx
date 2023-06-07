
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const AllStudent = () => {
   

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
           alert('admin success full')
            
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
           alert('instructor success full')
            
        }
      })
    }
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                             <td>{user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-lg bg-orange-400 text-white"> student</button>

                            }
                            {user.role === 'instructor' ? 'instructor' :
                                <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-lg bg-orange-400 text-white"> instractor</button>

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
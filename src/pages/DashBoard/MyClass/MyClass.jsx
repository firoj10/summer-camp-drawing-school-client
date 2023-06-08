import useCart from '../../../hooks/useCart';

const MyClass = () => {
    const [myClass]= useCart()

    const handleMakeStatus = user => {
        fetch(`http://localhost:5000/allclass/${user?._id}`,{
          method: 'PATCH'
        })
        .then(res=> res.json())
        .then(data =>{
          if(data.modifiedCount){
             alert('admin success full')
             console.log('aaaaaaaaaaaaaaaaa')  
          }
        })
      }

 
    return (
        <div className='w-full'>
        <div className=' p-5 flex  justify-between gap-30 items-center'>
           <div> <h2 className=" font-bold  text-orange-400">Total Enrolled Students: </h2></div>

            <div><button className="btn btn-ghost btn-lg bg-orange-400 text-white">Update button</button></div>
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
                        <th>status</th>
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
                        <td> 
                       <div className='flex'>
                       <button onClick={() => handleMakeStatus(user)} className="btn btn-xs mx-2">panding</button>
                        <button className="btn btn-xs mx-2">Denay</button>
                        <button className="btn btn-xs mx-2">Approve</button>
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
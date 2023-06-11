import { useEffect, useState } from "react";


const AllClass = () => {

    const [allclass, setAllclass] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/allclass')
            .then((res) => res.json())
            .then((data) => {
                setAllclass(data);
                console.log(data.length)
            });
    }, []);
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
                        <th>Feedback </th>
                    </tr>
                </thead>
                <tbody>
                    {allclass?.map((user) => <tr key={user}>
                        <th><img className='h-[20px] w-[20px]' src={user.classphoto} alt="" /></th>
                        <td>{user.classname}</td>
                        <td>{user.instructorname}</td>
                        <td>{user.instructoremail}</td>
                        <td>{user.availableseats}</td>
                        <td>{user.price}</td>
                        <td>{user.status}</td>
                        
                       
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllClass;
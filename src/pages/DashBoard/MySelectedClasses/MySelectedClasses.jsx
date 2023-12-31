import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useClasses from "../../../hooks/useClasses";


const MySelectedClasses = () => {
    const [classes, refetch] = useClasses()
  



    console.log('cart my', classes.length)
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-droing-school-server-firoj10.vercel.app/selectclass/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div>
            {/* const classItem = {classItemId: _id, classname, classphoto, price, instructorname, email:user.email} */}
            <div className="uppercase  font-semibold flex h-10 justify-evenly">
                {/* <h3 className="text-3xl">Total items{cart.length}</h3>
                <h3 className="text-3xl text-center border-spacing-0">Total Price{price}</h3> */}

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Classphoto</th>
                            <th>Classname</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}

                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.classphoto} alt="Avatar Tailwind CSS Component" />
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.classname}
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-xs btn-accent text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <Link to={`/dashboard/payment/${item._id}`}><button className="btn btn-xs  btn-outline btn-info">PaYMent</button> </Link>
                                {/* <button className="btn btn-outline btn-info">Get Started</button> */}
                             
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;
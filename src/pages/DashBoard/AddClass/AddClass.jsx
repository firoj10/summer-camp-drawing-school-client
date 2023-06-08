import {useContext} from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const AddClass = () => {

            const {user}= useContext(AuthContext)
            const handleSubmit = async (event) => {
        
                event.preventDefault();
                const form = event.target;
                const classname = form.classname.value;
                const instructorname = form.instructorname.value;
                const instructoremail = form.instructoremail.value;
                const price = parseInt(form.price.value);
                const availableseats = form.availableseats.value;
                const status = form.status.value;
                const classphoto = form.classphoto.value;
             
                form.reset();
        
            
                const newClass = { classname ,instructorname,  instructoremail, availableseats ,status, price, classphoto,}
                console.log(newClass);
               
               // send data to server

                fetch('http://localhost:5000/addclass', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newClass)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                           alert('add successfull')
                        }
                    })
            }
         
            return (
                <div className="bg-[#F4F3F0] p-24">
                    <h2 className="text-3xl font-extralight  text-orange-900">add a class</h2>
                    <form onSubmit={handleSubmit}>
        
                        <div className="md:flex mb-7">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">class Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="classname" placeholder="class Name"
                                        className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="ml-4 mb-7">
                            <div className="form-control md-full">
                                <label className="label">
                                    <span className="label-text"> class Photo </span>
                                </label>
                                <label className="input-group">
        
                                    <input type="text" name="classphoto" placeholder="class Photo"
                                        className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                        </div>
        
                        <div className="md:flex mb-7">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Instructor name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={user?.displayName} name="instructorname" placeholder="Instructor name"
                                        className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Instructor email</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" defaultValue={user?.email} name="instructoremail" placeholder="Instructor email"
                                        className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
        
                        <div className="md:flex mb-7">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Available seats</span>
                                </label>
                                <label className="input-group">
        
                                    <input type="text" name="availableseats" placeholder="Available seats"
                                        className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="price" placeholder="Price"
                                        className="input input-bordered w-full" required/>
                                </label>
                            </div>
                        </div>
        
                        <div className="md:flex mb-7">
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">status </span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="status" defaultValue='pending' placeholder="status"
                                        className="input input-bordered w-full" required/>
                                </label>
                            </div>
                            
                        </div>
                        
        
        
                        <input type="submit" value="Add class" className=" btn btn-block bg-orange-900 text-white" />
                    </form>
                </div>
            );
        };
        
    


export default AddClass;
import { motion } from "framer-motion";


const InstructorsCart = ({ instructor }) => {
    return (
     <div className="">
<motion.div
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
className="card"
>
<div className="card card-compact w-96 bg-base-100 shadow-xl ">

<figure><img src={instructor?.photo} alt="Shoes" /></figure>
<div className="card-body">
    <h2 className="card-title">{instructor.name}</h2>
    <p>{instructor.email}</p>
    <button className="btn btn-outline btn-info">Get Started</button>
</div>
</div>
</motion.div>
     </div>
    );
};

export default InstructorsCart;




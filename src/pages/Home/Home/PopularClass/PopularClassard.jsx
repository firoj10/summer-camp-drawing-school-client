import { motion } from "framer-motion";


const PopularClassard = ({ classe }) => {
    return (
      <div className="py-8">

<motion.div
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
className="card"
>
<div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img style={{ width: '900px', height: '300px' }} src={classe?.classphoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Class Name: {classe.classname}</h2>
            <p> Price: ${classe.price}</p>
            <p> Seats: {classe.availableseats}</p>
            <button className="btn btn-outline text-left btn-info">Details</button>
          </div>
        </div>
</motion.div>
      </div>
    );
  };
  
  export default PopularClassard;



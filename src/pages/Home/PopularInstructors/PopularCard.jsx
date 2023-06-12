import { motion } from "framer-motion";


const PopularCard = ({ popular }) => {
  return (
    <div className="">
<motion.div
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
className="card"
>
<div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={popular?.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{popular?.name}</h2>
          <p>{popular?.email}</p>
        </div>
      </div>
</motion.div>
    </div>
  );
};

export default PopularCard;







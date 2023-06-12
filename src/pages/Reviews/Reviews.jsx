import { motion } from "framer-motion";

import { useSpring, animated } from 'react-spring';
import img from '../../assets/ex2.jpg';
import './Reviews.css'; // Import the CSS file for the component

const Reviews = () => {
  const imageAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const contentAnimation = useSpring({
    transform: 'translateX(0)',
    opacity: 1,
    from: { transform: 'translateX(-70px)', opacity: 0 },
    delay: 1000,
  });

  return (
    <div className='py-14'>
       <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
               <h1 className='text-4xl text-center py-20'>Review Section</h1>
            </motion.h1>
     
      <div className="md:flex">
        <animated.div style={imageAnimation}>
          <img src={img} alt="Review" className="object-cover rounded-md" />
        </animated.div>
        <animated.div style={contentAnimation} className="flex flex-col justify-center ml-4">
          <h1 className="text-4xl font-bold ">Guardians of the Galaxy Vol. Dhaka and Happy Meal Toys Now Available at McDonald’s</h1>
          <p className="py-6">Each Happy Meal box includes one of eight superhero toys from the superhero toys baby toys and will be available for a limited time at participating restaurants nationwide, while supplies last.</p>
        </animated.div>
      </div>
    </div>
  );
};

export default Reviews;

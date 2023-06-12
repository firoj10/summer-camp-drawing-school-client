import  { useEffect, useState } from 'react';
import PopularClassard from './PopularClassard';

import { motion } from "framer-motion";

const PopularClass = () => {
    const [popularclasses, setPopularclasses] = useState(null);

    useEffect(() => {
        fetch('https://summer-camp-droing-school-server-firoj10.vercel.app/allclass/approve')
            .then((res) => res.json())
            .then((data) => {
                setPopularclasses(data);
                console.log(data.length)
            });
    }, []);
    return (
        <div>    
              <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
       <h1 className='text-4xl text-center py-20'>Popular Classes Section</h1>
      </motion.h1>
      
     
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {popularclasses?.slice(0, 6).map((classe) => (
  <PopularClassard key={classe._id} classe={classe} />
))}
  </div>
           

        </div>
    );
};

export default PopularClass;
import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import { motion } from "framer-motion";


const PopularInstructors = () => {
    const [populars, setPopulars] = useState(null);

    useEffect(() => {
        fetch('https://summer-camp-droing-school-server-firoj10.vercel.app/student/instructor/:role')
            .then((res) => res.json())
            .then((data) => {
                setPopulars(data);
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
                <h1 className='text-4xl text-center py-20'>Popular Instructors Section</h1>
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {populars?.slice(0, 6).map((popular) => (

                    <PopularCard key={popular._id} popular={popular}></PopularCard>
                ))}
            </div>
        </div>
    );
};

export default PopularInstructors;




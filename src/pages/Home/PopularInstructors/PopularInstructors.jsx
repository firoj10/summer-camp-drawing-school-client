import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";

const PopularInstructors = () => {
    const [populars, setPopulars] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/student/instructor/:role')
            .then((res) => res.json())
            .then((data) => {
                setPopulars(data);
                console.log(data.length)
            });
    }, []);
    return (
        <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {populars?.slice(0, 6).map((popular) => (

  <PopularCard key={popular._id} popular={popular}></PopularCard>
))}
  </div>
        </div>
    );
};

export default PopularInstructors;




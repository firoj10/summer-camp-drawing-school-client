import { useEffect, useState } from "react";
import InstructorsCart from "./InstructorsCart";


const Instructors = () => {
    const [instructors, setInstructors] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/student/instructor/:role')
            .then((res) => res.json())
            .then((data) => {
                setInstructors(data);
                console.log(data.length)
            });
    }, []);
    return (
        <div>    
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {instructors?.map((instructor) => (
  <InstructorsCart key={instructor._id} instructor={instructor} />
))}
  </div>
           

        </div>
    );
};

export default Instructors;
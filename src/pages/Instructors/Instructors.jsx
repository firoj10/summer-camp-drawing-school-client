import { useEffect, useState } from "react";
import InstructorsCart from "./InstructorsCart";


const Instructors = () => {
    const [instructors, setInstructors] = useState(null);

    useEffect(() => {
        fetch('https://summer-camp-droing-school-server-firoj10.vercel.app/student/instructor/:role')
            .then((res) => res.json())
            .then((data) => {
                setInstructors(data);
                console.log(data.length)
            });
    }, []);
    return (
        <div className="py-8">    
  <div className="grid grid-cols-1  md:grid-cols-3  gap-4">
  {instructors?.map((instructor) => (
  <InstructorsCart key={instructor._id} instructor={instructor} />
))}
  </div>
           

        </div>
    );
};

export default Instructors;
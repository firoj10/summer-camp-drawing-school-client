
import { useEffect, useState } from "react";
import ClassesCart from "./ClassesCart";


const Classes = () => {
    const [classes, setClasses] = useState(null);

    useEffect(() => {
        fetch('https://summer-camp-droing-school-server-firoj10.vercel.app/allclass/approve')
            .then((res) => res.json())
            .then((data) => {
                setClasses(data);
                console.log(data.length)
            });
    }, []);
    return (
        <div className="py-8">    
  <div className="grid grid-cols-1  md:grid-cols-3  gap-4">
  {classes?.map((classe) => (
  <ClassesCart key={classe._id} classe={classe} />
))}
  </div>
           

        </div>
    );
};

export default Classes;
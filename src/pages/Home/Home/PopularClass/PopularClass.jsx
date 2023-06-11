import  { useEffect, useState } from 'react';
import PopularClassard from './PopularClassard';

const PopularClass = () => {
    const [popularclasses, setPopularclasses] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/allclass/approve')
            .then((res) => res.json())
            .then((data) => {
                setPopularclasses(data);
                console.log(data.length)
            });
    }, []);
    return (
        <div>    
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {popularclasses?.slice(0, 6).map((classe) => (
  <PopularClassard key={classe._id} classe={classe} />
))}
  </div>
           

        </div>
    );
};

export default PopularClass;
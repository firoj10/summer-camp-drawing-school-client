import { useEffect, useState } from "react";


const useCart = () => {
const [myClass, setmyClass] = useState(null);

useEffect(() => {
  fetch('http://localhost:5000/allclass')
    .then((res) => res.json())
    .then((data) => {
        setmyClass(data);
    });
}, []);

    return [myClass, setmyClass];
};
export default useCart;
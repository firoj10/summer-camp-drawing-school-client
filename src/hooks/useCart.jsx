import { useEffect, useState } from "react";


const useCart = () => {
const [myClass, setmyClass] = useState(null);

useEffect(() => {
  fetch('https://summer-camp-droing-school-server-firoj10.vercel.app/allclass')
    .then((res) => res.json())
    .then((data) => {
        setmyClass(data);
    });
}, []);

    return [myClass, setmyClass];
};
export default useCart;
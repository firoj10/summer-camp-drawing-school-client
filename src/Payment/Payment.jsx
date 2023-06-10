
import { useParams } from "react-router-dom";
import useClasses from "../hooks/useClasses";
import PaymentCart from "./PaymentCart";



const Payment = () => {
    const {id} = useParams();
    const [classes] = useClasses()
    const desserts = classes.filter(item=>item._id===id);
    
   
  console.log(desserts);

  
    return (
        <div>
            {
  desserts && desserts.map(item => (
<PaymentCart key={item._id} item={item} ></PaymentCart>

  ))
}
          <h2>h2</h2>
          
            
        </div>
    );
};

export default Payment;
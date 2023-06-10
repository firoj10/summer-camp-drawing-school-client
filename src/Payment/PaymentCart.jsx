import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const PaymentCart = ({item}) => {
    const {price}=item;

    return (
        <div>
   
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
            <CheckoutForm  item={item}></CheckoutForm>
            </Elements>
            
        </div>
    );
};

export default PaymentCart;
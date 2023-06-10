import  { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';

const CheckoutForm = ({ item }) => {
    const {_id, price} = item
    console.log('aaaaaaaaaaaa',price);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [success, setSuccess] = useState('');
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

//   useEffect(() => {
//     if (prices > 0) {
//       axios
//         .post('/create-payment-intent', { prices })
//         .then((res) => {
//           console.log(res.data.clientSecret);
//           setClientSecret(res.data.clientSecret);
//         })
//         .catch((error) => {
//           console.log('Error fetching client secret:', error);
//         });
//     }
//   }, [prices]);

useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          
        },
        body: JSON.stringify({ price }),
    })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
}, [price]);



 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
        return;
    }

    const { error } = await stripe.createPaymentMethod({
        type: 'card',
        card
    });

    if (error) {
        console.log(error);
        setCardError(error.message);
    }
    else {
        setCardError('');
    }
    setSuccess('');
    setProcessing(true);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                
                    email: user.email
                },
            },
        },
    );

    if (confirmError) {
        setCardError(confirmError.message);
        return;
    }
    if (paymentIntent.status === "succeeded") {
        console.log('card info', card);
        // store payment info in the database
        const payment = {
            price,
            transactionId: paymentIntent.id,
            email: user.email,
            bookingId: _id
        }
        fetch('http://localhost:5000/payments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
          
            },
            body: JSON.stringify(payment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setSuccess('Congrats! your payment completed');
                    setTransactionId(paymentIntent.id);
                }
            })
    }
    setProcessing(false);


}

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-info" type="submit" disabled={processing}>
          {processing ? 'Processing...' : 'Pay'}
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>
      )}
       </>
    );
};

export default CheckoutForm;

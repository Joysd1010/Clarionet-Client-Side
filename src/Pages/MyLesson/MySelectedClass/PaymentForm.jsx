import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../HOOKS/useAxiosSecure";
import Swal from "sweetalert2";

import useAuth from "../../../HOOKS/useAuth";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ price, cart }) => {
  const stripe = useStripe();
  const navigate=useNavigate();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const updateSeats=()=>{
    
    const updatedSeat=cart.available_seats-1;

    console.log(updatedSeat)
    const updateSeat={updatedSeat}
    fetch(`http://localhost:5000/class/${cart.classId}`, {
      method: 'PATCH',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(updateSeat)
  })
      .then(res => res.json())
      .then(data => {
      if(data.modifiedCount>1){
        refetch();
        setModified(updatedSeat)
      }
      })
  }
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
    // console.log({clientSecreat: res.data.clientSecret});
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // console.log({card})
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      console.log("PaymentMethod", paymentMethod);
      setCardError("");
    }
    setProcessing(true);
console.log(clientSecret)
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
    console.log({confirmError});
    }
    console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            updateSeats();

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                classId: cart._id,
                userId: cart.classId,
                status: 'service pending',
                itemNames: cart.class_name
            }

                axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data.insertResult.insertedId);
                    if (res.data.insertResult.insertedId) {
                        
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: 'Payment is Succesfull',
                        showConfirmButto1n: false,
                        timer: 1500,
                      })
                      navigate('/myLesson/myselceted')
                      
                    }
                })
                
                

                
        }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-xl text-red-600">{cardError}</p>
    </div>
  );
};

export default PaymentForm;

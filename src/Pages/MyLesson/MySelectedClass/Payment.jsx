import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { useLocation } from 'react-router-dom';
import useCart from '../../../HOOKS/useCart';

 

const stripePromise=loadStripe(import.meta.env.VITE_Payment_KEY)
const Payment = (props) => {
const location=useLocation()
// console.log(location.state.id)
const [cart]=useCart()
const classID=location.state.id
// console.log(cart)
const paymentClass=cart?.find(classfind=>classfind._id===classID)
console.log(paymentClass)
const price=parseFloat(paymentClass?.price.toFixed(2))
console.log(price)


    return (
        <div>
            <SectionTitle title={'Make Payment To Enroll'}/>
            <Elements stripe={stripePromise}>
                <PaymentForm cart={paymentClass} price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;

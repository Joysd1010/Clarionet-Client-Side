import React, { useEffect,useState } from 'react';
import useAuth from '../../../HOOKS/useAuth';

const PaymentHistory = () => {
    const {user}=useAuth();
    const [payment,setPayment]=useState([])
    const myclasses=payment.filter(cartClass=>cartClass?.email===user.email)

    useEffect(()=>{
        fetch('http://localhost:5000/paym')
        .then(res=>res.json())
        .then(data=>{
          setPayment(data)
        })
  
      },[])
    return (
        <div><div className="w-full">
     
        <div className="w-full overflow-x-auto bg-orange-300 rounded-lg">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>#</th>
                <th>Class Name</th>
                <th>Class Status</th>
                <th>Price</th>
                <th>Trnx ID</th>
                
              </tr>
            </thead>
            <tbody className="">
              {myclasses.map((item, index) => (
                <tr key={item._id}>
                  <td className="">{index + 1}</td>
                  <td>
                  {item.itemNames}
                  </td>
                  <td className='font-bold'>{item.status}</td>
                  <td className="">${item.price}</td>
                  <td className=" font-bold">{item.transactionId}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> 
          </div>
    );
};

export default PaymentHistory;
import React, { useEffect, useState } from 'react';
import useCart from '../../HOOKS/useCart';
import useAuth from '../../HOOKS/useAuth';

const MuEnrolled = () => {
    const {user}=useAuth()
    const [payment,setPayment]=useState([])
    const [classes,setClass]=useState([])
    const myclasses=payment.filter(cartClass=>cartClass?.email===user.email)

    

    useEffect(()=>{
      fetch('http://localhost:5000/paym')
      .then(res=>res.json())
      .then(data=>{
        setPayment(data)
      })

      fetch('http://localhost:5000/class')
      .then(res=>res.json())
      .then(data=>{
        setClass(data)
      })

    },[])


const filteredArray = classes.filter(objA => {
      return myclasses.some(objB => objB.userId === objA._id);
    });



    
console.log({filteredArray})
 console.log({myclasses,classes})
    return (
        <div>
           <div className="w-full">
     
      <div className="w-full overflow-x-auto bg-orange-300 rounded-lg">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Instructor</th>
              
            </tr>
          </thead>
          <tbody className="">
            {filteredArray.map((item, index) => (
              <tr key={item._id}>
                <td className="">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src={item.instrument_image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className='font-bold'>{item.class_name}</td>
                <td className="">${item.price}</td>
                <td className=" font-bold">{item.instructor_name}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> 
        </div>
    );
};

export default MuEnrolled;
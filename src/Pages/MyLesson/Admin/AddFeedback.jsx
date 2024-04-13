
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddFeedback = () => {
    const [review,setReview]=useState('')
const location=useLocation()
const navigate=useNavigate()
const classData=location.state.data

    const handleForm=(event)=>{
event.preventDefault();
const form = event.target;
const quote=form.feedback.value;
// console.log(quote)
setReview(quote)

fetch(`https://clarionet-server-side.vercel.app/feedback/${classData._id}`,{
    method:'PUT',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({review})
    
  })
.then(res=>res.json())
.then(data=>{
  console.log(data)
    if(data.modifiedCount>0){
        
        
        Swal.fire({
        position: "center",
        icon: "success",
        title: 'This Class is reviwed',
        showConfirmButto1n: false,
        timer: 1500,
      })
      navigate('/myLesson/manage')
    }

  })



}

        const handleFeedback=(data)=>{


           
      }

    return (
        <div>
           
  <form onSubmit={handleForm} method="dialog" className="modal-box">
    <h1 className='text-xl py-2'>Add a feedback Quote</h1>
    <input type="text" placeholder="Type feedback here" id='feedback' className="input input-bordered input-accent w-full max-w-xs" />
   
      
      <button type='submit'  className=" btn btn-accent py-3">submit</button>
  
  </form>

        </div>
    );
};

export default AddFeedback;
import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import SectionTitle from '../../Shared/SectionTitle';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ManageClass = () => {

    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const result = await fetch("http://localhost:5000/class");
        return result.json();
      });
const [review,setReview]=useState('')
const handleApprove=(data)=>{
    // console.log('get clicked',id)

      fetch(`http://localhost:5000/classes/${data._id}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({data})
        
      })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
        if(data.modifiedCount>0){
            refetch();
            
            Swal.fire({
            position: "center",
            icon: "success",
            title: 'This Class is approved',
            showConfirmButto1n: false,
            timer: 1500,
          })
        }

      })
}
const handleDenied=(data)=>{
    // console.log('get clicked',id)

      fetch(`http://localhost:5000/denied/${data._id}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({data})
        
      })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
        if(data.modifiedCount>0){
            refetch();
            
            Swal.fire({
            position: "center",
            icon: "success",
            title: 'This Class is approved',
            showConfirmButto1n: false,
            timer: 1500,
          })
        }

      })
}
const navigate=useNavigate()
const handleNavigate=(data)=>{
  navigate('/myLesson/feedback', {state:{data:data}})
}



    return (
        <div className=' h-screen w-screen'>
             <SectionTitle title={`Manage classes`} />
      <div className="w-full">
        <div className="w-full overflow-x-auto bg-indigo-300 rounded-lg">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-xl text-black">
                <th>#</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Total Seat</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {users?.map((item, index) => (
                <tr key={item._id}>
                  <td className="">{index + 1}</td>
                  <td>{item.class_name}</td>
                  <td>{item.price}</td>
                  <td><div class="badge badge-warning">{item?.status?item.status:'Apporved'}</div></td>
                  <td className="">{item.available_seats}</td>
                  <td className="flex gap-2">
                   
                    
                    
                    {item.status=='pending'?<button className="btn btn-info" onClick={() => handleApprove(item)}>
                      Approve
                    </button>:<button disabled className="btn btn-info" onClick={() => handleApprove(item._id)}>
                      Approve
                    </button>}
                    {item.status=='Denied'?<button disabled onClick={()=>{handleDenied(item)}} className="btn btn-warning">
                      Deny
                    </button>:<button onClick={()=>{handleDenied(item)}} className="btn btn-warning">
                      Deny
                    </button>
                    }
                    
                    <button className="btn"   onClick={()=>handleNavigate(item)}>
                      Feedback
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Open the modal using ID.showModal() method */}


        </div>
    );
};

export default ManageClass;
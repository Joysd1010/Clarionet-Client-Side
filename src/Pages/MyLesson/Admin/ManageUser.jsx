import React from "react";
import useTitle from "../../../HOOKS/useTitle";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {
  useTitle("All User");
  const token=localStorage.getItem('acces_token')
  // const { data: users = [], refetch } = useQuery(["users"], async () => {
  //   const result = await fetch("https://clarionet-server-side.vercel.app/user");
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const result = await fetch("https://clarionet-server-side.vercel.app/user",{
      headers:{
        authorization:`Bearer ${token}`
      }
    });
    return result.json();
  });
  const handleAdmin = (id,name) => {
    fetch(`https://clarionet-server-side.vercel.app/users/admin/${id}`,{
        method:'PATCH',
        
    }).then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
            refetch();
            
            Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} is Admin now`,
            showConfirmButto1n: false,
            timer: 1500,
          })
        }
        
    })
  };
  const handleInstruct = (id,name) => {
    fetch(`https://clarionet-server-side.vercel.app/users/instructor/${id}`,{
        method:'PATCH',
        
    }).then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            refetch();
            
            Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} is Instructor now`,
            showConfirmButto1n: false,
            timer: 1500,
          })
        }
        
    })
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {
          fetch(`https://clarionet-server-side.vercel.app/users/${id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                  if (data.deletedCount > 0) {
                      refetch();
                      Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                      )
                  }
              })
      }
  })
  };
  return (
    <div  className=' h-screen w-screen'>
      <SectionTitle title={`Total users ${users.length}`} />
      <div className="w-full">
        <div className="w-full overflow-x-auto bg-indigo-300 rounded-lg">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-xl text-black">
                <th>No.</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Role</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {users?.map((item, index) => (
                <tr key={item._id}>
                  <td className="">{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td className="">{item?.role || "User"}</td>
                  <td className="flex gap-2">
                    {item?.role== 'Admin'?<button disabled
                      onClick={() => handleAdmin(item._id,item.name)}
                      className="text-white bg-red-600  btn btn-ghost"
                    >
                      Make Admin
                    </button>:
                    <button
                      onClick={() => handleAdmin(item._id)}
                      className="text-white bg-red-600  btn btn-ghost"
                    >
                      Make Admin
                    </button>}
                    {item?.role== 'Instructor'?<button disabled
                      onClick={() => handleInstruct(item._id,item.name)}
                      className="text-white bg-blue-600 btn btn-ghost"
                    >
                      Make Instructor
                    </button>:<button
                       onClick={() => handleInstruct(item._id,item.name)}
                      className="text-white bg-blue-600 btn btn-ghost"
                    >
                      Make Instructor
                    </button>}
                    
                    <button className="btn btn-warning" onClick={() => handleDelete(item._id)}>
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;

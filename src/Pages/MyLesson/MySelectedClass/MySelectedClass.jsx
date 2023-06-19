import React from "react";
import useCart from "../../../HOOKS/useCart";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../../HOOKS/useTitle";

const MySelectedClass = () => {
  useTitle("My Classes");
  const navigate=useNavigate()
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
const handleClick=(id)=>{
 navigate('/myLesson/pay',{state:{id:id}})
}
  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center bg-orange-200 rounded-lg ">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
       
      </div>
      <div className="w-full overflow-x-auto bg-orange-300 rounded-lg">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {cart.map((item, index) => (
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
                <td>{item.class_name}</td>
                <td className="">${item.price}</td>
                <td className="flex items-center gap-3">
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-white bg-red-600 btn btn-ghost"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                
                 <button className="btn btn-info" onClick={()=>handleClick(item._id)}>Pay</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;

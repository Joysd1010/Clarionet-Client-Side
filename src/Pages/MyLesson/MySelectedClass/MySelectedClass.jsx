import React from "react";
import useCart from "../../../HOOKS/useCart";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../../HOOKS/useTitle";

const MySelectedClass = () => {
  useTitle("My Classes");
  const navigate = useNavigate();
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
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://clarionet-server-side.vercel.app/cart/${item._id}`, {
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
  const handleClick = (id) => {
    navigate("/myLesson/pay", { state: { id: id } });
  };
  return (
    <div className="w-full text-black h-screen">
      <div className="uppercase font-semibold h-[60px] flex justify-around px-5 items-center bg-orange-200 rounded-lg ">
        <h3 className="md:text-3xl text-lg">Total Items: {cart.length}</h3>
        <h3 className="md:text-3xl text-lg">Total Price: ${total}</h3>
      </div>
      <div className="w-full md:block hidden overflow-x-auto bg-orange-300 rounded-lg">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-xl ">
              <th className="text-black">#</th>
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

                  <button
                    className="btn btn-info"
                    onClick={() => handleClick(item._id)}
                  >
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" block md:hidden">
        <div className=" grid grid-cols-5 px-3 text-center text-lg font-semibold py-2 bg-violet-300 ">
          <h1 className=" col-span-2">Class Name</h1>
          <h1>Price</h1>
          <h1 className=" col-span-2">Action</h1>
        </div>
        {cart.map((item, index) => (
          <div className=" grid grid-cols-5 px-3 text-base text-center py-2 my-1 bg-blue-100 ">
            <h1 className=" col-span-2">{item.class_name}</h1>
            <h1>${item.price}</h1>
            <div className=" col-span-2 flex items-center gap-2">
              {" "}
              <button
                onClick={() => handleDelete(item)}
                className="text-white bg-red-600 btn btn-ghost"
              >
                <FaTrashAlt></FaTrashAlt>
              </button>
              <button
                className="btn btn-info"
                onClick={() => handleClick(item._id)}
              >
                Pay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySelectedClass;

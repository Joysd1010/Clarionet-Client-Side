import React, { useEffect, useState } from "react";
import useCart from "../../HOOKS/useCart";
import useAuth from "../../HOOKS/useAuth";

const MuEnrolled = () => {
  const { user } = useAuth();
  const [payment, setPayment] = useState([]);
  const [classes, setClass] = useState([]);
  const myclasses = payment.filter(
    (cartClass) => cartClass?.email === user.email
  );

  useEffect(() => {
    fetch("https://clarionet-server-side.vercel.app/paym")
      .then((res) => res.json())
      .then((data) => {
        setPayment(data);
      });

    fetch("https://clarionet-server-side.vercel.app/class")
      .then((res) => res.json())
      .then((data) => {
        setClass(data);
      });
  }, []);

  const filteredArray = classes.filter((objA) => {
    return myclasses.some((objB) => objB.userId === objA._id);
  });

  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full overflow-x-auto hidden md:block bg-orange-300 rounded-lg">
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
                  <td className="font-bold">{item.class_name}</td>
                  <td className="">${item.price}</td>
                  <td className=" font-bold">{item.instructor_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" block md:hidden">
          <div className=" grid grid-cols-5 text-center text-lg font-semibold bg-yellow-300 py-2">
            <h1>Image</h1>
            <h1 className=" col-span-2">Class Name</h1>
            <h1 className=" col-span-2">Instructor</h1>
          </div>
          {filteredArray.map((item, index) => (
            <div className="grid grid-cols-5 text-center text-base item-center px-2 bg-blue-100 py-2 my-1">
              
              <div className="w-12 h-12 mask mask-squircle ">
                <img
                  src={item.instrument_image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
              <h1 className=" col-span-2">{item.class_name}</h1>
            <h1 className=" col-span-2">{item.instructor_name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MuEnrolled;

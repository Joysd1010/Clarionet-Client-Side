import React, { useContext, useState } from "react";
import { MdEventSeat } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import useTitle from "../../HOOKS/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../HOOKS/useCart";
import useAdmin from "../../HOOKS/useAdmin";
import useInstructor from "../../HOOKS/useInstructor";



const ClassCard = ({ classs }) => {
  useTitle("All Class");

  const {
    instrument_image,
    available_seats,
    price,
    _id,
    instructor_name,
    class_name,
  } = classs;

  const { user } = useContext(AuthContext);
  const [,refetch]=useCart()
 const [isAdmin]=useAdmin()
 const [isInstructor]=useInstructor()

 


  const handleLesson = () => {
    if (user) {
      const classLesson = {
        classId: _id,
        email: user.email,
        instrument_image,
        available_seats,
        price,
        instructor_name,
        class_name,
      };
      fetch("https://clarionet-server-side.vercel.app/cart", {
        method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(classLesson),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Added to dashboard",
              showConfirmButton: false,
              timer: 1500,
            })

            
          }
        });
    }
  };
  
  return (
    <div className={!available_seats==0?"bg-blue-300 border-2 border-blue-700 p-2 rounded-tr-3xl rounded-bl-3xl":"bg-red-300 rounded-tr-3xl rounded-bl-3xl"}>
      <div className="flex justify-around py-5">
        <img
          src={instrument_image}
          className="w-56 h-64 rounded-tr-3xl rounded-bl-3xl "
        />
      </div>
      <div className="mx-5 mb-5">
        <h1 className="flex gap-2 items-top text-lg text-blue-900">
          <SiGoogleclassroom /> Class Name : {class_name}
        </h1>
        <h1 className="flex gap-2 items-top text-lg text-blue-900">
          <GiTeacher /> Instructor : {instructor_name}
        </h1>
        <h1 className="flex gap-2 items-center text-lg text-blue-900">
          <MdEventSeat /> Available Seats : {available_seats}
        </h1>
        <div className="flex justify-between">
          <h1 className="badge badge-primary badge-outline my-2 py-2 font-bold">
            Price {price} $
          </h1>
          {!available_seats==0&&!isAdmin&&!isInstructor?<button  onClick={handleLesson} className="btn btn-primary ">
            Enroll
          </button>:<button disabled  className="btn btn-primary ">
            Enroll
          </button>}
          
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

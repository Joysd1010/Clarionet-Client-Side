import React from "react";
import { MdEventSeat } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";

const PopularClass = ({ classs }) => {
  const {
    instrument_image,
    available_seats,
    price,
    instructor_name,
    class_name,
  } = classs;

  return (
    <div className="bg-blue-200 rounded-tr-3xl rounded-bl-3xl">
      <div className="flex justify-around py-5">
        <img
          src={instrument_image}
          className="w-56 h-64 rounded-tr-3xl rounded-bl-3xl "
        />
      </div>
      <div className="mx-5 mb-5">
        
        <h1 className="flex gap-2 items-top text-lg text-blue-900">
         <SiGoogleclassroom/> Class Name : {class_name}
        </h1>
        <h1 className="flex gap-2 items-top text-lg text-blue-900">
         <GiTeacher/> Instructor : {instructor_name}
        </h1>
        <h1 className="flex gap-2 items-center text-lg text-blue-900">
         <MdEventSeat/> Available Seats : {available_seats}
        </h1>
        <h1 className="badge badge-primary badge-outline my-2 py-2 font-bold">
          Price {price}
        </h1>
      </div>
    </div>
  );
};

export default PopularClass;

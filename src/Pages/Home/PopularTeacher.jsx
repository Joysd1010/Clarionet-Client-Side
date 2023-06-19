import React from "react";
import { HiMail } from "react-icons/hi";
import { GiMusicalScore } from "react-icons/gi";

const PopularTeacher = ({ sir }) => {
  const { name, image, numberOfClasses, email } = sir;

  return (
    <div className="bg-blue-200 rounded-tl-3xl rounded-br-3xl">
      <div className="flex justify-around py-10">
        <img src={image} className="w-64 rounded-tl-3xl rounded-br-3xl" />
      </div>
      <div className="mx-10 mb-5">
        <h1 className="flex gap-2 items-center text-xl text-blue-900"><GiMusicalScore/>{name}</h1>
        <h1 className="flex gap-2 items-center text-lg text-blue-900"><HiMail size={25}/> {email}</h1>
        <h1 className="badge badge-primary badge-outline my-2 py-2 font-bold">Number Of Classes  {numberOfClasses}</h1>
      </div>
    </div>
  );
};

export default PopularTeacher;

import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle";
import Swal from "sweetalert2";
import useAuth from "../../../HOOKS/useAuth";

const imageHostingToken = import.meta.env.VITE_Image_Api_Key;
const imgHosthigUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

const AddClass = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const {user}=useAuth();
console.log({imageHostingToken,imgHosthigUrl})
  const onSubmit = (data) => {
    console.log(data);
    console.log(data.instrument_image[0]);

    const formData = new FormData();
    formData.append('image', data.instrument_image[0]);

    console.log(formData);

    fetch(imgHosthigUrl, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgResponse => {
        console.log({ imgResponse });
        if(imgResponse.success){
            const instrument_image=imgResponse.data.display_url;
            const status='pending';
            const {class_name,instructor_name,available_seats,price}=data
            const newClass={class_name,email:user?.email,price: parseFloat(price),status,instrument_image,instructor_name,available_seats}
            console.log(newClass)
            fetch('http://localhost:5000/classes',{
                method:'POST',
                headers: { "content-type": "application/json" },
                body:JSON.stringify(newClass)
            })
            .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {   
                reset()         
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully sent to Admin",
                showConfirmButton: false,
                timer: 2000,
              });
                
              }});
        }
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
  };

  return (<div className=" h-screen">
    <SectionTitle title={'Add a musical Class'}/>
    <div className="p-10 bg-sky-600 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Class name */}
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Class Name"
            id="class_name"
            {...register("class_name", { required: true })}
            className="input input-bordered input-info w-full max-w-xs"
           
        />
       
          
          <input
            type="text"
            defaultValue={user.displayName}
            placeholder="Instructor Name"
            id="instructor_name"
            className="input input-bordered input-info w-full max-w-xs"
            {...register("instructor_name", { required: true })}
          />
        </div>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Available Seat"
            id="available_seats"
            className="input input-bordered input-info w-full max-w-xs"
            {...register("available_seats", { required: true })}
          />
          {/* price  */}
          <input
            type="text"
            placeholder="Price"
            id="price"
            className="input input-bordered input-info w-full max-w-xs"
            {...register("price", { required: true })}
          />
        </div>
        <div className="flex  justify-around">
          <input
            type="file"
            id="instrument_image"
            className="file-input file-input-bordered file-input-info w-full max-w-xs"
            {...register("instrument_image", { required: true })}
          />
        </div>
        <button type="submit" className="btn btn-info">Submit</button>
      </form>
    </div>
  </div>
    
  );
};

export default AddClass;

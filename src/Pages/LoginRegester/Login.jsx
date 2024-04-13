import React from "react";
import img from "../../../public/SignupSignIN.png";
import Form from "./Form";

const Login = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className=" bg-cover bg-no-repeat md:px-20"
    >
        <div className="md:py-20 py-5 mx-6 md:mx-60 relative md:left-44">
            <Form/>
        </div>
        
    </div>
  );
};

export default Login;

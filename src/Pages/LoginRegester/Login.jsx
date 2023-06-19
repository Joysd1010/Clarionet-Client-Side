import React from "react";
import img from "../../../public/SignupSignIN.png";
import Form from "./Form";

const Login = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className=" bg-cover bg-no-repeat px-20"
    >
        <div className="py-20 mx-60 relative left-44">
            <Form/>
        </div>
        
    </div>
  );
};

export default Login;

import React from 'react';
import img from '../../../public/SignupSignIN.png'
import RegestrationForm from './RegestrationForm';
const Registration = () => {
    return (
        <div
      style={{ backgroundImage: `url(${img})` }}
      className=" bg-cover bg-no-repeat px-20"
    >
        <div className="py-20 mx-60 relative left-44">
            <RegestrationForm/>
        </div>
        
    </div>
    );
};

export default Registration;
import React from 'react';
import img from './../../../public/Untitled design.gif'
import {FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Errorpage = () => {
    return (
        <div>
           <img src={img} alt="" className='w-full' />
           <Link to={'/'}>
           <button className='btn btn-primary text-xl relative bottom-40 left-1/3 mx-20'>Go back to home page <FaHome size={25}/></button></Link>
        </div>
    );
};

export default Errorpage;
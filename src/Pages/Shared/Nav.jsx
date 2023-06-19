import React from 'react';
import {  NavLink } from "react-router-dom";
import { TfiBook } from "react-icons/tfi";
import useCart from '../../HOOKS/useCart';


const Nav = () => {
    const [cart]=useCart()
    console.log(cart)
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-2'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold text-base md:text-xl px-5  duration-300"
                  : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/class"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold text-base md:text-xl px-5  duration-300"
                  : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
              }
            >
              All Classes
            </NavLink>
            <NavLink
              to="/instruct"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold text-base md:text-xl px-5  duration-300"
                  : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
              }
            >
              Instructors
            </NavLink>
            <NavLink
              to="/myLesson"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold text-base md:text-xl px-5  duration-300 "
                  : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
              }
            ><div className="tooltip tooltip-open tooltip-primary" data-tip={`+${cart?.length||0}`}>
            <h1 className='flex items-center gap-2'><TfiBook/>My Lessons</h1>  
           </div> </NavLink>
           
          </div>
        </div>
    );
};

export default Nav;
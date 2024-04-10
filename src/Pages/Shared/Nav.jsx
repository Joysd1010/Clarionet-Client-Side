import React from 'react';
import {  NavLink } from "react-router-dom";
import { TfiBook } from "react-icons/tfi";
import useCart from '../../HOOKS/useCart';
import { IoMdHome, IoMdSchool } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { FaHome } from 'react-icons/fa';




const Nav = () => {
    const [cart]=useCart()
    console.log(cart)
    return (
        < >
            <div className='flex flex-col md:flex-row gap-2 z-40'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold text-base md:text-xl px-5  duration-300"
                  : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
              }
            >
               <h1 className='flex items-center gap-2'><IoMdHome/>Home</h1>  
            </NavLink>
            <NavLink
              to="/class"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold text-base md:text-xl px-5  duration-300"
                  : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
              }
            >
               <h1 className='flex items-center gap-2'><IoMdSchool/>All Classes</h1>  
            </NavLink>
            <NavLink
              to="/instruct"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold text-base md:text-xl px-5  duration-300"
                  : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
              }
            >
              <h1 className='flex items-center gap-2'><GiTeacher/>Instructors</h1>  
            </NavLink>
            <NavLink
              to="/myLesson"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold text-base md:text-xl px-5  duration-300 "
                  : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
              }
            ><div className="tooltip tooltip-open md:tooltip-top tooltip-right tooltip-primary" data-tip={`+${cart?.length||0}`}>
            <h1 className='flex items-center gap-2'><TfiBook/>My Lessons</h1>  
           </div> </NavLink>
           
          </div>
        </>
    );
};

export default Nav;
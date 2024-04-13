import React from "react";
import { ImMenu } from "react-icons/im";

import img from "./../../../public/Orange Black Illustrated School of Music Logo.png";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
  FaCartPlus,
  FaList,
} from "react-icons/fa";
import useCart from "../../HOOKS/useCart";
import { MdClass } from "react-icons/md";
import useTitle from "../../HOOKS/useTitle";
import useAdmin from "../../HOOKS/useAdmin";
import useInstructor from "../../HOOKS/useInstructor";
// import useAdmin from "../Hooks/useAdmin";

const MyLesson = () => {
  useTitle("Dashboard");

  const [cart] = useCart();

  
  const [isAdmin] = useAdmin()

  const [isInstructor]=useInstructor()

  return (
    <>
      <div className="drawer lg:drawer-open drawer-mobile text-black bg-white h-screen ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          
          <div className=" bg-blue-400 flex justify-between px-5 py-3 w-full md:hidden">
          <div className=" flex items-center gap-5">
            <img src={img} className=" w-14" alt="" />
            <h1 className=" text-gray-700 font-bold text-3xl">Clarionet</h1>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn bg-transparent border-none text-black drawer-button lg:hidden"
          >
            <ImMenu size={30}/>

          </label>
          </div>

          <Outlet></Outlet>
          




        </div>

        <div className="drawer-side  ">
        <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-62 min-h-full bg-cyan-200 text-base-content flex flex-col gap-5">
            {/* Sidebar content here */}
            <li >
              <img src={img} className="w-40" />
            </li>
            {isAdmin ? (
              <>
                <li className="bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="/myLesson">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li className="bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="/myLesson/manage">
                    {" "}
                    <FaList /> Manage Class
                  </NavLink>
                </li>
                
                <li className="bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="">
                    <FaBook></FaBook> Manage Reservatioin(Coming soon)
                  </NavLink>
                </li>
                <li className="bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="/myLesson/allusers">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li className="bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink>
                    <FaHome></FaHome> Instructor Home
                  </NavLink>
                </li>
                <li className="bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="/myLesson/addClass">
                    {" "}
                    <FaList /> Add Class
                  </NavLink>
                </li>
                <li className="bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="/myLesson/myadded">
                    {" "}
                    <FaList /> My classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="/myLesson">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li className="bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="/myLesson/enroll">
                    <FaCalendarAlt></FaCalendarAlt> My Enrolled Class
                  </NavLink>
                </li>
                <li className="bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="/myLesson/history">
                    <FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
                
                <li className="bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="/myLesson/myselceted">
                    <FaShoppingCart></FaShoppingCart> My Class
                    <span className="badge inl badge-secondary">
                      +{cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li className="bg-slate-500 rounded-xl text-yellow-300">
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li className="bg-slate-500 rounded-xl text-yellow-300">
              <NavLink to="/class">
                <MdClass></MdClass> Classes
              </NavLink>
            </li>
            <li className="bg-slate-500 rounded-xl text-yellow-300">
              <NavLink to="/instruct">
                {" "}
                <FaCartPlus></FaCartPlus>Instructor
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyLesson;

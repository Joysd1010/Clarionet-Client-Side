import React from "react";
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

  // const isAdmin = true;
  // const isAdmin = false;
  const [isAdmin] = useAdmin()

  // console.log({isAdmin})
  const [isInstructor]=useInstructor()
  // console.log({isInstructor})

  return (
    <>
      <div className="drawer lg:drawer-open drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center justify-center drawer-content">
          {/* Page content here */}

          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Menu
          </label>
        </div>

        <div className="drawer-side bg-blue-300">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="p-4 menu w-80">
            {/* Sidebar content here */}
            <li>
              <img src={img} className="w-40" />
            </li>
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/myLesson">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myLesson/manage">
                    {" "}
                    <FaList /> Manage Class
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/">
                    <FaBook></FaBook> Manage Reservatioin(Coming soon)
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myLesson/allusers">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink>
                    <FaHome></FaHome> Instructor Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myLesson/addClass">
                    {" "}
                    <FaList /> Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myLesson/myadded">
                    {" "}
                    <FaList /> My classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/myLesson">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myLesson/enroll">
                    <FaCalendarAlt></FaCalendarAlt> My Enrolled Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myLesson/history">
                    <FaWallet></FaWallet> Payment History(coming soon)
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/myLesson/pay">
                    <FaWallet></FaWallet> Checkout
                  </NavLink>
                </li> */}
                <li>
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
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/class">
                <MdClass></MdClass> Classes
              </NavLink>
            </li>
            <li>
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

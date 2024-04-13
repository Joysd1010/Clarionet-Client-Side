import React, { useState, useContext } from "react";
import { ImMenu } from "react-icons/im";
import { GiSplitCross } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import img from "../../../public/Orange Black Illustrated School of Music Logo.png";

import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const [menu, setMenu] = useState(true);
  const handleMenuOpen = () => {
    setMenu(false);
  };
  const handleMenuClose = () => {
    setMenu(true);
  };
  return (
    <>
      <nav className="bg-white px-5 sticky shadow-md shadow-blue-400 top-0 z-50 text-black md:px-20 flex items-center py-3 md:py-3 justify-between ">
        <div className=" flex items-center">
          <img className=" rounded-3xl w-14 md:w-20" src={img} alt="" />
          <h1 className="text-2xl md:text-5xl px-4 ">Clarionet</h1>
        </div>
        <div className="flex items-center">
          <div
            className={`flex items-center z-30 flex-col gap-3 md:flex-row md:static absolute ${
              menu
                ? "-top-80 right-16"
                : " right-16 bg-blue-200 md:bg-white px-1 py-2 rounded-lg top-10"
            } duration-500`}
          >
            <Nav menu={menu} />
            {!user ? (
              <div>
                <Link to={"/login"}>
                  <button className="btn btn-info hover:bg-blue-500 hover:text-white text-yellow-50 md:ml-5">
                    {" "}
                    Sign in
                  </button>
                </Link>
              </div>
            ) : (
              <button
                onClick={logOut}
                className="btn btn-info hover:bg-blue-500 hover:text-white text-yellow-50 md:ml-5"
              >
                {" "}
                Sign Out
              </button>
            )}
            <div className={`${user ? "block" : "hidden"}`}>
              <div
                className="tooltip  tooltip-primary"
                data-tip={user?.displayName || user?.email}
              >
                <div className="avatar">
                  <div className="w-12 md:w-12 md:ml-5  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {user?.photoURL ? (
                      <img src={user?.photoURL} />
                    ) : (
                      <FaUserAlt />
                    )}
                    {/* {console.log(user?.photoURL)} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:hidden ml-5">
            {menu ? (
              <div className=" border-2 border-blue-500 p-1 rounded-lg">
                <ImMenu onClick={handleMenuOpen} size={20} />
              </div>
            ) : (
              <div className=" border-2 border-blue-500 p-1 rounded-lg">
                <GiSplitCross onClick={handleMenuClose} size={20} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

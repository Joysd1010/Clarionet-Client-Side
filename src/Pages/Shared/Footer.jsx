import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../public/Orange Black Illustrated School of Music Logo.png'
import { FaMailBulk, FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-blue-200 py-4">
      <div className="container mx-2 md:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="w-full md:w-1/4 md:px-4">
            <div className="mb-4">
              <img src={img} className='w-36' />
            </div>
            <div>
              <h2 className="font-bold text-2xl">Clarionet</h2>
              <p>Musical instrument training site</p>
              &copy; 2023 Clarionet
            </div>
          </div>
          <div className=" px-4 ">
            <h2 className="font-bold text-lg mb-4">Useful Links</h2>
            <ul className=" ml-6">
              <li>
                <Link to="/instruct">Instructor</Link>
              </li>
              <li>
                <Link to="/class">Class</Link>
              </li>
              <li>
                <Link >Instruments</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold text-lg mb-4 ">Blog</h2>
            <ul className=" ml-6">
              <li>Melody Notes</li>
              <li>Rhythm Junction</li>
              <li>Harmony Hub</li>
              <li>Songbird Chronicles</li>
             
            </ul>
          </div>
          <div className="px-4">
            <h2 className="font-bold text-lg mb-4">Address & Contact</h2>
            <p className='flex gap-2 items-center'><MdLocationOn/> 123 Street, City, Country</p>
            <p className='flex gap-2 items-center'><FaPhone/> Contact Number: 123-456-7890</p>
            <p className='flex gap-2 items-center'><FaMailBulk/>Email: info@clarionet.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

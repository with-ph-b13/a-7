import React from 'react';
import navLogo from '../../../assets/logo.png'
import { NavLink } from 'react-router';
import { IoMdHome } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { CiStopwatch } from 'react-icons/ci';
import { BsGraphUpArrow } from 'react-icons/bs';
const Navbar = () => {
  const links = <>
    <NavLink to={'/'} ><li className='btn btn-ghost text-[#64748B]'><FaHome /> Home</li></NavLink>
    <NavLink to={'/timeline'}><li className='btn btn-ghost text-[#64748B]'><CiStopwatch /> Timeline</li></NavLink>
    <NavLink to={'/stats'}><li className='btn btn-ghost text-[#64748B]'><BsGraphUpArrow /> Stats</li></NavLink>
  </>
  return (
    <nav className=" bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">

        <div className=" hidden md:flex flex-1">
          <img src={navLogo} width={141} height={31} fetchpriority="high" alt=""  decoding="async" decoding="async" decoding="async"/>
        </div>
        <div className="flex-none">
          <ul className="flex items-center px-1 gap-5">
            {links}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
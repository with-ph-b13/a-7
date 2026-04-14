import React from 'react';
import navLogo from '../../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { IoMdHome } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { CiStopwatch } from 'react-icons/ci';
import { BsGraphUpArrow } from 'react-icons/bs';
const Navbar = () => {
  const links = <>
    <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'bg-[#244D3F] text-white' : ''} rounded-lg`}><li className='btn btn-ghost '><FaHome /> Home</li></NavLink>

    <NavLink to={'/timeline'} className={({ isActive }) => `${isActive ? 'bg-[#244D3F] text-white' : ''} rounded-lg`}><li className='btn btn-ghost '><CiStopwatch /> Timeline</li></NavLink>

    <NavLink to={'/stats'} className={({ isActive }) => `${isActive ? 'bg-[#244D3F] text-white' : ''} rounded-lg`}><li className='btn btn-ghost'><BsGraphUpArrow /> Stats</li></NavLink>
  </>
  return (
    <nav className=" bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">

        <Link to={'/'} className=" hidden md:flex flex-1">
          <img src={navLogo} width={141} height={31} fetchpriority="high" alt=""  decoding="async"/>
        </Link>
        <div className="flex-none">
          <ul className="flex items-center px-1 gap-5 text-[#64748B]">
            {links}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
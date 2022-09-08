import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState("false");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed flex px-[20px] bg-white w-full h-[70px] justify-between items-center md:px-[30px] z-[100] border-b-2 max-w-screen-mw m-auto">
      <Link href="/">
        <h1 className="font-bold text-3xl text-gray-800">Food Runners</h1>
      </Link>

      <ul className="hidden md:flex space-x-14 text-gray-700">
        <li className="hover:text-orange-400">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-orange-400">
          <Link href="/about">About us</Link>
        </li>
        <li className="hover:text-orange-400">
          <Link href="/impact">What we do</Link>
        </li>
        <li className="hover:text-orange-400">
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>

      <Link href="/contact">
        <button className="hidden md:block px-8 py-2 rounded-[20px] bg-[#ee9b57] text-white">
          Contact
        </button>
      </Link>

      {/* mobile button */}
      <div className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} onClick={handleNav} />
        ) : (
          <AiOutlineMenu size={20} onClick={handleNav} />
        )}
      </div>

      {/* mobile menu */}

      <div
        id="menu"
        className="md:hidden absolute flex flex-col items-center self-end hidden py-8 mt-10 space-y-6 bg-white sm:w-auto sm:self-center left-6 right-6 top-8 drop-shadow-md"
      >
        <ul className="text-center">
          <li className="py-2">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2">
            <Link href="/about">About Us</Link>
          </li>
          <li className="py-2">
            <Link href="/impact">What We Do</Link>
          </li>
          <li className="py-2">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="py-2">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

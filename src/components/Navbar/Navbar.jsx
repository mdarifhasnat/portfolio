import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Services" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="font-serif w-full text-xs font-bold flex items-center h-8 text-gray-700 border-box transition-all duration-300 border-b-[0.5px] border-gray-200 mx:w-[992px]">
      {/* Logo */}
      <h1 className="w-full text-xl pl-2">Arif</h1>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex ">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="rounded-xl m-3 cursor-pointer hover:text-gray-500"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-gray-200 ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-2xl font-bold text-black m-4">Arif</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-2 border-b rounded-xl hover:bg-gray-300 duration-300 hover:text-black cursor-pointer border-gray-300"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

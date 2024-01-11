import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <li className="cursor-pointer hover:text-white active:text-[#5c6269] duration-200">
        <Link to="/">Home</Link>
      </li>
      <li className="cursor-pointer hover:text-white  active:text-[#5c6269] duration-300">
        <Link to="/reading">Reading Picker</Link>
      </li>
      <li className="cursor-pointer hover:text-white  active:text-[#5c6269] duration-200">
        <Link to="/competition">competition</Link>
      </li>
      <li className="cursor-pointer hover:text-white  active:text-[#5c6269] duration-200">
        <Link to="/game">Game</Link>
      </li>
      <li className="cursor-pointer hover:text-white  active:text-[#5c6269] duration-200">
        <Link to="/dice">Dice</Link>
      </li>
    </>
  );
};

export default Navbar;

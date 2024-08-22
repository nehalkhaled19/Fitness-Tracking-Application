import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-100 p-5 md:flex justify-between items-center w-full md:fixed">
      <div className="flex justify-between">
      <h1 className="text-3xl font-bold">Fitness Tracking</h1>

      {/* زر القائمة للأجهزة الصغيرة */}
      <button className="md:hidden ml-auto" onClick={toggleMenu}>
        <Bars3Icon className="h-10 w-10" />
      </button>
      </div>
      {/* روابط القائمة */}
      <div
        className={`${
          isMenuOpen  ? "block" : "hidden"
        } overflow-hidden w-full md:flex md:items-center md:w-auto transition-max-height duration-500 ease-in-out  block `}
      >
        <ul className="flex flex-col md:flex-row md:gap-x-7 gap-y-3 mt-4 md:mt-0 cursor-pointer">
          <li className="link">
            <Link to="/" >
              Workout Logging
            </Link>
          </li>
          <li className="link">
            <Link to="/dashboard" >
              Progress Dashboard
            </Link>
          </li>
          <li className="link">
            <Link to="/goals" >
              Goals
            </Link>
          </li>
          <li className="link">
            <Link to="/goalsDashboard" >
              Goals Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

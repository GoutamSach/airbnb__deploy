"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <header className="">
      <div className="  sticky top-0  z-100 grid grid-cols-3 px-2 sm:px-4 shadow-md  ">
        {/* start header */}
        <div className=" w-20 sm:w-28 lg:w-32  ">
          <Image
            src="/Airbnb-logo.png"
            alt=""
            width={120}
            height={0}
            className="  cursor-pointer"
            priority={true}
          />
        </div>
        {/* Mid Header */}
        <div className=" flex sm:border sm:rounded-full sm:border-2 sm:border-gray-300 px-2  items-center my-3 hover:shadow-md  focus-within:shadow-md ">
          <input
            type="text"
            placeholder="Start your search"
            className="mr-2   text-xs  sm:text-base w-24 focus:outline-none cursor-pointer bg-transparent  flex-grow"
          />
          <SearchIcon className=" bg-red-400  text-white  rounded-full p-1 hidden  sm:inline-flex cursor-pointer" />
        </div>
        {/* right header */}
        <div className=" flex flex-row items-center space-x-2 justify-end ">
          <div className="hover:bg-gray-100 rounded-full px-3 hover:py-2 active:scale-95">
            <p className=" cursor-pointer text-gray-700  hidden md:inline-flex pr-2 ">
              Become a host
            </p>
            <LanguageIcon className=" cursor-pointer scale-75 sm:scale-100 text-gray-700" />
          </div>
          <div className=" scale-75  sm:scale-100 rounded-full hover:shadow-md active:scale-95">
            <div className=" flex flex-row  space-x-2 border rounded-full border-2  border-gray-300 p-1 sm:p-2">
              <MenuIcon className=" cursor-pointer text-gray-700" />
              <AccountCircleIcon className=" cursor-pointer text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
import PeopleIcon from "@mui/icons-material/People";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [noOfGuests, setnoOfGuests] = useState(1);
  const router = useRouter();
  // const pathnames = usePathname();

  // console.log(<Link pathname/>);

  const handleSelect = (ranges) => {
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };
  const resetInputField = () => {
    setSearchInput("");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  //    const searchTheData =()=>{

  //     router.push({pathnames:'/search',query:{ location:searchInput,
  //     startDate: startDate.toISOString() }})

  // }

  return (
    <header className="">
      <div className="  sticky top-0  z-100 grid grid-cols-3 px-2 sm:px-4 shadow-md  ">
        {/* start header */}
        <div
          onClick={() => {
            router.push("/");
          }}
          className=" w-20 sm:w-28 lg:w-32  "
        >
          <Image
            src="/Airbnb-logo.png"
            alt="large tag"
            width={120}
            height={0}
            className="  cursor-pointer"
            priority={true}
          />
        </div>
        {/* Mid Header */}
        <div className=" flex sm:border sm:rounded-full sm:border-2 sm:border-gray-300 px-2  items-center my-3 hover:shadow-md  focus-within:shadow-md ">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder={placeholder || "Start your search"}
            className="mr-2   sm:ml-0  -ml-1 text-xs  sm:text-sm  md:text-l w-24 focus:outline-none cursor-pointer bg-transparent  flex-grow"
          />
          {searchInput && (
            <Link
              href={{
                pathname: "/search",
                query: {
                  locations: searchInput,
                  startDate: startDate.toISOString(),
                  endDate: endDate.toISOString(),
                  noOfGuests: noOfGuests,
                },
              }}
            >
              <SearchIcon className=" bg-red-400  text-white  rounded-full p-1 hidden  sm:inline-flex cursor-pointer" />
            </Link>
          )}
        </div>

        {/* right header */}
        <div className=" flex flex-row items-center space-x-2 justify-end ">
          <div className="hover:bg-gray-100 rounded-full px-3 hover:py-2 active:scale-95">
            <p className=" cursor-pointer text-gray-700  hidden md:inline-flex pr-2 text-sm  ">
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

        {searchInput && (
          <div className=" col-span-3 mx-auto  ">
            <div className="  sm:hidden">
              <DateRange
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5861"]}
                onChange={handleSelect}
              />
            </div>
            <div className="col-span-3  mx-auto hidden sm:inline-block">
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5861"]}
                onChange={handleSelect}
              />
            </div>
            <div className=" flex px-3 justify-between text-gray-700  -mt-3 sm:-mt-1 text-base">
              <h2 className="   font-bold md:text-lg">Number of Guests</h2>
              <div className=" flex items-center  text-xs md:text-sm ">
                <PeopleIcon className=" " />
                <input
                  onChange={(e) => setnoOfGuests(e.target.value)}
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-12 ml-2 outline-none text-red-400"
                />
              </div>
            </div>
            <hr />
            <div className=" px-3 flex justify-around mt-2 mb-3">
              <button
                onClick={resetInputField}
                className=" active:text-black text-gray-700 text-sm md:text-md  active:scale-110   hover:shadow-lg  shadow-black  hover:text-black rounded-full py-2 px-5 transform duration-150 "
              >
                Cancel
              </button>

              <Link
                href={{
                  pathname: "/search",
                  query: {
                    locations: searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noOfGuests: noOfGuests,
                  },
                }}
              >
                <button className=" text-red-400 text-sm md:text-md  active:scale-110 transform duration-150  hover:bg-red-400 hover:text-white px-5 py-2 rounded-full">
                  Search
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

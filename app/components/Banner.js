"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Banner() {

  // const searchFunction =()=>{<Link href={'/search'}/>}
  return (
    <div className="  ">
      <div className="relative  object-cover h-[300px] sm:h-[300px] md:h-[400px]  lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
        <Image src="/scenic view.webp" fill alt="banner" />
        <div className="   top-1/2 absolute text-center w-full">

        {/* <Link href={'/search'}> */}
          <p  className="  text-sm sm:text-lg font-bold ">
            Not sure where to go? Perfect.
          </p>
          {/* </Link> */}

          <Link href={'/search'}>
          <button    className=" text-sm sm:text-lg  text-violet-500 mt-4 bg-white rounded-full font-bold px-5 py-3 shadow-md hover:shadow-lg active:scale-95  transition duration-150">
            I&apos;m flexible
            {/* I'm flexible */}
          </button>
          </Link>
          
        </div>
      </div> 
    </div>
  );
}

export default Banner;

import React from "react";
import Image from "next/image";
function MediumCard({ img, title }) {
  return (
    <div className=" flex flex-col mt-5  hover:scale-105 transform transition duration-200  cursor-pointer  lg:flex-1  ">
      <div className=" relative  w-64  h-64">
        <Image
          src={img}
          fill
          alt="small cards"
          sizes="fill"
          className="rounded-lg "
        />
      </div>
      <div className="">
        <h3 className=" text-lg font-semibold mt-2"> {title}</h3>
      </div>
    </div>
  );
}

export default MediumCard;

// https://jsonkeeper.com/b/OJBH

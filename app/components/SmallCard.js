import React from "react";
import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    // small card section is deployed in banner
    <div className="flex mt-4 ml-5  flex-row items-center hover:bg-slate-100 rounded-lg transition transform duration-150 hover:scale-105  ">
      <div className=" mr-5  relative  w-16  h-16 ">
        <Image
          src={img}
          fill
          alt="small cards"
          sizes="100vh"
          className="rounded-lg "
        />
      </div>
      <div className="  font-medium text-sm ">
        <div className="">{location} </div>
        <div className="text-gray-500">{distance}</div>
      </div>
    </div>
  );
}

export default SmallCard;

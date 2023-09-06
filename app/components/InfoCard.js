import { Key } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function InfoCard({
  img,

  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="flex  flex-row mx-3 mb-5   space-x-3   cursor-pointer border-b  pb-2 first:border-t first:pt-5 md:space-x-7  hover:opacity-80 shadow-sm hover:shadow-md">
      <div
        className="h-32 w-32  sm:h-40 sm:w-56 md:h-52 md:w-80 overflow-hidden
        relative flex-shrink-0"
      >
        <Image src={img} alt={Key} height={500} width={500} />
      </div>

      <div className=" text-xs  md:text-sm flex flex-col  cursor-pointer   flex-grow ">
        <div className=" flex  justify-between">
          <div className=" text-gray-700 pb-1 md:pb-3">{location}</div>

          <FavoriteBorderIcon className="h-5" />
        </div>
        <div className="  font-medium pb-2 md:pb-5 text-sm md:text-xl ">
          {title}
        </div>
        <div className="text-gray-500 flex-grow ">{description}</div>

        <div className="flex flex-row items-center  justify-between    ">
          <div className="flex flex-row items-center  ">
            <StarRateIcon className="text-orange-400 h-3 " />
            <div className="">{star}</div>
          </div>
          <div className=" text-sm md:text-xl font-medium ">{price}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;

import React from "react";
import Image from "next/image";
import SmallCard from "./SmallCard";
// import { Fullscreen } from "@mui/icons-material";

async function Banner() {
  const url = `https://www.jsonkeeper.com/b/IJK5`;
  const res = await fetch(url);
  const data = await res.json();
  const data1 = data;

  return (
    <div className=" h-screen  ">
      <div className="relative  object-cover h-1/3 sm:h-2/5 md:h-3/6  lg:h-4/6 xl:h-5/6 2xl:h-full ">
        <Image src="/scenic view.webp" fill alt="banner" />
        <div className="   top-1/2 absolute text-center w-full">
          <p className="  text-sm sm:text-lg font-bold ">
            Not sure where to go? Perfect.
          </p>
          <button className=" text-sm sm:text-lg  text-violet-500 mt-4 bg-white rounded-full font-bold px-5 py-3 shadow-md hover:shadow-lg active:scale-95  transition duration-150">
            I'm flexible
          </button>
        </div>
      </div>
      <div className="  max-w-7xl mx-auto mt-5  pb-5  ">
        <h2 className=" ml-5 text-2xl font-bold">Explore Nearby</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
          {data1?.map((item) => (
            <SmallCard
              key={item.key}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
          {/* <Image src={img} width={150} height={150} alt="small cards" /> */}
          {/* <p>{location}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
// export async function getStaticProp() {
//   const data = await fetch("https://www.jsonkeeper.com/b/4G1G").then((res) =>
//     res.json()
//   );
//   return { props: { data } };
// }

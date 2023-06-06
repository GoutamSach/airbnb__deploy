import React from "react";
import Image from "next/image";

function LargeCard({ title, description, buttonText }) {
  return (
    <section className=" relative ">
      <div className="lg:h-96 h-64 mb-5 mx-5 w-32 max-w-3xl">
        <Image
          src={"https://links.papareact.com/4cj"}
          className=" rounded-xl "
          fill
        />{" "}
        <div className="top-12 absolute  left-14">
          <h2 className="  text-xl   w-32 font-semibold">{title}</h2>
          <p className="    text-xs  mt-2  w-42  font-medium ">{description}</p>
          <button className=" rounded-md  text-xs px-3 py-2  bg-black   text-white cursor-pointer  mt-4 text-sm ">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default LargeCard;

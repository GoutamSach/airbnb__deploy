import React from "react";

function Footer() {
  return (
    <div className=" grid grid-cols-2  md:grid-cols-4  w-full   gap-8 px-5 py-10 bg-gray-100 md:pl-32 ">
      {/* About */}

      <div className=" text-xs space-y-2">
        <h5 className=" cursor-pointer font-bold">ABOUT</h5>
        <p className=" cursor-pointer">How Airbnb works</p>
        <p className="cursor-pointer">Newsroom </p>
        <p className="cursor-pointer ">Investors</p>
        <p className="cursor-pointer ">Airbnb Plus</p>
      </div>

      {/* COMMUNITY */}
      <div className="cursor-pointer text-xs space-y-2">
        <h5 className="cursor-pointer   font-bold">COMMUNITY</h5>
        <p className="cursor-pointer ">Accessibility</p>
        <p className="cursor-pointer ">This is not a real site </p>
        <p className="cursor-pointer ">This is just a clone</p>
        <p className="cursor-pointer ">for educational purpose only</p>
      </div>
      {/* HOST */}
      <div className="text-xs space-y-2">
        <h5 className="cursor-pointer   font-bold">HOST</h5>
        <p className="cursor-pointer ">Demo</p>
        <p className="cursor-pointer ">Practise Project </p>
        <p className="cursor-pointer ">Join</p>
        <p className="cursor-pointer ">For study</p>
      </div>

      {/* SUPPORT */}
      <div className="text-xs space-y-2">
        <h5 className="cursor-pointer   font-bold">SUPPORT</h5>
        <p className="cursor-pointer ">Help Center</p>
        <p className="cursor-pointer ">Trust </p>
        <p className="cursor-pointer ">Safety</p>
        <p className="cursor-pointer ">Festive Celebrations</p>
      </div>
    </div>
  );
}

export default Footer;

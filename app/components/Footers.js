import React from "react";

function Footer() {
  return (
    <div className=" grid grid-cols-2  md:grid-cols-4  w-full   gap-8 px-5 py-10 bg-gray-100 md:pl-32 ">
      {/* About */}

      <div className=" text-xs space-y-2">
        <h5 className="  font-bold">ABOUT</h5>
        <p className="">How Airbnb works</p>
        <p className="">Newsroom </p>
        <p className="">Investors</p>
        <p className="">Airbnb Plus</p>
      </div>

      {/* COMMUNITY */}
      <div className="text-xs space-y-2">
        <h5 className="  font-bold">COMMUNITY</h5>
        <p className="">Accessibility</p>
        <p className="">This is not a real site </p>
        <p className="">This is just a clone</p>
        <p className="">for educational purpose only</p>
      </div>
      {/* HOST */}
      <div className="text-xs space-y-2">
        <h5 className="  font-bold">HOST</h5>
        <p className="">Demo</p>
        <p className="">Practise Project </p>
        <p className="">Join</p>
        <p className="">For study</p>
      </div>

      {/* SUPPORT */}
      <div className="text-xs space-y-2">
        <h5 className="  font-bold">SUPPORT</h5>
        <p className="">Help Center</p>
        <p className="">Trust </p>
        <p className="">Safety</p>
        <p className="">Festive Celebrations</p>
      </div>
    </div>
  );
}

export default Footer;

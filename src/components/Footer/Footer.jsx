import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="px-7 lg:px-32 flex flex-col-reverse lg:flex-row justify-between items-center py-10 lg:py-0 lg:h-24 gap-6">
      <div><p className="text-gray-600 text-[12px] lg:text-[14px]">&copy;All Rights Reserved | Developed by  Pelz</p></div>
      <div>
        <h3 className="font-bold text-xl lg:text-3xl cursor-pointer text-[#000]">
          Med<span className="text-green-600 ">Deli.</span>
        </h3>
      </div>
      <div className="flex flex-row-reverse lg:flex-row gap-6 ">
        <RiFacebookFill color="green" className="cursor-pointer" />
        <FaTwitter color="green" className="cursor-pointer" />
        <FaYoutube color="green" className="cursor-pointer" />
      </div>
    </footer>
  );
};

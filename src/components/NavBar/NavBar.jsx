import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleOpenMenu = () => {
    setIsOpen(true);
  };

  const HandleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between items-center py-5 lg:py-8 relative lg:px-40">
      <h3 className="font-bold text-xl lg:text-3xl cursor-pointer text-[#fff]">
        Med<span className="text-green-600 ">Deli.</span>
      </h3>

      {/* Small Screen */}
      {!isOpen && (
        <div className="flex lg:hidden cursor-pointer" onClick={HandleOpenMenu}>
          <BiMenuAltRight size={30} color="#008080" />
        </div>
      )}

      {isOpen && (
        <div className="flex lg:hidden z-[999] cursor-pointer" onClick={HandleCloseMenu}>
          <IoMdClose size={30} color="#008080" />
        </div>
      )}

      {isOpen && (
        <div className="flex lg:hidden absolute top-0 right-[0px]  bg-green-300 w-[150px] h-[100vh] px-5 pt-14 transition duration-200 z-[99]">
          <ul className="flex flex-col gap-6 text-eighteenPixels font-regular text-[#008080] mt-6">
            <li className="cursor-pointer   ">
              <BsCart2 size={30} />
            </li>
            <li className="cursor-pointer font-semibold hover:text-green-500 text-[#008080] uppercase">
              login
            </li>

            <li className="cursor-pointer font-semibold hover:text-green-500  text-[#008080] uppercase">
              sign up
            </li>
          </ul>
        </div>
      )}

      {/* Big Screen */}

      <div className="hidden lg:flex">
        <ul className="flex gap-10 text-eighteenPixels font-regular text-[#fff] items-center">
          <li className="cursor-pointer relative">
            <BsCart2 size={30} color="#fff" />
            <span className="w-4 h-4 bg-green-500 rounded-full absolute right-0 -top-0 z-10 text-[12px] text-center">3</span>
          </li>
          <li className="cursor-pointer font-semibold hover:text-green-500 text-[#fff] uppercase">
            login
          </li>

          <li className="cursor-pointer font-semibold hover:text-green-500  text-[#fff] uppercase">
            sign up
          </li>
        </ul>
      </div>
    </div>
  );
};

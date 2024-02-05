import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleOpenMenu = () => {
    setIsOpen(true);
  };

  const HandleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between items-center py-4 lg:py-8 relative lg:px-24">
      <Link to="/">
        <h3 className="font-bold text-xl lg:text-3xl cursor-pointer text-primary flex items-center">
          <img src="./jimedix.png" alt="logo" width={50} />
          JIMEDIX
        </h3>
      </Link>

      {/* Small Screen */}
      {!isOpen && (
        <div className="flex lg:hidden cursor-pointer" onClick={HandleOpenMenu}>
          <BiMenuAltRight size={30} color="#6cbe00" />
        </div>
      )}

      {isOpen && (
        <div
          className="flex lg:hidden z-[999] cursor-pointer"
          onClick={HandleCloseMenu}
        >
          <IoMdClose size={30} color="#962f76" />
        </div>
      )}

      {isOpen && (
        <div className="block lg:hidden absolute top-0 -right-4  bg-primary w-[150p h-[100vh] px-5 pt-20 transition duration-200 z-[99]">
          <Link to="blog">
            <Button
              className="font-bold hover:bg-[#fff] hover:text-secondary transition duration-500 bg-red-700"
              text="text-[10px] lg:text-[16px] text-[#fff]"
              rounded="rounded-[6px]"
              bg="bg-secondary "
              w="w-[100px]"
              h="h-[30px] lg:h-[42px]"
            >
              BLOG
            </Button>
          </Link>

          <ul className="uppercase flex flex-col gap-4 text-[14px] mt-5">
            <Link to="/">
              <li className=" text-gray-200 cursor-pointer text-center">Home</li>
            </Link>

            <a href="#about-us">
              <li className=" text-gray-200 cursor-pointer text-center">About Us</li>
            </a>

            <a href="#services">
              <li className=" text-gray-200 cursor-pointer text-center">Services</li>
            </a>

            <a href="#product">
              <li className=" text-gray-200 cursor-pointer text-center">Product</li>
            </a>

            <a href="#contact-us">
              <li className=" text-gray-200 cursor-pointer text-center">Contact</li>
            </a>
          </ul>
        </div>
      )}

      {/* Big Screen */}

      <div className="hidden lg:flex">
        <Link to="blog">
          <Button
            className="font-bold hover:bg-[#fff] hover:text-primary transition duration-500"
            text="text-[10px] lg:text-[16px] text-[#fff]"
            rounded="rounded-[6px]"
            bg="bg-primary "
            w="w-[100px] lg:w-[150px]"
            h="h-[30px] lg:h-[42px]"
          >
            BLOG
          </Button>
        </Link>
      </div>
    </div>
  );
};

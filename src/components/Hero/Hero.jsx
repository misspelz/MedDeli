import React from "react";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="w-full mt-4 lg:mt-6 lg:gap-10 md:pb-20 lg:pb-0 relative">
      <div className=" h-[200px] lg:h-[400px] lg:pt-10 flex flex-col gap-4 items-center ">
        <h1 className="text-2xl lg:text-5xl leading-[24px] md:leading-[40px] lg:leading-[60px] text-[#fff] font-bold text-center">
          Exceptional <span className="text-primary">Medicine</span> Delivered
        </h1>
        <p className="text-[10px] md:text-[16px] lg:text-[18px] lg:mt-2 text-[#fff] font-regular  md:w-[50%] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia
          debitis repudiandae eligendi quas hic dolores cupiditate, Corporis
          nostrum
        </p>

        <div className="flex gap-2 lg:gap-4 items-center mt-4">
          <Input
            type="text"
            className="w-full py-[9px] px-[20px] rounded-[7px] text-[12px] md:text-[14px] lg:text-[16px] outline-none "
            placeholder="Enter your postcode"
            name="text"
            id="text"
            // value={payload.email}
            // onChange={handlePayload}
          />
          <Button
            className="font-bold hover:bg-[#fff] hover:text-primary transition duration-500"
            text="text-[10px] lg:text-[16px] text-[#fff]"
            rounded="rounded-[6px]"
            bg="bg-primary "
            w="w-[100px] lg:w-[200px]"
            h="h-[30px] lg:h-[42px]"
          >
            SEARCH
          </Button>
        </div>
      </div>

      {/* MENU ITEMS */}
      <div className="absolute top-[30%] transform -translate-y-1/2 -left-12  hidden lg:flex">
        <ul className="uppercase flex flex-col gap-4 text-[14px]">
          <Link to="/">
            <li className="flex items-center gap-10 text-primary cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Home
            </li>
          </Link>

          <a href="#about-us">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              About Us
            </li>
          </a>

          <a href="#services">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Services
            </li>
          </a>

          <a href="#product">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Product
            </li>
          </a>

          <a href="#contact-us">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Contact
            </li>
          </a>
        </ul>
      </div>
    </section>
  );
};

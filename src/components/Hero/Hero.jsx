import React from "react";
import { Button } from "../Button/Button";
import Input from "../Input/Input";

export const HeroSection = () => {
  return (
    <div className="w-full mt-4 lg:mt-6 lg:gap-10 md:pb-20 lg:pb-0">
      <div className=" h-[200px] lg:h-[400px] lg:pt-10 flex flex-col gap-4 items-center">
        <h1 className="text-2xl lg:text-5xl leading-[24px] md:leading-[40px] lg:leading-[60px] text-[#fff] font-bold text-center">
          Exceptional <span className="text-green-500">Medicine</span> Delivered
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
            className="font-bold hover:bg-[#fff] hover:text-green-500 transition duration-500"
            text="text-[10px] lg:text-[16px] text-[#fff]"
            rounded="rounded-[6px]"
            bg="bg-green-500 "
            w="w-[100px] lg:w-[200px]"
            h="h-[30px] lg:h-[42px]"
          >
            SEARCH
          </Button>
        </div>
      </div>
    </div>
  );
};

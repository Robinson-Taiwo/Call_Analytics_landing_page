import { Ellipsis } from "lucide-react";
import React from "react";
import { Component } from "./components/Charts";

const page = () => {
  return (
    <div className=" bg-[white] w-[100%]">
      <div className="total gap-[2rem] flex flex-row justify-between w-[100%] ">
        <div className=" w-[100%] bg-[#eff3f2] flex flex-col  p-[2rem] rounded-[1.2rem] xl:h-[10rem] lg:h-[8rem] ">
          <div className="flex justify-between h-[100%] flex-row">
            <h1>Total Agents</h1>

            <Ellipsis />
          </div>

          <div className="flex flex-row justify-between ">
            <h1 className="font-bold text-[1.5rem]">100k</h1>

            <div>Avatars</div>
          </div>
        </div>
        <div className=" w-[100%] bg-[#eae2f3] flex flex-col  p-[2rem] rounded-[1.2rem] xl:h-[10rem] lg:h-[8rem] ">
          <div className="flex justify-between h-[100%] flex-row">
            <h1>Total Agents</h1>

            <Ellipsis />
          </div>

          <div className="flex flex-row justify-between ">
            <h1 className="font-bold text-[1.5rem]">100k</h1>

            <div>Avatars</div>
          </div>
        </div>
        <div className=" w-[100%] bg-[#e1e4f3] flex flex-col  p-[2rem] rounded-[1.2rem] xl:h-[10rem] lg:h-[8rem] ">
          <div className="flex justify-between h-[100%] flex-row">
            <h1>Total Agents</h1>

            <Ellipsis />
          </div>

          <div className="flex flex-row justify-between ">
            <h1 className="font-bold text-[1.5rem]">100k</h1>

            <div>Avatars</div>
          </div>
        </div>
        <div className=" w-[100%] bg-[#f1e2f2] flex flex-col  p-[2rem] rounded-[1.2rem] xl:h-[10rem] lg:h-[8rem] ">
          <div className="flex justify-between h-[100%] flex-row">
            <h1>Total Agents</h1>

            <Ellipsis />
          </div>

          <div className="flex flex-row justify-between ">
            <h1 className="font-bold text-[1.5rem]">100k</h1>

            <div>Avatars</div>
          </div>
        </div>
      </div>

      <div className="w-[100%] mt-[2rem] gap-[2rem]  ">
        <div className=" w-[50%] ">
          <Component />
        </div>

        <div className=" w-[50%]  p-[1rem]  ">




        </div>
      </div>
    </div>
  );
};

export default page;

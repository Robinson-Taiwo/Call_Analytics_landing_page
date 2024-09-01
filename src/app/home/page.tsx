import { ArrowUpRight, Ellipsis } from "lucide-react";
import React from "react";
import { Component } from "./components/Charts";
import Image from "next/image";

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

      <div className="w-[100%] mt-[2rem] flex-row flex gap-[2rem]  ">
        <div className=" w-[50%] rounded-[1rem] ">
          <Component />
        </div>

        <div className=" w-[50%] flex flex-col border  rounded-[1rem] p-[2rem]  ">
          <div className="flex flex-row justify-between mb-[1rem] ">
            <h1>Users Details </h1>

            <h2>weekly</h2>
          </div>

          <div className="grid grid-cols-2 gap-[1rem] h-full sm:grid-cols-2">
            {/* First Card */}
            <div className="flex rounded-[1.2rem] p-[1rem] flex-row bg-gray-100 h-[80%] ">
              <div className="w-[50%] relative rounded-[2rem]">
                <Image
                  src="/images/avatar.jpg"
                  alt="Logo"
                  layout="fill"
                  className="rounded-[2rem]"
                  objectFit="cover" // or 'contain', depending on your preference
                />
              </div>
              <div className="flex flex-col w-[50%] justify-between">
                <div>
                  <h1 className="font-bold text-[1.225rem]">Satish Kumar</h1>
                  <h3 className="font-bold text-[grey] text-[1rem]">Manager</h3>
                </div>
                <div>
                  <p>view profile</p>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="flex rounded-[1.2rem] p-[1rem] flex-row bg-gray-100 h-[80%] ">
              <div className="w-[50%] relative rounded-[2rem]">
                <Image
                  src="/images/avatar.jpg"
                  alt="Logo"
                  layout="fill"
                  className="rounded-[2rem]"
                  objectFit="cover" // or 'contain', depending on your preference
                />
              </div>
              <div className="flex flex-col w-[50%] justify-between">
                <div>
                  <h1 className="font-bold text-[1.225rem]">Satish</h1>
                  <h3 className="font-bold text-[grey] text-[1rem]">Manager</h3>
                </div>
                <div>
                  <p>view profile</p>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="flex rounded-[1.2rem] p-[1rem] flex-row  h-[80%] ">
              <div className="w-[50%] relative rounded-[2rem]">
                <Image
                  src="/images/avatar.jpg"
                  alt="Logo"
                  layout="fill"
                  className="rounded-[2rem]"
                  objectFit="cover" // or 'contain', depending on your preference
                />
              </div>
              <div className="flex flex-col w-[50%] justify-between">
                <div className="flex flex-col gap-[1rem] ">
                  <h1 className="font-bold text-[1.225rem] text-center ">
                    Satish Kumar
                  </h1>
                  <h3 className="font-bold text-center text-[#6c6c6c] text-[1rem]">
                    Manager
                  </h3>
                </div>
                <div>
                  <div className="flex flex-row mx-[1rem] bg-[#eeeeee] rounded-[1.5rem] items-center justify-between font-semibold  p-[0.05rem] ">
                    <p>view profile</p>

                    <p className=" p-[0.5rem] rounded-[50%] bg-[green]  ">
                      <ArrowUpRight className="text-white" />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Card */}
            <div className="flex rounded-[1.2rem] p-[1rem] flex-row bg-gray-100 h-[80%] ">
              <div className="w-[50%] relative rounded-[2rem]">
                <Image
                  src="/images/avatar.jpg"
                  alt="Logo"
                  layout="fill"
                  className="rounded-[2rem]"
                  objectFit="cover" // or 'contain', depending on your preference
                />
              </div>
              <div className="flex flex-col w-[50%] justify-between">
                <div>
                  <h1 className="font-bold text-[1.225rem]">Satish</h1>
                  <h3 className="font-bold text-[grey] text-[1rem]">Manager</h3>
                </div>
                <div>
                  <p>view profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

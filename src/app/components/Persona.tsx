import React from "react";
import SliderComponent from "./SliderComponent";
import Image from "next/image";

const Persona = () => {
  return (
    <section className="user-person mt-[6rem]  px-[2rem] ">
      <div className="flex flex-col ">
        <div className="user-p-h flex flex-col  border-[2px] p-[2rem] border-[#efefff] rounded-[0.625rem] ">
          <h1 className="font-bold  text-[3rem] mb-[2rem] ">User Persona</h1>

          <div className="rows justify-between flex flex-row gap-[6.875rem] ">
            <div className="border-[1rem] relative h-[18.25rem] w-[18rem] border-[#efefff] rounded-[0.625rem] overflow-hidden">
              <Image
                src="/images/guy.jpeg"
                alt="Persona"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="images text-[#696b6b] flex flex-col gap-[1rem] xl:text-[1.25rem] lg:text-[1rem] w-[100%]">
              <h3 className="font-bold text-[black] text-[1.5rem]">
                Adam Smith
              </h3>

              <p>
                Adam Smith had been using a task management platform to manage
                his team&apos;s workload, but found that it was not a perfect
                fit for his needs. The platform was difficult to use and lacked
                customization options, which made it hard for him to organize
                his team&apos;s tasks effectively.
              </p>

              <p>
                The user interface of the platform was cluttered and confusing,
                making it hard for Adam Smith to navigate and find the features
                he needed. The platform also lacked important features that he
                needed, such as the ability to set priority levels.
              </p>
            </div>
          </div>

          <div className="flex flex-row p-[2rem] items-center justify-between">
            <div className="w-[45%]  flex flex-col gap-[2rem] ">
              <h2 className="font-bold text-[2rem]">Character</h2>

              <SliderComponent />
            </div>

            <div className="flex w-[45%] gap-[2rem]  flex-col gap-[2rem">
              <div>
                <div className="bg-[#f6f7fa] p-6 rounded-[0.625rem]">
                  <h2 className="text-[1.5rem] font-bold mb-4">Frustration</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>can’t focus on task at hand</li>
                    <li>
                      Always worried and anxious about everything she has to do
                    </li>
                    <li>Can’t form habit because she’s too busy</li>
                    <li>Forgets to take care of her mental health</li>
                    <li>Can’t sleep at night due to stress and anxiety</li>
                  </ul>
                </div>
              </div>

              <div>
                <div>
                  <div className="bg-[#f6f7fa] p-6 rounded-[0.625rem]">
                    <h2 className="text-[1.5rem] font-bold mb-4">
                      Frustration
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>can’t focus on task at hand</li>
                      <li>
                        Always worried and anxious about everything she has to
                        do
                      </li>
                      <li>Can’t form habit because she’s too busy</li>
                      <li>Forgets to take care of her mental health</li>
                      <li>Can’t sleep at night due to stress and anxiety</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Persona;

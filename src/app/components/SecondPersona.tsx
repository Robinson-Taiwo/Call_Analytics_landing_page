import React from "react";
import SliderComponent from "./SliderComponent";
import Image from "next/image";

const SecondPersona = () => {
  return (
    <section className="user-person mt-[6rem] px-[2rem]">
      <div className="flex flex-col">
        <div className="user-p-h flex flex-col border-[2px] p-[2rem] border-[#efefff] rounded-[0.625rem]">
          <h1 className="font-bold text-[3rem] mb-[2rem]">User Second</h1>

          <div className="rows justify-between flex flex-row gap-[6.875rem]">
            <div className="border-[1rem] relative h-[18.25rem] w-[18rem] border-[#efefff] rounded-[0.625rem] overflow-hidden">
              <Image
                src="/images/secondg.png"
                alt="Persona"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="images text-[#696b6b] flex flex-col gap-[1rem] xl:text-[1.25rem] lg:text-[1rem] w-[100%]">
              <h3 className="font-bold text-[black] text-[1.5rem]">Johan</h3>

              <p>
                It sounds like Adam Smith is facing some challenges with his
                current task management platform. It&apos;s frustrating when a
                tool that&apos;s supposed to make things easier ends up
                complicating matters instead. Based on the issues you mentioned,
                it seems like Adam needs a task management platform that offers
                intuitive usability, clear organization, and essential features
                like priority levels.
              </p>

              <p>
                One possible solution for Adam could be to explore other task
                management platforms that offer a more user-friendly interface
                and the features he requires. Platforms like Trello, Asana, or
                Monday.com might be worth considering, as they provide
                customizable task boards, priority settings, and streamlined
                user interfaces.
              </p>
            </div>
          </div>

          <div className="flex flex-row p-[2rem] items-center justify-between">
            <div className="w-[45%] flex flex-col gap-[2rem]">
              <h2 className="font-bold text-[2rem]">Character</h2>

              <SliderComponent />
            </div>

            <div className="flex w-[45%] gap-[2rem] flex-col">
              <div>
                <div className="bg-[#f6f7fa] p-6 rounded-[0.625rem]">
                  <h2 className="text-[1.5rem] font-bold mb-4">Frustration</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Struggling to focus on tasks at hand</li>
                    <li>
                      Constantly worried and anxious about everything she needs
                      to do
                    </li>
                    <li>Unable to form habits because she&apos;s too busy</li>
                    <li>Forgets to take care of her mental health</li>
                    <li>Can&apos;t sleep at night due to stress and anxiety</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-[#f6f7fa] p-6 rounded-[0.625rem]">
                  <h2 className="text-[1.5rem] font-bold mb-4">Goals</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To manage stress and anxiety</li>
                    <li>To create a work-life balance</li>
                    <li>To improve her mental health</li>
                    <li>To get better sleep</li>
                    <li>To improve daily routine</li>
                    <li>To be more present in everyday life</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPersona;

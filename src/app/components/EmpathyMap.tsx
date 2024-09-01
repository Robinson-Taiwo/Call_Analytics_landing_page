import Image from "next/image";
import React from "react";

const EmpathyMap = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="xl:text-[3rem]  lg:text-[2.5rem]  w-[100%] font-bold mt-[2rem]  mb-[2rem] ">Empathy Map</h1>

      <div className="relative w-[100%] gap-[4rem] flex flex-col items-center p-8 bg-[#f8f9fa] rounded-lg">
        <div className="flex flex-row gap-[2rem] w-full justify-between">
          <div className="w-[45%] text-[1.15rem] border-[#efefff] rounded-[0.625rem] border-[2px] p-[2rem]">
            <h2 className="text-lg text-[2rem] font-bold">Think</h2>
            <ul className="list-disc gap-[1rem] flex flex-col pl-4 space-y-2">
              <li>Can I Trust Call center?</li>
              <li>Can I Get Any Discount?</li>
              <li>Want To Book An Appointment</li>
              <li>Can I Get Proper Call Services</li>
            </ul>
          </div>
          <div className="w-[45%] text-[1.15rem] border-[#efefff] rounded-[0.625rem] border-[2px] p-[2rem]">
            <h2 className="text-lg font-bold">Feel</h2>
            <ul className="list-disc gap-[1rem] flex flex-col pl-4 space-y-2">
              <li>Not Refundable</li>
              <li>Sometime Bad Experience</li>
              <li>Fake And Bad Quality Of Call Services</li>
              <li>Very High Cost</li>
            </ul>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999]">
          <div className="relative border-[#efefff] rounded-full border-[2px] overflow-hidden w-[15rem] h-[15rem] ">
            <Image
              src="/images/guy.jpeg"
              alt="Persona"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-row w-full justify-between mt-8">
          <div className="w-[45%] text-[1.15rem]  border-[#efefff] rounded-[0.625rem] border-[2px] p-[2rem]">
            <h2 className="text-lg text-[2rem] font-bold">Says</h2>
            <ul className="list-disc gap-[1rem] flex flex-col pl-4 space-y-2">
              <li>Get Check your data At Any Time</li>
              <li>Talk any time our customer care Easily</li>
              <li>Less Time Taking</li>
              <li>Always Charges Too Much</li>
            </ul>
          </div>
          <div className="w-[45%] text-[1.15rem] border-[#efefff] rounded-[0.625rem] border-[2px] p-[2rem]">
            <h2 className="text-lg text-[2rem] font-bold">Does</h2>
            <ul className="list-disc gap-[1rem] flex flex-col pl-4 space-y-2">
              <li>Check Feedbacks</li>
              <li>Check Ratings</li>
              <li>Take Suggestions From Friends</li>
              <li>Ask For Recommendation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpathyMap;

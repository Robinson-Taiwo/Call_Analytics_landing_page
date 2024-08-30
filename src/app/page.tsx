import { PenTool } from "lucide-react";
import Image from "next/image";
import HeroImage from "/images/bg.png";
import data from "./components/data";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <section
        className=" h-[100vh] w-full bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: "url('/images/bg.png')" }}
      ></section>

      <section className="second-section  bg-white  ">
        <div className="about-this-section bg-[#f6f7fa] pt-[3.063rem] px-[2rem]  mt-[3.25rem] ">
          <h1 className="text-[3rem]  font-bold  ">About The Project</h1>

          <p className="mt-[1.75rem] w-[80%]  mb-[4.19rem] text-[#696b6b]  ">
            Call Analytics is an innovative cloud-based software designed to
            meet the dynamic needs of people Through this, all the problems
            related to call operators of people&#x27;s mobile phones are solved.
            The intuitive user interface streamlines automation, increases
            accountability and reduces risk, ultimately optimizing the
            management of call center operations.
          </p>

          <div className="grid grid-cols-3 place-content-evenly ">
            {data.map((item, index) => (
              <div
                className="bg-[white]  mb-[3.125rem] p-[0.5rem] max-w-[22rem]  rounded-[0.625rem]  "
                key={index}
              >
                <h2 className="font-bold  text-[1.5rem] ">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="third"></section>
    </main>
  );
}

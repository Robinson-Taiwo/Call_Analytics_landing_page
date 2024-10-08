import { Compass, FileText, Lightbulb, PenTool, TestTube } from "lucide-react";
import Image from "next/image";
import HeroImage from "/public/images/guy.jpeg";
import data from "./components/data";
import { telecomAnalysisData, telecomTasks } from "./components/datas";
import SliderComponent from "./components/SliderComponent";
import Persona from "./components/Persona";
import EmpathyMap from "./components/EmpathyMap";
import SecondPersona from "./components/SecondPersona";

export default function Home() {
  return (
    <main className="flex flex-col w-[100%] ">
      <section
        className=" h-[100vh] w-full bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: "url('/images/bg.png')" }}
      ></section>

      <section className="second-section  bg-white  ">
        <div className="about-this-section bg-[#f6f7fa] pt-[3.063rem] px-[2rem]  mt-[3.25rem] ">
          <h1 className="xl:text-[2.9rem] lg:text-[2rem]   font-bold  ">
            About The Project
          </h1>

          <p className="mt-[1.75rem] w-[80%] xl:text-[1.25rem] lg:text-[1rem]   mb-[4.19rem] text-[#696b6b]  ">
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
                className="bg-[white]  mb-[3.125rem] p-[0.5rem] max-w-[90%]  rounded-[0.625rem]  "
                key={index}
              >
                <h2 className="font-bold xl:text-[1.5rem] text-[1.2rem] ">
                  {item.title}
                </h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-[2rem]   flex flex-col ">
        <div className="third pt-[8rem] mb-[8rem]   flex flex-row  w-[100%]  justify-between  text-[3rem] text-center ">
          <div className="flex flex-col  text-[3rem] w-[100%] ">
            <span className=" xl:text-[3.3rem] lg:text-[2rem] font-bold ">
              14
            </span>
            <span className=" text-[2rem] font-semibold ">Weeks</span>
          </div>

          <div
            className="flex flex-col w-[100%] border-l-[3.5px] border-[black] text-[3rem] "
            style={{
              borderImage:
                "linear-gradient(to bottom, transparent, black, transparent) 1 100%",
            }}
          >
            <span className=" xl:text-[3.3rem] lg:text-[2rem] font-bold ">
              10+
            </span>
            <span className=" text-[2rem] font-semibold ">Survey</span>
          </div>

          <div
            className="flex flex-col w-[100%] border-l-[3.5px] border-[black] text-[3rem] "
            style={{
              borderImage:
                "linear-gradient(to bottom, transparent, black, transparent) 1 100%",
            }}
          >
            <span className=" xl:text-[3.3rem] lg:text-[2rem] font-bold ">
              10+
            </span>
            <span className=" text-[2rem] font-semibold ">Web Screen</span>
          </div>

          <div
            className="flex flex-col w-[100%] border-l-[3px] border-[black] text-[3rem] "
            style={{
              borderImage:
                "linear-gradient(to bottom, transparent, black, transparent) 1 100%",
            }}
          >
            <span className=" xl:text-[3.3rem] lg:text-[2rem] font-bold ">
              10+
            </span>
            <span className=" text-[2rem] font-semibold ">App Screen</span>
          </div>
        </div>
        <div className=" rounded-[0.625rem] flex flex-col mb-[3rem] p-[2rem] bg-[#f6f7fa]  ">
          <div className="border-[red] font-bold text-[red] w-fit border-[2px] py-[0.5rem] px-[0.5rem] rounded-3xl ">
            Problem Statement
          </div>

          <h1 className="  mt-[2rem]  xl:text-[2.2rem] lg:text-[1.5rem] font-semibold mb-[2rem] ">
            We surveyed users to a find out what problems they face when working
            with such applications
          </h1>

          <div className=" border-dashed border-[red] p-[1rem] border-[2px] rounded-[0.625rem]  ">
            {telecomAnalysisData.map((item, index) => (
              <ul
                key={index}
                className="flex list-disc flex-col gap-[1rem] text-[#696b6b] xl:text-[1.25rem] lg:text-[1rem] p-[1rem] "
              >
                <li>{item.description}</li>
              </ul>
            ))}
          </div>
        </div>

        <div className=" rounded-[0.625rem] flex flex-col p-[2rem] bg-[#f6f7fa]  ">
          <div className="border-[#50cc16] font-bold text-[#50cc16] w-fit border-[2px] py-[0.5rem] px-[0.5rem] rounded-3xl ">
            Possible Solution
          </div>

          <h1 className="  mt-[2rem] xl:text-[2.2rem] lg:text-[1.5rem] font-semibold mb-[2rem] ">
            We have surveyed the users and analyzed their problems, now their
            problems have been solved.
          </h1>

          <div className=" border-dashed border-[#50cc16] border-[2px] rounded-[0.625rem] p-[1rem] ">
            {telecomTasks.map((item, index) => (
              <ul
                key={index}
                className="flex flex-col gap-[1rem] list-disc text-[#696b6b] xl:text-[1.25rem] lg:text-[1rem] p-[1rem] "
              >
                <li>{item.description}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className=" mt-[3rem] flex items-center flex-col  px-[2rem]  ">
        <div className="design-proccess flex items-center justify-center flex-col  bg-[#f6f7fa] gap-[2rem] py-[2rem] ">
          <h1 className=" font-bold xl:text-[3rem] lg:text-[2rem] ">
            Design Thinking Process
          </h1>

          <p className=" w-[60%] text-center xl:text-[1.25rem] lg:text-[1rem] text-[#696b6b] ">
            Design thinking is a problem-solving methodology that focuses on
            understanding the needs and preferences of end-users to develop
            innovative solutions. It&#x27;s a human-centered approach that
            emphasizes empathy, creativity, and iteration. Here&#x27;s a brief
            overview of the design thinking process:
          </p>
        </div>
        <div className="flex lg:w-[90%] xl:w-[100%] items-center justify-center mt-[4rem] mb-[4rem] ">
          <div className="flex flex-col gap-[2rem]  items-center ">
            <div className=" flex flex-row  items-center justify-center ">
              <div className=" xl:h-[7.25rem] xl:w-[7.25rem] lg:h-[5.25rem] lg:w-[5.25rem] bg-[#e5f8dd] rounded-[50%] items-center flex justify-center ">
                {" "}
              </div>
              <div className=" border-[1px] border-[black] border-dashed w-[3rem] h-[0.01rem]  "></div>
            </div>

            <h1 className=" text-[1.125rem] font-bold  mr-[3rem] ">Start</h1>
          </div>

          <div className="flex flex-col gap-[2rem]  items-center ">
            <div className=" flex flex-row  items-center justify-center ">
              <div className=" xl:h-[7.25rem] xl:w-[7.25rem] lg:h-[5.25rem] lg:w-[5.25rem] bg-[#e5f8dd] rounded-[50%] items-center flex justify-center ">
                {" "}
                <Compass className=" text-[#50cc16] h-[3.06rem] w-[3.06rem] " />{" "}
              </div>
              <div className=" border-[1px] border-[black] border-dashed w-[3rem] h-[0.01rem]  "></div>
            </div>

            <h1 className=" text-[1.125rem] font-bold  mr-[3rem] ">Empathize</h1>
          </div>

          <div className="flex flex-col gap-[2rem]  items-center ">
            <div className=" flex flex-row  items-center justify-center ">
              <div className=" xl:h-[7.25rem] xl:w-[7.25rem] lg:h-[5.25rem] lg:w-[5.25rem] bg-[#e5f8dd] rounded-[50%] items-center flex justify-center ">
                {" "}
                <FileText className=" text-[#50cc16] h-[3.06rem] w-[3.06rem] " />{" "}
              </div>
              <div className=" border-[1px] border-[black] border-dashed w-[3rem] h-[0.01rem]  "></div>
            </div>

            <h1 className=" text-[1.125rem] font-bold  mr-[3rem] ">Define</h1>
          </div>

          <div className="flex flex-col gap-[2rem]  items-center ">
            <div className=" flex flex-row  items-center justify-center ">
              <div className=" xl:h-[7.25rem] xl:w-[7.25rem] lg:h-[5.25rem] lg:w-[5.25rem] bg-[#e5f8dd] rounded-[50%] items-center flex justify-center ">
                {" "}
                <Lightbulb className=" text-[#50cc16] h-[3.06rem] w-[3.06rem] " />{" "}
              </div>
              <div className=" border-[1px] border-[black] border-dashed w-[3rem] h-[0.01rem]  "></div>
            </div>

            <h1 className=" text-[1.125rem] font-bold  mr-[3rem] ">Ideate</h1>
          </div>

          <div className="flex flex-col gap-[2rem]  items-center ">
            <div className=" flex flex-row  items-center justify-center ">
              <div className=" xl:h-[7.25rem] xl:w-[7.25rem] lg:h-[5.25rem] lg:w-[5.25rem] bg-[#e5f8dd] rounded-[50%] items-center flex justify-center ">
                {" "}
                <PenTool className=" text-[#50cc16] h-[3.06rem] w-[3.06rem] " />{" "}
              </div>
              <div className=" border-[1px] border-[black] border-dashed w-[3rem] h-[0.01rem]  "></div>
            </div>

            <h1 className=" text-[1.125rem] font-bold  mr-[3rem] ">Prototype</h1>
          </div>

          <div className="flex flex-col gap-[2rem]  items-center ">
            <div className=" flex flex-row  items-center justify-center ">
              <div className=" xl:h-[7.25rem] xl:w-[7.25rem] lg:h-[5.25rem] lg:w-[5.25rem] bg-[#e5f8dd] rounded-[50%] items-center flex justify-center ">
                {" "}
                <TestTube className=" text-[#50cc16] h-[3.06rem] w-[3.06rem] " />{" "}
              </div>
              <div className=" border-[1px] border-[black] border-dashed w-[3rem] h-[0.01rem]  "></div>
            </div>

            <h1 className=" text-[1.125rem] font-bold  mr-[3rem] ">Test</h1>
          </div>

          <div className="flex flex-col gap-[2rem] h-[100%] items-center ">
            <div className=" flex flex-row  items-center justify-center ">
              <div className=" xl:h-[7.25rem] xl:w-[7.25rem] lg:h-[5.25rem] lg:w-[5.25rem] bg-[#e5f8dd] rounded-[50%] items-center flex justify-center ">
                {" "}
              </div>
            </div>

            <h1 className=" text-[1.125rem] font-bold  text-center ">Finish </h1>

          </div>
        </div>
      </section>

      <section className="bg-[#e5f8dd] h-[120vh] ">
        <div
          className=" w-[100%] h-[100%] bg-center bg-cover bg-no-repeat "
          style={{ backgroundImage: "url('/images/phone.png')" }}
        >
          {" "}
        </div>
      </section>

      <section>
        <SecondPersona />
        <Persona />
      </section>

      <section className="px-[2rem]">
        <EmpathyMap />
      </section>
    </main>
  );
}

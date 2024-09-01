import React from "react";
import SliderComponent from "./SliderComponent";

const Persona = () => {
  return (
    <section className="user-person mt-[6rem]  px-[2rem] ">
      <div className="flex flex-col ">
        <div className="user-p-h flex flex-col  border-[2px] p-[2rem] border-[#efefff] rounded-[0.625rem] ">
          <h1 className="font-bold  text-[3rem] mb-[2rem] ">User Persona</h1>

          <div className="rows justify-between flex flex-row gap-[6.875rem] ">
            <div className="border-[1rem] h-[18.25rem] w-[18rem] border-[#efefff] rounded-[0.625rem] overflow-hidden">
              {/* <Image
              src={HeroImage}
              alt="image"
              fill // Fills the parent div completely
              style={{ objectFit: "cover" }} // Ensures the image covers the div completely
            /> */}
            </div>

            <div className="images text-[#696b6b]  flex flex-col gap-[2rem] flex-grow text-[1.25rem] w-[20%] ">
              <h3 className="font-bold  text-[black] text-[2rem] ">johan</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias deleniti voluptas similique omnis tenetur quam id
                repellendus architecto exercitationem blanditiis? Amet
                distinctio unde earum nulla iure fugit dicta iusto tenetur!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                fugit aperiam adipisci, veritatis, minus praesentium voluptatem
                voluptas doloribus cupiditate sapiente officiis magnam? Incidunt
                assumenda dignissimos debitis recusandae accusantium quibusdam
                ea.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                culpa voluptatibus, velit voluptates cum quisquam labore tempore
                nostrum nihil tenetur obcaecati enim optio iusto laboriosam
                unde, commodi dolores? Quo, unde?
              </p>
            </div>
          </div>

          <div className="flex flex-row p-[2rem] items-center justify-between">
            <div className="w-[50%]  flex flex-col gap-[2rem] ">
              <h2 className="font-bold text-[2rem]">Character</h2>

              <SliderComponent />
            </div>

            <div className="flex flex-col gap-[2rem">
              <div>
                <div className="bg-[#f8f9fa] p-6 rounded-[0.625rem]">
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
                  <div className="bg-[#f8f9fa] p-6 rounded-[0.625rem]">
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

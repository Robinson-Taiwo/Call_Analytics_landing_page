import React from "react";

interface Slider {
  labelLeft: string;
  labelRight: string;
  value: number;
}

const SliderComponent: React.FC = () => {
  const sliders: Slider[] = [
    { labelLeft: "Extrovert", labelRight: "Introvert", value: 50 },
    { labelLeft: "Sensing", labelRight: "Intuition", value: 50 },
    { labelLeft: "Thinking", labelRight: "Feeling", value: 50 },
    { labelLeft: "Judging", labelRight: "Perceiving", value: 40 },
    { labelLeft: "Working", labelRight: "Perceiving", value: 30 },
  ];

  return (
    <div className="space-y-6">
      {sliders.map((slider, index) => (
        <div key={index} className="flex gap-[1.5rem] flex-col">
          <div className="flex justify-between mb-[0.25rem">
            <span className="font-bold">{slider.labelLeft}</span>
            <span className="font-bold">{slider.labelRight}</span>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-green-100 rounded-full" />
            <div
              className="absolute top-1/2 transform -translate-y-1/2 bg-green-500 h-6 w-12 rounded-full"
              style={{ left: `calc(${slider.value}% - 1.5rem)` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderComponent;

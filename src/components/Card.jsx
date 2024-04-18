import React from 'react';
import { Indicator } from './Indicator';

const Button = ({ btnInfo }) => {
  return (
    <button
      className={
        'transition border-solid font-mono border-gray-500 font-bold border py-3 m-1 px-5 rounded-full opacity-70 hover:opacity-100 hover:scale-105 duration-200 ' +
        btnInfo.bg +
        ' ' +
        btnInfo.color +
        ' ' +
        btnInfo.hover
      }
      onClick={btnInfo.stepFunc}
      type="button"
    >
      {btnInfo.value}
    </button>
  );
};

export const Card = ({
  children,
  currentCardData,
  stepFuncs,
  step,
  tutorialData,
}) => {
  let btnInfo = [
    {
      bg: 'bg-white',
      color: 'text-black',
      value: '<',
      stepFunc: stepFuncs.prevStep,
    },
    {
      bg: 'bg-black',
      color: 'text-white',
      value: '>',
      stepFunc: stepFuncs.nextStep,
    },
  ];

  return (
    <>
      <div className="max-w-sm rounded-3xl overflow-hidden h-5/6 relative shadow-lg">
        <div
          style={{backgroundImage: `url(${currentCardData.image})`}}
          className={`w-full h-3/5 bg-${currentCardData.bgColor} bg-contain bg-no-repeat bg-center duration-500`}
        >
        </div>
        <div className="h-2/5">
          <div className="h-2/3">{children}</div>

          <div className="h-1/3 relative">
            <div className="absolute flex items-center bottom-0 start-0 h-full ps-3">
              <ul className="list-none flex justify-start">
                {tutorialData.map((item, index) => (
                  <Indicator
                    amountOfSteps={tutorialData.length}
                    step={step}
                    index={index}
                    key={item.title}
                  />
                ))}
              </ul>
            </div>

            <div className="absolute flex items-center end-0 bottom-0 h-full pe-3">
              {step > 0 && <Button btnInfo={btnInfo[0]} />}
              {step < tutorialData.length - 1 && (
                <Button btnInfo={btnInfo[1]} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

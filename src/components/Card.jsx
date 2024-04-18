import React from 'react';
import { Indicator } from './Indicator';

const Button = ({ btnInfo, disabled }) => {
  const decoration = disabled ? 'bg-gray-300 text-gray-500' : `${btnInfo.color} ${btnInfo.bg} hover:opacity-100 hover:scale-105`

  return (
    <button
      className={
        `border-solid font-mono border-gray-500 font-bold border m-1 p-5 rounded-full opacity-90 duration-500 ${decoration}`}
      onClick={btnInfo.stepFunc}
      type="button"
      disabled={disabled}
    >
      {btnInfo.value}
    </button>
  );
};

export const Card = ({
  children,
  stepFuncs,
  step,
  tutorialData,
  setStep
}) => {

  let btnInfo = [
    {
      bg: 'bg-white',
      color: 'text-black',
      value: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
      stepFunc: stepFuncs.prevStep,
      disabled: false
    },
    {
      bg: 'bg-black',
      color: 'text-white',
      value: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
      stepFunc: stepFuncs.nextStep,
      disabled: false
    },
  ];

  return (
    <>
      <div className="max-w-sm rounded-3xl bg-white overflow-hidden h-5/6 relative shadow-lg">
        <div
          className={`flex transition-transform ease-out w-full h-3/5 duration-500`}
          style={{ transform: `translateX(-${step * 100}%)` }}>
          {children[0]}
        </div>

        <div className="h-2/5">
          <div
            className="h-1/5 flex transition-transform w-full ease-out duration-500"
            style={{ transform: `translateX(-${step * 100}%)` }}>
            {children[1]}
          </div>
          <div
            className="h-2/5 flex transition-transform w-full ease-out duration-500"
            style={{ transform: `translateX(-${step * 100}%)` }}>
            {children[2]}
          </div>

          <div className="h-2/5 relative">
            <div className="absolute flex items-center bottom-0 start-0 h-full m-5">

              <ul className="list-none flex justify-start">

                {tutorialData.map((item, index) => (
                  <Indicator
                    step={step}
                    index={index}
                    setStep={setStep}
                    key={item.title}
                  />
                ))}

              </ul>

            </div>
            <div className="absolute flex items-center end-0 bottom-0 h-full m-5">
              {step > 0 ? <Button btnInfo={btnInfo[0]} /> : <Button btnInfo={btnInfo[0]} disabled={true} />}
              {step < tutorialData.length - 1 ? <Button btnInfo={btnInfo[1]} /> : <Button btnInfo={btnInfo[1]} disabled={true} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

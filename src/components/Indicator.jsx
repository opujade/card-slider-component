import React from 'react';

export const Indicator = ({ amountOfSteps, step, index }) => {
  let width = step == index ? 'w-6' : 'w-3';

  return (
    <>
      <li
        className={`${width} h-3 transition bg-black m-1 rounded-full hover:opacity-100 cursor-pointer`}
      ></li>
    </>
  );
};

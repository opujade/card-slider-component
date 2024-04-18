import React from 'react';

export const Indicator = ({ amountOfSteps, step, index }) => {
  let width = step == index ? 'w-6 opacity-80' : 'w-3 opacity-50';

  return (
    <>
      <li
        className={`${width} h-3 duration-500 bg-black m-1 rounded-full hover:opacity-100 cursor-pointer`}
      ></li>
    </>
  );
};

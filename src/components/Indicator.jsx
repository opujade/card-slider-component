import React from 'react';

export const Indicator = ({ step, index, setStep }) => {
  let width = step == index ? 'w-6 opacity-80' : 'w-2 opacity-50';

  const onLiClick = () => {
    setStep(index);
  }

  return (
    <>
      <li
        className={`${width} h-2 duration-500 bg-black m-1 rounded-full hover:opacity-100 hover:scale-125 cursor-pointer`}
        onClick={onLiClick}
      ></li>
    </>
  );
};

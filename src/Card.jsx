import React from 'react';

export const Card = ({ currentCardData, nextStep, prevStep }) => {
  return (
    <>
      <h2>{currentCardData.title}</h2>
      <p>{currentCardData.description}</p>
      <button onClick={nextStep} type='button'>Next Step</button>
      <button onClick={prevStep} type='button'>Prev Step</button>
    </>
  );
};

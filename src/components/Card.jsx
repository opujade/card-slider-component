import React from 'react';

const Button = ({ chooseStep, value, disabled, btnInfo }) => {
  return (
    <button
      className={
        'transition border-solid border-gray-500 font-bold border py-3 m-1 px-5 rounded-full ' +
        btnInfo.bg +
        ' ' +
        btnInfo.color +
        ' ' +
        btnInfo.hover
      }
      onClick={chooseStep}
      type="button"
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export const Card = ({
  children,
  currentCardData,
  nextStep,
  prevStep,
  ...props
}) => {
  let btnInfo = [
    {
      disabled: false,
      bg: 'bg-white',
      color: 'text-black',
      hover: 'hover:bg-black hover:text-white',
    },
    {
      disabled: false,
      bg: 'bg-black',
      color: 'text-white',
      hover: 'hover:bg-white hover:text-black',
    },
  ];

  if (currentCardData.page === 1) {
    btnInfo[0] = {
      disabled: true,
      bg: 'bg-gray-300 border-gray-300',
      color: 'text-black',
    };
  }
  if (currentCardData.page === 3) {
    btnInfo[1] = {
      disabled: true,
      bg: 'bg-gray-300 border-gray-300',
      color: 'text-black',
    };
  }

  return (
    <>
      <div className="max-w-sm bg-white rounded-3xl overflow-hidden h-5/6 relative">
        <div
          className={
            'transition h-3/5 bg-' +
            currentCardData.bgColor +
            ' m-0 flex items-center justify-center'
          }
        >
          <img
            className="transition p-5"
            src={currentCardData.image}
            alt={'Imatge de "' + currentCardData.title + '"'}
          ></img>
        </div>
        <div>{children}</div>
        <div className="pt-5 absolute end-0 bottom-0 my-6 me-3">
          <Button
            chooseStep={prevStep}
            value={'<'}
            btnInfo={btnInfo[0]}
            disabled={btnInfo[0].disabled}
          ></Button>

          <Button
            chooseStep={nextStep}
            value={'>'}
            btnInfo={btnInfo[1]}
            disabled={btnInfo[1].disabled}
          ></Button>
        </div>
      </div>
    </>
  );
};

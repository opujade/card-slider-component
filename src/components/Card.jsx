import React from 'react';

const Button = ({ chooseStep, value, disabled, btnColor }) => {
  return (
    <button
      className={
        'transition border-solid border-gray-800 font-bold border py-3 m-1 px-5 rounded-full ' +
        btnColor.bg +
        ' ' +
        btnColor.color +
        ' ' +
        btnColor.hover
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
  let disabled = [false, false];
  let btnColor = [
    {
      bg: 'bg-white',
      color: 'text-black',
      hover: 'hover:bg-black hover:text-white',
    },
    {
      bg: 'bg-black',
      color: 'text-white',
      hover: 'hover:bg-white hover:text-black',
    },
  ];

  if (currentCardData.title == 'Dedica moltes hores') {
    disabled[0] = true;
    btnColor[0] = {
      bg: 'bg-gray-300 border-gray-300',
      color: 'text-black',
    };
  }
  if (currentCardData.title == 'Procura descansar') {
    disabled[1] = true;
    btnColor[1] = {
      bg: 'bg-gray-300 border-gray-300',
      color: 'text-black',
    };
  }

  return (
    <>
      <div className="max-w-sm bg-white rounded-3xl overflow-hidden h-5/6 relative">
        <div
          className={
            'transition h-3/5 bg-[' +
            currentCardData.bgColor +
            '] m-0 flex items-center justify-center'
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
            disabled={disabled[0]}
            btnColor={btnColor[0]}
          ></Button>

          <Button
            chooseStep={nextStep}
            value={'>'}
            disabled={disabled[1]}
            btnColor={btnColor[1]}
          ></Button>
        </div>
      </div>
    </>
  );
};

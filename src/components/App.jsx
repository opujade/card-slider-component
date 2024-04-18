import { useState } from 'react';
import { Card } from './Card';

function App() {
  const stepFuncs = {
    nextStep : () => setStep(step + 1),
    prevStep : () => setStep(step - 1)
  }

  const tutorialData = [
    {
      title: 'Dedica moltes hores',
      description:
        'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però aniràs notant una millora ràpidament.',
      bgColor: 'time',
      image: 'src/assets/time_managment.svg',
    },
    {
      title: 'Programa projectes propis',
      description:
        'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      bgColor: 'programming',
      image: 'src/assets/programming.svg',
    },
    {
      title: 'Procura descansar',
      description:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduïràs l'estrés i l'ansietat. Milloraràs la concentració i consolidaràs el teu aprenentatge.",
      bgColor: 'meditation',
      image: 'src/assets/meditation.svg',
    },
  ];

  const [step, setStep] = useState(0);

  return (
      <div className='flex justify-center items-center h-screen font-sans'>
        <Card
          currentCardData={tutorialData[step]}
          stepFuncs={stepFuncs}
          step={step}
          tutorialData={tutorialData}
        >
          <h3 className='font-bold text-xl pt-8 px-5'>{tutorialData[step].title}</h3>
          <p className='font-thin text-sm py-3 ps-5 pe-10'>{tutorialData[step].description}</p>
        </Card>
      </div>
  );
}

export default App;

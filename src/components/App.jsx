import { useState } from 'react';
import '../styles/App.css';
import { Card } from './Card';

function App() {
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const tutorialData = [
    {
      title: 'Dedica moltes hores',
      page: 1,
      description:
        'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però aniràs notant una millora ràpidament.',
      bgColor: 'time',
      image: 'src/assets/time_managment.svg',
    },
    {
      title: 'Programa projectes propis',
      page: 2,
      description:
        'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      bgColor: 'programming',
      image: 'src/assets/programming.svg',
    },
    {
      title: 'Procura descansar',
      page: 3,
      description:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduïràs l'estrés i l'ansietat. Milloraràs la concentració i consolidaràs el teu aprenentatge.",
      bgColor: 'meditation',
      image: 'src/assets/meditation.svg',
    },
  ];

  const [step, setStep] = useState(0);

  return (
    <>
      <div className='flex justify-center items-center h-screen bg-slate-500 font-sans'>
        <Card
          currentCardData={tutorialData[step]}
          nextStep={nextStep}
          prevStep={prevStep}
        >
          <h3 className='font-bold text-xl pt-8 px-5'>{tutorialData[step].title}</h3>
          <p className='font-thin py-3 ps-5 pe-10'>{tutorialData[step].description}</p>
        </Card>
      </div>
    </>
  );
}

export default App;

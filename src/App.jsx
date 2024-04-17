import { useState } from 'react';
import './App.css';
import { Card } from './Card';

function App() {
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const tutorialData = [
    {
      title: 'Dedica moltes hores',
      description:
        'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però aniràs notant una millora ràpidament.',
      bgColor: '#4da2a9',
      image: 'time_management.svg',
    },
    {
      title: 'Programa projectes propis',
      description:
        'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      bgColor: '#d3d4d9',
      image: 'programming.svg',
    },
    {
      title: 'Procura descansar',
      description:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduïràs l'estrés i l'ansietat. Milloraràs la concentració i consolidaràs el teu aprenentatge.",
      bgColor: '#ffd167',
      image: 'meditation.svg',
    },
  ];

  const [step, setStep] = useState(0);

  return (
    <>
      <Card currentCardData={tutorialData[step]} nextStep={nextStep} prevStep={prevStep}></Card>
    </>
  );
}

export default App;

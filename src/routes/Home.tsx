import React, { useState } from "react";

import Main from "../components/main/Main";

import { Button } from 'antd';

import './Home.scss';

const Home: React.FC = () => {

  const [step, setStep] = useState(0);

  const nextStep = () => {setStep(step + 1); };
  const previousStep = () => { setStep(step - 0); };
  
  return (
    <Main name='home'>
      <Button type='primary'> I know what I want to make </Button>
      <Button type='primary'> Help me find a drink </Button>
      <Button type='primary'> I'm feeling lucky </Button>
    </Main>
  );
};

export default Home;

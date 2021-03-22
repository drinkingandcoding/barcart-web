import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Card, CardHead, CardBody, Main, List, Empty, Button, CardFooter, Modal, ModalBody, SplitButton } from "../components";

import { getParams } from "../utils";
import { makeByName, makeByRandom } from "barcart/dist";

import { FiShare } from "react-icons/fi";
import a from 'indefinite';

import './Make.scss';
import { Copy, Mail, Twitter } from "react-feather";

interface IngredientInterface {
  unit?: string | null;
  amount?: number | null;
  ingredient?: string | null;
  label?: string | null;
  special?: string | null;
}

const MakePage: React.FC = () => {

  const input = getParams(useHistory().location.search);
  const drink = makeByName(input)[0];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateShareString = (drink:string):string => {
    return `Check out this recipe for a ${drink} on Barcart: ${window.location}`;
  } 

  const generateIngredientList = (i:IngredientInterface) => {
    if(i.amount) {
      return `${i.amount}${i.unit} of ${i.ingredient}`
    } else {
      return `${i.special}`;
    }
  }

  const generateRandomDrink = ():string => {
    const drink = makeByRandom()[0];
    return(drink.name.toLowerCase());
  }

  const shareDrink = () => {
    if(navigator.share) {
      navigator.share({
        title: 'Barcart',
        text: 'Check out this drink on Barcart!',
        url: `${window.location}`
      })
      .then(() => console.log('share'))
      .catch((e) => console.error(e));
    } else {
      setIsModalOpen(true);
    }
  }

  const copyUrl = () => {
    console.log('copy');
  }

  return (
    <Main name='make'>
      { drink ?
        <>
          <Card>
            <CardHead title={drink.name} action={<Button variant='icon' onClick={() => shareDrink()}><FiShare/></Button>}/>
            <CardBody>
              <List icon='🍸' title={`Grab ${a(drink.glass)} glass`}/>
              <List icon='📖' title="You'll need:">
                { 
                  drink?.ingredients?.map((i, index) => <li key={index}> {generateIngredientList(i)} </li>)
                }
              </List>
              <List icon='🔧' title={`${String(drink.preparation)}`}/>
              {drink.garnish && <List icon='🥃' title={`Top with ${drink.garnish.toLowerCase()}`}/>}
            </CardBody>
            <CardFooter>
              <Button to='./' variant='dark'> Search for another </Button>
              <Button to={`/make?drink=${generateRandomDrink()}`} variant='ghost'> Pick something random </Button>
            </CardFooter>
          </Card>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Share with your friends!'>
            <ModalBody>
              <div className='bc-targets'>
                <SplitButton icon={<Twitter/>} href={encodeURI(`https://twitter.com/intent/tweet?text=${generateShareString(drink.name)}`)}>Twitter</SplitButton>
                <SplitButton icon={<Mail/>} href={`mailto:?subject=${drink.name} Recipe&body=${generateShareString(drink.name)}`}>E-mail</SplitButton>
                <SplitButton icon={<Copy/>} onClick={() => copyUrl()}>Copy URL</SplitButton>
              </div>
            </ModalBody>
          </Modal>
        </>
        : <Empty title='oops' description={`There is no drink named ${input}`}>
            <Button to='./'>Go back</Button>
          </Empty>
      }
    </Main>
  );
};

export default MakePage;

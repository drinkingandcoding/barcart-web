import React from "react";
import { useHistory } from "react-router-dom";

import { Card, CardHead, CardBody, Main, List, Empty, Button, CardFooter, IconButton } from "../components";

import { getParams } from "../utils";
import { makeByName, makeByRandom } from "barcart/dist";
import a from 'indefinite';

import './Make.scss';

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

  const generateIngredientList = (i:IngredientInterface) => {
    if(i.amount) {
      return `${i.amount}${i.unit} of ${i.ingredient}`
    } else {
      return `${i.special}`;
    }
  }

  const generateRandomDrink = ():string => {
    const drink = makeByRandom()[0];
    return(drink.name);
  }

  const shareDrink = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Barcart Drink',
        url: `${window.location}`
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      // fallback
    }
  }

  return (
    <Main name='make'>
      { drink ?
        <Card>
          <CardHead title={drink.name} action={<IconButton variant='dark' onClick={() => shareDrink}>share</IconButton>}/>
          <CardBody>
            <List title={`🍸 Grab ${a(drink.glass)} glass`}/>
            <List title="📖 You'll need:">
              { 
                drink?.ingredients?.map((i, index) => <li key={index}> {generateIngredientList(i)} </li>)
              }
            </List>
            <List title={`🔧 ${String(drink.preparation)}`}/>
            <List title={`🥃 Top with ${drink.garnish?.toLowerCase()}`}/>
          </CardBody>
          <CardFooter>
            <Button to='./' variant='dark'> Search for another </Button>
            <Button to={`/make?drink=${generateRandomDrink()}`} variant='ghost'> Pick something random </Button>
          </CardFooter>
        </Card>
        : <Empty title='oops' description={`There is no drink named ${input}`}>
            <Button to='./'>Go back</Button>
          </Empty>
      }
    </Main>
  );
};

export default MakePage;

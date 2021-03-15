import React from "react";
import { useHistory } from "react-router-dom";

import { Card, CardHead, CardBody, Main, List, Empty, Button } from "../components";

import { getParams } from "../utils";
import { makeByName } from "barcart/dist";

import './Make.scss';

interface IngredientInterface {
  unit?: string | null;
  amount?: number | null;
  ingredient?: string | null;
  label?: string | null;
  special?: string | null;
}

const generateIngredientList = (i:IngredientInterface) => {
  if(i.amount) {
    return `${i.amount} of ${i.ingredient}`
  } else {
    return `${i.special}`;
  }
}

const MakePage: React.FC = () => {

  const input = getParams(useHistory().location.search);
  const drink = makeByName(input)[0];

  return (
    <Main name='make'>
      { drink ?
        <Card>
          <CardHead title={drink.name}/>
          <CardBody>
            <List title='glass'>
              {drink.glass}
            </List>
            <List title='ingredients'>
              { 
                drink?.ingredients?.map((i, index) => <li key={index}> {generateIngredientList(i)} </li>)
              }
            </List>
            <List title='prep'>
              {drink.preparation}
            </List>
            <List title='garnish'>
              {drink.garnish}
            </List>
          </CardBody>
        </Card>
        : <Empty title='oops' description={`There is no drink named ${input}`}>
            <Button to='./'>Go back</Button>
          </Empty>
      }
    </Main>
  );
};

export default MakePage;

import React from "react";
import { useHistory } from "react-router-dom";

import Main from "../components/main/Main";
import { getParams } from "../utils";
import { makeByName } from "barcart/dist";
import { Card } from 'antd';
import List from '../components/list/List';

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

  const drink = makeByName(getParams(useHistory().location.search))[0];
  console.log(drink);
  return (
    <Main name='make'>
      <Card title={drink.name} className="bc-card">
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
      </Card>
    </Main>
  );
};

export default MakePage;

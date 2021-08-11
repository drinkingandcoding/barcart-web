import React from "react";
import { useHistory, Link } from "react-router-dom";
import { getParams } from "../utils";

import { findByIngredients } from "barcart/dist";

import { Card, CardBody, CardHead, Main, Empty, Button } from "../components";

const FindPage: React.FC = () => {

  const input = getParams(useHistory().location.search);

  const drinks = findByIngredients(input.split(','));

  console.log(drinks);

  return (
    <Main name='find'>
      { drinks.length ?
        <Card>
          <CardHead title='Here are the drinks you can make'/>
          <CardBody>
            <ul>
              { drinks.map(d =>
                <li>
                  <Link to={`/make?drink=${d.name}`}>
                    { d.name }
                  </Link>
                </li>
              )}
            </ul>
          </CardBody>
        </Card>
        : <Empty title='oops' description='There are no drinks with those ingredients'>
          <Button to='./'>Go back</Button>
      </Empty>
      }
    </Main>
  );
};

export default FindPage;

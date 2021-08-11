import React, { useState } from "react";
import { Main, Search, Button, Ingredients } from "../components";

import './Home.scss';
import { generateRandomDrink } from '../utils';

const Home: React.FC = () => {

  const [ searchByType, setSearchByType ] = useState("name");

  return (
    <Main name='home'>
      { searchByType === "name" && 
        <>
          <Search/>
          <div className='bc-search-footer'>
            <Button variant='ghost' onClick={() => setSearchByType("ingredient")}> Search by ingredients </Button>
            <Button to={`/make?drink=${generateRandomDrink()}`} variant='ghost'> Pick something random </Button>
          </div>
        </>
      }
      { searchByType === "ingredient" && 
        <>
          <Ingredients/>
          <div className='bc-search-footer'>
            <Button variant='ghost' onClick={() => setSearchByType("name")}> Search by name </Button>
            <Button to={`/make?drink=${generateRandomDrink()}`} variant='ghost'> Pick something random </Button>
          </div>
        </>
      }
    </Main>
  );
};

export default Home;

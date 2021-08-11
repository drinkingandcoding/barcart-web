import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { Button } from '..';

import './Ingredients.scss';

const Ingredients: React.FC = () => {

  const history = useHistory();

  const [textValue, setTextValue] = useState<string>('');
  const [ingredientList, setIngredientList] = useState<string[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  }

  const handleChange = (event: any) => {
    setTextValue(event.target.value);
  }

  const handleAdd = () => {
    if(!ingredientList.includes(textValue) && textValue.length) {
      setIngredientList([textValue, ...ingredientList]);
      setTextValue('')
    }
  };

  const handleDelete = (ingredient: string) => { 
    setIngredientList(ingredientList.filter(function(item) {
      return item !== ingredient
    }))
  }

  const handleSearch = () => {

    const param = ingredientList.join()

    history.push({
      pathname: '/find',
      search: `?ingredients=${param}`,  // query string
    });
  };

  return (
    <>
      <form className='bc-search' onSubmit={handleSubmit}>
        <label className='bc-search-label' htmlFor='drink-search'>Ingredient:</label>
        <input type="text" id="drink-search" value={textValue} onChange={handleChange} className='bc-search-input' placeholder='Ingredient'/>
        <Button type="submit" className='bc-search-submit' onClick={handleAdd} variant='icon' value='add'/>
      </form>
      <Button className='bc-search-submit' onClick={handleSearch} variant='icon' value='search'>Search</Button>
      {ingredientList && ingredientList.length > 0 && 
        <div className='ingredient-list'>
          { ingredientList.map((ingredient, index) =>
            <div className='ingredient-list-item' key={index}>
              <span>{ingredient}</span>
              <Button onClick={() => handleDelete(ingredient)} className='bc-search-submit' variant='icon'>x</Button>
            </div>
          ) }
        </div>
      }
    </>
  );
}

export default Ingredients;
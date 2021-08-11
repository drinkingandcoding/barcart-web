import React, { useState } from 'react';
import { makeByRandom } from "barcart/dist";
import { useHistory } from "react-router-dom";

import { Button } from '..';

import './Search.scss';

const Search: React.FC = () => {

  const history = useHistory();
  const [textValue, setTextValue] = useState('');

  const handleChange = (event: any) => {
    setTextValue(event.target.value);
  }
  const handleSubmit = () => {

    const drink = textValue || makeByRandom()[0].name;

    history.push({
      pathname: '/make',
      search: `?drink=${drink}`,  // query string
    });
  };

  return (
    <form onSubmit={handleSubmit} className='bc-search'>
      <label className='bc-search-label' htmlFor='drink-search'>Drink:</label>
      <input type="text" id="drink-search" value={textValue} onChange={handleChange} className='bc-search-input' placeholder='Drink name'/>
      <Button type="submit" className='bc-search-submit' variant='dark'/>
    </form>
  );
}

export default Search;
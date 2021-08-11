import { makeByRandom } from 'barcart/dist';

export const getParams = (param: string):string => {
  return param.split("=")[1];
}

export const generateRandomDrink = ():string => {
  const drink = makeByRandom()[0];
  return(drink.name.toLowerCase());
}
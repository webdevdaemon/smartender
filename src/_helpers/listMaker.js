import axios from 'axios'

import { errListAll } from '../errorMessages'

const KEYS = {
  c: 'strCategory',
  g: 'strGlass',
  i: 'strIngredient1',
}

const listMaker = (function() {
  const preQuery = 'https://www.thecocktaildb.com/api/json/v1/1/'

  const queryAPI = flag =>
    axios(`${preQuery}list.php?${flag}=list`)
      .then(({ data }) => data)
      .catch(err => err)

  const extractList = (promise, keyString) =>
    promise.then(r => r.drinks).then(drinks => drinks.map(o => o[keyString]))

  const gateKeeper = flag => {
    if (!flag.length > 1 || !/[cgi]/.test(flag)) {
      throw new Error(errListAll)
    }
    
    return extractList(queryAPI(flag), KEYS[flag])
  }

  return input => gateKeeper(input)
})()

let a = listMaker('i') /*?*/
a
console.log(a)

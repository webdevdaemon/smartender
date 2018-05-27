import axios from 'axios'
import { errorListPossibilities } from '../errorMessages'

const KEYS_BY_FLAG = { c: 'strCategory', g: 'strGlass', i: 'strIngredient1' }

export default (function() {
  const preQuery = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?'
  const convertFlagToQueryString = flag => `${preQuery}${flag}=list`
  const queryAPI = query => axios(query)
  const extractList = (promise, keyString) =>
    promise
      .then(({ data }) => data)
      .then(r => r.drinks)
      .then(drinks => drinks.map(o => o[keyString]))
      .catch(err => ({ err, errorListPossibilities }))
  const validateOutput = flag => {
    if (flag.length !== 1 || !/[cgi]/.test(flag)) {
      throw new Error(errorListPossibilities)
    }
    return extractList(queryAPI(convertFlagToQueryString(flag)), KEYS_BY_FLAG[flag])
  }
  return input => validateOutput(input)
})()

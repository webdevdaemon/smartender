import axios from 'axios'
import { errListAll } from '../errorMessages'

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
      .catch(err => ({ err, errListAll }))
  const validateOutput = flag => {
    if (flag.length !== 1 || !/[cgi]/.test(flag)) {
      throw new Error(errListAll)
    }
    return extractList(queryAPI(convertFlagToQueryString(flag)), KEYS_BY_FLAG[flag])
  }
  console.log('​listPossibilities ->  validateOutput("c")', validateOutput('g'))
  return input => validateOutput(input)
})()

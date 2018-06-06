import axios from 'axios'
import {errorListPossibilities} from '../errorMessages'

const KEYS_BY_FLAG = {c: 'strCategory', g: 'strGlass', i: 'strIngredient1'}

export default (function() {
  const preQuery = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?'
	const convertFlagToQueryString = flag => `${preQuery}${flag}=list`
	const queryAPI = query => axios(query)
	const extractList = (axiosResponse, objKey) =>
		axiosResponse.then(({data}) => data)
			.then(({drinks}) => drinks)
			.then(drinks => drinks.map(o => o[objKey]))
			.catch(err => new Error(errorListPossibilities))
	function listPossibilities(flag) {
    if (flag.length !== 1 || !/[cgi]/.test(flag)) {
      return new Error(errorListPossibilities)
		}
		const listKey = KEYS_BY_FLAG[flag]
		const rawResponse = queryAPI(convertFlagToQueryString(flag))
		const possibilities = extractList(rawResponse, listKey)
		return possibilities
  }
  return listPossibilities
})()
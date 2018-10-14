import axios from 'axios'

const KEYS_BY_FLAG = {c: 'strCategory', g: 'strGlass', i: 'strIngredient1'}

export default (function() {
  const prefix = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?'
	const convertFlagToQueryString = flag => `${prefix}${flag}=list`
	const extractList = (axiosResponse, objKey) =>
		axiosResponse
			.then(({data}) => data)
			.then(({drinks}) => drinks)
			.then(drinks => drinks.map(o => o[objKey]))
			.catch(err => Error(err))
	const isValidFlag = flag => flag.length === 1 && /[cgi]/.test(flag)
	function getPossibilities(flag) {
		const listKey = KEYS_BY_FLAG[flag]
		const rawResponse = axios(convertFlagToQueryString(flag))
		const possibilities = extractList(rawResponse, listKey)
		return possibilities
	}
	function listPossibilities(flag) {
		return isValidFlag(flag)
			? getPossibilities(flag)
			: Error('ERROR: suspect => listPossibilities')
	}
	// listPossibilities('c') //?
  return listPossibilities
})()


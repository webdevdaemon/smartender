// @ts-check

import normalize from './normalizeDrinkObject'
import axios from 'axios'

export default (function() {

  function normalizeDrinkList(axiosResponse) {
    let output = axiosResponse
			.then(({ data }) => data)
			.then(({ drinks }) => drinks)
			.then(list => list.length
				? list.map(item => normalize(item))
				: [{ name: 'no drink matches', id: -1 }]
			)
			.catch(err => new Error(err))
		return output
  }

  function listSearchResults(queryString) {
		let output = normalizeDrinkList(axios(queryString))
			.then(list => [...list])
			.catch(err => new Error(err))
		return output
  }

  async function autoComp(queryString) {
		let output = await listSearchResults(`
			https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
				queryString
			}`)
		return output
  }

  return autoComp

})()

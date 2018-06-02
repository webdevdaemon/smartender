import normalize from './normalizeDrinkObject'
import axios from 'axios'

export default (function() {

  function normalizeDrinkList(axiosResponse) {
    let output = axiosResponse
      .then(({data}) => data)
      .then(({drinks}) => drinks)
			.then(list => list.length > 0 ? list.map(item => normalize(item)) : [])
      .catch(err => new Error(err))
    return output
  }

	async function listSearchResults(queryString) {
		let output = await axios(queryString)
			.then(response => normalizeDrinkList(response))
      .then(list => [...list])
      .catch(err => new Error(err))
    return output
  }

  async function autoComp(queryString) {
    const output = await listSearchResults(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryString}`
		)
		return output
  }

  return autoComp
})()

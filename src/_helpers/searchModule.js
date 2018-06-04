import normalize from './normalizeDrinkObject'
import axios from 'axios'

export default (function() {

	const normalizeDrinkList = promise =>
		promise.then(({data}) => data)
			.then(({drinks}) => drinks)
			.then(list => list.length
				? list.map(item => normalize(item))
				: [{name: 'no drink matches', id: -1}])
			.catch(err => new Error(err))

	const listSearchResults = queryStr =>
		normalizeDrinkList(axios(queryStr))
			.catch(err => new Error(err))

	async function autoComp(queryStr) {
		let output = await
			listSearchResults(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryStr}`
			).then(list => [...list])
		return output
	}

	return autoComp
})()

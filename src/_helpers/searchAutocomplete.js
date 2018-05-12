import { get, filterBy } from './dbQueries'
import organizeInfo from './extractDrinkInfo'
import axios from 'axios'
const cache = []

export default (function() {
	
	async function extractName(prom) {
    return await prom
			.then(({ data }) => data)
			.then(({ drinks }) => drinks)
			.then(list => list.map(item => organizeInfo(item).name))
			.catch(err => new Error(err))
  }

  async function getListofDrinkObjects(queryString) {
    return await extractName(axios(queryString))
  }

  function filterListByQueryString(queryString, currentList) {
    const strToFind = new RegExp(queryString)
    return currentList.filter(str => strToFind.test(str))
  }

  function autocomplete(queryString, currentList) {
    if (queryString === '') {
      return
    } else if (!currentList) {
      return extractName(
        getListofDrinkObjects(
          get.drinkByName(queryString)
        )
      )
    } else {
      return filterListByQueryString(queryString, currentList)
    }
	}


	return autocomplete

})()
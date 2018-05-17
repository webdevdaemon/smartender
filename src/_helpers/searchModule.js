import { get, filterBy } from './queryStringGenerator.js'
import normalize from './normalizeDrinkObject'
import axios from 'axios'

const searchModule = (function() {

  async function normalizeDrinkList(prom) {
		return await prom
			.then(({ data }) => data)
			.then(({ drinks }) => drinks)
			.then(list => list.map(item => normalize(item)))
      .catch(err => new Error(err))
  }

  async function listSearchResults(queryString) {
    return await normalizeDrinkList(axios(queryString))
  }

  function filterListByQueryString(queryString, currentList) {
    const strToFind = new RegExp(queryString)
    return currentList.filter(str => strToFind.test(str))
  }

  function autoComp(queryString, currentList) {
    if (queryString === '') {
      return
    } else if (!currentList) {
      return normalizeDrinkList(listSearchResults(get.drinkByName(queryString)))
    } else {
      return filterListByQueryString(queryString, currentList)
    }
  }

  return { autoComp, listSearchResults } //?

})() // const au = searchModule.autoComp('af') //?

const { autoComp, listSearchResults } = searchModule
export { autoComp, listSearchResults }
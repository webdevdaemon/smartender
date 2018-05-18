import { get } from './queryStringGenerator.js'
import normalize from './normalizeDrinkObject'
import axios from 'axios'

export default (function() {
  async function normalizeDrinkList(axiosResponse) {
    const normalized = await axiosResponse
      .then(({ data }) => data)
      .then(({ drinks }) => drinks)
      .then(list => list.map(item => normalize(item)))
      .catch(err => new Error(err))
    return normalized
  }

  async function listSearchResults(queryString) {
		return await normalizeDrinkList(axios(queryString))
  }

  async function autoComp(queryString) {
    const cL = Array.isArray(currentList) ? currentList : await currentList
    if (queryString.length === 0) return
		return await listSearchResults(get.drinkByName(queryString))
  }

  return autoComp
})()

// @ts-check

import normalize from './normalizeDrinkObject'
import axios from 'axios'

export default (function() {

  async function normalizeDrinkList(axiosResponse) {
    return await axiosResponse
        .then(({ data }) => data)
        .then(({ drinks }) => drinks)
        .then(list => list.length
          ? list.map(item => normalize(item))
          : [{ name: 'no drink matches',id: -1 }]
      )
        .catch(err => new Error(err))
  }

  async function listSearchResults(queryString) {
    return await normalizeDrinkList(axios(queryString))
  }

  async function autoComp(queryString) {
    return queryString.length
      ? await listSearchResults(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryString}`)
      : []
  }

  return autoComp

})()

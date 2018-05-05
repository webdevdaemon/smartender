import axios from 'axios'
import { get, filterBy } from './dbQueries'

// const autocomplete = (function () {
  const getData = function(qry) {
    const output = axios(get.drinkByName(qry))
      .then(({ data: { drinks } }) => drinks)
      .then(drinks => drinks.map(({ strDrink }) => strDrink))
      .catch(err => new Error(err))
    return await output
  }

  const filterResults = (stringToMatch, curr) => {
    const rgxToMatch = new RegExp(`${stringToMatch}`, 'gi')
    return curr.filter(str => rgxToMatch.test(str))
  }

  const go = async function(searchQuery, curr) {
    let output = []
    const filteredList = await searchQuery.length > 0
      ? (searchQuery.length !== 1)
        ? filterResults(searchQuery, curr)
        : getData(searchQuery)
      : [] && filteredList.forEach(item => output.push(item))
    return output
  }

  const test = async function () {
    let a = await go('a', ['arf', 'arfa', 'xxx', 'x', 'arfurgh'])
    let arr = a
    return arr
  }
  console.log(test())  

  
console.log(go('ar', ['arf', 'arfa', 'xxx', 'x', 'arfurgh']))
// })()

// export default autocomplete

/**
 * @description EXPERIMENTAL - accepts a search string, and level/type id (1, 2, or 3), and returns a corresponding RegExp obj to utilize when filtering a collection of results.
 * @param {string} stringToMatch The current search query string
 * @param {number} [lvl=3] Choose between search levels ranging from "loosest" to "strictest". 1 = "Fuzzy Search", 2 = "Loose Search", 3 = "Strict Search."
 */

// const getRegExByLevel = (stringToMatch, lvl = 3) =>
//   [
//     null,
//     new RegX(`[${stringToMatch}]`, 'gi'), // (FUZZY - '/[abc]/')
//     new RegX(`${stringToMatch}`, 'gi'),   // (LOOSE   '/abc/')
//     new RegX(`^${stringToMatch}`, 'gi'),  // (PRECISE '/^abc/')
//   ][lvl]

import axios from 'axios'
import { get } from './dbQueries'
import { prependOnceListener } from 'cluster';

const initMatches = []

/*  ********************************************* /
[POSSIBLE FEATURE] "Variable Search Precision"
- search levels 1-3 from "fuzzy" to precise
    *********************************************
const getRegExByLevel = (stringToMatch) => (lvl = 3) => [
  new RegX(`[${stringToMatch}]`, 'gi'),
  // FUZZY - '/[abc]/'
  new RegX(`${stringToMatch}`,   'gi' ),
  // LOOSE   '/abc/'
  new RegX(`^${stringToMatch}`,  'gi' ),
  // PRECISE '/^abc/' 
][lvl-1]
**  ********************************************  */

const filterResults = stringToMatch => {
  const rgxToMatch = new RegExp(`(${stringToMatch})`, 'gi')
  return listToFilter =>
    listToFilter.filter(str => rgxToMatch.test(str))
}

const initAutocompList = qry =>
  axios(get.drinkByName(qry))
    .then(({ data: { drinks } }) => drinks)
    .then(drinks => drinks.map(({ strDrink }) => strDrink))
    .then(list => {
      list.forEach(match => initMatches.push(match))
      console.log({ list, initMatches: [...initMatches] })
      return list
    })

const go = (searchQ, current) =>
  searchQ.length > 0
    ? searchQ.length !== 1
      ? filterResults(searchQ, current)
      : initAutocompList(searchQ)
    : null // no query = return <null>

let ___ = go('v')
___ = go('vo', ___)


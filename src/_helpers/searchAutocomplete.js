import axios from 'axios'
import { get } from './dbQueries'

const wordSearch

const firstLetter = function (searchQuery = '') {
  let _l = searchQuery.length
  const matches = []

  if (_l === 1) {
    axios(searchQuery)
      .then(({ data: { drinks } }) => drinks)
      .then(drinks =>
        drinks
          .map(({ strDrink }) => strDrink)
          .filter() // ?
          .forEach(match => matches.push(match)))
  } else {
    homeIn()
  }
  console.log(matches)
}

firstLetter(get.drinkByName('v'))

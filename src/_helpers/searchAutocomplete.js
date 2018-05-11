import { get, filterBy } from './dbQueries'
import organizeInfo from './extractDrinkInfo'
import axios from 'axios'
const cache = []

async function getListofDrinkObjects(queryString) {
  const list = await axios(queryString).then(({ data }) => data).then(({ drinks }) => drinks) //?
    .catch(err => new Error(err))
  const normalized = list
  console.log({ normalized })
  return normalized
}

getListofDrinkObjects(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=v`)

function autocomplete(queryString, currentList) {
  let newList = []
  if (queryString.length === 1) {
    const _Q = get.drinkByName(queryString)

  }

}
import normalize from './normalizeDrinkObject'
import axios from 'axios'

export default async function getDrinkById(id) {
  const drink = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  )
    .then(({data: {drinks}}) => normalize(drinks[0]))
    .catch(err => new Error(err))
  return drink
}

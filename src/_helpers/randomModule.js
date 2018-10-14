import axios from 'axios'
import {browse} from './browseModule'

const random = (
  function() {
    const getRandomId = () =>
      axios('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(({data})    => data)
        .then(({drinks})  => drinks[0])
        .then(({idDrink}) => `${idDrink}`)
        .catch(err => new Error(err))

    const getDrinkById = id =>
      browse.getDrinkById(id)
        .then(recipe => recipe)
        .catch(err => new Error(err))      

    return async () => await getDrinkById(await getRandomId())
  })()

export default random

// random() // ?
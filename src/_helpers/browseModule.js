import axios from 'axios'
import normalize from './normalizeDrinkObject'

// TODO: getListByIngredientName should be a multi-purpose getter by "tag name" that takes the [ ("cgi" flag), (tagString) ]

const browse = (function() {
  
    const normalizeSimpleObject = ({
      strDrink: name, idDrink: id, strDrinkThumb: thumbnail
    }) => ({name, id, thumbnail})

    const getListByTag = async (tag, flag = 'i') => {
      const list = await
        axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${flag}=${tag}`)
        .then(({data}) => data)
        .then(({drinks}) => drinks)
        .then(drinks => drinks.map(normalizeSimpleObject))
        .catch(err => new Error(err))
      return list
    }

    const getDrinkById = async (id) => {
      const drink = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(({data}) => data)
        .then(({drinks}) => drinks[0])
        .then(drink => normalize(drink))
        .catch(err => new Error(err))
      return drink
    }
  
    const getDrinkByName = async (name) => {
      const drink = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then(({data}) => data)
        .then(({drinks}) => drinks[0])
        .then(drink => normalize(drink))
        .catch(err => new Error(err))
      return drink
    }

    return {getDrinkById, getDrinkByName, getListByTag}

  }
)()
const {getDrinkById, getDrinkByName, getListByTag} = browse
export {browse, getDrinkById, getDrinkByName, getListByTag}
browse.getListByTag('pineapple') // ?
browse.getDrinkById(12158) // ?
browse.getDrinkByName('sazerac') //?
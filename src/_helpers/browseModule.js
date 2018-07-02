import axios from 'axios'
import normalize from './normalizeDrinkObject'

const browse = (
  function() {

    const normalizeSimpleObject = ({
      strDrink: name, idDrink: id, strDrinkThumb: thumbnail
    }) => ({name, id, thumbnail})

    const getListByIngredientName = ingredient =>
      axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(({data}) => data)
        .then(({drinks}) => drinks)
        .then(drinks => drinks.map(normalizeSimpleObject))
        .catch(err => new Error(err))

    const getDrinkById = id =>
      axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(({data}) => data)
        .then(({drinks}) => drinks)
        .then(drinks => normalize(drinks[0]))
        .catch(err => new Error(err))

    return {
      listBy: {
        i: getListByIngredientName,
        
      },
      getBy: {
        id: getDrinkById,
      }
    }

  }
)()

export default browse
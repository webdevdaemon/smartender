import axios from 'axios'
import normalize from './normalizeDrinkObject'

const browse = (function() {

  const normalizeSimpleObject = ({
    strDrink: name,
    idDrink: id,
    strDrinkThumb: thumbnail,
  }) => ({name, id, thumbnail})

  const getListByTagName = async function({tag, cgi}) {
    // console.log({tag,cgi})
    const list = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${cgi}=${tag}`)
      .then(({data: {drinks}}) => drinks.length > 0 && drinks)
      .then(drinks => drinks.map(normalizeSimpleObject)) // ?
      .catch(err => new Error(err))
    return [...list]
  }

  const getDrinkById = async (id) => {
    const drink = await axios(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(({data}) => data)
      .then(({drinks}) => drinks[0])
      .then(drink => normalize(drink))
      .catch(err => new Error(err))
    return drink
  }

  return {
    listBy: {
      tag: getListByTagName,
    },
    getBy: {
      id: getDrinkById,
    }
  }

})()

const a = browse.listBy.tag({tag: 'water', cgi: 'i'})
  .then(x => x) // ? 
  .then(x => !!x[0].howTo) // ? 
  
export default browse

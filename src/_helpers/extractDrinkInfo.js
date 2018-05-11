import { drinkObject as test } from './testObjects'

const extractDrinkInfo = (function() {
  const parseIngredients = function(raw) {
    const getKeys = recipe => {
      const rgxIngredient = new RegExp('strIngredient*d*')
      const ingredientKeys = Object
        .keys(recipe)
        .filter(key => rgxIngredient.test(key) && recipe[key].length,)
      return ingredientKeys
    }
    const getDetailsFromKeys = keys => keys.map((key, dex) => {
      const amt = `strMeasure${dex + 1}`
      return [raw[key], raw[amt]]
    })
    return getDetailsFromKeys(getKeys(raw))
  }

  const organizeInfo = drinkObject => {
    const { idDrink: id, strDrink: name, strGlass: glass, strCategory: category, strIBA: iba, strInstructions: howTo, strDrinkThumb: thumbnail, strAlcoholic: alcoholic, ...leftovers } = drinkObject

    return {
      id,
      name,
      glass,
      category,
      iba,
      howTo,
      thumbnail,
      ingredients: parseIngredients(leftovers),
      alcoholic: alcoholic === 'Alcoholic'
    }
		}
	
	console.log(organizeInfo(test))
	return organizeInfo
	


})()

export default extractDrinkInfo

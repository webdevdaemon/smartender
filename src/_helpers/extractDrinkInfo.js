import { drinkObject as test } from './testObjects'

const extractDrinkInfo = (function() {
  const parseIngredients = function(raw) {
    const getKeys = recipe => {
      recipe
      const rgxIngredient = new RegExp('strIngredient*d*')
      const ingredientKeys = Object.keys(recipe)
        .filter(key => rgxIngredient.test(key) && recipe[key],)
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

  // console.log(organizeInfo(test))
  console.log(organizeInfo(
    {
      idDrink: '17824',
      strDrink: 'The Laverstoke',
      strVideo: null,
      strCategory: 'Cocktail',
      strIBA: null,
      strAlcoholic: 'Alcoholic',
      strGlass: 'Balloon Glass',
      strInstructions: '1) Squeeze two lime wedges into a balloon glass then add the cordial, Bombay Sapphire and MARTINI Rosso Vermouth, swirl to mix.\r\n\r\n2) Fully fill the glass with cubed ice and stir to chill.\r\n\r\n3) Top with Fever-Tree Ginger Ale and gently stir again to combine.\r\n\r\n4) Garnish with a snapped ginger slice and an awoken mint sprig.',
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/6xfj5t1517748412.jpg',
      strIngredient1: 'Gin',
      strIngredient2: 'Elderflower cordial',
      strIngredient3: 'Rosso Vermouth',
      strIngredient4: 'Tonic Water',
      strIngredient5: 'Lime',
      strIngredient6: 'Ginger',
      strIngredient7: 'Mint',
      strIngredient8: null,
      strIngredient9: null,
      strIngredient10: null,
      strIngredient11: null,
      strIngredient12: null,
      strIngredient13: null,
      strIngredient14: null,
      strIngredient15: null,
      strMeasure1: '50 ml',
      strMeasure2: '15 ml',
      strMeasure3: '15 ml',
      strMeasure4: '75 ml',
      strMeasure5: '2 Wedges',
      strMeasure6: '1 Slice',
      strMeasure7: '1 Large Sprig',
      strMeasure8: null,
      strMeasure9: null,
      strMeasure10: null,
      strMeasure11: null,
      strMeasure12: null,
      strMeasure13: null,
      strMeasure14: null,
      strMeasure15: null,
      dateModified: '2018-02-04 12:46:52'
    }
  ))
  return organizeInfo



})()

export default extractDrinkInfo

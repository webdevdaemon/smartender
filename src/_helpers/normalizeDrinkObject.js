const normalize = (function() {
	
	/**
	 * @name parseIngredients
	 * @description accepts an object of all destructured 'strIngredient' and 'strMeasure' properties from a raw drinkObject and returns a list of ingredients w/ measurement arrays ex: [ingredient, measurement]
	 * @param {object} recipe object containing all 'strIngredient' and 'strMeasure' properties from a raw drinkObject.
	 * @returns {array} an array of arrays(length===2), each containing matched pairs of ingredients and their corresponding measurement - ex: [ [ingredientName, measurement], [pair], [pair], ...pairs ]
	 */

	const parseIngredients = function(raw) {
		const getKeys = recipe => {
      const rgxIngredient = new RegExp('strIngredient*d*')
      const ingredientKeys = Object.keys(recipe)
        .filter(key => rgxIngredient.test(key) && recipe[key])
      return ingredientKeys
    }
		const getDetailsFromKeys = keys => keys.map((key, dex) => {
      const amt = `strMeasure${dex + 1}`
      return [raw[key], raw[amt]]
    })
		return getDetailsFromKeys(getKeys(raw))
  }
	
	/**
	 * @name organizeInfo
	 * @description accepts raw drink object from cocktailDB and returns a new object with property names altered to be more intuitive and easier to reason about. Additionally, the 'strIngredient' and 'strMeasure' properties are parsed and returned as a list of ingredient/measure pairs to be easily iterated and rendered into the UI representation of the recipe. ex: [['sour mix', '1 1/2 oz.'], ...recipe]
	 * @param {object} drinkObject
	 * @returns {object} normalized drinkObject
	 */

	const organizeInfo = drinkObject => {		
		
		const {
			idDrink: id,
			strDrink: name,
			strGlass: glass,
			strCategory: category, 
			strIBA: iba,
			strInstructions: howTo,
			strDrinkThumb: thumbnail,
			strAlcoholic: alcoholic,
			...recipe
		} = drinkObject

    return {
      id,
      name,
      glass,
      category,
      iba,
      howTo,
      thumbnail,
      ingredients: parseIngredients(recipe),
      alcoholic: alcoholic === 'Alcoholic'
    }
  }

	return rawDrinkObject => organizeInfo(rawDrinkObject)
	
})()

console.log(
	Object.entries({
		1: '',
		2: '2',
		3: 'fjjf',
	})
)

export default normalize 

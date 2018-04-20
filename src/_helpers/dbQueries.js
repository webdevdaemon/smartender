let isVirginBool, categoryString

const queryStringLegendObj = function() {
  return {
    searchByCocktailName: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
    searchByIngredientName: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka',
    getRandomCocktail: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    getFullCocktailDetailsById: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13060',
    filterByAlcoholPresence: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${
      isVirginBool ? 'Non_Alcoholic' : 'Alcoholic'
    }`,
    filterByIngredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Cranberry_Juice',
    filterByCategory: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryString}`,
    filterByGlassType: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass',
    getIngredientImagesbySize: {
      small: 'https://www.thecocktaildb.com/images/ingredients/ice-Small.png',
      medium: 'https://www.thecocktaildb.com/images/ingredients/ice-Medium.png',
      large: 'https://www.thecocktaildb.com/images/ingredients/ice.png'
    }
  }
}

const drinkInfoByName = (query = '') => (
  `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
const drinkInfoByID = (id = 0) => (
  `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
)
const IngredientInfoByName = (query = '') => (
  `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${query}` )
const DrinkInfoByRandom = () => ('https://www.thecocktaildb.com/api/json/v1/1/random.php')

const listCategories = () => ('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
const listGlasses = () => ('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
const listIngredients = () => ('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
const listAlcoholic = () => ('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')














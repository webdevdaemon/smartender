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
    filterByIngredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin',
    filterByCategory: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryString}`,
    filterByGlassType: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass',
    listPossibilities: {
      categories: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
      glasses: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list',
      ingredients: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
      alcoholic: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list'
    },
    getIngredientImagesbySize: {
      small: 'https://www.thecocktaildb.com/images/ingredients/ice-Small.png',
      medium: 'https://www.thecocktaildb.com/images/ingredients/ice-Medium.png',
      large: 'https://www.thecocktaildb.com/images/ingredients/ice.png'
    }
  }
}
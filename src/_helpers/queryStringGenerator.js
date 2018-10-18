const get = {
  drinkByID: (id = 0) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  drinkByName: (name = '') => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
  ingredientByName: (name = '') => `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`,
  randomDrink: () => `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
}

const filterBy = {
  g: glassType =>
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassType}`,
  i: ingredient =>
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  c: category =>
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
  _: (tag, flag) =>
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${flag}=${tag}`,
}

const listAll = {
  categories: () => 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  glassTypes: () => 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list',
  ingredients: () => 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
}

const image = {
  ingredient: {
    small: (ing = '') => `http://www.thecocktaildb.com/images/ingredients/${ing}-Small.png`,
    medium: (ing = '') => `http://www.thecocktaildb.com/images/ingredients/${ing}-Medium.png`,
    large: (ing = '') => `http://www.thecocktaildb.com/images/ingredients/${ing}.png`,
  },
}

export { get, filterBy, listAll, image }

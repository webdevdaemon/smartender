const dSt = (function() {
    let test = {
        idDrink: '13060',
        strDrink: 'Margarita',
        strVideo: null,
        strCategory: 'Ordinary Drink',
        strIBA: 'Contemporary Classics',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg',
        strIngredient1: 'Tequila',
        strIngredient2: 'Triple sec',
        strIngredient3: 'Lime juice',
        strIngredient4: 'Salt',
        strIngredient5: 'Basic',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: 'Basic',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strMeasure1: '1 1/2 oz ',
        strMeasure2: '1/2 oz ',
        strMeasure3: '1 oz ',
        strMeasure4: '',
        strMeasure5: '',
        strMeasure6: '',
        strMeasure7: '',
        strMeasure8: '',
        strMeasure9: '',
        strMeasure10: '',
        strMeasure11: '',
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
        dateModified: '2015-08-18 14:42:59',
    }

    const handleLeftovers = function(raw) {

        const getKeys = recipe => {
            const rgxIngredient = new RegExp('strIngredient*\d*')
            const ingredientKeys = Object.keys(recipe)
                .filter(key => rgxIngredient.test(key) && recipe[key].length)
            return ingredientKeys
        }

        const getDetailsFromKeys = keys => {
            keys.map((key, dex) => {
                const amt = `strMeasure${dex+1}`
                return [raw[key], raw[amt]]
            })
        }

    }

    const organizeInfo = (dob) => {
        // rename
        const {
            idDrink: id,
            strDrink: name,
            strGlass: glass,
            strCategory: category,
            strIBA: iba,
            strInstructions: howTo,
            strDrinkThumb: thumbnail,
            strAlcoholic: alcoholic,
            ...leftovers
        } = dob

        return {
            id,
            name,
            glass,
            category,
            iba,
            howTo,
            thumbnail,
            // get Ingredients from {...leftovers} => [item, amount]
            leftovers: handleLeftovers(leftovers),
            alcoholic: alcoholic === 'Alcoholic',
        }
    }

})()
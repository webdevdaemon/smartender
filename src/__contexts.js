import React from 'react'

const UIContext = React.createContext({
	ui: {
		sidebar_left: false,
		sidebar_right: false,
		overlay: false,
		modal: false,
	},
	updateUIState: null,
})

const CacheContext = React.createContext({
	searchCache: {},
	updateSearchCache: null,
})

const RecipeContext = React.createContext({
	currentRecipe: {},
	updateCurrentRecipe: null,
})

export {UIContext, CacheContext, RecipeContext}
export function setSearchedMeals (state, meals) {
   state.searchedMeals = meals || []
}

export function setMealsByLetter(state, letters ) {
   state.mealsByLetter = letters || []
}

export function setMealsByIngredients(state, ingredients) {
   state.mealsByIngredient = ingredients || []
}

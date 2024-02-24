export function setSearchedMeals (state, meals) {
   state.searchedMeals = meals || []
}

export function setMealsByLetter(state, letters ) {
   state.mealsByLetter = letters || []
}

export function setMealsByIngredients(state, ingredients) {
   state.mealsByIngredient = ingredients || []
}

export function setIngredient(state, ingredient) {
   state.ingredient = ingredient
 }
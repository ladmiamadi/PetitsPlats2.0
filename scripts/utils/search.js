import {recipes} from "../data/recipes.js";

export const linearSearch = (word) => {
    word = word.toLowerCase();

    return recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(word) ||
        recipe.description.toLowerCase().includes(word) ||
        recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(word))
    );
}

export const searchByIngredients = (word, recipes) => {
   const searchTerm = word.toLowerCase();

    return recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm))
    );
}


export const searchByUtensil = (word, recipes) => {
    const searchTerm = word.toLowerCase();

    return recipes.filter(recipe =>
        recipe.ustensils.some(utensil => utensil.toLowerCase().includes(searchTerm))
    );
}

export const searchByAppliance = (word, recipes) => {
    const searchTerm = word.toLowerCase();

    return recipes.filter(recipe =>
        recipe.appliance.toLowerCase().includes(searchTerm)
    );
}
import {recipes} from "../data/recipes.js";

export const linearSearch = (word) => {
    let resultSearch = [];

    word = word.toLowerCase();

    recipes.forEach(recipe => {
        if (
            recipe.name.toLowerCase().includes(word) ||
            recipe.description.toLowerCase().includes(word) ||
            recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(word))
        ) {
            resultSearch.push(recipe);
        }
    });

    return resultSearch;
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
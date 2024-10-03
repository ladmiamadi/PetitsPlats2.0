import {recipes} from "../data/recipes.js";

export const invertedIndexSearch = (word) => {
    let result = [];
    word = word.toLowerCase();

    let index = createIndex(recipes);

    Object.keys(index).forEach(key => {
        if (key.includes(word)) {
            result = result.concat(Array.from(index[key]));
        }
    });

    return result;
}

const createIndex = (recipes) => {
    let index = {};

    recipes.forEach(recipe => {
        let recipeName = recipe.name.split(" ");

        recipeName.forEach(item => {
            let name = item.toLowerCase();

            if (!index[name]) index[name] = new Set();
            index[name].add(recipe);
        });
    });

    recipes.forEach(recipe => {
        let recipeDescription = recipe.description.split(" ");

        recipeDescription.forEach(item => {
            let description = item.toLowerCase();

            if (!index[description]) index[description] = new Set();
            index[description].add(recipe);
        });
    });

    recipes.forEach(recipe => {
        let recipeIngredients = recipe.ingredients.map(item => item.ingredient);

        recipeIngredients.forEach(item => {
            let ingredient = item.toLowerCase();

            if (!index[ingredient]) index[ingredient] = new Set();
            index[ingredient].add(recipe);
        });
    });

    return index;
}
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
        const words = [
            ...recipe.name.split(" "),
            ...recipe.name,
            ...recipe.description.split(" "),
            ...recipe.ingredients.map(item => item.ingredient)
        ];

        words.forEach(item => {
            let word = item.toLowerCase();

            if (!index[word]) index[word] = new Set();

            index[word].add(recipe);
        });
    });

    return index;
};
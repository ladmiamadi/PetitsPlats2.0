import {recipes} from "../data/recipes.js";

export const invertedIndexSearch = (word) => {
    let result = new Set();
    let index = createIndex(recipes);
    word = word.toLowerCase();

    Object.keys(index).forEach(key => {
        if (key.includes(word)) {
            index[key].forEach(recipe => result.add(recipe));
        }
    });

    return Array.from(result);
}

const createIndex = (recipes) => {
    let index = {};

    recipes.forEach(recipe => {
        const phrases = [
            recipe.name.toLowerCase(),
            recipe.description.toLowerCase(),
            ...recipe.ingredients.map(item => item.ingredient.toLowerCase())
        ];

        phrases.forEach(item => {
            if (!index[item]) index[item] = new Set();
            index[item].add(recipe);
        });

        const words = [
            ...recipe.name.split(" "),
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
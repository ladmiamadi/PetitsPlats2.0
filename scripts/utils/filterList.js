import {recipes} from "../data/recipes.js";

export const getFilterList = (filter) => {
    let filterList = [];

    if(filter === "ingredients") {
        recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredientItem => {
                filterList.push(ingredientItem.ingredient);
            });
        });
    } else if (filter === "appareils") {
        filterList = recipes.map(recipe => recipe.appliance);
    } else if (filter === "ustensiles") {
        filterList = recipes.flatMap(recipe => recipe.ustensils);
    }

    return filterList;
};
import {recipes} from "../data/recipes.js";

export const linearSearch = (word) => {
    let result = [];
    word = word.toLowerCase();

    for (let i =0; i< recipes.length; i++) {
        if(recipes[i].name.toUpperCase().includes(word)) result.push(recipes[i]);

        if(recipes[i].description.toLowerCase().includes(word)) result.push(recipes[i]);

        for (let j=0; j< recipes[i].ingredients.length; j++) {
            if(recipes[i].ingredients[j].ingredient.toLowerCase().includes(word)) result.push(recipes[i]);
        }
    }

    return result;
}

export const searchByIngredients = (word, recipes) => {
    let result = [];
    const searchTerm = word.toLowerCase();

    for (let i = 0; i < recipes.length; i++) {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
            let ingredientName = recipes[i].ingredients[j].ingredient.toLowerCase();
            if (ingredientName.includes(searchTerm)) {
                result.push(recipes[i]);
                break;
            }
        }
    }

    return result;
}


export const searchByUtensil = (word, recipes) => {
    let result = [];
    const searchTerm = word.toLowerCase();

    for(let i = 0; i < recipes.length; i++) {
        for (let j = 0; j < recipes[i].ustensils.length; j++) {
            let utensil = recipes[i].ustensils[j].toLowerCase();
            if (utensil.includes(searchTerm)) {
                result.push(recipes[i]);
                break;
            }
        }
    }

    return result;
}

// Search by Appliance
export const searchByAppliance = (word, recipes) => {
    let result = [];
    const searchTerm = word.toLowerCase();

    for(let i = 0; i < recipes.length; i++) {
        let applianceName = recipes[i].appliance.toLowerCase();
        if (applianceName.includes(searchTerm)) {
            result.push(recipes[i]);
        }
    }

    return result;
}
import {recipes} from "../data/recipes.js";

export const linearSearch = (word) => {
    let result = [];

    for (let i =0; i< recipes.length; i++) {
        if(recipes[i].name.includes(word)) result.push(recipes[i]);

        if(recipes[i].description.includes(word)) result.push(recipes[i]);

        for (let j=0; j< recipes[i].ingredients.length; j++) {
            if(recipes[i].ingredients[j].ingredient.includes(word)) result.push(recipes[i]);
        }
    }

    return result;
}
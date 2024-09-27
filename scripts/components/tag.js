import {getTagsSectionDOM} from "../templates/getTagsSection.js";
import {updateFilter} from "../utils/filterList.js";

let tagsList = {};
let list = [];
let ul = '';
export const addTag = (tag, filterData, filterList, recipes) => {
    let filter = filterData[tag];
    ul = filterList;
    tagsList[tag] = filter;
    console.log(tagsList)
    getTagsSectionDOM(tagsList);

    if (filter === 'ingredients') {
        list = recipes.filter(recipe =>
            !recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(tag.toLowerCase()))
        );
    }
    if (filter === 'appareils') {
        list = recipes.filter(recipe =>
            !recipe.appliance.toLowerCase().includes(tag.toLowerCase())
        );
    }
    if (filter === 'ustensiles') {
        list = recipes.filter(recipe =>
            !recipe.ustensils.some(utensil => utensil.toLowerCase().includes(tag.toLowerCase()))
        );
    }

    updateFilter(filter, list, filterList);
}


export const deleteTag = (tag) => {
    const filter = tagsList[tag];

    delete tagsList[tag];

    getTagsSectionDOM(tagsList);

    updateFilter(filter, list, ul);
}
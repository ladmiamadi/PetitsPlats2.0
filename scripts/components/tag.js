import {getTagsSectionDOM} from "../templates/getTagsSection.js";
import {updateCardsDOM} from "../templates/getUpdatedRecipes.js";
import {recipes} from "../data/recipes.js";

let tagsList = {};
let resultSearch = [];

export const addTag = (item, filter) => {
    tagsList[item] = filter;

    if (resultSearch.length === 0) {
        resultSearch = recipes;
    }

    getTagsSectionDOM(tagsList);
    updateCardsDOM(item, tagsList, resultSearch);
}

export const deleteTag = (tag, tagsList) => {
    delete tagsList[tag];

    getTagsSectionDOM(tagsList);
    updateCardsDOM("", tagsList, recipes);
};
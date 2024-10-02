import {getTagsSectionDOM} from "../templates/getTagsSection.js";
import {updateCardsDOM} from "../templates/getUpdatedRecipes.js";
import {recipes} from "../data/recipes.js";

let tagsList = {};

export const addTag = (item, filter) => {
    tagsList[item] = filter;

    getTagsSectionDOM(tagsList);
    updateCardsDOM(item, tagsList)
}

export const deleteTag = (tag, tagsList) => {
    delete tagsList[tag];
    getTagsSectionDOM(tagsList);
    updateCardsDOM("", tagsList, recipes);
};

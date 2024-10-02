import {getTagsSectionDOM} from "../templates/getTagsSection.js";
import {updateCardsDOM} from "../templates/getUpdatedRecipes.js";

let tagsList = {};

export const addTag = (item, filter) => {
    tagsList[item] = filter;

    getTagsSectionDOM(tagsList);
    updateCardsDOM(item, tagsList)
}

export const deleteTag = (tag) => {
    console.log(tag)
};

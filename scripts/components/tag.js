import {getTagsSectionDOM} from "../templates/getTagsSection.js";
import {updateCardsDOM} from "../templates/getUpdatedRecipes.js";

export const addTag = (tag, filter, tagsList) => {
    const keyWord = document.getElementById("searchBar").value;

    tagsList[tag] = filter;

    getTagsSectionDOM(tagsList);
    updateCardsDOM(keyWord, tagsList);

}

export const deleteTag = (tag, tagsList) => {
    const keyWord = document.getElementById("searchBar").value;
    delete tagsList[tag];

    getTagsSectionDOM(tagsList);
    updateCardsDOM(keyWord, tagsList);
};

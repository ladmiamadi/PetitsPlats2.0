import {searchByAppliance, searchByIngredients, searchByUtensil} from "../utils/search.js";
import {getCardsSectionDOM} from "./getCardsSection.js";
import {getRecipesLength} from "./getRecipesLenght.js";
import {getFiltersSectionDOM} from "./getFiltersSection.js";
import {invertedIndexSearch} from "../utils/invertedIndexSearch.js";

export const updateCardsDOM = (word, tagsList = {}) => {
    const filterSection = document.getElementById("filters");
    const recipesSection = document.getElementById("recipes");

    filterSection.innerHTML = "";
    recipesSection.innerHTML = "";

    let resultSearch = invertedIndexSearch(word);

    Object.keys(tagsList).forEach(tag => {
        if (tagsList[tag] === "ingredients") {
            resultSearch = searchByIngredients(tag, resultSearch);
        } else if (tagsList[tag] === "ustensiles") {
            resultSearch = searchByUtensil(tag, resultSearch);
        } else if (tagsList[tag] === "appareils") {
            resultSearch = searchByAppliance(tag, resultSearch);
        }
    });

    const result = getFiltersSectionDOM(resultSearch, tagsList);
    const recipesCount = getRecipesLength(resultSearch);

    getCardsSectionDOM(recipesSection, resultSearch, word);
    filterSection.append(result, recipesCount);
};
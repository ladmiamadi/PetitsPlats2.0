import {searchByAppliance, searchByIngredients, searchByUtensil} from "../utils/search.js";
import {getCardsSectionDOM} from "./getCardsSection.js";
import {getRecipesLength} from "./getRecipesLenght.js";
import {getFiltersSectionDOM} from "./getFiltersSection.js";
import {recipes} from "../data/recipes.js";

let resultSearch = [];

export const updateCardsDOM = (word, tagsList = {}, currentSearch = resultSearch) => {
    const filterSection = document.getElementById("filters");
    const recipesSection = document.getElementById("recipes");

    filterSection.innerHTML = "";
    recipesSection.innerHTML = "";

    //if ( currentSearch.length === 0 ) currentSearch = recipes;

    Object.keys(tagsList).forEach(tag => {
        if (tagsList[tag] === "ingredients") {
            currentSearch = searchByIngredients(tag, currentSearch);
        } else if (tagsList[tag] === "ustensiles") {
            currentSearch = searchByUtensil(tag, currentSearch);
        } else if (tagsList[tag] === "appareils") {
            currentSearch = searchByAppliance(tag, currentSearch);
        }
    });

    resultSearch = currentSearch;

    const result = getFiltersSectionDOM(currentSearch);
    const recipesCount = getRecipesLength(currentSearch);
    getCardsSectionDOM(recipesSection, currentSearch, word);
    filterSection.append(result, recipesCount);
};
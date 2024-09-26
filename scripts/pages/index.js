import {searchBar} from "../components/searchBar.js";
import {getFiltersSectionDOM} from "../templates/getFiltersSection.js";
import {getRecipesLength} from "../templates/getRecipesLenght.js";
import {getCardsSectionDOM} from "../templates/getCardsSection.js";
import {linearSearch} from "../utils/search.js";
import {recipes} from "../data/recipes.js";

const header = document.querySelector("header");
const search = searchBar();

let resultSearch = [];

let filters = getFiltersSectionDOM(recipes);

let recipesCount = getRecipesLength(recipes);

const filterSection = document.getElementById("filters");

const recipesSection = document.getElementById("recipes");

header.append(search);
filterSection.append(filters, recipesCount);

getCardsSectionDOM(recipesSection, recipes);

/**************************************/
// LINEAR SEARCH
/***************************************/

const searchInput= document.getElementById("searchBar");
searchInput.addEventListener("input", (event) => {
    const word = event.target.value;

    filterSection.innerHTML = "";

    if(word.length >= 3) {
        resultSearch = linearSearch(word);
        getCardsSectionDOM(recipesSection, resultSearch, word);
        recipesCount = getRecipesLength(resultSearch);
        filters = getFiltersSectionDOM(resultSearch);
    } else {
        getCardsSectionDOM(recipesSection, recipes);
        recipesCount = getRecipesLength(recipes);
        filters = getFiltersSectionDOM(recipes);
    }

    filterSection.append(filters, recipesCount);
})
import {searchBar} from "../components/searchBar.js";
import {getFiltersSectionDOM} from "../templates/getFiltersSection.js";
import {getRecipesLength} from "../templates/getRecipesLenght.js";
import {getCardsSectionDOM} from "../templates/getCardsSection.js";
import {recipes} from "../data/recipes.js";
import {updateCardsDOM} from "../templates/getUpdatedRecipes.js";

const tagsList = {};

const header = document.querySelector("header");
const search = searchBar();

const filters = getFiltersSectionDOM(recipes, tagsList);

const recipesCount = getRecipesLength(recipes);

const filterSection = document.getElementById("filters");

const recipesSection = document.getElementById("recipes");

header.append(search);
filterSection.append(filters, recipesCount);

getCardsSectionDOM(recipesSection, recipes);

/**************************************/
// SEARCH SECTION
/***************************************/

const searchInput= document.getElementById("searchBar");
searchInput.addEventListener("input", (event) => {
    const word = event.target.value;

    if(word.length >= 3) {
        updateCardsDOM(word, tagsList);
    } else {
        updateCardsDOM("", tagsList);
    }
});
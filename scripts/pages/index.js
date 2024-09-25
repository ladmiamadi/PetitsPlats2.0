import {searchBar} from "../components/searchBar.js";
import {getFiltersSectionDOM} from "../templates/getFiltersSection.js";
import {getRecipesLength} from "../templates/getRecipesLenght.js";
import {getCardsSectionDOM} from "../templates/getCardsSection.js";
import {recipes} from "../data/recipes.js";
import {getCard} from "../components/card.js";

const header = document.querySelector("header");
const search = searchBar();

const filters = getFiltersSectionDOM();
const filterDiv = document.createElement("div");
filterDiv.className = "flex gap-[63px]";
filterDiv.append(filters.ingredients, filters.appliances, filters.utensils);

const recipesLength = getRecipesLength();

const filterSection = document.getElementById("filters");

const recipesSection = document.getElementById("recipes");

header.append(search);
filterSection.append(filterDiv, recipesLength);

getCardsSectionDOM(recipesSection);
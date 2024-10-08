import {filter} from "../components/filter.js";

export const getFiltersSectionDOM = (recipes, tagsList) => {
    const filterDiv = document.createElement("div");
    filterDiv.className = "flex gap-[63px]";

    const ingredients = document.createElement('div');
    const ingredientsFilter = filter("ingredients", recipes, tagsList);

    ingredients.append(ingredientsFilter.button, ingredientsFilter.modalContent);

    const appliances = document.createElement('div');
    const appliancesFilter = filter("appareils", recipes, tagsList);

    appliances.append(appliancesFilter.button, appliancesFilter.modalContent);

    const utensils= document.createElement('div');
    const utensilsFilter= filter("ustensiles", recipes, tagsList);

    utensils.append(utensilsFilter.button, utensilsFilter.modalContent);

    filterDiv.append(ingredients, appliances, utensils);

    return filterDiv;
}
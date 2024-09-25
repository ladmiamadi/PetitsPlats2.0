import {filter} from "../components/filter.js";

export const getFiltersSectionDOM = () => {
    const ingredients = document.createElement('div');
    const ingredientsFilter = filter("ingredients");

    ingredients.append(ingredientsFilter.button, ingredientsFilter.modalContent);

    const appliances = document.createElement('div');
    const appliancesFilter = filter("appareils");

    appliances.append(appliancesFilter.button, appliancesFilter.modalContent);

    const utensils= document.createElement('div');
    const utensilsFilter= filter("ustensiles");

    utensils.append(utensilsFilter.button, utensilsFilter.modalContent);

    return { ingredients, appliances , utensils};
}
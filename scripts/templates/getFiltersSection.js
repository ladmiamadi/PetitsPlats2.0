import {filter} from "../components/filter.js";

export const getFiltersSectionDOM = () => {
    const ingredients = document.createElement('div');
    const ingredientsFilter = filter("ingredients");

    ingredients.append(ingredientsFilter.button, ingredientsFilter.modalContent);

    const devices= document.createElement('div');
    const devicesFilter= filter("appareils");

    devices.append(devicesFilter.button, devicesFilter.modalContent);

    const utensils= document.createElement('div');
    const utensilsFilter= filter("ustensiles");

    utensils.append(utensilsFilter.button, utensilsFilter.modalContent);

    return { ingredients, devices , utensils};
}
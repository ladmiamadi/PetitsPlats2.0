import {addTag} from "../components/tag.js";

export const getFilterList = (filter, recipes) => {
    let filterList = {};

    if(filter === "ingredients") {
        recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredientItem => {
                filterList[ingredientItem.ingredient] = "ingredients";
            });
        });
    } else if (filter === "appareils") {
        recipes.forEach(recipe => {
            filterList[recipe.appliance] = "appareils";
        });
    } else if (filter === "ustensiles") {
        recipes.forEach(recipe => {
            recipe.ustensils.forEach(utensil => {
                filterList[utensil] = "ustensiles";
            });
        });
    }

    return Object.keys(filterList).sort().reduce((sortedObj, key) => {
        sortedObj[key] = filterList[key];
        return sortedObj;
    }, {});
};

export const updateFilter = (filter, recipes, ul) => {
    ul.innerHTML = "";
    const filterData = getFilterList(filter, recipes);

    Object.keys(filterData).forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item;
        li.className = "first-letter:uppercase text-darkGrey text-[14px] py-[9px] px-[16px] cursor-pointer hover:bg-yellow";
        li.onclick = () => addTag(item,filterData, ul, recipes);
        ul.append(li);
    })

    return ul;
};
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

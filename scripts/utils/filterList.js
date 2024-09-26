export const getFilterList = (filter, recipes) => {
    let filterList = [];

    if(filter === "ingredients") {
        recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredientItem => {
                filterList.push(ingredientItem.ingredient);
            });
        });
    } else if (filter === "appareils") {
        filterList = recipes.map(recipe => recipe.appliance);
    } else if (filter === "ustensiles") {
        filterList = recipes.flatMap(recipe => recipe.ustensils);
    }

    return [...new Set(filterList)].sort();
};
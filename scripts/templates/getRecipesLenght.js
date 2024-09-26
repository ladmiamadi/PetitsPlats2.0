export const getRecipesLength = (recipes) => {
    const recipesLength = recipes.length;

    const h3 = document.createElement("h3");

    h3.textContent = `${recipesLength} recettes`;
    h3.className = "font-anton text-[21px] pt-[12px]";

    return h3;
}
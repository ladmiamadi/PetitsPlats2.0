import {getIngredient} from "./ingredient.js";

export const getCard = (recipe) => {
    const card = document.createElement("article");
    card.className = "w-[380px] flex flex-col bg-white rounded-[21px] pb-[61px] overflow-hidden shadow-md cursor-pointer relative";

    const cookingTime = document.createElement("span");
    cookingTime.textContent = `${recipe.time}min`;
    cookingTime.className = "absolute w-[63px] h-[26px] top-[21px] " +
        "right-[22px] bg-yellow text-[12px] text-black px-[5px] py-[15px] " +
        "rounded-[14px] flex justify-center items-center"

    const cardImage = document.createElement("img");
    cardImage.src = `assets/images/recipes/${recipe.image}`;
    cardImage.alt = recipe.name;
    cardImage.className = "w-full h-[253px] object-cover";

    const recipeTitle = document.createElement("h4");
    recipeTitle.textContent = recipe.name;
    recipeTitle.className = "px-[25px] py-[29px] font-anton text-[18px]";

    const recipeDetails = document.createElement("div");
    recipeDetails.className = "flex flex-col px-[25px]";

    const title1 = document.createElement("h4");
    title1.textContent = "recette";
    title1.className = "text-[12px] text-grey uppercase pb-[15px]";

    const p = document.createElement("p");
    p.className = "text-[14px] text-darkGrey mb-[32px]";
    p.textContent = recipe.description;

    const title2 = document.createElement("h4");
    title2.textContent = "ingrédients";
    title2.className = "text-[12px] text-grey uppercase pb-[15px]";

    const ingredientDiv = document.createElement("div");
    ingredientDiv.className = "grid grid-cols-2";

    recipe.ingredients.forEach(ingredient => ingredientDiv.append(getIngredient(ingredient)));

    recipeDetails.append(title1, p, title2, ingredientDiv);

    card.append(cardImage, cookingTime, recipeTitle, recipeDetails);

    return card;
}
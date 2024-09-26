import {getCard} from "../components/card.js";
import {recipes} from "../data/recipes.js";

export const getCardsSectionDOM = (recipesSection, recipes, word) => {
    recipesSection.innerHTML = "";
    recipesSection.classList.add("grid-cols-3");

    recipes.forEach(card => {
        let item = getCard(card);
        recipesSection.append(item);
    });

    if(recipes.length === 0) {
        if (recipes.length === 0) {
            recipesSection.classList.remove("grid-cols-3");

            const h3 = document.createElement("h3");
            h3.innerText = `Aucune recette ne contient ${word} vous pouvez chercher «tarte aux pommes », « poisson », etc..`;
            h3.className = "font-anton text-[18px] pt-[12px] pb-[20px]";
            recipesSection.append(h3);
        }
    }
}
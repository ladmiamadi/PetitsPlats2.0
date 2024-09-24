import {recipes} from "../data/recipes.js";
import {getCard} from "../components/card.js";

export const getCardsSectionDOM = (recipesSection) => {
    recipes.forEach(card => {
        let item = getCard(card);
        recipesSection.append(item);
    });
}
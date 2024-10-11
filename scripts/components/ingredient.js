export const getIngredient = (item) => {
    const div = document.createElement("div");
    div.className = "text-[14px]";

    const p = document.createElement("p");
    p.textContent = item.ingredient;
    p.className = "text-darkGrey";

    const quantity = document.createElement("p");
    quantity.className = "text-grey mb-[21px]";
    quantity.textContent = item.quantity + (item.unit ? " " + item.unit : "");

    div.append(p, quantity);

    return div;
}
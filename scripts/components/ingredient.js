export const getIngredient = (item) => {
    const div = document.createElement("div");
    div.className = "text-[14px]";

    let p = document.createElement("p");
    p.textContent = item.ingredient;
    p.className = "text-darkGrey";

    let quantity = document.createElement("p");
    quantity.className = "text-grey mb-[21px]";
    quantity.textContent = item.quantity + (item.unit ? " " + item.unit : "");

    div.append(p, quantity);

    return div;
}
import {dropdownFilter} from "../utils/dropdownFilter.js";

export const filter = (filter) => {
    const button = document.createElement('button');
    button.innerHTML = `<span>${filter}</span><span><i class="fa-solid fa-chevron-down" id=${filter}Arrow></i></span>`;
    button.className = "w-[195px] h-[56px] flex justify-between align-center bg-white text-darkGrey px-[16px] py-[17px] " +
        "rounded-[11px] cursor-pointer capitalize";
    button.id = `${filter}Filter`;
    button.onclick = () => dropdownFilter(`${filter}Filter`, `${filter}Modal`, `${filter}Arrow`);

    const modalContent = document.createElement("div");
    modalContent.style.display = "none";
    modalContent.className = "w-[195px] h-[259px] bg-white text-darkGrey px-[16px] overflow-hidden rounded-br-[11px] rounded-bl-[11px]";
    modalContent.id = `${filter}Modal`;
    modalContent.innerHTML = `<h1>Liste des ${filter}</h1>`;

    return { button, modalContent };
}
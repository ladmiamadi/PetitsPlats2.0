import {dropdownFilter} from "../utils/dropdownFilter.js";
import {getFilterList} from "../utils/filterList.js";

export const filter = (filter, recipes) => {
    const button = document.createElement('button');
    button.innerHTML = `<span>${filter}</span><span><i class="fa-solid fa-chevron-down" id=${filter}Arrow></i></span>`;
    button.className = "w-[195px] h-[56px] flex justify-between align-center bg-white text-darkGrey px-[16px] py-[17px] " +
        "rounded-[11px] cursor-pointer capitalize";
    button.id = `${filter}Filter`;
    button.onclick = () => dropdownFilter(`${filter}Filter`, `${filter}Modal`, `${filter}Arrow`);

    const modalContent = document.createElement("div");
    modalContent.style.display = "none";
    modalContent.className = "w-[195px] h-[259px] bg-white text-darkGrey overflow-y-scroll relative rounded-br-[11px] rounded-bl-[11px]";
    modalContent.id = `${filter}Modal`;

    const form = document.createElement("form");
    form.className = "px-[16px]";
    const input = document.createElement("input");
    input.type = "text";
    input.className = "w-full h-[36px] border border-lightGrey my-[14px] rounded-[2px]";

    const span = document.createElement("span");
    span.className = "text-lightGrey text-[13px] absolute top-[21px] right-[25px] z-10 mb-[24px]";
    span.innerHTML = "<i class=\"fa-solid fa-magnifying-glass\"></i>";

    const filterList = document.createElement("ul");
    const filterData = getFilterList(filter, recipes);

    filterData.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        li.className = "first-letter:uppercase text-darkGrey text-[14px] py-[9px] px-[16px] cursor-pointer hover:bg-yellow";
        li.onclick = () => getTag(item);
        filterList.append(li);
    })

    form.append(span, input);
    modalContent.append(form, filterList);

    return { button, modalContent };
}
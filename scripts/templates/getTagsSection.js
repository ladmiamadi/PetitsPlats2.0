import {addTag, deleteTag} from "../components/tag.js";

let tagsList = {};
export const getTagsSectionDOM = (tags) => {
    const tagsSection = document.getElementById("tags");
    tagsSection.innerHTML = "";

    Object.keys(tags).forEach(tag => {
        const tagDiv = document.createElement("div");
        tagDiv.className = "flex justify-between items-center  w-auto bg-yellow rounded-[10px] mr-[20px] my-[10px]";

        const p = document.createElement("p");
        p.innerText = tag;
        p.className = "px-[18px] py-[17px] text-[14px]";

        const button = document.createElement("button");
        button.innerHTML = "<i class=\"fa-solid fa-xmark\"></i>";
        button.className = "text-[10px] p-[21px] text-darkGrey";
        button.onclick = () => deleteTag(tag, tags);

        tagDiv.append(p, button);
        tagsSection.appendChild(tagDiv);
    });
};

export const searchTag = (event, filter, tags) => {
    const tag = event.target.value.toLowerCase();
    const ul = document.getElementById(`filterList${filter}`);

    ul.innerHTML = "";

    const resultList = Object.keys(tags).filter(item => item.toLowerCase().includes(tag));

    resultList.forEach(result => {
        const li = document.createElement("li");
        li.textContent = result;
        li.onclick = () => addTag(result, filter, tagsList);
        li.className = "first-letter:uppercase text-darkGrey text-[14px] py-[9px] px-[16px] cursor-pointer hover:bg-yellow";
        ul.appendChild(li);
    });
}
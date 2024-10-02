import {deleteTag} from "../components/tag.js";

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
}
export const searchBar = () => {
    const form = document.createElement('form');
    form.className = "w-[954px] absolute top-[406px] left-[50%] translate-x-[-50%]";
    form.innerHTML =  "<form>" +
        "<input type='text' class='w-full h-[72px] rounded-[11px] relative pt-[24px] pb-[26px] pl-[36px] text-grey' " +
        "placeholder='Rechercher une recette, un ingrédient, ..'/>" +
        "<button type='submit' class='absolute top-[10px] right-[10px] p-[12px] bg-darkGrey hover:bg-yellow text-grey w-[51px] h-[51px] text-[20px] text-white rounded-[10px]'>" +
        "<i class=\"fa-solid fa-magnifying-glass\"></i>" +
        "</button>" +
        "</form>"

    return form;
}
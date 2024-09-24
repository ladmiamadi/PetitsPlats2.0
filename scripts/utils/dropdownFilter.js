export const dropdownFilter = (buttonId, modalId, arrow) => {
    const modal = document.getElementById(modalId);
    const chevron = document.getElementById(arrow);
    const toggleButton = document.getElementById(buttonId);

    if (modal.style.display === 'none') {
        modal.style.display = 'block';
        toggleButton.style.borderBottomRightRadius = "0";
        toggleButton.style.borderBottomLeftRadius = "0";
        chevron.classList.remove("fa-chevron-down");
        chevron.classList.add("fa-chevron-up")
    } else {
        modal.style.display = 'none';
        toggleButton.style.borderBottomRightRadius = "11px";
        toggleButton.style.borderBottomLeftRadius = "11px";
        chevron.classList.remove("fa-chevron-up");
        chevron.classList.add("fa-chevron-down");
    }
}

import "./style.css";

const dropDownContainer = document.querySelectorAll(".dropdown-container");


dropDownContainer.forEach(dropdown => dropdown.addEventListener('mouseover', () => {
    dropdown.children[1].classList.remove("hide");
}));

dropDownContainer.forEach(dropdown => dropdown.addEventListener('mouseleave', () => {
    dropdown.children[1].classList.add("hide");
}));

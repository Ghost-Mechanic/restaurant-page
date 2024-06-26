import { createHomepage } from "./homepage";
import { createMenu } from "./menu";
import { createAboutPage } from "./about";

// get references to each button in the navigation bar
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

// call createHomepage to initialize webpage with homepage content
createHomepage();
homeButton.classList.add("active-button");

const content = document.querySelector("#content");

// add event listeners to each button that clear the content and replace it
// with their appropriate content by calling module function
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    menuButton.classList.remove("active-button");
    aboutButton.classList.remove("active-button");
    homeButton.classList.add("active-button");
    createHomepage();
});

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    homeButton.classList.remove("active-button");
    aboutButton.classList.remove("active-button");
    menuButton.classList.add("active-button");
    createMenu();
});

aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    menuButton.classList.remove("active-button");
    homeButton.classList.remove("active-button");
    aboutButton.classList.add("active-button");
    createAboutPage();
});
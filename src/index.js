import { createHomepage } from "./homepage";
import { createMenu } from "./menu";
import { createAboutPage } from "./about";

// get references to each button in the navigation bar
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

// call createHomepage to initialize webpage with homepage content
createHomepage();

const content = document.querySelector("#content");

// add event listeners to each button that clear the content and replace it
// with their appropriate content by calling module function
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    createHomepage();
});

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    createMenu();
});

aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    createAboutPage();
});
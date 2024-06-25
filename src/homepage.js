import './style.css';
import Burger from './hamburger.png';

function createHomepage() {
    const content = document.querySelector("#content");

    const newIcon = new Image();
    newIcon.src = Burger;
    newIcon.classList.add("burger");
    content.appendChild(newIcon);

    const headline = document.createElement("h1");
    headline.textContent = "Best burgers in Chicago!";
    headline.classList.add("headline");
    content.appendChild(headline);

    const description = document.createElement("p");
    description.textContent = 
        "At our restaurant in the South Side of Chicago you will find the best burgers in the city!\n" +
        "Located conveniently off the expressway and near a CTA train station, there will always be a\n" +
        "quick and easy way to reach our establishment. Don't miss out on our burgers, visit us and tell your friends!";

    description.classList.add("description");
    content.appendChild(description);
}

export { createHomepage };
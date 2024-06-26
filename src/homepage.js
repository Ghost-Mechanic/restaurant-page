import './style.css';
import Burger from './hamburger.png';

// this function creates the homepage for the restaurant
function createHomepage() {
    const content = document.querySelector("#content");

    // create a burger icon and add it to the webpage
    const newIcon = new Image();
    newIcon.src = Burger;
    newIcon.classList.add("burger");
    content.appendChild(newIcon);

    // create a headline and add it to the page
    const headline = document.createElement("h1");
    headline.textContent = "Best burgers in Chicago!";
    headline.classList.add("headline");
    content.appendChild(headline);

    // create a short description of the restaurant and add it to the page
    const description = document.createElement("p");
    description.textContent = 
        "At our restaurant in the South Side of Chicago you will find the best burgers in the city!\n" +
        "Located conveniently off the expressway and near a CTA train station, there will always be a\n" +
        "quick and easy way to reach our establishment. Don't miss out on our burgers, visit us and tell your friends!";
    description.classList.add("description");
    content.appendChild(description);

    // include hours
    const hours = document.createElement("p");
    hours.textContent = "We are open 24/7 and closed on holidays!";
    hours.classList.add("description");
    content.appendChild(hours);
}

export { createHomepage };
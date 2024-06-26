import './style.css';

// this function creates the menu content
function createMenu() {
    const content = document.querySelector("#content");

    // create a menu section titled "Burgers"
    const burgersTitle = document.createElement("h3");
    burgersTitle.textContent = "Burgers";
    burgersTitle.classList.add("menu-section-title");
    content.appendChild(burgersTitle);

    const burgerSection = document.createElement("div");
    burgerSection.classList.add("menu-section");

    // create p element with the content of the burger menu
    const burgerMenu = document.createElement("p");
    burgerMenu.textContent = 
        "Hamburger\n" +
        "Cheeseburger\n" +
        "Double Cheeseburger\n"
    burgerMenu.classList.add("menu-section-text");

    // create p element with the prices of the burger items
    const burgerPrices = document.createElement("p");
    burgerPrices.textContent = 
        "3.99\n" +
        "4.99\n" +
        "5.99\n";
    burgerPrices.classList.add("menu-section-text");

    // add burger section to content box
    burgerSection.appendChild(burgerMenu);
    burgerSection.appendChild(burgerPrices);
    content.appendChild(burgerSection);

    // create a new sides section titled "Sides"
    const sidesTitle = document.createElement("h3");
    sidesTitle.textContent = "Sides";
    sidesTitle.classList.add("menu-section-title");
    content.appendChild(sidesTitle);

    const sidesSection = document.createElement("div");
    sidesSection.classList.add("menu-section");

    // create a new element with the content of the sides menu
    const sidesMenu = document.createElement("p");
    sidesMenu.textContent = 
        "Fries\n" +
        "Cheese Fries\n";
    sidesMenu.classList.add("menu-section-text");

    // create a new element with the prices of the sides
    const sidePrices = document.createElement("p");
    sidePrices.textContent = 
        "1.99\n" +
        "2.49\n";
    sidePrices.classList.add("menu-section-text");

    // add sides section to content box
    sidesSection.appendChild(sidesMenu);
    sidesSection.appendChild(sidePrices);
    content.appendChild(sidesSection);

    // create a new drinks section titled "Drinks"
    const drinksTitle = document.createElement("h3");
    drinksTitle.textContent = "Drinks";
    drinksTitle.classList.add("menu-section-title");
    content.appendChild(drinksTitle);

    const drinksSection = document.createElement("div");
    drinksSection.classList.add("menu-section");

    // create a new element with the contents of the drinks menu
    const drinksMenu = document.createElement("p");
    drinksMenu.textContent = 
        "Can of Pop\n" + 
        "Bottle of Water";
    drinksMenu.classList.add("menu-section-text");

    // create a new element with the prices of the drinks
    const drinkPrices = document.createElement("p");
    drinkPrices.textContent = 
        "1.49\n" +
        "0.99\n";
    drinkPrices.classList.add("menu-section-text");

    // add drinks section to content box
    drinksSection.appendChild(drinksMenu);
    drinksSection.appendChild(drinkPrices);
    content.appendChild(drinksSection);
}

export { createMenu };
import './style.css';

// this function will create the about section on the webpage
function createAboutPage() {
    const content = document.querySelector("#content");

    // add an "about us" section to the page
    const aboutText = document.createElement("p");
    aboutText.textContent = 
        "Welcome to our establishment! Here at our burger restaurant, we have\n" +
        "a simple mission that we have been focused on since 1970: delight our\n" +
        "customers with the best burgers in Chicago. We craft our burgers from\n" +
        "only the finest of ingredients and hand-cut our fries to ensure a consistently\n" +
        "delicious meal for every visit. Please visit us and do not hesitate to\n" +
        "contact us for any questions you may have. Hope to see you soon!\n";
    aboutText.classList.add("about-text")

    // add a title for contact information
    const contactTitle = document.createElement("h3");
    contactTitle.textContent = "Contact Us";
    contactTitle.classList.add("menu-section-title");

    // create a section that will contain contact info
    const contactInfoSection = document.createElement("div");
    contactInfoSection.classList.add("menu-section");
    
    // create text for contact methods
    const contactMethods = document.createElement("p");
    contactMethods.textContent = 
        "Phone:\n" +
        "Email:\n";
    contactMethods.classList.add("menu-section-text");

    // create text for actual contact info
    const contactInfo = document.createElement("p");
    contactInfo.textContent = 
        "773-555-5555\n" +
        "bestburgerchicago@gmail.com\n";
    contactInfo.classList.add("menu-section-text");

    contactInfoSection.appendChild(contactMethods);
    contactInfoSection.appendChild(contactInfo);

    // add "about us" text, "contact us" title, and contact info to the content section
    content.appendChild(aboutText);
    content.appendChild(contactTitle);
    content.appendChild(contactInfoSection);
}

export { createAboutPage };
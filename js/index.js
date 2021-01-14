const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//Navigation
let naviOne = document.querySelectorAll('a');
naviOne[0].textContent = siteContent["nav"]['nav-item-1'];
naviOne[1].textContent = siteContent["nav"]['nav-item-2'];
naviOne[2].textContent = siteContent["nav"]['nav-item-3'];
naviOne[3].textContent = siteContent["nav"]['nav-item-4'];
naviOne[4].textContent = siteContent["nav"]['nav-item-5'];
naviOne[5].textContent = siteContent["nav"]['nav-item-6'];


//Task 3 Append and Prepend in Nav Menu
let parentNav = document.querySelector("nav");
let newLink = document.createElement("a");
newLink.textContent = "Home";
let secondLink = document.createElement("a");
secondLink.textContent = "Store";
parentNav.appendChild(secondLink);
parentNav.prepend(newLink);

//Task 3 Navigation Color Adjustment to Black
const navColor = document.querySelectorAll("a");
navColor.forEach(element => {
    element.style.color = "green";
});


//Call to Action
let actionHeader = document.querySelector(".cta-text h1");
actionHeader.textContent = siteContent["cta"]["h1"];

let actionButton = document.querySelector(".cta-text button");
actionButton.textContent = siteContent["cta"]["button"];

//Main Content
let mainContent = document.querySelectorAll(".top-content .text-content h4");
mainContent[0].textContent = siteContent["main-content"]["features-h4"];
mainContent[1].textContent = siteContent["main-content"]["about-h4"];

let paragraphContent = document.querySelectorAll(".top-content .text-content p");
paragraphContent[0].textContent = siteContent["main-content"]["features-content"];
paragraphContent[1].textContent = siteContent["main-content"]["about-content"];

//Bottom Content
let bottomTitle = document.querySelectorAll(".bottom-content .text-content h4");
bottomTitle[0].textContent = siteContent["main-content"]["services-h4"];
bottomTitle[1].textContent = siteContent["main-content"]["product-h4"];
bottomTitle[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContent = document.querySelectorAll(".bottom-content .text-content p");
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

//Contact Section
let contactHead = document.querySelector(".contact h4");
contactHead.textContent = siteContent["contact"]["contact-h4"];

let contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

//Footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];


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
//Nav Tags
const navTag = document.querySelectorAll("header nav a");
navTag[0].textContent = siteContent.nav['nav-item-1']
navTag[1].textContent = siteContent.nav['nav-item-2']
navTag[2].textContent = siteContent.nav['nav-item-3']
navTag[3].textContent = siteContent.nav['nav-item-4']
navTag[4].textContent = siteContent.nav['nav-item-5']
navTag[5].textContent = siteContent.nav['nav-item-6']

navTag.forEach(a => {
  console.log(a);
  a.style.color = 'green';
})
/*IMG*/

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Code Image 
let mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

//Image Across Screen
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//H1 and Button

let DOM = document.querySelector('h1');
DOM.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;



// Top Content 
let topHeading = document.querySelectorAll('.main-content .text-content h4');
topHeading[0].textContent = siteContent['main-content']['features-h4']
topHeading[1].textContent = siteContent['main-content']['about-h4']
topHeading[2].textContent = siteContent['main-content']['services-h4']
topHeading[3].textContent = siteContent['main-content']['product-h4']
topHeading[4].textContent = siteContent['main-content']['vision-h4']


let topContent = document.querySelectorAll('.main-content .text-content p');
topContent[0].textContent = siteContent['main-content']['features-content']
topContent[1].textContent = siteContent['main-content']['about-content']
topContent[2].textContent = siteContent['main-content']['services-content']
topContent[3].textContent = siteContent['main-content']['product-content']
topContent[4].textContent = siteContent['main-content']['vision-content']


//Contact Section

let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4']


let contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent['contact']['address']
contactContent[1].textContent = siteContent['contact']['phone']
contactContent[2].textContent = siteContent['contact']['email']


//Footer
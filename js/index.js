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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation Bar
const headerTag = document.querySelector('header');
headerTag.style.background = "grey";
headerTag.style.padding = "10px";

const aTag = document.querySelectorAll('a')
let i = 0;
aTag.forEach(a => {
  aTag[i].style.color= 'white';
  i++
  a.textContent = siteContent.nav[`nav-item-${i}`]
 
});
console.log(aTag, 'navigation');

// h1

const h1Tag = document.querySelector('h1');
h1Tag.textContent = siteContent.cta['h1'];
h1Tag.style.background = "green";
h1Tag.style.borderRadius = "10rem";

// Button
const buttonTag = document.querySelector('button');
buttonTag.textContent = siteContent.cta['button'];
buttonTag.style.color = "white";
buttonTag.style.fontWeight = "bold";
buttonTag.style.background = "red";
buttonTag.style.borderRadius = "10rem";

// cta image
const image = document.getElementById('cta-img');
image.setAttribute('src', siteContent['cta']['img-src']);

// h4s
const h4s = document.querySelectorAll('h4');
h4s[0].textContent = siteContent['main-content']['features-h4'];
h4s[0].style.fontSize = "xx-large";
h4s[0].style.color = "red";
h4s[1].textContent = siteContent['main-content']['about-h4'];
h4s[1].style.fontSize = "xx-large";
h4s[1].style.color = "red";
h4s[2].textContent = siteContent['main-content']['services-h4'];
h4s[3].textContent = siteContent['main-content']['product-h4'];
h4s[4].textContent = siteContent['main-content']['vision-h4'];
h4s[5].textContent = siteContent.contact['contact-h4'];



// main content p tags
const ps = document.querySelectorAll('p');
ps[0].textContent = siteContent['main-content']['features-content'];
ps[1].textContent = siteContent['main-content']['about-content'];
ps[2].textContent = siteContent['main-content']['services-content'];
ps[3].textContent = siteContent['main-content']['product-content'];
ps[4].textContent = siteContent['main-content']['vision-content'];



// main content image
const mainImage = document.getElementById('middle-img');
mainImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

const mainContent = document.querySelector('.main-content');
mainContent.style.background = "#FFF288";
mainContent.style.paddingTop = "5px";

// contact p
ps[5].textContent = siteContent.contact['address'];
ps[6].textContent = siteContent.contact['phone'];
ps[7].textContent = siteContent.contact['email'];

// footer p
ps[8].textContent = siteContent.footer['copyright'];
ps[8].style.color = "white";

const footerTag = document.querySelector('footer');
footerTag.style.background = "#909090";
footerTag.style.padding = "10px"









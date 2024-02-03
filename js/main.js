/*Navbar Open/Close toggle button */
const hamburgerCheckbox = document.getElementById("hamburgerCheckbox");
const navElement = document.querySelector('.nav');

hamburgerCheckbox.addEventListener("change", function () {
  navElement.classList.toggle("collapsible--expanded", this.checked);
});

/*Navbar Sticky*/
window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector("nav");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Theme Toggle */
const checkbox = document.getElementById("toggletheme");
const navItems = document.querySelectorAll(".nav__item");
const heroTagline = document.querySelectorAll(".hero__tagline");
const blockTexts = document.querySelectorAll(".block__text");
const blockHeadings = document.querySelectorAll(".block__heading");
const textSet = document.querySelector(".event__body__one");
const eventDescription = document.querySelectorAll(".event__description");
const footerIcons = document.querySelectorAll(".footer__icon");
const footerSections = document.querySelectorAll(".footer--section");
const cards = document.querySelectorAll(".card");
const cardHeadings = document.querySelectorAll(".card__heading");
const profileCards = document.querySelectorAll(".profile__card__body");
const socialMedias = document.querySelectorAll(".social__media");
const socialMediaIcons = document.querySelectorAll(".social__media__icon");
const banners = document.querySelectorAll(".banner");
const btnPrimaryAll = document.querySelectorAll(".button--primary");
const btnSecondaryAll = document.querySelectorAll(".button--secondary");
const btnAccentTwoAll = document.querySelectorAll(".button--accent--two");
const credits = document.querySelector('.credits');
const text1 = document.querySelector('.text1');


checkbox.addEventListener("change", () => {
  toggleTheme();
  document.body.classList.toggle("dark");
  navItems.forEach((navItem) => {
    navItem.classList.toggle("text-light");
  });
  heroTagline.forEach((navItem) => {
    navItem.classList.toggle("text-light");
  });
  document.querySelector(".nav").classList.toggle("sticky-light");
  blockTexts.forEach((blockText) => {
    blockText.classList.toggle("text-light");
  });
  blockHeadings.forEach((blockHeading) => {
    blockHeading.classList.toggle("text-light");
  });
  textSet.classList.toggle("text-light");
  eventDescription.forEach((ed) => {
    ed.classList.toggle("text-light");
  });
  document.querySelector(".footer").classList.toggle("footer-dark");
  
  document.querySelector(".nav__brand").classList.toggle("img-white");
  
  document.querySelector(".footer__brand").classList.toggle("img-white");
  footerIcons.forEach((icon) => {
    icon.classList.toggle("img-white");
  });
  socialMediaIcons.forEach((icon) => {
    icon.classList.toggle("img-white");
  });
  footerSections.forEach((fs) => {
    fs.classList.toggle("text-light");
  });
  document.querySelector(".credits").classList.toggle("text-light");
  cards.forEach((card) => {
    card.classList.toggle("card-dark");
    card.classList.toggle("text-light");
  });
  cardHeadings.forEach((cardHeading) => {
    cardHeading.classList.toggle("text-light");
  });
  profileCards.forEach((card) => {
    card.classList.toggle("profile__card__body__dark");
    card.classList.toggle("text-light");
  });
  socialMedias.forEach((socialMedia) => {
    socialMedia.classList.toggle("social__media__dark");
  });
  banners.forEach((banner) => {
    banner.classList.toggle("banner-dark");
  });
  btnPrimaryAll.forEach((btn) => {
    btn.classList.toggle("button--primary-dark");
  });
  btnSecondaryAll.forEach((btn) => {
    btn.classList.toggle("button--secondary-dark");
  });
  btnAccentTwoAll.forEach((btn) => {
    btn.classList.toggle("button--accent--two-dark");
  });
  document.querySelector(".nav__toggler").classList.toggle("img-white");
});

function toggleTheme() {
  const root = document.documentElement;

  if (checkbox.checked) {
    // Dark theme
    root.style.setProperty('--bb8-bg', '#000');
    root.style.setProperty('--accent', '#fff');
    credits.classList.add('text-light');
    text1.classList.add('text-light');
  } else {
    // Light theme
    root.style.setProperty('--bb8-bg', '#fff');
    root.style.setProperty('--accent', '#de7d2f');
    credits.classList.remove('text-light');
    text1.classList.remove('text-light');
  }
}






//============================

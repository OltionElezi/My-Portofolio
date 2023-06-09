window.addEventListener("load", () => {
  const currentUrl = window.location.href;
  if (currentUrl.endsWith("index.html")) {
    window.location.href = currentUrl + "#home";
  }
});
/*------------- Toggle NavBar --------------*/

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", (e) => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

/*--------------- Active Section ------------*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    e.preventDefault();
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
    }, 500);

    const currentUrl = window.location.href;
    const newUrl = currentUrl.split("#")[0] + e.target.hash;
    window.history.pushState(null, null, newUrl);
  }
});

function updateActiveSection() {
  const hash = window.location.hash;
  const activeSection = document.querySelector("section.active");
  if (activeSection) {
    activeSection.classList.remove("active", "fade-out");
  }
  const newActiveSection = document.querySelector(hash);
  if (newActiveSection) {
    newActiveSection.classList.add("active");
    window.scrollTo(0, 0);
  }
}

window.addEventListener("load", updateActiveSection);
window.addEventListener("hashchange", updateActiveSection);

/* -------------- About Tabs ---------------*/

const tabsContainer = document.querySelector(".about-tabs"),
  aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

/*--------------- Portfolio Item Detail Popup ------------- */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});
function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);

// Hide popup when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}
//Carousel

// const images = document.querySelectorAll("#portfolio-item-images img");
// let currentImageIndex = 0;

// document.querySelector("#prev-btn").addEventListener("click", () => {
//   images[currentImageIndex].style.display = "none";
//   currentImageIndex =
//     currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
//   images[currentImageIndex].style.display = "block";
// });

// document.querySelector("#next-btn").addEventListener("click", () => {
//   images[currentImageIndex].style.display = "none";
//   currentImageIndex =
//     currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
//   images[currentImageIndex].style.display = "block";
// });

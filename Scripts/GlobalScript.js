"use strict";

const logo = document.getElementById("nav-logo");
const searchInput = document.getElementById("nav-search-bar");

logo.addEventListener("click", function () {
    location.href = "../Views/LandingPage.html";
});

searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        location.href = "../Views/SearchPage.html?search=" + searchInput.value;
    }
});

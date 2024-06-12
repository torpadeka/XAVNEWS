"use strict";

const logo = document.getElementById("nav-logo");
const searchInput = document.getElementById("nav-search-bar");
const filterButton = document.getElementById("filter-icon");

logo.addEventListener("click", function () {
    location.href = "../Views/LandingPage.html";
});

if (searchInput != null) {
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            location.href =
                "../Views/SearchPage.html?search=" + searchInput.value;
        }
    });
}

if (filterButton != null) {
    filterButton.addEventListener("click", function () {
        location.href = "../Views/CategoriesPage.html";
    });
}

const userProfile = document.getElementById("profile-image");
const staffProfile = document.getElementById("staff-image");

if (userProfile != null) {
    userProfile.addEventListener("click", function () {
        location.href = "../Editorial/SubmitArticlePage.html";
    });
}

if (staffProfile != null) {
    staffProfile.addEventListener("click", function () {
        location.href = "../Views/HomePage.html";
    });
}

const submitArticleButton = document.getElementById("submit-article-button");
const manageArticleButton = document.getElementById("manage-article-button");

if (submitArticleButton != null) {
    submitArticleButton.addEventListener("click", function () {
        location.href = "../Editorial/SubmitArticlePage.html";
    });
}

if (manageArticleButton != null) {
    manageArticleButton.addEventListener("click", function () {
        location.href = "../Editorial/ManageArticlePage.html";
    });
}

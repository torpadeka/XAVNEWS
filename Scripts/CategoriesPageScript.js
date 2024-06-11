"use strict";

const categoryItems = document.getElementsByClassName("category-item");
const selectedCategoryItems = document.getElementsByClassName(
    "category-item-selected"
);
const saveCategoryButton = document.getElementById("home-button");

saveCategoryButton.addEventListener("click", function () {
    location.href = "../Views/HomePage.html";
});

for (let i = 0; i < categoryItems.length; i++) {
    console.log("RUN");
    let item = categoryItems[i];
    item.addEventListener("click", function () {
        item.classList.toggle("category-item");
        item.classList.toggle("category-item-selected");
    });
}

for (let i = 0; i < selectedCategoryItems.length; i++) {
    console.log("RUN");
    let item = selectedCategoryItems[i];
    item.addEventListener("click", function () {
        item.classList.toggle("category-item");
        item.classList.toggle("category-item-selected");
    });
}

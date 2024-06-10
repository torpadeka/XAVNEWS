"use strict";

const articleCount = 8;

for (var i = 0; i < articleCount; i++) {
    var id = i + 1;
    const clickables = document.getElementsByClassName("article-id-" + id);

    for (var j = 0; j < clickables.length; j++) {
        let articleUrl = "../Views/ArticlePage.html?id=" + id;
        clickables[j].addEventListener("click", function () {
            location.href = articleUrl;
        });
    }
}

"use strict";

const articleTitles = [
    "New Starcraft II Mod Surges in Popularity Among Pros",
    "All Teams for MASTERS SHANGHAI are Locked In!",
    "Nintendo Takes Down Popular Switch Emulators",
    "Helldivers Have Won Against The 3rd Enemy Faction: SONY",
    "Devin AI was Found Faking Its Demo Video",
    "GPT-4 Courtesy of OpenAI Will Release Soon",
    "Local Indonesian Influencer Memes on Dumb Outrage",
    "YouTube Declares War on Adblockers Once Again",
];

const articleWriters = [
    "Jackie Williams",
    "Richardson Williams",
    "Bidoriya Ibuku",
    "Dremskiy Frendo",
    "Cool Hacker",
    "FuriNa Chan",
    "Joko Satoru",
    "Ronald Drump",
];

const articleContent = [
    "A new mod named “Evo Complete” that has appeared recently is now being played by many pros in the scene. It aims to combine the SC I and SC II experiences together with the right balance and fun. Some of the . . .",
    "The teams that are competing in this year's VALORANT MASTERS are now fully confirmed. Some upsets have been made, and new strides were forged forcibly by some of the newest teams. Here are the lineups for . . .",
    "Nintendo is back at it again, with their lawyer-isque shenanigans! This time, their target is none other than the Switch Emulators, which are broadly used to play older unsupported Nintendo Games with . . .",
    "DEMOCRACY WINS AGAIN! With the power of Democracy and Liberty by their side, the Helldivers community have proven that with enough willpower, even the largest corporations will tremble. It all started at . . .",
    "A new finding recently has found that the creators of Devin AI were faking its own demo video. The truth is simply that Devin as of now, is not capable of doing even half of what the demo suggests. This, unfortunately has . . .",
    "The newest iteration of the infamous ChatGPT has been announced to be released soon by their benevolent creator OpenAI. It is said that this new model is far, far better and advanced compared to all the previous ones. With a . . .",
    "Indonesian influencer Jerome Polin has recently found himself at the center of an unusual controversy after Indonesia's U23 national football team lost to Uzbekistan in the semifinals of the AFC U-23 Asian Cup . . .",
    "“They Will Never Win Against The Internet” Another recent move from the largest video platform on the planet has once again made it clear that Google intends not to stop, but double down on battling the adblockers. A . . .",
];

const articleListLeft = document.getElementById("article-list-left");
const articleListRight = document.getElementById("article-list-right");
const searchTitle = document.getElementById("search-menu-title");

const articleCount = articleTitles.length;

let leftList = true;

function getSearchQuery() {
    var query = window.location.search.substring(1);
    var pair = query.split("=");
    if (pair[0] === "search") {
        return pair[1];
    }

    return false;
}

let searchQuery = getSearchQuery();

if (searchQuery === false || searchQuery === "") {
    location.href = "../Views/HomePage.html";
}

searchQuery = searchQuery.replace("%20", " ");

searchInput.value = searchQuery;

searchTitle.innerHTML = `<span>Search Results of "${searchQuery}"</span>`;

for (var i = 0; i < articleCount; i++) {
    var id = i + 1;

    if (
        articleTitles[i].toLowerCase().includes(searchQuery.toLowerCase()) ||
        articleContent[i].toLowerCase().includes(searchQuery.toLowerCase()) ||
        articleWriters[i].toLowerCase().includes(searchQuery.toLowerCase())
    ) {
        if (leftList) {
            articleListLeft.insertAdjacentHTML(
                "beforeend",
                `
                <div class="article-item">
                    <img
                        class="article-thumbnail article-id-${id}"
                        src="../Assets/HomePage/thumbnail-${id}.png"
                        alt=""
                    />
                    <div class="article-details">
                        <div
                            class="article-details-title montserrat-bold article-id-${id}"
                        >
                            ${articleTitles[i]}
                        </div>
                        <div class="article-details-writer">
                            <img
                                src="../Assets/HomePage/profile-img-${id}.png"
                                class="article-details-writer-pfp"
                            />
                            <div
                                class="article-details-writer-name montserrat-light"
                            >
                                ${articleWriters[i]}
                            </div>
                        </div>
                        <div
                            class="article-details-description montserrat-light"
                        >
                        ${articleContent[i]}
                        </div>
                        <div
                            class="article-details-link montserrat-bold article-id-${id}"
                        >
                            <u>READ MORE >></u>
                        </div>
                    </div>
                </div>
            `
            );

            leftList = false;
        } else {
            articleListRight.insertAdjacentHTML(
                "beforeend",
                `
                <div class="article-item">
                    <img
                        class="article-thumbnail article-id-${id}"
                        src="../Assets/HomePage/thumbnail-${id}.png"
                        alt=""
                    />
                    <div class="article-details">
                        <div
                            class="article-details-title montserrat-bold article-id-${id}"
                        >
                            ${articleTitles[i]}
                        </div>
                        <div class="article-details-writer">
                            <img
                                src="../Assets/HomePage/profile-img-${id}.png"
                                class="article-details-writer-pfp"
                            />
                            <div
                                class="article-details-writer-name montserrat-light"
                            >
                                ${articleWriters[i]}
                            </div>
                        </div>
                        <div
                            class="article-details-description montserrat-light"
                        >
                        ${articleContent[i]}
                        </div>
                        <div
                            class="article-details-link montserrat-bold article-id-${id}"
                        >
                            <u>READ MORE >></u>
                        </div>
                    </div>
                </div>
            `
            );

            leftList = true;
        }

        const clickables = document.getElementsByClassName("article-id-" + id);

        for (var j = 0; j < clickables.length; j++) {
            let articleUrl = "../Views/ArticlePage.html?id=" + id;
            clickables[j].addEventListener("click", function () {
                location.href = articleUrl;
            });
        }
    }
}

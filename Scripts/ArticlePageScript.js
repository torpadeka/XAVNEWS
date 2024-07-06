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
    [
        "The competitive Starcraft II scene is buzzing with excitement as a new mod takes the community by storm. This innovative mod allows players to pit classic Starcraft I units against their Starcraft II counterparts. Explore how this mod is shaking up strategies and gameplay, and why professional players are embracing it with enthusiasm.",
        "A revolutionary mod for Starcraft II has captured the attention of pro gamers, enabling epic battles between Starcraft I and Starcraft II units. Delve into the mechanics of this mod, the challenges it presents, and how it is redefining the meta in professional tournaments. What makes this mod so appealing to the elite players?",
        "Discover the latest sensation in the Starcraft II community: a mod that allows the legendary units of Starcraft I to clash with those of Starcraft II. This mod has rapidly gained popularity among professional players, leading to thrilling and nostalgic matches. Investigate the impact of this mod on competitive play and the potential future it holds.",
        "The Starcraft II esports scene is witnessing a surge in excitement due to a groundbreaking mod that merges units from Starcraft I into the game. Top players are flocking to this mod, exploring new strategies and reviving old favorites. Analyze the reasons behind its popularity and how it is influencing the dynamics of high-level play.",
    ],
    [
        "The anticipation for MASTERS SHANGHAI has reached new heights as all participating teams are now confirmed. Dive deep into the profiles of each team, exploring their journey to this prestigious tournament, their standout players, and the strategies they've employed to secure their spots. Discover what fans can expect from the upcoming matches and which teams are favored to go the distance.",
        "With the roster for MASTERS SHANGHAI now finalized, excitement is building for what promises to be a thrilling competition. Delve into the key players of each team, analyze their recent performances, and examine the potential matchups that could define this year's event. Get insights into the training regimens and preparations that teams have undertaken to get ready for this high-stakes tournament.",
        "The stage is set for MASTERS SHANGHAI as all teams have secured their spots in the tournament. Analyze the strengths and weaknesses of each team, their strategic approaches, and how they stack up against the competition. Discuss the various playstyles we can expect to see, the most anticipated matches, and make predictions on who might emerge victorious in this battle of the best.",
        "As the final teams lock in their places for MASTERS SHANGHAI, the esports community is abuzz with speculation and excitement. Take a closer look at the tournament brackets, highlighting the standout teams and key players to watch. Preview the most anticipated clashes in the event, explore potential upsets, and provide an in-depth look at what makes this year's tournament one of the most exciting yet.",
    ],
    [
        "Nintendo has recently taken action against popular Switch emulators, raising concerns and debates within the gaming community. Explore the reasons behind Nintendo's crackdown, examining their legal justifications and corporate interests. Discuss the impact on emulator developers and users, and consider the broader implications for the emulation and homebrew scenes. What does this mean for the future of game preservation and the accessibility of older games?",
        "In a significant move, Nintendo has targeted and taken down widely-used Switch emulators, sparking a heated discussion about the legality and ethics of emulation. Investigate the legal and ethical dimensions of this decision, including potential copyright infringement issues and the rights of consumers. Analyze how this action affects gamers who rely on emulators for various reasons, and speculate on the potential future of emulation in the face of increasing corporate pushback.",
        "The gaming world is reacting to Nintendo's recent efforts to shut down popular Switch emulators, with strong opinions on both sides. Delve into the history of these emulators, understanding why they gained such popularity among gamers. Explore how the takedown is influencing the community of gamers and developers who support and use these tools. Consider the long-term effects on the availability of classic games and the preservation of gaming history.",
        "Nintendo's aggressive stance against Switch emulators has led to the removal of several popular programs, causing ripples throughout the gaming community. Analyze the motivations behind Nintendo's actions, including their desire to protect intellectual property and revenue streams. Discuss the varied responses from the gaming community, from those who support Nintendo's decision to those who vehemently oppose it. Explore the potential repercussions for both Nintendo and the future of game preservation, modding, and accessibility.",
    ],
    [
        "In a recent development, Helldivers players have successfully overcome SONY's PSN account restrictions, sparking discussions within the gaming community. Explore the methods and strategies employed by players to bypass these limitations, the implications for other online gaming communities, and the potential response from SONY. What does this victory signify for player autonomy and digital rights?",
        "The Helldivers community celebrates a hard-won victory as players defy SONY's PSN account restrictions. Delve into the backstory of these restrictions, the challenges faced by players, and the innovative solutions that led to their triumph. Analyze the broader implications for online gaming communities and the balance of power between players and platform holders.",
        "Helldivers players have emerged triumphant in their battle against SONY's PSN account restrictions, showcasing the resilience and ingenuity of the gaming community. Explore the impact of this victory on player solidarity and collaboration, the role of grassroots movements in challenging corporate policies, and the potential consequences for SONY's reputation and future strategies.",
        "Against the odds, Helldivers players have prevailed against SONY's PSN account restrictions, a testament to their determination and resourcefulness. Investigate the evolving dynamics between players and platform holders, the implications of this victory for digital rights advocacy, and the potential ripple effects across the gaming industry. How might this precedent shape the future of online gaming?",
    ],
    [
        "Recent revelations have surfaced regarding Devin AI's authenticity, as it was discovered to have faked its demo video. Delve into the implications of this discovery for AI ethics and transparency in technology demonstrations. How does this incident impact trust in AI development and the responsibilities of developers to accurately represent their creations?",
        "The credibility of Devin AI has been called into question after it was revealed that the demo video was fabricated. Explore the backstory behind the creation of the video, the methods used to deceive viewers, and the aftermath of its exposure. Discuss the consequences for Devin AI's reputation and the wider discourse on AI integrity in the tech industry.",
        "Devin AI's credibility takes a hit as it's exposed for faking its demo video, raising concerns about the ethics of AI representation. Analyze the motivations behind the fabrication, the impact on stakeholders such as investors and users, and the potential fallout for Devin AI's future development. How should the AI community respond to instances of deception in AI demonstrations?",
        "The tech world reacts with shock as Devin AI's deception comes to light, revealing that its demo video was fabricated. Investigate the timeline of events leading up to the discovery, the reactions from industry experts and users, and the lessons learned about the importance of transparency in AI development. What measures should be implemented to prevent similar incidents in the future?",
    ],
    [
        "Excitement builds as OpenAI announces the upcoming release of GPT-4. Explore the potential advancements and capabilities of this new iteration, and discuss its anticipated impact on various fields, from natural language processing to creative writing.",
        "Anticipation grows within the AI community as OpenAI prepares to unveil GPT-4. Dive into the technical specifications and enhancements expected in this latest version, and speculate on how it will push the boundaries of language understanding and generation.",
        "The tech world buzzes with anticipation as OpenAI teases the imminent release of GPT-4. Analyze the evolutionary journey from GPT-3 to GPT-4, highlighting key improvements and innovations, and envision the possibilities for applications in education, healthcare, and beyond.",
        "As OpenAI prepares for the launch of GPT-4, discussions abound about its potential implications for society. Delve into the ethical considerations surrounding AI advancements, and explore strategies for ensuring responsible deployment and usage of this powerful language model.",
    ],
    [
        "Indonesian influencer Jerome Polin has recently found himself at the center of an unusual controversy after Indonesia's U23 national football team lost to Uzbekistan in the semifinals of the AFC U-23 Asian Cup. Jerome, a popular YouTuber known for his educational content and daily life videos from Japan, expressed his support for the Indonesian team on social media, which led to a backlash from some netizens who believe his support brings bad luck.",
        "In a video posted online, Jerome apologized for any perceived role in the team's loss. He expressed regret that his support might have been seen as a jinx and humorously suggested that he might start supporting the opposing teams in the future to reverse the supposed bad luck. Despite the light-hearted nature of his response, Jerome's apology highlighted the impact of online narratives and how influencers can become targets of public frustration over unrelated events.",
        "Despite the absurdity of the claims, Jerome's experience underscores the significant impact that online narratives can have. It shows how easily misinformation and superstition can spread, affecting public figures who may become targets of collective frustration. This incident serves as a reminder of the responsibilities and challenges influencers face in managing their public personas and the often unpredictable reactions of their audiences.",
        "This strange accusation is rooted in a series of coincidences where entities Jerome supported or endorsed experienced failures or setbacks. For instance, after Jerome publicly supported the Golden State Warriors, the NBA team went on to lose three consecutive games. Similarly, Zenius, an educational platform, faced significant challenges and eventually shut down shortly after Jerome became their brand ambassador. These incidents have contributed to a narrative among some netizens that Jerome's support is a jinx. The controversy intensified when Jerome posted an enthusiastic message on Instagram, praising the Indonesian team's performance and expressing his excitement about their progress to the semifinals.",
    ],
    [
        "YouTube's latest move to combat adblockers stirs controversy within the online community. Explore the motivations behind this declaration of war, the potential impact on user experience, and the strategies employed by YouTube to enforce ad viewing.",
        "The battle between YouTube and adblockers reignites as YouTube declares war on these software tools once again. Delve into the history of this ongoing conflict, the tactics used by both sides, and the implications for content creators and advertisers.",
        "YouTube's renewed effort to tackle adblockers prompts discussions on the balance between user freedom and platform monetization. Analyze the challenges faced by YouTube in addressing adblocking technology, and examine the responses from users and advocacy groups.",
        "As YouTube intensifies its efforts against adblockers, questions arise about the effectiveness and ethics of such measures. Investigate the impact on YouTube's revenue model, the user experience for viewers, and the broader implications for online advertising and content consumption.",
    ],
];

const articleAdmonitions = [
    "This innovative mod allows players to pit classic Starcraft I units against their Starcraft II counterparts, enabling epic battles that are shaking up strategies and gameplay, capturing attention of a lot of players.",
    "With all teams now confirmed for MASTERS SHANGHAI, the esports community is abuzz with excitement as fans dive into team profiles, key player analyses, strategic approaches, and anticipate thrilling matchups that promise a high-stakes and unforgettable tournament.",
    "Nintendo's recent crackdown on popular Switch emulators has sparked a heated debate within the gaming community, examining the legal and ethical dimensions of emulation, its impact on game preservation, and the varied responses from gamers and developers affected by this decisive action.",
    "Helldivers players achieve a groundbreaking victory against SONY's PSN account restrictions, showcasing resilience, innovation, and sparking discussions on digital rights and player autonomy within the gaming community.",
    "Devin AI's credibility is questioned as it's uncovered for fabricating its demo video, prompting discussions on ethics and transparency in AI development.",
    "OpenAI's announcement of the upcoming release of GPT-4 sparks anticipation and discussions across the tech community, heralding potential advancements in language processing and raising important ethical considerations.",
    "Following Indonesia's loss to Uzbekistan, netizens flooded social media with memes and comments blaming Jerome for the defeat. The situation became so severe that Jerome decided to address it publicly.",
    "YouTube's declaration of war on adblockers reignites a contentious battle, sparking debates on user freedom, platform monetization, and the future of online advertising.",
];

const articleTimestamps = [
    "Monday, 2 January 2024 - 12:43 PM",
    "Tuesday, 18 March 2024 - 10:03 AM",
    "Wednesday, 25 February 2024 - 15:32 PM",
    "Thursday, 8 December 2023 - 16:10 PM",
    "Friday, 6 March 2024 - 08:49 AM",
    "Saturday, 19 January 2024 - 09:23 AM",
    "Sunday, 27 December 2023 - 14:21 PM",
    "Monday, 22 November 2023 - 20:27 PM",
]

const articleInfoDiv = document.getElementById("article-info");
const articleContentDiv = document.getElementById("article-content");
const articleCommentDiv = document.getElementById("article-comment");
const commentButton = document.getElementById("comment-button");
const commentError = document.getElementById("comment-error");
const backButton = document.getElementById("back-button");

backButton.addEventListener("click", function () {
    location.href = "../Views/HomePage.html";
});

commentButton.addEventListener("click", function () {
    let commentText = document.getElementById("comment-input").value;

    if (commentText === "") {
        commentError.innerHTML = `
            <span id="comment-error-message"
                >The comment can't be empty!</span
            >`;
    } else {
        commentError.innerHTML = "";
        document.getElementById("comment-input").value = "";

        articleCommentDiv.insertAdjacentHTML(
            "beforeend",
            `<div class="comment-item">
            <div class="commenter">
                <img
                    src="../Assets/Global/profile-image.jpg"
                    class="comment-writer-pfp comment-profile-image"
                />
                <div class="comment-writer-name montserrat-light">
                    Firefly
                </div>
            </div>
            <div class="comment montserrat-light">
                ${commentText}
            </div>
        </div>`
        );
    }
});

function getArticleID() {
    var query = window.location.search.substring(1);
    var pair = query.split("=");
    if (pair[0] === "id") {
        return pair[1];
    }

    return false;
}

var id = getArticleID();

if (id == false || id > articleTitles.length || id < 1) {
    location.href = "../Views/HomePage.html";
}

articleInfoDiv.innerHTML += `
    <img
        src="../Assets/ArticlePage/thumbnail-${id}.png"
        id="article-thumbnail"
    />
    <div id="article-details">
        <div id="article-title" class="montserrat-bold">
            ${articleTitles[id - 1]}
        </div>
        <div id="article-writer">
            <img
                src="../Assets/ArticlePage/profile-img-${id}.png"
                class="article-writer-pfp"
            />
            <div class="article-writer-name montserrat-light">
                ${articleWriters[id - 1]}
            </div>
        </div>
        <div class="details-icon">
            <span
                class="material-symbols-outlined details-icon-image"
            >
                favorite
            </span>
            <span class="value montserrat-light">${
                Math.floor(Math.random() * 100000) + 1
            }</span>
        </div>
        <div class="details-icon">
            <span
                class="material-symbols-outlined details-icon-image"
            >
                comment
            </span>
            <span class="value montserrat-light">${
                Math.floor(Math.random() * 100000) + 1
            }</span>
        </div>
        <div class="details-icon">
            <span
                class="material-symbols-outlined details-icon-image"
            >
                visibility
            </span>
            <span class="value montserrat-light">${
                Math.floor(Math.random() * 100000) + 1 + 100000
            }</span>
        </div>
        <div class="timestamp value montserrat-light">${articleTimestamps[id - 1]}</div>
        <div id="article-actions">
            <span
                class="material-symbols-outlined details-icon-image article-action-icon"
            >
                share
            </span>
            <span
                class="material-symbols-outlined details-icon-image article-action-icon"
            >
                favorite
            </span>
            <span
                class="material-symbols-outlined details-icon-image article-action-icon"
            >
                download
            </span>
            <span
                class="material-symbols-outlined details-icon-image article-action-icon"
            >
                quick_reference_all
            </span>
        </div>
    </div>
`;

articleContentDiv.innerHTML += `
    <div class="article-text">
        ${articleContent[id - 1][0]}
    </div>
    <div class="article-text">
        ${articleContent[id - 1][1]}
    </div>
    <div id="article-admonition">
        <span
            id="admonition-icon"
            class="material-symbols-outlined"
        >
            border_color
        </span>
        <div id="admonition-text" class="montserrat-bold">
            ${articleAdmonitions[id - 1]}
        </div>
    </div>
    <div class="article-text">
        ${articleContent[id - 1][2]}
    </div>
    <div class="article-text">
        ${articleContent[id - 1][3]}
    </div>
`;

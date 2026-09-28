const Projecten = [
    {
        naam: "AfvalAlarm",
        src: "portfolioImages/AfvalAlarm.mp4",
        type: "video",
        thumbnail: "portfolioImages/AfvalAlarmThumbnail.png",
        class: "demoVideo",
        alt: "AfvalAlarm Demovideo",
        desc: "Ons Challenge project van het basissemester. Ons SDG was nummer 15, Leven op het land. Ons project was een app waarbij je punten kunt verzamelen met het opruimen van zwerfafval. Waarna je de punten kan inwisselen voor prijzen. Dit project kreeg veel aandacht waaronder van mensen in de gemeente van Den Haag."
    },
    {
        naam: "Hotelsimulatie",
        src: "portfolioImages/hotelSimulatie.png",
        type: "img",
        class: "projectThumbnail",
        alt: "Hotel Simulatie thumbnail",
        desc: "In semester 2 van het eerste jaar moesten wij een Hotelsimulatie maken als project voor het jaar. Gasten moesten in en uit checken, faciliteiten gebruiken, de lift gebruiken of met de trap gaan, en worden gecharged voor hun tijd in het hotel. De docent was altijd enthousiast om ons project te zien en ik heb uiteindelijk het project afgerond met een 8!"
    },
    {
        naam: "Domino’s trainer",
        src: "portfolioImages/dominos.jpeg",
        type: "img",
        class: "dominosThumbnail",
        alt: "Dominos Trainer thumbnail",
        desc: "In 2023 Werkte ik een tijdje bij mijn locale Domino’s. Ik merkte een probleem tijdens de periode dat ik daar werkte, ik vond het erg lastig om de toppings van pizza’s te onthouden. Als oplossing hiervoor had ik op scratch een game gemaakt waar je dit kon oefenen. Dit hielp ernorm tijdens mijn werktijd daar!"
    },
];

const projectenlijst = document.querySelector(".portfolioList");

Projecten.forEach(project => {
    const article = document.createElement("article");
    article.className = "portfolioItem";

    const contentDiv = document.createElement("div");
    contentDiv.className = "portfolioContent";

    const h2 = document.createElement("h2");
    h2.textContent = project.naam;
    contentDiv.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = project.desc;
    p.className = "portfolioDescription";
    contentDiv.appendChild(p);

    article.appendChild(contentDiv);

    if (project.type === "img") {
        const img = document.createElement("img");
        img.src = project.src;
        img.alt = project.alt;
        img.className = project.class;
        article.appendChild(img);
    } else if (project.type === "video") {
        const vid = document.createElement("video");
        vid.src = project.src;
        vid.className = project.class;
        vid.poster = project.thumbnail;
        vid.controls = true;

        if (project.captions) {
            const track = document.createElement("track");
            track.src = project.captions;
            track.kind = "captions";
            track.srclang = "nl";
            track.label = "Nederlands";
            track.default = true;
            vid.appendChild(track);
        }

        article.appendChild(vid);
    }

    projectenlijst.appendChild(article);
});
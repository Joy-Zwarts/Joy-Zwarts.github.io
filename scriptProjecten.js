const Projecten = [
    {
        naam: "AfvalAlarm",
        src: "portfolioImages/AfvalAlarm.mp4",
        type: "video",
        thumbnail: "portfolioImages/AfvalAlarmThumbnail.png",
        class: "demoVideo",
        alt: "AfvalAlarm Demovideo",
        desc: "Ons Challenge project van het basissemester. Ons SDG was nummer 15, Leven op het land. Ons project was een app waarbij je punten kunt verzamelen met het opruimen van zwerfafval. Daarna kun je de punten inwisselen voor prijzen. Dit project kreeg veel aandacht, waaronder van mensen in de gemeente Den Haag."
    },
    {
        naam: "Hotel Simulatie",
        src: "portfolioImages/hotelSimulatie.png",
        type: "img",
        class: "projectThumbnail",
        alt: "Hotel Simulatie thumbnail",
        desc: "In semester 2 van het eerste jaar moesten wij een Hotelsimulatie maken als project voor het jaar. Gasten moesten in- en uitchecken, faciliteiten gebruiken, de lift gebruiken of met de trap gaan, en worden gecharged voor hun tijd in het hotel. De docent was altijd enthousiast om ons project te zien en ik heb het project uiteindelijk afgerond met een 8!"
    },
    {
        naam: "Dominos Trainer",
        src: "portfolioImages/dominos.jpeg",
        type: "img",
        class: "dominosThumbnail",
        alt: "Dominos Trainer thumbnail",
        desc: "In 2023 werkte ik een tijdje bij mijn lokale Domino’s. Ik merkte een probleem tijdens de periode dat ik daar werkte: ik vond het erg lastig om de toppings van pizza’s te onthouden. Als oplossing hiervoor had ik op Scratch een game gemaakt waar je dit kon oefenen. Dit hielp enorm tijdens mijn werktijd daar!"
    },
];

const projectenlijst = document.querySelector(".portfolioList");

Projecten.forEach(project => {
    const article = document.createElement("article");
    article.className = "portfolioItem";

    const h2 = document.createElement("h2");
    h2.textContent = project.naam;
    article.appendChild(h2);

    if (project.type === "img"){
        const img = document.createElement("img");
        img.src = project.src
        img.alt = project.alt
        img.className = project.class

        article.appendChild(img);
    } else if (project.type === "video") {
        const vid = document.createElement("video");

        vid.src = project.src;
        vid.className = project.class;
        vid.poster = project.thumbnail;
        vid.controls = true;

        const track = document.createElement("track");

        track.src = project.captions;
        track.kind = "captions";
        track.srclang = "nl";
        track.label = "Nederlands";
        track.default = true;

        vid.appendChild(track);
        article.appendChild(vid);
    }

    const p = document.createElement("p");
    p.textContent = project.desc;
    p.className = "portfolioDescription"
    article.appendChild(p);

    const hr = document.createElement("hr");
    hr.className = "divider"
    article.appendChild(hr);

    projectenlijst.appendChild(article);
});
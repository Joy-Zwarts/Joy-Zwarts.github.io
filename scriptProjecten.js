const apiBase = "http://localhost:5224";
let Projecten = [];

function showEmptyMessage(message) {
    const projectenlijst = document.querySelector(".portfolioList");
    if (!projectenlijst) return;

    projectenlijst.innerHTML = "";
    const legeBericht = document.createElement("p");
    legeBericht.textContent = message;
    projectenlijst.appendChild(legeBericht);
}

async function loadProjects() {
    try {
        const response = await fetch(`${apiBase}/projects`);
        Projecten = await response.json();

        if (Projecten.length === 0) {
            document.querySelector(".portfolioList").innerHTML = "<p>Er kunnen op dit moment geen projecten getoond worden.</p>";
            return;
        }

        draw(Projecten);
    } catch {
        document.querySelector(".portfolioList").innerHTML = "<p>Er kunnen op dit moment geen projecten getoond worden.</p>";
    }
}

function draw(lijst = Projecten) {
    const projectenlijst = document.querySelector(".portfolioList");
    if (!projectenlijst) return;

    projectenlijst.innerHTML = "";

    if (!lijst || lijst.length === 0) {
        const legeBericht = document.createElement("p");
        legeBericht.textContent = "Er kunnen op dit moment geen projecten getoond worden.";
        projectenlijst.appendChild(legeBericht);
        return;
    }

    lijst.forEach(project => {
        const article = document.createElement("article");
        article.className = "portfolioItem";

        const contentDiv = document.createElement("div");
        contentDiv.className = "portfolioContent";

        const titleWrapper = document.createElement("div");
        titleWrapper.className = "titleWrapper";

        const h2 = document.createElement("h2");
        h2.textContent = project.titel;
        titleWrapper.appendChild(h2);

        if (project.tags) {
            const tagSpan = document.createElement("span");
            tagSpan.className = "badge tag";
            tagSpan.textContent = project.tags;
            titleWrapper.appendChild(tagSpan);
        }

        if (project.datum) {
            const jaarSpan = document.createElement("span");
            jaarSpan.className = "badge jaar";
            jaarSpan.textContent = project.datum;
            titleWrapper.appendChild(jaarSpan);
        }

        contentDiv.appendChild(titleWrapper);

        const p = document.createElement("p");
        p.textContent = project.beschrijving;
        p.className = "portfolioDescription";
        contentDiv.appendChild(p);

        article.appendChild(contentDiv);

        if (project.mediaType === "img") {
            const img = document.createElement("img");
            img.src = project.mediaUrl;
            img.alt = project.altText || project.titel;
            img.className = project.cssClass || "";
            article.appendChild(img);
        } else if (project.mediaType === "video") {
            const vid = document.createElement("video");
            vid.src = project.mediaUrl;
            vid.className = project.cssClass || "";
            vid.poster = project.thumbnailUrl || "";
            vid.controls = true;
            article.appendChild(vid);
        }

        projectenlijst.appendChild(article);
    });
}

const asc = document.querySelector("button.ascending");
const desc = document.querySelector("button.descending");
const schoolProject = document.querySelector("button.schoolproject");
const priveProject = document.querySelector("button.priveproject");

asc?.addEventListener("click", () => {
    Projecten.sort((a, b) => a.datum - b.datum);
    draw(Projecten);
});

desc?.addEventListener("click", () => {
    Projecten.sort((a, b) => b.datum - a.datum);
    draw(Projecten);
});

schoolProject?.addEventListener("click", () => {
    const gefilterd = Projecten.filter(p => p.tags === "School opdracht");
    draw(gefilterd);
});

priveProject?.addEventListener("click", () => {
    const gefilterd = Projecten.filter(p => p.tags === "Prive opdracht");
    draw(gefilterd);
});

loadProjects();
const apiBase = "http://localhost:5224";
let Blogposts = [];

async function loadBlogposts() {
    try {
        const response = await fetch(`${apiBase}/blogposts`);
        Blogposts = await response.json();
        Blogposts.sort((a, b) => new Date(b.publicatiedatum) - new Date(a.publicatiedatum));
        drawBlogposts(Blogposts);
    } catch (error) {
        drawBlogposts([]);
    }
}

function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
}

function formatTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
}

function drawBlogposts(lijst = Blogposts) {
    const container = document.querySelector(".blogPosts");
    container.innerHTML = "";

    if (lijst.length === 0) {
        container.textContent = "Er kunnen op dit moment geen blogposts getoond worden.";
        return;
    }

    lijst.forEach(post => {
        const article = document.createElement("article");

        const details = document.createElement("details");
        details.open = true;

        const summary = document.createElement("summary");
        summary.className = "blogPostDateTime";

        const time = document.createElement("time");
        time.className = "textLinks";
        time.setAttribute("datetime", post.publicatiedatum);
        time.textContent = formatDate(post.publicatiedatum);

        const timeRight = document.createElement("span");
        timeRight.className = "textRechts";
        timeRight.textContent = formatTime(post.publicatiedatum);

        summary.appendChild(time);
        summary.appendChild(timeRight);

        const p = document.createElement("p");
        p.textContent = post.inhoud;

        details.appendChild(summary);
        details.appendChild(p);

        const hr = document.createElement("hr");
        hr.className = "divider";

        article.appendChild(details);
        article.appendChild(hr);
        container.appendChild(article);
    });
}

document.getElementById("blogForm")?.addEventListener("submit", addBlogpost);

loadBlogposts();
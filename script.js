async function getGitHubStats() {
    const cached = localStorage.getItem("githubStats");

    if (cached) {
        const data = JSON.parse(cached);

        // gebruik cache als deze minder dan 1 uur oud is
        if (Date.now() - data.timestamp < 60 * 60 * 1000) {
            document.getElementById("additions").textContent = data.additions;
            document.getElementById("deletions").textContent = data.deletions;
            return;
        }
    }

    const repo = "Joy-Zwarts/Joy-Zwarts.github.io";

    const since = new Date();
    since.setDate(since.getDate() - 7);

    try {
        const response = await fetch(
            `https://api.github.com/repos/${repo}/commits?since=${since.toISOString()}&per_page=100`
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const commits = await response.json();

        let additions = 0;
        let deletions = 0;

        for (const commit of commits) {
            const response = await fetch(
                `https://api.github.com/repos/${repo}/commits/${commit.sha}`
            );

            if (!response.ok) continue;

            const data = await response.json();

            additions += data.stats?.additions || 0;
            deletions += data.stats?.deletions || 0;
        }

        document.getElementById("additions").textContent = additions;
        document.getElementById("deletions").textContent = deletions;

        // bewaar ze voor een uur
        localStorage.setItem("githubStats", JSON.stringify({
            additions,
            deletions,
            timestamp: Date.now()
        }));

    } catch (error) {
        console.error("GitHub stats:", error);
    }
}

getGitHubStats();
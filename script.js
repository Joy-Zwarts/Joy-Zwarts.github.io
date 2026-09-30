async function getGitHubStats() {
    try {
        const response = await fetch("/github-stats.json");

        if (!response.ok) {
            throw new Error(`Stats error: ${response.status}`);
        }

        const data = await response.json();

        document.getElementById("additions").textContent =
            data.additions.toLocaleString("nl-NL");

        document.getElementById("deletions").textContent =
            data.deletions.toLocaleString("nl-NL");

    } catch (error) {
        console.error("GitHub stats error:", error);
    }
}

getGitHubStats();
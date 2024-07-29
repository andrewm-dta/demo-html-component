document.addEventListener('DOMContentLoaded', function() {
    const roadmapData = [
        {
            date: "2024-08-15",
            title: "New Blog Section",
            description: "Launching a new blog section with weekly articles on web development."
        },
        {
            date: "2024-09-01",
            title: "User Profiles",
            description: "Implementing user profiles with customizable avatars and bios."
        },
        {
            date: "2024-10-10",
            title: "Community Forum",
            description: "Adding a community forum for users to discuss topics and share ideas."
        }
    ];

    const roadmapContainer = document.getElementById('roadmap');

    roadmapData.forEach(release => {
        const releaseElement = document.createElement('div');
        releaseElement.className = 'release';
        releaseElement.innerHTML = `
            <div class="release-date">${new Date(release.date).toLocaleDateString()}</div>
            <h3 class="release-title">${release.title}</h3>
            <p class="release-description">${release.description}</p>
        `;
        roadmapContainer.appendChild(releaseElement);
    });
});
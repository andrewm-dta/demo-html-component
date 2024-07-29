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
        },
        {
            date: "2024-11-20",
            title: "Mobile App Launch",
            description: "Releasing our mobile app for iOS and Android platforms."
        },
        {
            date: "2025-01-05",
            title: "AI-powered Content Recommendations",
            description: "Introducing AI-driven personalized content recommendations for users."
        }
    ];

    const timeline = document.getElementById('timeline');
    const releaseDetails = document.getElementById('release-details');

    function createTimelineItem(release, index) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-controls', 'release-details');
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${new Date(release.date).toLocaleDateString()}</div>
                <h3 class="timeline-title">${release.title}</h3>
            </div>
            <span class="visually-hidden">View details for ${release.title}</span>
        `;
        item.addEventListener('click', () => showReleaseDetails(release));
        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                showReleaseDetails(release);
            }
        });
        return item;
    }

    function showReleaseDetails(release) {
        releaseDetails.innerHTML = `
            <h2 id="details-title">${release.title}</h2>
            <p><strong>Date:</strong> ${new Date(release.date).toLocaleDateString()}</p>
            <p>${release.description}</p>
        `;
    }

    roadmapData.forEach((release, index) => {
        timeline.appendChild(createTimelineItem(release, index));
    });

    // Show details for the first release by default
    showReleaseDetails(roadmapData[0]);
});
Content Release Roadmap

// Fetch the JSON file containing the content release data
fetch('content-releases.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();  // Get the raw text instead of parsing JSON
  })
  .then(text => {
    try {
      const data = JSON.parse(text);  // Try to parse the JSON
      createRoadmap(data);
    } catch (e) {
      console.error('JSON parsing error:', e);
      console.error('Received text:', text);
    }
  })
  .catch(error => console.error('Error loading the roadmap data:', error));

function createRoadmap(releases) {
  const roadmapContainer = document.getElementById('roadmap-container');
  
  // Sort releases by date
  releases.sort((a, b) => new Date(a.date) - new Date(b.date));

  releases.forEach(release => {
    const releaseElement = document.createElement('div');
    releaseElement.className = 'release';
    
    const dateElement = document.createElement('div');
    dateElement.className = 'release-date';
    dateElement.textContent = new Date(release.date).toLocaleDateString();
    
    const titleElement = document.createElement('h3');
    titleElement.className = 'release-title';
    titleElement.textContent = release.title;
    
    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'release-description';
    descriptionElement.textContent = release.description;
    
    releaseElement.appendChild(dateElement);
    releaseElement.appendChild(titleElement);
    releaseElement.appendChild(descriptionElement);
    
    roadmapContainer.appendChild(releaseElement);
  });
}

// Add some basic styling
const style = document.createElement('style');
style.textContent = `
  #roadmap-container {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
  }
  .release {
    border: 1px solid #ddd;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 5px;
  }
  .release-date {
    font-size: 0.9em;
    color: #666;
  }
  .release-title {
    margin: 10px 0;
  }
  .release-description {
    font-size: 0.95em;
  }
`;
document.head.appendChild(style);
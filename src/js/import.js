// Helper function to insert HTML content
function insertHTML(elementId, htmlContent) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = htmlContent;
    }
  }
  
  // Fetch and include the navbar.html file
  fetch('navbar.html')
    .then(response => response.text())
    .then(content => {
      insertHTML('navbar', content);
    })
    .catch(error => console.log(error));
  
  // Fetch and include the scripts.html file
  fetch('scripts.html')
    .then(response => response.text())
    .then(content => {
      insertHTML('scripts', content);
    })
    .catch(error => console.log(error));
  
function searchTrainer() {
  const location = document.getElementById('locationInput').value.trim();
  const result = document.getElementById('trainerResult');
  
  if (!location) {
    result.textContent = "Please enter a location.";
    result.style.color = "#e74c3c";
    return;
  }

  // Fake result for demonstration; replace with real API logic later
  result.textContent = `Showing trainers near "${location}"... (coming soon)`;
  result.style.color = "#2ecc71";
  
  // In a real implementation, you would fetch from an API here
  // Example:
  /*
  fetch(`/api/trainers?location=${encodeURIComponent(location)}`)
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => {
      console.error('Error:', error);
      result.textContent = "Failed to fetch trainers. Please try again later.";
      result.style.color = "#e74c3c";
    });
  */
}

// Debounce function for search input
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Improved search input handler with debouncing
const debouncedSearch = debounce(function(value) {
  handleSearchInput(value);
}, 300);

// Update your search input to use the debounced version:
// <input oninput="debouncedSearch(this.value)">
// Set current year in footer
function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#current-year');
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', updateCurrentYear);
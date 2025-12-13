// Set current year in footer
function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#current-year');
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Highlight active page in navigation
function highlightActivePage() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Find all navigation links
    const navLinks = document.querySelectorAll('nav a:not(.logo)');
    
    // Remove 'active' class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add 'active' class to current page link
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'personal-website/' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCurrentYear();
    highlightActivePage();
});

// Also try running after page fully loads (fallback)
window.addEventListener('load', function() {
    updateCurrentYear();
    highlightActivePage();
});
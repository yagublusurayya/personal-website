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

// ===== THEME TOGGLE FUNCTIONALITY =====

// Initialize theme from localStorage or prefer dark
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
}

// Set dark theme
function setDarkTheme() {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    updateToggleButton('dark');
}

// Set light theme
function setLightTheme() {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    updateToggleButton('light');
}

// Update toggle button icon
function updateToggleButton(theme) {
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
        toggleBtn.setAttribute('aria-label', theme === 'dark' 
            ? 'Switch to light mode' 
            : 'Switch to dark mode');
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

// ===== EXISTING FUNCTIONS =====

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
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a:not(.logo)');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'personal-website/' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ===== EVENT LISTENERS =====

document.addEventListener('DOMContentLoaded', function() {
    updateCurrentYear();
    highlightActivePage();
    initializeTheme(); // Initialize theme
    
    // Add click event to theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }
});
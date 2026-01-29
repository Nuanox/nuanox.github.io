// Matrix Rain Effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Matrix characters
const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charArray = characters.split('');

const fontSize = 18;
let columns, drops;
let isNightMode = false;

function checkNightMode() {
    isNightMode = document.body.classList.contains('night-mode');
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);

    // Initialize drops array with random positions throughout the entire canvas height
    drops = [];
    for (let i = 0; i < columns; i++) {
        // Distribute drops throughout the entire canvas height for immediate visibility
        drops[i] = Math.random() * (canvas.height / fontSize);
    }
}

function drawMatrix() {
    // Semi-transparent black rectangle for fade effect
    ctx.fillStyle = isNightMode ? 'rgba(26, 15, 10, 0.5)' : 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set color based on mode
    if (isNightMode) {
        ctx.fillStyle = '#ffb366'; // Warm amber for night mode
    } else {
        ctx.fillStyle = '#ffffff'; // White for normal mode
    }

    ctx.font = fontSize + 'px Courier New';

    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];

        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop if it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i] += 0.5;
    }
}

// Night Mode Functions
function toggleNightMode() {
    const body = document.body;
    const isCurrentlyNightMode = body.classList.contains('night-mode');

    if (isCurrentlyNightMode) {
        body.classList.remove('night-mode');
        localStorage.setItem('nightMode', 'false');
        hideNightModeNotification();
    } else {
        body.classList.add('night-mode');
        localStorage.setItem('nightMode', 'true');
        showNightModeNotification();
    }

    checkNightMode();
}

function showNightModeNotification() {
    const notification = document.getElementById('nightModeNotification');
    if (notification) {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

function hideNightModeNotification() {
    const notification = document.getElementById('nightModeNotification');
    if (notification) {
        notification.classList.remove('show');
    }
}

function loadNightModePreference() {
    const savedMode = localStorage.getItem('nightMode');
    // Default to night mode (if no saved setting or 'true')
    if (savedMode !== 'false') {
        document.body.classList.add('night-mode');
        checkNightMode();
        // Save default for first-time visitors
        if (!savedMode) {
            localStorage.setItem('nightMode', 'true');
        }
    }
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY === 0) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    }
}

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const query = searchInput.value.trim();
        if (query) {
            // For Hugo, we'll use a simple search page redirect
            // You can implement a more sophisticated search later
            const baseUrl = window.location.origin;
            window.location.href = `${baseUrl}/search/?q=${encodeURIComponent(query)}`;
        }
    }
}

// Initialize
loadNightModePreference();
checkNightMode();
resizeCanvas();

// Animation loop
const matrixInterval = setInterval(() => {
    checkNightMode();
    drawMatrix();
}, 70);

// Resize canvas when window changes
window.addEventListener('resize', resizeCanvas);

// Header scroll effect listener
window.addEventListener('scroll', handleHeaderScroll);

// Initialize header state
handleHeaderScroll();

// Search input enter key
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// MathJax reprocess on load
window.addEventListener('load', () => {
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
    }
});

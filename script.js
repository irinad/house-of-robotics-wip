// Progress tracking data (you can update these values)
let progressData = {
    distanceKm: 2500,      // Current distance in km (out of 10,000)
    planePercent: 35,      // Plane building progress (0-100)
    gearsComplete: false,  // Gear package sponsored
    engineComplete: false, // Engine package sponsored
    wingComplete: false    // Wing package sponsored
};

// Initialize progress on page load
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
    setupScrollAnimations();
    setupSmoothScroll();
});

// Update all progress indicators
function updateProgress() {
    updateDistanceProgress();
    updatePlaneProgress();
    updatePlaneComponents();
}

// Update distance progress
function updateDistanceProgress() {
    const totalKm = 10000;
    const currentKm = progressData.distanceKm;
    const percentage = Math.round((currentKm / totalKm) * 100);
    
    // Update display values
    document.getElementById('distanceKm').textContent = currentKm.toLocaleString();
    document.getElementById('distancePercent').textContent = percentage;
    
    // Animate progress bar
    const progressBar = document.getElementById('distanceBar');
    setTimeout(() => {
        progressBar.style.width = percentage + '%';
    }, 500);
}

// Update plane building progress
function updatePlaneProgress() {
    const percentage = progressData.planePercent;
    
    // Update display value
    document.getElementById('planePercent').textContent = percentage;
    
    // Animate progress bar
    const progressBar = document.getElementById('planeBar');
    setTimeout(() => {
        progressBar.style.width = percentage + '%';
    }, 500);
}

// Update plane component status
function updatePlaneComponents() {
    updateComponent('gearsStatus', progressData.gearsComplete, 'Gears');
    updateComponent('engineStatus', progressData.engineComplete, 'Engine');
    updateComponent('wingStatus', progressData.wingComplete, 'Wings');
}

// Update individual component
function updateComponent(elementId, isComplete, name) {
    const element = document.getElementById(elementId);
    const statusSpan = element.querySelector('span');
    
    if (isComplete) {
        statusSpan.textContent = 'Complete ✓';
        element.classList.add('completed');
    } else {
        statusSpan.textContent = 'Pending';
        element.classList.remove('completed');
    }
}

// Handle package selection
function selectPackage(packageType) {
    let message = '';
    let updateRequired = false;
    
    switch(packageType) {
        case 'gears':
            message = 'Thank you for your interest in the Gear Package (€500)!\n\nOur team will contact you shortly with sponsorship details.';
            if (!progressData.gearsComplete) {
                progressData.gearsComplete = true;
                updateRequired = true;
            }
            break;
        case 'engine':
            message = 'Thank you for your interest in the Engine Package (€1,500)!\n\nThis is our most popular package. Our team will contact you shortly with sponsorship details.';
            if (!progressData.engineComplete) {
                progressData.engineComplete = true;
                updateRequired = true;
            }
            break;
        case 'wing':
            message = 'Thank you for your interest in the Wing Package (€2,500)!\n\nThis premium package includes exclusive benefits. Our team will contact you shortly with sponsorship details.';
            if (!progressData.wingComplete) {
                progressData.wingComplete = true;
                updateRequired = true;
            }
            break;
    }
    
    alert(message);
    
    if (updateRequired) {
        updatePlaneComponents();
        // Optionally update plane progress
        calculatePlaneProgress();
    }
}

// Calculate plane progress based on components
function calculatePlaneProgress() {
    let progress = 0;
    if (progressData.gearsComplete) progress += 33;
    if (progressData.engineComplete) progress += 34;
    if (progressData.wingComplete) progress += 33;
    
    progressData.planePercent = Math.max(progressData.planePercent, progress);
    updatePlaneProgress();
}

// Calculate kilometer sponsorship cost
function calculateKmCost() {
    const kmAmount = parseInt(document.getElementById('kmAmount').value) || 0;
    const costPerKm = 1; // €1 per km
    const totalCost = kmAmount * costPerKm;
    
    document.getElementById('kmCost').textContent = '€' + totalCost.toLocaleString();
}

// Handle kilometer package selection
function selectKmPackage() {
    const kmAmount = parseInt(document.getElementById('kmAmount').value) || 0;
    
    if (kmAmount <= 0) {
        alert('Please enter a valid number of kilometers.');
        return;
    }
    
    const totalCost = kmAmount * 1; // €1 per km
    const message = `Thank you for sponsoring ${kmAmount} km!\n\nYour contribution: €${totalCost}\n\nOur team will contact you shortly with payment details.`;
    
    alert(message);
    
    // Update distance progress
    const newDistance = Math.min(progressData.distanceKm + kmAmount, 10000);
    progressData.distanceKm = newDistance;
    updateDistanceProgress();
}

// Toggle mobile menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                navMenu.classList.remove('active');
            }
        });
    });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements you want to animate
    const animatedElements = document.querySelectorAll('.progress-card, .package-card, .event-card, .outreach-item, .role-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Optional: Auto-update demo (simulates donations coming in)
// Uncomment this if you want to see the progress bars automatically increment for demo purposes
/*
function startDemo() {
    setInterval(() => {
        // Randomly add 10-50 km
        if (progressData.distanceKm < 10000) {
            const increment = Math.floor(Math.random() * 40) + 10;
            progressData.distanceKm = Math.min(progressData.distanceKm + increment, 10000);
            updateDistanceProgress();
        }
        
        // Randomly increment plane progress
        if (progressData.planePercent < 100) {
            progressData.planePercent = Math.min(progressData.planePercent + 1, 100);
            updatePlaneProgress();
        }
    }, 5000); // Update every 5 seconds
}

// Uncomment to start demo
// startDemo();
*/

// Export progress data for easy updating (useful for admin panel in the future)
window.updateProgressData = function(newData) {
    Object.assign(progressData, newData);
    updateProgress();
};

// Example usage of updateProgressData:
// window.updateProgressData({ distanceKm: 5000, planePercent: 60, gearsComplete: true });

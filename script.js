// ==========================================
// MAIN SCRIPT
// ==========================================

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    updateProgress();
    loadDonors();
    loadEvents();
    setupFormHandler();
    setupScrollAnimations();
    setupMobileMenu();
    setupPlaneAnimation();
});

// Initialize page settings
function initializePage() {
    // Show/hide events section
    const eventsSection = document.getElementById('evenimente');
    const eventsNav = document.getElementById('events-nav');
    if (CONFIG.showEvents) {
        if (eventsSection) eventsSection.style.display = 'block';
        if (eventsNav) eventsNav.style.display = 'block';
    } else {
        if (eventsSection) eventsSection.style.display = 'none';
        if (eventsNav) eventsNav.style.display = 'none';
    }
}

// Update progress indicator
function updateProgress() {
    const amountRaised = CONFIG.amountRaised;
    const totalGoal = CONFIG.totalGoal;
    const percentage = Math.min((amountRaised / totalGoal) * 100, 100);
    
    // Update text displays
    const amountElement = document.getElementById('amountRaised');
    const percentageElement = document.getElementById('progressPercentage');
    
    if (amountElement) {
        amountElement.textContent = amountRaised.toLocaleString('ro-RO');
    }
    
    if (percentageElement) {
        percentageElement.textContent = percentage.toFixed(1);
    }
    
    // Update plane position along the path in plane-route.png
    const planeContainer = document.getElementById('planeContainer');
    
    if (planeContainer) {
        // Define path points matching the blue dotted line in plane-route.png
        // Path goes from Sibiu (right) to Long Beach (left)
        const t = percentage / 100; // normalize to 0-1
        
        // Cubic bezier curve matching the red dots on plane-route.png
        // Path goes from Sibiu, România (right) to Long Beach, California (left)
        
        // Starting point (Sibiu, România - right red dot): x=90%, y=48%
        // Control point 1 (over Atlantic): x=65%, y=30%
        // Control point 2 (over North America): x=30%, y=25%
        // End point (Long Beach, California - left red dot): x=15%, y=52%
        
        const p0x = 90, p0y = 48;  // Start (Sibiu)
        const p1x = 65, p1y = 30;  // Control 1 (Atlantic arc)
        const p2x = 30, p2y = 25;  // Control 2 (North America arc)
        const p3x = 15, p3y = 52;  // End (Long Beach)
        
        // Cubic Bezier formula: B(t) = (1-t)³P0 + 3(1-t)²tP1 + 3(1-t)t²P2 + t³P3
        const mt = 1 - t; // (1 - t)
        const mt2 = mt * mt;
        const mt3 = mt2 * mt;
        const t2 = t * t;
        const t3 = t2 * t;
        
        const x = mt3 * p0x + 3 * mt2 * t * p1x + 3 * mt * t2 * p2x + t3 * p3x;
        const y = mt3 * p0y + 3 * mt2 * t * p1y + 3 * mt * t2 * p2y + t3 * p3y;
        
        planeContainer.style.left = x + '%';
        planeContainer.style.top = y + '%';
    }
}

// Load and display donors
function loadDonors() {
    const donorsList = document.getElementById('donorsList');
    if (!donorsList) return;
    
    if (CONFIG.donors && CONFIG.donors.length > 0) {
        donorsList.innerHTML = '';
        
        CONFIG.donors.forEach(donor => {
            const donorCard = document.createElement('div');
            donorCard.className = 'donor-card';
            
            let logoHTML = '';
            if (donor.logoPath) {
                logoHTML = `<img src="${donor.logoPath}" alt="${donor.name}" class="donor-logo">`;
            }
            
            donorCard.innerHTML = `
                ${logoHTML}
                <div class="donor-name">${donor.name}</div>
                <div class="donor-tier">${donor.tier}</div>
            `;
            
            donorsList.appendChild(donorCard);
        });
    } else {
        // Show placeholder if no donors yet
        donorsList.innerHTML = `
            <div class="donor-placeholder">
                <p>Devino primul nostru sponsor și logo-ul tău va apărea aici!</p>
            </div>
        `;
    }
}

// Load and display events
function loadEvents() {
    const eventsList = document.getElementById('eventsList');
    if (!eventsList || !CONFIG.showEvents) return;
    
    if (CONFIG.events && CONFIG.events.length > 0) {
        eventsList.innerHTML = '';
        
        CONFIG.events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            
            eventCard.innerHTML = `
                <div class="event-date">
                    <div class="event-day">${event.day}</div>
                    <div class="event-month">${event.month}</div>
                </div>
                <div class="event-details">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                </div>
            `;
            
            eventsList.appendChild(eventCard);
        });
    }
}

// Modal functions
function showIndividualDonation() {
    const modal = document.getElementById('individualModal');
    if (modal) {
        // Update bank details from config
        const bankDetailsHTML = `
            <div class="bank-detail">
                <strong>Beneficiar:</strong>
                <span>${CONFIG.bankDetails.beneficiary}</span>
            </div>
            <div class="bank-detail">
                <strong>IBAN:</strong>
                <span>${CONFIG.bankDetails.iban}</span>
            </div>
            <div class="bank-detail">
                <strong>Bancă:</strong>
                <span>${CONFIG.bankDetails.bank}</span>
            </div>
            <div class="bank-detail">
                <strong>Detalii transfer:</strong>
                <span>${CONFIG.bankDetails.details}</span>
            </div>
        `;
        
        const bankDetailsContainer = modal.querySelector('.bank-details');
        if (bankDetailsContainer) {
            bankDetailsContainer.innerHTML = bankDetailsHTML;
        }
        
        modal.style.display = 'block';
    }
}

function showCompanySponsorship() {
    const modal = document.getElementById('companyModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Setup form submission handler
function setupFormHandler() {
    const form = document.getElementById('sponsorForm');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Disable submit button to prevent double submission
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Se trimite...';
        
        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            companyName: document.getElementById('companyName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value || ''
        };
        
        try {
            // Send to backend server
            const response = await fetch('/api/sponsor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Show success message
                showSuccessMessage(result.message);
                
                // Reset form
                form.reset();
                
                // Close modal after 3 seconds
                setTimeout(() => {
                    closeModal('companyModal');
                }, 3000);
            } else {
                // Show error message
                showErrorMessage(result.message);
            }
            
        } catch (error) {
            console.error('Error submitting form:', error);
            
            // Fallback: If backend is not available, download data locally
            console.log('Backend not available, using fallback method');
            saveSponsorDataLocally(formData);
            showSuccessMessage('Am salvat datele local. Te rugăm să contactezi echipa direct.');
            form.reset();
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}

// Show error message
function showErrorMessage(message) {
    const form = document.getElementById('sponsorForm');
    
    // Remove any existing messages
    const existingMessages = form.parentNode.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <p><strong>✗ Eroare</strong></p>
        <p>${message || 'A apărut o eroare. Te rugăm să încerci din nou.'}</p>
    `;
    
    form.parentNode.insertBefore(errorDiv, form);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.tier, .donor-card, .event-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Setup mobile hamburger menu
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Setup plane loop animation on click
function setupPlaneAnimation() {
    const planeIcon = document.querySelector('.plane-icon');
    
    if (planeIcon) {
        planeIcon.addEventListener('click', function() {
            // Add looping class
            planeIcon.classList.add('looping');
            
            // Remove class after animation completes (1.5s)
            setTimeout(function() {
                planeIcon.classList.remove('looping');
            }, 1500);
        });
    }
}


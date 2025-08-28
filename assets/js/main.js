// ACMO - Main JavaScript File

// Global Variables
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
let isMenuOpen = false;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    initializeHeader();
    initializeThemeToggle();
    initializeLanguageSelector();
    initializeMobileMenu();
    initializeScrollAnimations();
    initializeCounters();
    initializeTestimonialCarousel();
    initializeBackToTop();
    initializeNewsletterForm();
    initializeMembershipModal();
    initializeDropdowns();
    initializeSmoothScrolling();
    
    // Set initial theme
    const savedTheme = localStorage.getItem('acmo-theme') || 'light';
    setTheme(savedTheme);
    
    console.log('ACMO Website Initialized Successfully');
}

// Header Functionality
function initializeHeader() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('acmo-theme', theme);
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
}

// Language Selector
function initializeLanguageSelector() {
    const languageSelect = document.getElementById('language-select');
    
    if (languageSelect) {
        languageSelect.addEventListener('change', function(e) {
            const selectedLanguage = e.target.value;
            setLanguage(selectedLanguage);
        });
    }
}

function setLanguage(language) {
    // Store language preference
    localStorage.setItem('acmo-language', language);
    
    // For now, just log the language change
    // In a full implementation, this would trigger language switching
    console.log(`Language changed to: ${language}`);
    
    // Show notification
    showNotification(`Language switched to ${language === 'en' ? 'English' : 'বাংলা'}`, 'info');
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            toggleMobileMenu();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && isMenuOpen) {
                closeMobileMenu();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && isMenuOpen) {
                closeMobileMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (isMenuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    isMenuOpen = true;
    mobileToggle.classList.add('active');
    navMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    isMenuOpen = false;
    mobileToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
    
    // Close any open dropdowns
    const activeDropdowns = document.querySelectorAll('.dropdown.active');
    activeDropdowns.forEach(dropdown => dropdown.classList.remove('active'));
}

// Dropdown Functionality
function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        if (link && window.innerWidth <= 768) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (isMenuOpen) {
                    closeMobileMenu();
                }
            }
        });
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.mission-card, .program-card, .news-card, .testimonial-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    let hasAnimated = false;
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            counter.textContent = Math.floor(current);
            
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    });
}

// Testimonial Carousel
function initializeTestimonialCarousel() {
    if (testimonials.length > 0) {
        showTestimonial(0);
        
        // Auto-rotate testimonials
        setInterval(() => {
            nextTestimonial();
        }, 6000);
    }
}

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
    currentTestimonial = index;
}

function nextTestimonial() {
    const next = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(next);
}

function prevTestimonial() {
    const prev = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(prev);
}

// Back to Top Button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Newsletter Form
function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                subscribeToNewsletter(email);
            }
        });
    }
}

function subscribeToNewsletter(email) {
    // Simulate API call
    showNotification('Processing subscription...', 'info');
    
    setTimeout(() => {
        // In a real implementation, this would make an API call
        showNotification('Successfully subscribed to newsletter!', 'success');
        
        // Clear form
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.reset();
        }
    }, 1500);
}

// Membership Modal
function initializeMembershipModal() {
    const modal = document.getElementById('membership-modal');
    const form = document.getElementById('membership-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleMembershipSubmission(this);
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeMembershipModal();
            }
        });
    }
}

function openMembershipModal() {
    const modal = document.getElementById('membership-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus first input
        const firstInput = modal.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }
}

function closeMembershipModal() {
    const modal = document.getElementById('membership-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset form
        const form = document.getElementById('membership-form');
        if (form) {
            form.reset();
        }
    }
}

function handleMembershipSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Validate email
    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Generate membership ID
        const membershipId = 'ACMO' + Date.now().toString().slice(-6);
        
        showNotification(`Application submitted successfully! Your membership ID is: ${membershipId}`, 'success');
        
        // Close modal
        closeMembershipModal();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        console.log('Membership application:', { ...data, membershipId });
    }, 2000);
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="closeNotification(this)">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 2rem;
                right: 2rem;
                max-width: 400px;
                z-index: 3000;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                animation: slideInRight 0.3s ease;
                margin-bottom: 1rem;
            }
            
            .notification-info { background: #3b82f6; color: white; }
            .notification-success { background: #10b981; color: white; }
            .notification-error { background: #ef4444; color: white; }
            .notification-warning { background: #f59e0b; color: white; }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 1rem;
            }
            
            .notification-close {
                margin-left: auto;
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
                padding: 0.25rem;
                border-radius: 4px;
                opacity: 0.8;
                transition: opacity 0.2s;
            }
            
            .notification-close:hover {
                opacity: 1;
            }
            
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        closeNotification(notification.querySelector('.notification-close'));
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        info: 'info-circle',
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle'
    };
    return icons[type] || 'info-circle';
}

function closeNotification(button) {
    const notification = button.closest('.notification');
    if (notification) {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        
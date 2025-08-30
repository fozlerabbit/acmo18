// ACMO Partnerships Page JavaScript

function initializePartnershipPage() {
    addPartnershipStyles();
    initializePartnershipAnimations();
    initializePartnershipCounters();
    initializeTimelineAnimations();
}

function addPartnershipStyles() {
    const partnershipStyles = `
        /* Partnership Page Specific Styles */
        .featured-partnership {
            padding: 6rem 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .partnership-hero {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        
        .partnership-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.2);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        
        .partnership-hero h2 {
            font-size: 3rem;
            margin-bottom: 0.5rem;
            font-weight: 800;
        }
        
        .partnership-subtitle {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            opacity: 0.9;
            font-weight: 500;
        }
        
        .partnership-description {
            font-size: 1.125rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            opacity: 0.95;
        }
        
        .partnership-highlights {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
        }
        
        .highlight-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: rgba(255, 255, 255, 0.1);
            padding: 1rem;
            border-radius: 8px;
            min-width: 150px;
        }
        
        .highlight-item i {
            font-size: 1.5rem;
            color: var(--accent-color);
        }
        
        .highlight-item h4 {
            margin: 0;
            font-size: 1.125rem;
        }
        
        .highlight-item span {
            font-size: 0.9rem;
            opacity: 0.8;
        }
        
        .partnership-visual {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .org-logos {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
        
        .org-logo {
            background: white;
            padding: 2rem;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            min-width: 200px;
        }
        
        .org-logo img {
            width: 80px;
            height: 80px;
            object-fit: contain;
            margin-bottom: 1rem;
        }
        
        .org-logo span {
            display: block;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 0.25rem;
        }
        
        .org-logo small {
            color: var(--text-secondary);
            font-size: 0.8rem;
        }
        
        .partnership-icon {
            font-size: 2rem;
            color: var(--accent-color);
            animation: pulse 2s infinite;
        }
        
        .partnership-benefits {
            padding: 6rem 0;
            background: white;
        }
        
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }
        
        .benefit-card {
            background: var(--light-color);
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
        }
        
        .benefit-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: var(--primary-color);
        }
        
        .benefit-icon {
            width: 60px;
            height: 60px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            color: white;
            font-size: 1.5rem;
        }
        
        .benefit-card h3 {
            color: var(--text-primary);
            margin-bottom: 1rem;
        }
        
        .benefit-card p {
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }
        
        .benefit-features {
            list-style: none;
            padding: 0;
        }
        
        .benefit-features li {
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            font-size: 0.9rem;
        }
        
        .benefit-features li::before {
            content: '✓';
            color: var(--success-color);
            font-weight: bold;
            margin-right: 0.5rem;
        }
        
        .joint-projects {
            padding: 6rem 0;
            background: var(--light-color);
        }
        
        .projects-timeline {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
        }
        
        .projects-timeline::before {
            content: '';
            position: absolute;
            left: 30px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--border-color);
        }
        
        .timeline-item {
            position: relative;
            margin-bottom: 3rem;
            padding-left: 4rem;
        }
        
        .timeline-marker {
            position: absolute;
            left: 20px;
            top: 0;
            width: 40px;
            height: 40px;
            background: var(--primary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1rem;
            z-index: 2;
        }
        
        .timeline-item.active .timeline-marker {
            background: var(--success-color);
            animation: pulse 2s infinite;
        }
        
        .timeline-content {
            background: white;
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: var(--shadow-md);
            border-left: 4px solid var(--primary-color);
        }
        
        .timeline-item.active .timeline-content {
            border-left-color: var(--success-color);
        }
        
        .timeline-date {
            background: var(--primary-color);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            display: inline-block;
            margin-bottom: 1rem;
        }
        
        .timeline-content h3 {
            color: var(--text-primary);
            margin-bottom: 0.75rem;
        }
        
        .timeline-content p {
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }
        
        .timeline-status {
            display: flex;
            justify-content: flex-end;
        }
        
        .status-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .status-badge.in-progress {
            background: var(--warning-color);
            color: white;
        }
        
        .status-badge.planned {
            background: var(--primary-color);
            color: white;
        }
        
        .status-badge.future {
            background: var(--text-secondary);
            color: white;
        }
        
        .other-partnerships {
            padding: 6rem 0;
            background: white;
        }
        
        .partners-categories {
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }
        
        .partners-category h3 {
            color: var(--text-primary);
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }
        
        .partners-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
        }
        
        .partner-card {
            background: var(--light-color);
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .partner-card:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-lg);
            border-color: var(--primary-color);
        }
        
        .partner-card.featured-tech {
            border: 2px solid var(--accent-color);
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
        }
        
        .partner-card.featured-tech .partnership-badge {
            position: absolute;
            top: -10px;
            right: -10px;
            background: var(--accent-color);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }
        
        .partner-logo {
            width: 60px;
            height: 60px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            color: white;
            font-size: 1.5rem;
        }
        
        .partner-card h4 {
            color: var(--text-primary);
            margin-bottom: 0.75rem;
        }
        
        .partner-card p {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
        
        .partnership-opportunities {
            padding: 6rem 0;
            background: var(--light-color);
        }
        
        .opportunities-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }
        
        .opportunity-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
        }
        
        .opportunity-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-xl);
        }
        
        .opportunity-icon {
            width: 60px;
            height: 60px;
            background: var(--gradient-secondary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            color: white;
            font-size: 1.5rem;
        }
        
        .opportunity-card h3 {
            color: var(--text-primary);
            margin-bottom: 1rem;
        }
        
        .opportunity-card p {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
        }
        
        .opportunity-benefits {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }
        
        .opportunity-benefits span {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
        
        .partnership-process {
            padding: 6rem 0;
            background: white;
        }
        
        .process-steps {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .step {
            display: flex;
            gap: 1.5rem;
            align-items: flex-start;
        }
        
        .step-number {
            width: 50px;
            height: 50px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.25rem;
            font-weight: 700;
            flex-shrink: 0;
        }
        
        .step-content h3 {
            color: var(--text-primary);
            margin-bottom: 0.75rem;
        }
        
        .step-content p {
            color: var(--text-secondary);
        }
        
        .partnership-impact {
            padding: 6rem 0;
            background: var(--gradient-accent);
        }
        
        .impact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        
        .impact-text h2 {
            color: var(--text-primary);
            margin-bottom: 1.5rem;
            font-size: 2.5rem;
        }
        
        .impact-text p {
            color: var(--text-secondary);
            font-size: 1.125rem;
            margin-bottom: 2rem;
        }
        
        .impact-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }
        
        .impact-stat {
            text-align: center;
            background: rgba(255, 255, 255, 0.9);
            padding: 1.5rem;
            border-radius: 12px;
        }
        
        .impact-number {
            display: block;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        
        .impact-label {
            color: var(--text-secondary);
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .impact-visual {
            display: flex;
            justify-content: center;
        }
        
        .impact-chart {
            width: 300px;
            height: 300px;
            background: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow-xl);
        }
        
        .partnership-cta {
            padding: 6rem 0;
            background: var(--gradient-primary);
            text-align: center;
            color: white;
        }
        
        .partnership-cta h2 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .partnership-cta p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .cta-actions {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .cta-actions .btn-outline {
            border-color: white;
            color: white;
        }
        
        .cta-actions .btn-outline:hover {
            background: white;
            color: var(--primary-color);
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
            .partnership-hero {
                grid-template-columns: 1fr;
                gap: 3rem;
                text-align: center;
            }
            
            .benefits-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .impact-content {
                grid-template-columns: 1fr;
                gap: 3rem;
                text-align: center;
            }
        }
        
        @media (max-width: 768px) {
            .partnership-hero h2 {
                font-size: 2rem;
            }
            
            .partnership-highlights {
                justify-content: center;
            }
            
            .benefits-grid {
                grid-template-columns: 1fr;
            }
            
            .partners-grid {
                grid-template-columns: 1fr;
            }
            
            .opportunities-grid {
                grid-template-columns: 1fr;
            }
            
            .process-steps {
                grid-template-columns: 1fr;
            }
            
            .impact-stats {
                grid-template-columns: 1fr;
            }
            
            .cta-actions {
                flex-direction: column;
                align-items: center;
            }
            
            .cta-actions .btn-primary,
            .cta-actions .btn-outline {
                width: 100%;
                max-width: 300px;
            }
        }
        
        @media (max-width: 480px) {
            .partnership-hero {
                gap: 2rem;
            }
            
            .org-logos {
                gap: 1rem;
            }
            
            .org-logo {
                padding: 1rem;
                min-width: 150px;
            }
            
            .org-logo img {
                width: 60px;
                height: 60px;
            }
            
            .highlight-item {
                min-width: auto;
                flex: 1;
            }
            
            .partnership-cta h2 {
                font-size: 2rem;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = partnershipStyles;
    document.head.appendChild(styleSheet);
}

function initializePartnershipAnimations() {
    // Animate partnership elements on scroll
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.benefit-card, .partner-card, .opportunity-card, .timeline-item'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

function initializePartnershipCounters() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.impact-number[data-count]');
                counters.forEach(counter => {
                    animatePartnershipCounter(counter);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const impactSection = document.querySelector('.partnership-impact');
    if (impactSection) {
        observer.observe(impactSection);
    }
}

function animatePartnershipCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach((item, index) => {
        // Initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.2}s`;
        
        observer.observe(item);
    });
}

// Partnership inquiry form handler
function handlePartnershipInquiry(type) {
    const inquiryData = {
        timestamp: new Date().toISOString(),
        partnershipType: type,
        source: 'partnerships-page'
    };
    
    // Store inquiry data for form pre-filling
    sessionStorage.setItem('partnership-inquiry', JSON.stringify(inquiryData));
    
    // Redirect to contact page with parameters
    window.location.href = `contact.html?partnership=${type}&source=partnerships`;
}

// Download partnership guide
function downloadPartnershipGuide() {
    // Track download event
    if (window.ACMO && window.ACMO.trackEvent) {
        window.ACMO.trackEvent('download', 'partnership_guide', 'pdf');
    }
    
    // In a real implementation, this would be an actual PDF
    const link = document.createElement('a');
    link.href = 'assets/documents/ACMO-Partnership-Guide.pdf';
    link.download = 'ACMO-Partnership-Guide.pdf';
    link.click();
    
    // Show success message
    if (window.ACMO && window.ACMO.showNotification) {
        window.ACMO.showNotification('Partnership guide downloaded successfully!', 'success');
    }
}

// Export partnership data for admin use
function exportPartnershipData() {
    const partnershipData = {
        featured_partnership: {
            name: "ScriptySphere",
            type: "Technology Partnership",
            mou_date: "2024-12-01",
            status: "Active",
            projects: 5,
            districts_covered: 10
        },
        active_partnerships: 15,
        joint_programs: 35,
        districts_covered: 50,
        lives_impacted: 10000,
        partnership_categories: [
            "Government Partners",
            "NGO & Civil Society",
            "Academic Partners",
            "Technology Partners"
        ]
    };
    
    const dataStr = JSON.stringify(partnershipData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'acmo-partnerships-data.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Initialize partnership page features
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.featured-partnership')) {
        initializePartnershipPage();
        
        // Add click handlers for partnership inquiry buttons
        const inquiryButtons = document.querySelectorAll('[href*="contact.html?partnership"]');
        inquiryButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const url = new URL(this.href);
                const partnershipType = url.searchParams.get('partnership');
                if (partnershipType) {
                    handlePartnershipInquiry(partnershipType);
                }
            });
        });
        
        // Add click handler for download button
        const downloadButton = document.querySelector('[href*="Partnership-Guide.pdf"]');
        if (downloadButton) {
            downloadButton.addEventListener('click', function(e) {
                e.preventDefault();
                downloadPartnershipGuide();
            });
        }
    }
});

// Export functions for global use
window.PartnershipPage = {
    handlePartnershipInquiry,
    downloadPartnershipGuide,
    exportPartnershipData,
    animatePartnershipCounter
};

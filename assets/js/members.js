// ACMO Members Directory JavaScript

// Sample member data (in production, this would come from an API)
const membersData = [
    {
        id: "ACMO001",
        name: "Dr. Sarah Rahman",
        position: "Executive Director",
        district: "Sirajganj",
        email: "sarah.rahman@acmo-bd.org",
        phone: "+880 1712-345678",
        facebook: "https://facebook.com/sarah.rahman",
        joinDate: "2020-01-15",
        avatar: "assets/images/team/sarah-rahman.jpg",
        bio: "Founder and Executive Director of ACMO with over 10 years of experience in child rights advocacy and community development.",
        type: "Leadership",
        skills: ["Leadership", "Advocacy", "Community Development", "Policy Development"]
    },
    {
        id: "ACMO002",
        name: "Mohammed Hassan",
        position: "Program Coordinator",
        district: "Rajshahi",
        email: "hassan@acmo-bd.org",
        phone: "+880 1812-345679",
        facebook: "https://facebook.com/mohammed.hassan",
        joinDate: "2020-03-20",
        avatar: "assets/images/team/mohammed-hassan.jpg",
        bio: "Experienced program coordinator specializing in community engagement and youth leadership development.",
        type: "Leadership",
        skills: ["Program Management", "Youth Development", "Community Engagement"]
    },
    {
        id: "ACMO003",
        name: "Fatima Begum",
        position: "Field Officer",
        district: "Sirajganj",
        email: "fatima.begum@acmo-bd.org",
        phone: "+880 1912-345680",
        facebook: "https://facebook.com/fatima.begum",
        joinDate: "2021-06-10",
        avatar: "assets/images/team/fatima-begum.jpg",
        bio: "Dedicated field officer working directly with communities to prevent child marriage and promote girls' education.",
        type: "Field Officer",
        skills: ["Community Outreach", "Education", "Counseling"]
    },
    {
        id: "ACMO004",
        name: "Rakib Ahmed",
        position: "Research Associate",
        district: "Dhaka",
        email: "rakib.ahmed@acmo-bd.org",
        phone: "+880 1712-345681",
        facebook: "https://facebook.com/rakib.ahmed",
        joinDate: "2021-09-15",
        avatar: "assets/images/team/rakib-ahmed.jpg",
        bio: "Research specialist focusing on data analysis and impact measurement for ACMO's programs.",
        type: "Research Associate",
        skills: ["Research", "Data Analysis", "Report Writing", "Statistics"]
    },
    {
        id: "ACMO005",
        name: "Nasreen Akter",
        position: "Community Liaison",
        district: "Bogura",
        email: "nasreen.akter@acmo-bd.org",
        phone: "+880 1812-345682",
        facebook: "https://facebook.com/nasreen.akter",
        joinDate: "2021-11-30",
        avatar: "assets/images/team/nasreen-akter.jpg",
        bio: "Community liaison officer building bridges between ACMO and local communities in Bogura district.",
        type: "Community Liaison",
        skills: ["Community Relations", "Cultural Sensitivity", "Local Languages"]
    }
    // Add more members as needed - in production this would be 150+ members
];

// Generate additional sample members
function generateSampleMembers() {
    const positions = ["Volunteer", "Field Officer", "Community Liaison", "Program Coordinator"];
    const districts = ["Sirajganj", "Rajshahi", "Rangpur", "Bogura", "Pabna", "Natore", "Dhaka", "Chittagong"];
    const firstNames = ["Rashida", "Aminul", "Sultana", "Karim", "Hasina", "Rahman", "Salma", "Ibrahim", "Ruma", "Shahid"];
    const lastNames = ["Khan", "Islam", "Ahmed", "Rahman", "Begum", "Akter", "Hossain", "Ali", "Khatun", "Miah"];
    
    const additionalMembers = [];
    
    for (let i = 6; i <= 156; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const position = positions[Math.floor(Math.random() * positions.length)];
        const district = districts[Math.floor(Math.random() * districts.length)];
        
        additionalMembers.push({
            id: `ACMO${String(i).padStart(3, '0')}`,
            name: `${firstName} ${lastName}`,
            position: position,
            district: district,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@acmo-bd.org`,
            phone: `+880 ${Math.floor(Math.random() * 1000) + 1700}-${Math.floor(Math.random() * 900000) + 100000}`,
            facebook: `https://facebook.com/${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
            joinDate: new Date(2020 + Math.floor(Math.random() * 5), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
            avatar: `assets/images/team/member-${i}.jpg`,
            bio: `Dedicated ${position.toLowerCase()} working to prevent child marriage and empower communities in ${district} district.`,
            type: position,
            skills: ["Community Work", "Advocacy", "Education"]
        });
    }
    
    return additionalMembers;
}

// Combine initial data with generated members
let allMembers = [...membersData, ...generateSampleMembers()];

// Pagination settings
let currentPage = 1;
const membersPerPage = 12;
let filteredMembers = [...allMembers];
let currentView = 'grid';

// Initialize members page
function initializeMembersPage() {
    setupEventListeners();
    displayMembers();
    setupPagination();
    
    // Hide loading placeholder
    setTimeout(() => {
        document.getElementById('loading-placeholder').style.display = 'none';
    }, 1000);
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('member-search');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
    
    // Filter functionality
    const positionFilter = document.getElementById('position-filter');
    const locationFilter = document.getElementById('location-filter');
    
    if (positionFilter) {
        positionFilter.addEventListener('change', handleFilter);
    }
    
    if (locationFilter) {
        locationFilter.addEventListener('change', handleFilter);
    }
    
    // View toggle
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            switchView(view);
        });
    });
}

// Handle search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredMembers = [...allMembers];
    } else {
        filteredMembers = allMembers.filter(member => 
            member.name.toLowerCase().includes(searchTerm) ||
            member.position.toLowerCase().includes(searchTerm) ||
            member.district.toLowerCase().includes(searchTerm) ||
            member.id.toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 1;
    displayMembers();
    setupPagination();
}

// Handle filter functionality
function handleFilter() {
    const positionFilter = document.getElementById('position-filter').value;
    const locationFilter = document.getElementById('location-filter').value;
    
    filteredMembers = allMembers.filter(member => {
        const matchesPosition = !positionFilter || member.position === positionFilter;
        const matchesLocation = !locationFilter || member.district === locationFilter;
        
        return matchesPosition && matchesLocation;
    });
    
    currentPage = 1;
    displayMembers();
    setupPagination();
}

// Switch between grid and list view
function switchView(view) {
    currentView = view;
    
    // Update active button
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    // Update display
    displayMembers();
}

// Display members
function displayMembers() {
    const container = document.getElementById('members-grid');
    const startIndex = (currentPage - 1) * membersPerPage;
    const endIndex = startIndex + membersPerPage;
    const membersToShow = filteredMembers.slice(startIndex, endIndex);
    
    if (membersToShow.length === 0) {
        container.innerHTML = '<div class="no-members">No members found matching your criteria.</div>';
        return;
    }
    
    if (currentView === 'grid') {
        container.className = 'members-grid';
        container.innerHTML = membersToShow.map(member => createMemberCard(member)).join('');
    } else {
        container.className = 'members-list';
        container.innerHTML = membersToShow.map(member => createMemberListItem(member)).join('');
    }
}

// Create member card for grid view
function createMemberCard(member) {
    return `
        <div class="member-card" onclick="openMemberModal('${member.id}')">
            <div class="member-avatar">
                <img src="${member.avatar}" alt="${member.name}" onerror="this.src='assets/images/default-avatar.png'">
                <div class="member-status online"></div>
            </div>
            <div class="member-info">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-position">${member.position}</p>
                <p class="member-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${member.district}
                </p>
                <p class="member-id">ID: ${member.id}</p>
            </div>
            <div class="member-actions">
                <a href="${member.facebook}" target="_blank" class="social-btn facebook" title="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="mailto:${member.email}" class="social-btn email" title="Email">
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    `;
}

// Create member list item for list view
function createMemberListItem(member) {
    return `
        <div class="member-list-item" onclick="openMemberModal('${member.id}')">
            <div class="member-avatar-small">
                <img src="${member.avatar}" alt="${member.name}" onerror="this.src='assets/images/default-avatar.png'">
            </div>
            <div class="member-list-info">
                <div class="member-list-primary">
                    <h4 class="member-name">${member.name}</h4>
                    <span class="member-id">${member.id}</span>
                </div>
                <div class="member-list-secondary">
                    <span class="member-position">${member.position}</span>
                    <span class="member-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${member.district}
                    </span>
                    <span class="member-join-date">
                        Joined: ${formatDate(member.joinDate)}
                    </span>
                </div>
            </div>
            <div class="member-list-actions">
                <a href="${member.facebook}" target="_blank" class="action-btn facebook" title="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="mailto:${member.email}" class="action-btn email" title="Email">
                    <i class="fas fa-envelope"></i>
                </a>
                <button class="action-btn details" title="View Details">
                    <i class="fas fa-info-circle"></i>
                </button>
            </div>
        </div>
    `;
}

// Setup pagination
function setupPagination() {
    const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
    const paginationNumbers = document.getElementById('pagination-numbers');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    
    // Update button states
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages || totalPages === 0;
    
    // Generate page numbers
    let paginationHTML = '';
    
    // Always show first page
    if (totalPages > 0) {
        paginationHTML += createPageButton(1);
    }
    
    // Add ellipsis if needed
    if (currentPage > 4) {
        paginationHTML += '<span class="pagination-ellipsis">...</span>';
    }
    
    // Add pages around current page
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
            paginationHTML += createPageButton(i);
        }
    }
    
    // Add ellipsis if needed
    if (currentPage < totalPages - 3) {
        paginationHTML += '<span class="pagination-ellipsis">...</span>';
    }
    
    // Always show last page
    if (totalPages > 1) {
        paginationHTML += createPageButton(totalPages);
    }
    
    paginationNumbers.innerHTML = paginationHTML;
    
    // Update pagination visibility
    const pagination = document.getElementById('pagination');
    pagination.style.display = totalPages <= 1 ? 'none' : 'flex';
}

// Create page button
function createPageButton(page) {
    const isActive = page === currentPage;
    return `
        <button class="pagination-number ${isActive ? 'active' : ''}" onclick="goToPage(${page})">
            ${page}
        </button>
    `;
}

// Change page
function changePage(direction) {
    const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        displayMembers();
        setupPagination();
        scrollToTop();
    }
}

// Go to specific page
function goToPage(page) {
    const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
    
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        displayMembers();
        setupPagination();
        scrollToTop();
    }
}

// Scroll to top of members section
function scrollToTop() {
    document.querySelector('.members-directory').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Open member detail modal
function openMemberModal(memberId) {
    const member = allMembers.find(m => m.id === memberId);
    if (!member) return;
    
    const modal = document.getElementById('member-modal');
    const title = document.getElementById('member-modal-title');
    const content = document.getElementById('member-detail-content');
    
    title.textContent = member.name;
    content.innerHTML = createMemberDetailContent(member);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close member modal
function closeMemberModal() {
    const modal = document.getElementById('member-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Create member detail content
function createMemberDetailContent(member) {
    return `
        <div class="member-detail-header">
            <div class="member-detail-avatar">
                <img src="${member.avatar}" alt="${member.name}" onerror="this.src='assets/images/default-avatar.png'">
            </div>
            <div class="member-detail-info">
                <h3>${member.name}</h3>
                <p class="position">${member.position}</p>
                <p class="member-id">ID: ${member.id}</p>
                <p class="join-date">Joined: ${formatDate(member.joinDate)}</p>
            </div>
        </div>
        
        <div class="member-detail-body">
            <div class="detail-section">
                <h4>About</h4>
                <p>${member.bio}</p>
            </div>
            
            <div class="detail-section">
                <h4>Contact Information</h4>
                <div class="contact-details">
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${member.email}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>${member.phone}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${member.district}</span>
                    </div>
                </div>
            </div>
            
            ${member.skills && member.skills.length > 0 ? `
            <div class="detail-section">
                <h4>Skills & Expertise</h4>
                <div class="skills-list">
                    ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            ` : ''}
            
            <div class="detail-section">
                <h4>Connect</h4>
                <div class="member-social-links">
                    <a href="${member.facebook}" target="_blank" class="social-link facebook">
                        <i class="fab fa-facebook-f"></i>
                        Facebook
                    </a>
                    <a href="mailto:${member.email}" class="social-link email">
                        <i class="fas fa-envelope"></i>
                        Send Email
                    </a>
                    <a href="tel:${member.phone}" class="social-link phone">
                        <i class="fas fa-phone"></i>
                        Call
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Format date utility
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export member data (for admin purposes)
function exportMemberData() {
    const dataStr = JSON.stringify(filteredMembers, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'acmo-members-export.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Search members by skill
function searchBySkill(skill) {
    const searchInput = document.getElementById('member-search');
    if (searchInput) {
        searchInput.value = skill;
        handleSearch({ target: { value: skill } });
    }
}

// Get member statistics
function getMemberStatistics() {
    const stats = {
        total: allMembers.length,
        byPosition: {},
        byDistrict: {},
        byJoinYear: {},
        recentJoins: allMembers.filter(m => {
            const joinDate = new Date(m.joinDate);
            const sixMonthsAgo = new Date();
            sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
            return joinDate > sixMonthsAgo;
        }).length
    };
    
    // Count by position
    allMembers.forEach(member => {
        stats.byPosition[member.position] = (stats.byPosition[member.position] || 0) + 1;
    });
    
    // Count by district
    allMembers.forEach(member => {
        stats.byDistrict[member.district] = (stats.byDistrict[member.district] || 0) + 1;
    });
    
    // Count by join year
    allMembers.forEach(member => {
        const year = new Date(member.joinDate).getFullYear();
        stats.byJoinYear[year] = (stats.byJoinYear[year] || 0) + 1;
    });
    
    return stats;
}

// Advanced search functionality
function advancedSearch(criteria) {
    const { name, position, district, skills, joinDateFrom, joinDateTo } = criteria;
    
    return allMembers.filter(member => {
        // Name search
        if (name && !member.name.toLowerCase().includes(name.toLowerCase())) {
            return false;
        }
        
        // Position filter
        if (position && member.position !== position) {
            return false;
        }
        
        // District filter
        if (district && member.district !== district) {
            return false;
        }
        
        // Skills filter
        if (skills && skills.length > 0) {
            const memberSkills = member.skills || [];
            const hasSkills = skills.some(skill => 
                memberSkills.some(memberSkill => 
                    memberSkill.toLowerCase().includes(skill.toLowerCase())
                )
            );
            if (!hasSkills) return false;
        }
        
        // Join date range filter
        const memberJoinDate = new Date(member.joinDate);
        if (joinDateFrom && memberJoinDate < new Date(joinDateFrom)) {
            return false;
        }
        if (joinDateTo && memberJoinDate > new Date(joinDateTo)) {
            return false;
        }
        
        return true;
    });
}

// Initialize member statistics counters
function initializeMemberStats() {
    const stats = getMemberStatistics();
    
    // Animate counters
    animateCounter('.members-stats .stat-number[data-count="156"]', stats.total);
    
    // Update leadership count
    const leadershipCount = stats.byPosition['Executive Director'] + 
                           stats.byPosition['Program Coordinator'] || 0;
    animateCounter('.members-stats .stat-number[data-count="12"]', leadershipCount);
    
    // Update volunteer count
    const volunteerCount = stats.byPosition['Volunteer'] || 0;
    animateCounter('.members-stats .stat-number[data-count="89"]', volunteerCount);
    
    // Update district count
    const districtCount = Object.keys(stats.byDistrict).length;
    animateCounter('.members-stats .stat-number[data-count="25"]', districtCount);
}

// Animate counter utility
function animateCounter(selector, targetValue) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    const startValue = 0;
    const duration = 2000;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * targetValue);
        
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = targetValue;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Handle member card hover effects
function setupMemberCardEffects() {
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.member-card')) {
            const card = e.target.closest('.member-card');
            card.style.transform = 'translateY(-5px)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.member-card')) {
            const card = e.target.closest('.member-card');
            card.style.transform = 'translateY(0)';
        }
    });
}

// Keyboard navigation support
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Close modal with Escape key
        if (e.key === 'Escape') {
            if (document.getElementById('member-modal').classList.contains('active')) {
                closeMemberModal();
            }
        }
        
        // Navigate pagination with arrow keys
        if (e.target.closest('.members-directory')) {
            if (e.key === 'ArrowLeft' && e.ctrlKey) {
                e.preventDefault();
                changePage(-1);
            } else if (e.key === 'ArrowRight' && e.ctrlKey) {
                e.preventDefault();
                changePage(1);
            }
        }
    });
}

// Print member directory
function printMemberDirectory() {
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>ACMO Members Directory</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .member { margin-bottom: 20px; padding: 10px; border-bottom: 1px solid #ccc; }
                .member h3 { margin: 0 0 5px 0; color: #2563eb; }
                .member p { margin: 2px 0; color: #666; }
                @media print { .no-print { display: none; } }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>ACMO - Anti Child Marriage Organization</h1>
                <h2>Members Directory</h2>
                <p>Total Members: ${filteredMembers.length}</p>
                <p>Generated on: ${new Date().toLocaleDateString()}</p>
            </div>
            ${filteredMembers.map(member => `
                <div class="member">
                    <h3>${member.name}</h3>
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>District:</strong> ${member.district}</p>
                    <p><strong>ID:</strong> ${member.id}</p>
                    <p><strong>Email:</strong> ${member.email}</p>
                    <p><strong>Joined:</strong> ${formatDate(member.joinDate)}</p>
                </div>
            `).join('')}
        </body>
        </html>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
}

// Save filter preferences
function saveFilterPreferences() {
    const preferences = {
        view: currentView,
        positionFilter: document.getElementById('position-filter').value,
        locationFilter: document.getElementById('location-filter').value,
        searchTerm: document.getElementById('member-search').value
    };
    
    localStorage.setItem('acmo-member-filters', JSON.stringify(preferences));
}

// Load filter preferences
function loadFilterPreferences() {
    const saved = localStorage.getItem('acmo-member-filters');
    if (saved) {
        const preferences = JSON.parse(saved);
        
        // Restore view
        if (preferences.view) {
            switchView(preferences.view);
        }
        
        // Restore filters
        if (preferences.positionFilter) {
            document.getElementById('position-filter').value = preferences.positionFilter;
        }
        
        if (preferences.locationFilter) {
            document.getElementById('location-filter').value = preferences.locationFilter;
        }
        
        if (preferences.searchTerm) {
            document.getElementById('member-search').value = preferences.searchTerm;
        }
        
        // Apply filters
        handleFilter();
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.members-directory')) {
        initializeMembersPage();
        initializeMemberStats();
        setupMemberCardEffects();
        setupKeyboardNavigation();
        loadFilterPreferences();
        
        // Save preferences when filters change
        window.addEventListener('beforeunload', saveFilterPreferences);
    }
});

// Export functions for global access
window.MembersDirectory = {
    openMemberModal,
    closeMemberModal,
    changePage,
    goToPage,
    exportMemberData,
    printMemberDirectory,
    getMemberStatistics,
    advancedSearch
};
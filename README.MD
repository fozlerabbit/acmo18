# ACMO - Anti Child Marriage Organization Website

A comprehensive, modern, and responsive website for the Anti Child Marriage Organization (ACMO), a youth-led educational and welfare initiative dedicated to preventing child marriage and empowering communities.

## 🌟 Features

### Core Features
- **Responsive Design**: Mobile-first approach with cross-device compatibility
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multi-language Support**: English and Bengali language options
- **Dark/Light Theme Toggle**: User preference-based theming
- **Progressive Web App (PWA)**: Fast loading and offline capabilities
- **SEO Optimized**: Search engine friendly structure
- **Accessibility Compliant**: WCAG guidelines implementation

### Key Sections
- **Homepage**: Hero section, mission statement, latest news, statistics
- **About Pages**: Organization story, leadership team, mission & vision
- **Programs**: Detailed program information and initiatives
- **Partnerships**: Featuring ScriptySphere and other strategic partnerships
- **Members Directory**: Searchable, filterable directory of 150+ members
- **Events & Activities**: Upcoming and past events with registration
- **Blog/News**: Articles, announcements, and resources
- **Contact**: Contact forms, social media, location information

### Advanced Features
- **Member Management**: Dynamic member directory with search and filters
- **Event Registration**: Online registration with form validation
- **Partnership Showcase**: Special section highlighting ScriptySphere collaboration
- **Resource Library**: Downloadable PDFs and educational materials
- **Testimonials**: Community impact stories
- **Newsletter Signup**: Email subscription integration
- **Search Functionality**: Global site search
- **Analytics Integration**: Performance and user behavior tracking

## 📁 Project Structure

```
acmo-website/
├── index.html                 # Main homepage
├── about.html                # About ACMO
├── partnerships.html         # Partnerships (featuring ScriptySphere)
├── members.html              # Members directory
├── programs.html             # Programs and initiatives
├── events.html               # Events and activities
├── blog.html                 # Blog and news
├── contact.html              # Contact page
├── README.md                 # Project documentation
├── assets/
│   ├── css/
│   │   ├── main.css          # Main stylesheet
│   │   ├── responsive.css    # Responsive design styles
│   │   └── members.css       # Members page specific styles
│   ├── js/
│   │   ├── main.js           # Core JavaScript functionality
│   │   ├── members.js        # Members directory functionality
│   │   ├── partnerships.js   # Partnerships page functionality
│   │   └── animations.js     # Animation and interaction effects
│   ├── images/
│   │   ├── logos/
│   │   │   ├── acmo-logo.png
│   │   │   └── scriptysphere-logo.png
│   │   ├── hero/
│   │   ├── programs/
│   │   ├── team/
│   │   └── news/
│   └── documents/
│       ├── ACMO-Partnership-Guide.pdf
│       └── resources/
└── sw.js                     # Service Worker for PWA
```

## 🤝 ScriptySphere Partnership

This website prominently features the strategic partnership between ACMO and **ScriptySphere**, highlighting:

- **MoU Details**: Memorandum of Understanding signed in December 2024
- **Joint Projects**: 5+ active technology-driven initiatives
- **Technology Solutions**: Mobile apps, data analytics, e-learning platforms
- **Impact Tracking**: Advanced dashboards for measuring program effectiveness
- **Future Roadmap**: AI-powered risk assessment and automated systems

### Partnership Benefits Highlighted:
1. **Mobile-First Solutions**: Community reporting and educational apps
2. **Data Analytics Platform**: Impact measurement and predictive analytics
3. **E-Learning Management System**: Training and certification programs
4. **Child Protection Systems**: Secure case management platforms
5. **Community Networks**: Digital platforms connecting stakeholders
6. **Automation Tools**: Workflow optimization and resource allocation

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Web server (for local development)
- Code editor (VS Code recommended)

### Installation & Setup

1. **Clone/Download the Repository**
   ```bash
   git clone <repository-url>
   cd acmo-website
   ```

2. **Local Development Setup**
   ```bash
   # Using Python (recommended for local testing)
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access the Website**
   Open your browser and navigate to `http://localhost:8000`

### GitHub Pages Deployment

1. **Upload to GitHub Repository**
   - Create a new repository on GitHub
   - Upload all project files
   - Ensure `index.html` is in the root directory

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select source branch (main/master)
   - Your site will be available at `https://username.github.io/repository-name`

## 🎨 Customization

### Branding
- Update logos in `assets/images/logos/`
- Modify color scheme in `assets/css/main.css` (CSS variables)
- Customize typography in the `:root` section

### Content Management
- **Members**: Update member data in `assets/js/members.js`
- **Events**: Modify event listings in respective HTML files
- **News/Blog**: Add articles by creating new HTML files in the blog structure
- **Partnerships**: Update partnership information in `partnerships.html`

### Styling
- **Main styles**: `assets/css/main.css`
- **Responsive**: `assets/css/responsive.css`
- **Component-specific**: Individual CSS files for complex components

## 📱 Responsive Design

The website uses a mobile-first approach with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Key Responsive Features:
- Collapsible navigation menu
- Flexible grid layouts
- Optimized images for different screen sizes
- Touch-friendly interface elements
- Readable typography across devices

## ⚡ Performance Optimizations

- **Lazy Loading**: Images load as needed
- **Minified Assets**: Compressed CSS and JavaScript
- **Efficient Animations**: Hardware-accelerated transforms
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Service Worker**: Caching for faster repeat visits

## 🔧 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Legacy Support**: IE11+ (with polyfills)

## 📊 Analytics & Tracking

The website includes:
- Google Analytics 4 integration
- Custom event tracking
- Performance monitoring
- Error logging and reporting

## 🔒 Security Features

- **Form Validation**: Client and server-side validation
- **HTTPS Ready**: SSL certificate compatible
- **Privacy Compliant**: GDPR/privacy policy integration
- **Secure Headers**: Content Security Policy implementation

## 🌐 SEO Features

- **Semantic HTML**: Proper heading structure and landmarks
- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema.org markup for better search results
- **Sitemap**: XML sitemap for search engines

## 🤝 Contributing

### For ACMO Team Members:
1. Update member information in the members directory
2. Add new events and news articles
3. Update partnership information
4. Maintain resource library

### For Developers:
1. Follow existing code structure and conventions
2. Test across multiple browsers and devices
3. Maintain responsive design principles
4. Update documentation for new features

## 📝 License

This project is proprietary to ACMO (Anti Child Marriage Organization). All rights reserved.

## 📞 Support & Contact

- **Website Issues**: Contact the development team
- **Content Updates**: Reach out to ACMO communications team
- **Partnership Inquiries**: partnerships@acmo-bd.org
- **Technical Support**: tech-support@acmo-bd.org

## 🔄 Version History

- **v1.0.0** (December 2024): Initial release
  - Complete website structure
  - ScriptySphere partnership integration
  - Members directory implementation
  - Mobile-responsive design

## 🎯 Future Enhancements

### Planned Features:
1. **Advanced Member Portal**: Login system for members
2. **Event Management System**: Online event creation and management
3. **Donation Integration**: Online donation processing
4. **Multi-language Expansion**: Additional language support
5. **AI-Powered Chatbot**: Automated visitor assistance
6. **Advanced Analytics Dashboard**: Real-time impact tracking

### ScriptySphere Collaboration Roadmap:
1. **Q1 2025**: Digital Awareness Campaign Platform
2. **Q2 2025**: Community Data Collection System
3. **Q3 2025**: E-Learning Management System
4. **Q4 2025**: Impact Measurement Dashboard
5. **2026**: AI-Powered Risk Assessment Tools

---

**Built with ❤️ for ACMO by the development team**
**Powered by the strategic partnership with ScriptySphere**
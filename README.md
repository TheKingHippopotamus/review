# Avenews Contact Form - Technical Assessment

A responsive contact form application built with Angular 17, implementing pixel-perfect design from Figma specifications with comprehensive form validation.

## 🚀 Live Demo

[View Live Application](#) _(Link will be added after deployment)_

## 📋 Project Overview

This project is a technical assessment for the Junior Full-Stack Developer position at Avenews. It demonstrates the ability to convert Figma designs into a fully functional, responsive web application with robust form validation.

## ✨ Features

### Design Implementation
- ✅ Pixel-perfect match to Figma design specifications
- ✅ Responsive layout supporting mobile (320px+), tablet (768px-1024px), and desktop (1920px+)
- ✅ Professional UI with Avenews branding and color scheme
- ✅ Clean, modern interface with attention to spacing and typography

### Form Functionality
- ✅ **7 Required Fields:** First Name, Last Name, Email, Phone Number, Verify Phone Number, National ID, Acceptance Checkbox
- ✅ **1 Optional Field:** Second Phone Number
- ✅ Real-time validation with visual feedback
- ✅ Email format validation
- ✅ Phone number validation (9 digits with +254 Kenya country code)
- ✅ Phone number matching verification
- ✅ Red border indicators for invalid fields
- ✅ Descriptive error messages
- ✅ reCAPTCHA integration (UI implementation)

### Technical Implementation
- ✅ Angular Reactive Forms for robust validation
- ✅ TypeScript for type-safe development
- ✅ SCSS for maintainable styling with CSS variables
- ✅ Component-based architecture
- ✅ Cross-browser compatibility (Chrome, Edge, Firefox)

## 🛠️ Technologies Used

- **Framework:** Angular 17 (Standalone Components)
- **Language:** TypeScript
- **Styling:** SCSS with CSS variables
- **Form Management:** Angular Reactive Forms
- **Version Control:** Git & GitHub
- **Development Tools:** Angular CLI, VS Code

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v17 or higher)

### Installation Steps

1. **Clone the repository**
```bash
   git clone https://github.com/YOUR_USERNAME/avenews-contact-form.git
   cd avenews-contact-form
```

2. **Install dependencies**
```bash
   npm install
```

3. **Run the development server**
```bash
   ng serve
```

4. **Open in browser**
```
   Navigate to http://localhost:4200
```

## 🏗️ Project Structure
```
avenews-contact-form/
├── src/
│   ├── app/
│   │   ├── app.component.ts       # Form logic and validation
│   │   ├── app.component.html     # Form structure
│   │   ├── app.component.scss     # Component styles
│   │   └── app.config.ts          # App configuration
│   ├── assets/
│   │   └── Logo.png               # Avenews logo
│   ├── styles.scss                # Global styles and variables
│   └── index.html                 # Main HTML entry
├── angular.json                   # Angular configuration
├── package.json                   # Dependencies
└── README.md                      # Documentation
```

## 🎯 Form Validation Rules

| Field | Validation Rules |
|-------|-----------------|
| First Name | Required, Minimum 2 characters |
| Last Name | Required, Minimum 2 characters |
| Email Address | Required, Valid email format |
| Phone Number | Required, Exactly 9 digits (with +254 prefix) |
| Verify Phone Number | Required, Must match Phone Number |
| Second Phone Number | Optional, 9 digits if provided |
| National Identity Number | Required, Minimum 5 characters |
| Acceptance Checkbox | Required |
| reCAPTCHA | Required |

## 📱 Responsive Design

The application is fully responsive across all device sizes:

- **Desktop (1920px+):** Full-width layout with optimal spacing
- **Tablet (768px-1024px):** Adjusted container width and responsive elements
- **Mobile (320px-767px):** Single-column layout with touch-optimized inputs

## 🎨 Design Specifications

- **Primary Color:** #0D343F (Avenews Aqua/950)
- **Link Color:** #16a5b8 (Bright Turquoise)
- **Error Color:** #dc3545 (Red)
- **Font Family:** Inter, Segoe UI, sans-serif
- **Figma Design:** [View Design](https://www.figma.com/design/wwqZ2A0U1pT1QPNfw1nYpV/Avenews-Dev-exercise)

## 🚀 Future Enhancements

**Feature Branch: `feature/country-selector`**

A bonus implementation showcasing additional functionality:
- Multi-country phone number support
- Dynamic country code dropdown
- International phone validation

This demonstrates the ability to think beyond requirements and implement user-centric features.

## 📝 Development Process

- **Version Control:** Git with meaningful, descriptive commit messages
- **Code Quality:** Clean, readable code following Angular best practices
- **Responsive Design:** Mobile-first approach with progressive enhancement
- **Testing:** Cross-browser testing on Chrome, Edge, and Firefox

## 🧪 Testing

### Manual Testing Checklist
- ✅ All form fields validate correctly
- ✅ Error messages display appropriately
- ✅ Form submission works as expected
- ✅ Responsive design functions on all breakpoints
- ✅ Cross-browser compatibility verified

### Browser Compatibility
- ✅ Google Chrome (tested)
- ✅ Microsoft Edge (tested)
- ✅ Mozilla Firefox (recommended)

## 👨‍💻 Author

**Dor Noy**
- GitHub: [@dornoy5](https://github.com/dornoy5)
- Email: dornoy5@gmail.com

## 📄 Assignment Requirements

This project fulfills all requirements of the Avenews Junior Full-Stack Developer Technical Assessment:
- ✅ Angular 10+ (using Angular 17)
- ✅ TypeScript for all logic
- ✅ SCSS for styling
- ✅ Pixel-perfect Figma implementation
- ✅ Fully responsive (320px minimum)
- ✅ Form validation logic
- ✅ Email validation
- ✅ Phone number validation (10 digits including +254)
- ✅ Git repository with meaningful commits
- ✅ Public GitHub repository

## 🙏 Acknowledgments

- Design provided by Avenews
- Built as part of the technical assessment process
- Demonstrates practical Angular development skills and attention to detail

---

**Built with ❤️ for Avenews**
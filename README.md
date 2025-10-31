# 🚀 Personal Portfolio Website

> A modern, responsive portfolio website showcasing my projects, skills, and professional experience as a Full Stack Developer.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.15-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations and transitions
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🌙 **Dark Theme** - Elegant dark color scheme with green accent colors
- 📧 **Contact Form** - Integrated EmailJS for direct messaging with auto-reply
- 🎯 **Smooth Scrolling** - Seamless navigation between sections
- 📊 **Skills Visualization** - Animated progress bars for technical skills
- 💼 **Project Showcase** - Featured projects with tech stack badges and GitHub links
- 📄 **Downloadable Resume** - Easy CV download functionality
- 🔗 **Social Links** - Direct links to GitHub, LinkedIn, LeetCode, Codolio, and email
- 🎬 **Scroll Animations** - Custom scroll-triggered animations for better UX

## 🛠️ Technologies & Tools Used

### **Frontend Framework**
- **React.js** (v19.1.1) - JavaScript library for building user interfaces
- **React DOM** (v19.1.1) - React package for working with the DOM

### **Styling**
- **TailwindCSS** (v4.1.15) - Utility-first CSS framework
- **@tailwindcss/vite** (v4.1.15) - TailwindCSS Vite plugin

### **Build Tool**
- **Vite** (v7.1.7) - Next-generation frontend build tool
- **@vitejs/plugin-react** (v5.0.4) - Official Vite plugin for React

### **Routing**
- **React Router DOM** (v7.9.4) - Declarative routing for React applications

### **Icons & UI Components**
- **Lucide React** (v0.546.0) - Beautiful & consistent icon toolkit
- **React Icons** (v5.5.0) - Popular icon library (includes Font Awesome, Material Design, etc.)

### **Email Integration**
- **@emailjs/browser** (v4.4.1) - Send emails directly from JavaScript
- **emailjs-com** (v3.2.0) - EmailJS library for contact form functionality

### **Code Quality & Linting**
- **ESLint** (v9.36.0) - JavaScript linting utility
- **@eslint/js** (v9.36.0) - ESLint JavaScript rules
- **eslint-plugin-react-hooks** (v5.2.0) - ESLint rules for React Hooks
- **eslint-plugin-react-refresh** (v0.4.22) - ESLint plugin for React Fast Refresh
- **globals** (v16.4.0) - Global variable definitions

### **Type Definitions**
- **@types/react** (v19.1.16) - TypeScript definitions for React
- **@types/react-dom** (v19.1.9) - TypeScript definitions for React DOM

### **Custom Hooks**
- **useScrollAnimation** - Custom hook for scroll-triggered animations

## 📂 Project Structure

```
personalPortfolio/
├── public/
│   ├── ayushProfile.jpg           # Profile images
│   ├── Zerodha.jpeg               # Project screenshots
│   ├── hotelHeaven.jpg
│   ├── Weather.jpg
│   ├── portfolio.jpeg
│   ├── FYIgpt.jpeg
│   ├── codolio.png
│   └── Aayush_paliwal_SDE.pdf     # Resume/CV
├── src/
│   ├── components/
│   │   ├── About.jsx              # About section (main container)
│   │   ├── AboutContent.jsx       # About content component
│   │   ├── ProfileImage.jsx       # Profile image with decorations
│   │   ├── AnimateElement.jsx     # Animated background effects
│   │   ├── Button.jsx             # Reusable button component
│   │   ├── Contact.jsx            # Contact form with EmailJS
│   │   ├── ContentCard.jsx        # Section title cards
│   │   ├── Experience.jsx         # Experience section
│   │   ├── Footer.jsx             # Footer with social links
│   │   ├── Header.jsx             # Navigation header
│   │   ├── Hero.jsx               # Hero/landing section
│   │   ├── Project.jsx            # Projects showcase
│   │   ├── Skills.jsx             # Skills, education & experience
│   │   └── SocialIcon.jsx         # Social media icon links
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Custom scroll animation hook
│   ├── App.jsx                    # Main app component
│   └── main.jsx                   # Entry point
├── eslint.config.js               # ESLint configuration
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # Project documentation
```

## 🎨 Key Components

### **Hero Section**
- Professional introduction
- Profile image with hover effects
- Social media links (GitHub, LinkedIn, LeetCode, Codolio, Email)
- CTA buttons with smooth scrolling

### **About Section**
- Personal information and bio
- Profile image with decorative elements
- Quick facts (Name, Location, Birthday, Email)
- Download CV and Learn More buttons

### **Skills Section**
- Animated skill progress bars (React, Node.js, JavaScript, MongoDB, Java, etc.)
- Education timeline with details
- Professional experience timeline
- Hover effects on cards

### **Projects Section**
- Featured project cards with images
- Tech stack badges for each project
- GitHub repository links
- Project categories (Full Stack, Frontend, AI, DSA)
- Hover animations and effects

### **Contact Section**
- Functional contact form with validation
- EmailJS integration for sending messages
- Auto-reply functionality
- Contact information cards (Email, Phone, Location)
- Social media links

### **Responsive Header**
- Fixed navigation with scroll effects
- Smooth scrolling to sections
- Mobile hamburger menu
- Download CV button

### **Footer**
- Copyright information
- Scroll to top button
- Brand name with hover effects

## 🎯 Performance Optimizations

- ⚡ Vite for fast HMR (Hot Module Replacement)
- 📦 Code splitting and lazy loading
- 🖼️ Optimized images and assets
- 🎨 TailwindCSS purging unused styles
- 🔄 Component-based architecture for reusability
- 💨 Minimal bundle size

## 📧 Contact

**Aayush Paliwal** - Full Stack Developer

- 📧 Email: ayushpaliwal2580@gmail.com
- 💼 GitHub: [@Ayushpaliwal1234](https://github.com/Ayushpaliwal1234)
- 🔗 LinkedIn: [Aayush Paliwal](https://www.linkedin.com/in/aayush-paliwal-/)
- 💻 LeetCode: [2203031050872](https://leetcode.com/u/2203031050872/)
- 📊 Codolio: [AayushPaliwal](https://codolio.com/profile/AayushPaliwal)

---

⭐ **If you like this project, please give it a star!** ⭐


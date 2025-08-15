# GFG SRMIST Club Recruitment Landing Page

A beautiful, responsive landing page for the GeeksforGeeks SRMIST Club recruitment campaign. Built with React, Tailwind CSS, and modern web technologies..

## Features

- 🎨 **Modern Design**: Beautiful gradient backgrounds and glassmorphism effects
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🚀 **Four Domains**: Technical, Management, Creatives, and Corporate sections
- 🔗 **Luma Form Integration**: Direct redirect to your recruitment form
- ⚡ **Performance**: Optimized for fast loading and smooth animations
- ♿ **Accessible**: Built with accessibility best practices

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Customization

### Update Luma Form URL

To connect your actual Luma form, update the URL in `src/App.jsx`:

```jsx
const handleApplyNow = () => {
  // Replace this URL with your actual Luma form URL
  window.open('https://forms.lu.ma/YOUR-ACTUAL-FORM-ID', '_blank')
}
```

### Update Club Information

- **Email**: Update the contact email in the footer
- **Stats**: Modify the numbers in the hero section
- **Content**: Customize descriptions and text content as needed

### Domain Customization

Each domain can be customized in the `domains` array:

```jsx
const domains = [
  {
    name: 'Technical',
    description: 'Your custom description here',
    icon: '🚀', // Change emoji or use custom icons
    color: 'from-blue-500 to-cyan-500' // Customize gradient colors
  },
  // ... other domains
]
```

## Technologies Used

- **React 19** - Modern React with latest features
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **ESLint** - Code quality and consistency

## Project Structure

```
src/
├── App.jsx          # Main landing page component
├── App.css          # Custom styles and animations
├── index.css        # Base styles and Tailwind imports
└── main.jsx         # App entry point
```

## Deployment

The project can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: `npm run build && gh-pages -d dist`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is created for GFG SRMIST Club. All rights reserved.

---

**Built with ❤️ for the GFG SRMIST Community**

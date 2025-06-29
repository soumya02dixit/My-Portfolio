# Personal Portfolio - Kelly Theme

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion, inspired by the Kelly Bootstrap theme.

![Portfolio Screenshot](./public/screenshot.png)

## Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Fully Responsive**: Works on all devices and screen sizes
- **Dark Mode**: Built-in dark/light mode toggle
- **Multi-page Layout**: Organized sections for Home, About, Resume, Portfolio, and Contact
- **Interactive Elements**: Hover effects, smooth scrolling, and animated transitions
- **SEO Optimized**: Proper meta tags and semantic HTML

## Technologies Used

- React 18
- React Router v6
- Tailwind CSS 3
- Framer Motion
- React Icons
- React Scroll

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
  ├── assets/               # Images, icons, and other static files
  ├── components/           # Reusable UI components
  │   └── layout/           # Layout components (Header, Sidebar, etc.)
  ├── context/              # React context providers
  ├── pages/                # Page components
  ├── App.jsx               # Main application component
  └── index.jsx             # Application entry point
```

## Customization

### Theme Colors

You can customize the color scheme by editing the `tailwind.config.js` file. The primary and secondary colors can be modified in the `theme.extend.colors` section.

### Content

Update the following files to personalize your portfolio:

- `src/pages/About.jsx` - Personal information and skills
- `src/pages/Resume.jsx` - Education and work experience
- `src/pages/Portfolio.jsx` - Project showcase
- `src/pages/Contact.jsx` - Contact information and form

### Images

Replace placeholder images in the `public` directory with your own:

- `public/avatar.jpg` - Your profile picture
- `public/logo.png` - Your logo (optional)
- `public/favicon.ico` - Website favicon

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fportfolio)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/portfolio)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Kelly Bootstrap Theme](https://github.com/themewagon/kelly)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

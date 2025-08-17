# Ajay Sonkar - Portfolio Website

A modern, responsive portfolio website showcasing my skills as a Full Stack Developer & ML Engineer.

## 🚀 Live Demo

[View Portfolio](https://your-portfolio-url.com)

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Professional Sections**: Hero, About, Services, Portfolio, Contact
- **Download CV**: Direct PDF download functionality
- **Contact Form**: Ready-to-use contact form
- **SEO Optimized**: Proper meta tags and structure

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: CSS animations and transitions
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section with photo
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services & skills
│   ├── Portfolio.tsx   # Project showcase
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   └── Logo.tsx        # Logo component
├── assets/             # Images and static files
├── lib/                # Utility functions
└── pages/              # Page components
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8080`
   - The website will automatically reload when you make changes

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information
- Update personal details in `src/components/Hero.tsx`
- Modify skills in `src/components/Services.tsx`
- Add your projects in `src/components/Portfolio.tsx`

### Styling
- Colors and themes in `src/index.css`
- Tailwind configuration in `tailwind.config.ts`

### Assets
- Replace `src/assets/ajay-photo.jpg` with your photo
- Add your resume PDF to `public/Ajay_Resume.pdf`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Deployment

### Render (Recommended)
1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with your GitHub account

3. **Deploy on Render**
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Configure settings:
     - **Name**: `ajay-portfolio`
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`
   - Click "Create Static Site"

4. **Custom Domain (Optional)**
   - Go to your site settings
   - Add your custom domain
   - Update DNS records

### Alternative Platforms

#### Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

#### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

#### GitHub Pages
1. Add GitHub Pages action to your repository
2. Deploy from the `dist` folder

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: ajaysonkar2044@gmail.com
- **LinkedIn**: [Ajay Sonkar](https://linkedin.com/in/ajay-sonkar)
- **GitHub**: [AjaySonkar-CSE](https://github.com/AjaySonkar-CSE)

---

Made with ❤️ by Ajay Sonkar

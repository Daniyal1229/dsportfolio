# Syed Daniyal Bokhari - Portfolio

A stunning, interactive developer portfolio built with React, TypeScript, Three.js, and Framer Motion. Features a 3D hero scene, smooth animations, and a modern, responsive design.

## 🚀 Features

- **3D Interactive Hero Scene** - Built with Three.js and react-three-fiber
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Glass morphism effects and gradient text
- **Contact Form** - Integrated with EmailJS (ready for configuration)
- **SEO Optimized** - Meta tags and Open Graph support
- **TypeScript** - Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **3D Graphics**: Three.js, @react-three/fiber
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Email**: EmailJS (for contact form)
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile image**
   - Replace `public/profile.png` with your actual profile image
   - Recommended size: 400x400px or larger

4. **Configure EmailJS (Optional)**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Update the Contact component with your EmailJS credentials
   - Or keep the current simulation for demo purposes

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information
Update your information in `src/data/content.ts`:
- Personal details (name, email, phone, location)
- About section
- Experience
- Education
- Skills
- Projects
- Certificates
- Interests

### Styling
- Colors: Modify the color palette in `tailwind.config.js`
- Fonts: Update font imports in `src/index.css`
- Animations: Adjust animation parameters in components

### 3D Scene
- Modify the 3D elements in `src/components/Hero3DScene.tsx`
- Add or remove 3D objects
- Adjust camera settings and lighting

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Manual Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Upload the `dist` folder to your hosting provider

## 📄 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero3DScene.tsx     # 3D hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience
│   ├── Projects.tsx        # Portfolio projects
│   └── Contact.tsx         # Contact form
├── data/
│   └── content.ts          # All portfolio content
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles
```

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: Fast initial load with lazy loading
- **SEO**: Fully optimized for search engines

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📞 Contact

- **Email**: syeddaniyalbokhari72@gmail.com
- **Phone**: 9353252474
- **Location**: Bangalore, Karnataka

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Syed Daniyal Bokhari**

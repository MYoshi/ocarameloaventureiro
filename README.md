# O Caramelo Aventureiro – Portfolio

Welcome to the codebase for **O Caramelo Aventureiro**, a modern, multilingual portfolio project built with Next.js, Tailwind CSS, and a suite of best-practice tools. This project demonstrates advanced configuration, modular architecture, and a focus on accessibility, SEO, and developer experience.

## 🐾 About the Project & Story

O Caramelo Aventureiro is more than just a portfolio—it's the digital home of a beloved Instagram dog who shares his adventures, travels, and daily life with fans around the world! Inspired by the real-life journey of Caramelo, this site brings together stories, photos, and videos from his explorations in Japan and beyond. The project showcases not only technical skills but also the power of storytelling and community-building through social media.

Follow Caramelo on Instagram: [@ocarameloaventureiro](https://instagram.com/ocarameloaventureiro)

## 🚀 Features

- **Next.js 15 App Router**: File-based routing, layouts, and server components
- **TypeScript**: Type-safe codebase for reliability and maintainability
- **Tailwind CSS**: Utility-first styling with custom themes and responsive design
- **next-intl**: Full i18n support with dynamic locale loading and translation management
- **SEO Best Practices**: Dynamic meta tags, Open Graph, Twitter Cards, and robots.txt
- **Accessibility (a11y)**: Semantic HTML, ARIA labels, keyboard navigation, and color contrast
- **Google Analytics**: Integrated via Next.js `<Script>` for performance
- **Image Optimization**: Responsive images, lazy loading, and custom shadows
- **Testing**: Jest and React Testing Library for unit and snapshot tests
- **Custom Hooks & Utilities**: Modular, reusable logic for animation and UI
- **Organized Public Assets**: Images, videos, and icons grouped by feature

## 🛠️ Project Structure

```
public/
  images/         # Organized by feature
  videos/
  icons/
  robots.txt      # SEO and crawler management
src/
  app/            # Next.js App Router structure
    [locale]/     # Multilingual layouts and pages
  components/     # Modular, feature-based React components
  hooks/          # Custom React hooks
  utils/          # Utility functions
  messages/       # i18n translation files (en, pt)
  i18n/           # Routing and config for next-intl
```

## 🧑‍💻 How to Run Locally

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Run the development server**
   ```sh
   npm run dev
   ```
3. **Build for production**
   ```sh
   npm run build
   npm start
   ```

## 🌍 Internationalization (i18n)
- Uses `next-intl` for locale routing and translation loading
- All user-facing text is translatable via `src/messages/en.json` and `pt.json`
- Language switcher and dynamic locale detection

## 🎨 Styling
- Tailwind CSS with custom color palette and utility classes
- Responsive layouts and mobile-first design
- Custom shadows and overlays for images

## 🧩 Components & Hooks
- Modular, reusable components grouped by feature
- Custom hooks for scroll-based animation and UI effects

## 🛡️ SEO & Accessibility
- Dynamic `<title>`, meta, Open Graph, and Twitter tags
- robots.txt and sitemap.xml for search engines
- Semantic HTML, ARIA, and keyboard navigation

## 📦 Tooling & Configuration
- ESLint and Prettier for code quality
- TypeScript strict mode
- Custom Next.js and Tailwind config

## 📸 Screenshots
_Add screenshots of your UI here!_

## 🤝 Contributing
PRs and suggestions are welcome! This project is a showcase of best practices and modern web development techniques.

## 📄 License
MIT

---

> **Made with Next.js, Tailwind CSS, and ❤️ by [Your Name]**

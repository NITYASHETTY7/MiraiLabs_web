const fs = require('fs');
const path = require('path');

const write = (file, content) => {
  const fullPath = path.join(__dirname, 'src', file);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content, 'utf8');
};
const read = (file) => fs.readFileSync(path.join(__dirname, 'src', file), 'utf8');

// 1. Theme Tokens
write('styles/tokens.css', `
:root {
  /* Light Theme Colors */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8FAFC;
  --color-bg-tertiary: #F1F5F9;
  
  --color-text-primary: #0F172A;
  --color-text-secondary: #475569;
  --color-text-inverse: #FFFFFF;
  
  --color-brand-primary: #4F46E5; /* Vibrant Indigo */
  --color-brand-hover: #4338CA;
  --color-brand-glow: rgba(79, 70, 229, 0.2);
  
  --color-border: #E2E8F0;
  --color-border-hover: #CBD5E1;
  
  --color-error: #EF4444;
  --color-success: #10B981;
  --color-warning: #F59E0B;

  /* Typography */
  --font-family-heading: 'Space Grotesk', 'Inter', system-ui, sans-serif;
  --font-family-body: 'Inter', system-ui, sans-serif;
  
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.2;
  --line-height-base: 1.5;
  --line-height-relaxed: 1.75;

  /* Spacing & Sizes */
  --spacing-1: 0.25rem; --spacing-2: 0.5rem; --spacing-3: 0.75rem;
  --spacing-4: 1rem; --spacing-5: 1.25rem; --spacing-6: 1.5rem;
  --spacing-8: 2rem; --spacing-10: 2.5rem; --spacing-12: 3rem;
  --spacing-16: 4rem; --spacing-20: 5rem; --spacing-24: 6rem;
  --spacing-32: 8rem;

  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px;
  --radius-xl: 16px; --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  --shadow-glow: 0 0 20px var(--color-brand-glow);

  /* Containers & Grids */
  --container-sm: 640px; --container-md: 768px; --container-lg: 1024px;
  --container-xl: 1280px; --container-2xl: 1440px;
  --grid-columns: 12;
  --grid-gap: var(--spacing-6);

  /* Animations */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Dark Theme */
[data-theme='dark'] {
  --color-bg-primary: #0A0A0A;
  --color-bg-secondary: #121212;
  --color-bg-tertiary: #1A1A1A;
  
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A1A1AA;
  --color-text-inverse: #0A0A0A;
  
  --color-brand-primary: #6366F1; /* Brighter Indigo for dark mode */
  --color-brand-hover: #4F46E5;
  --color-brand-glow: rgba(99, 102, 241, 0.3);
  
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-hover: rgba(255, 255, 255, 0.2);
  
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.5);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.5);
}

body {
  background-color: var(--color-bg-primary);
  color: var(--color-text-secondary);
  font-family: var(--font-family-body);
  line-height: var(--line-height-base);
  margin: 0;
  -webkit-font-smoothing: antialiased;
  transition: background-color var(--transition-normal), color var(--transition-normal);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--color-text-primary);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}
`);

// 2. Add Theme Toggle Context and Wrap App
write('context/ThemeContext.jsx', `
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
`);

// 3. Update App.jsx to include ThemeProvider and routing for every page
write('App.jsx', `
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navigation, Footer } from './index.js';
import { ThemeProvider } from './context/ThemeContext';

import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Products } from './pages/Products';
import { CaseStudies } from './pages/CaseStudies';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/solutions' },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Company', href: '/company' }
];

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/solutions' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Careers 🚀 We\\'re Hiring!', href: '/company' }
    ]
  },
  {
    title: 'Products',
    links: [
      { label: 'AI Coding Assistant', href: '/products' },
      { label: 'Multi-LLM chat', href: '/products' },
      { label: 'Realtime Voice AI Assistant', href: '/products' }
    ]
  }
];

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <Navigation 
        logo={<Link to="/" style={{color: 'var(--color-text-primary)', textDecoration: 'none'}}>Mirai Labs</Link>} 
        links={navLinks} 
      />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer columns={footerColumns} bottomText="2025 Mirai Labs. All rights reserved." />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
`);

// 4. Update Navigation.jsx to include Theme Toggle
write('components/Navigation/Navigation.jsx', `
import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navigation.module.css';
import { Button } from '../Button/Button';

export const Navigation = ({ logo, links }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>{logo}</div>
      <ul className={styles.links}>
        {links.map((link, idx) => (
          <li key={idx}>
            <Link to={link.href} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.rightAction}>
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <Link to="/contact" style={{textDecoration: 'none'}}>
          <Button variant="primary" size="md">Get in touch</Button>
        </Link>
      </div>
    </nav>
  );
};
`);

write('components/Navigation/Navigation.module.css', `
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) var(--spacing-8);
  background-color: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 50;
  transition: background-color var(--transition-normal);
}

.logo {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.links {
  display: flex;
  gap: var(--spacing-8);
  list-style: none;
  margin: 0;
  padding: 0;
}

.link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-fast);
}

.link:hover {
  color: var(--color-brand-primary);
}

.rightAction {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.themeToggle {
  background: none;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.themeToggle:hover {
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
}

@media (max-width: 768px) {
  .links {
    display: none;
  }
}
`);

// 5. Update Sections content

// FeaturedSolutions
write('components/sections/FeaturedSolutions.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './Sections.module.css';

const services = [
  { title: "Cloud Strategy & Consulting", desc: "Tailored cloud approaches that balance technology, security, and costs aligned with your business objectives." },
  { title: "Modern Application Development", desc: "Transform your ideas into high-performance, scalable applications for today's digital landscape. (Specializing in full-stack development, React, Android, iOS, and integrated system architectures)" },
  { title: "Generative AI & ML", desc: "Harness AI technologies to analyze data, automate processes, and drive business innovation." },
  { title: "Migration & Modernization", desc: "Seamlessly transfer and update systems to leverage new capabilities for enhanced performance." },
  { title: "Cloud Security", desc: "Comprehensive security framework that integrates across data, application, and infrastructure layers." },
  { title: "Storage Solutions", desc: "Scalable, secure storage options customized to meet your organization's specific data needs." }
];

export const FeaturedSolutions = () => {
  return (
    <section className={styles.sectionPadding}>
      <Container size="xl">
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionBadge}>SERVICES</span>
          <h2 className={styles.sectionTitle}>Transforming Your Business Through Technology</h2>
        </div>
        
        <div className={styles.solutionsList}>
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={\`\${styles.solutionRow} \${i % 2 !== 0 ? styles.rowReverse : ''}\`}
            >
              <div className={styles.solutionText}>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div style={{marginTop: '1.5rem'}}>
                  <Link to="/solutions" style={{textDecoration: 'none'}}>
                    <Button variant="ghost">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className={styles.solutionVisual}>
                <img 
                  src={\`https://images.unsplash.com/photo-\${1500000000000 + i}?w=800&q=80\`} 
                  alt={svc.title} 
                  style={{width: '100%', borderRadius: 'var(--radius-xl)', aspectRatio: '4/3', objectFit: 'cover'}} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// ProductsPreview
write('components/sections/ProductsPreview.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Card, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './Sections.module.css';

const products = [
  { name: "AI Coding Assistant", desc: "A powerful tool to accelerate development workflows with AI-driven code suggestions." },
  { name: "Multi-LLM Chat", desc: "Interact seamlessly with multiple large language models through a unified conversational interface." },
  { name: "Realtime Voice AI Assistant", desc: "Enable instant, natural voice interactions for customer support and internal workflows." }
];

export const ProductsPreview = () => {
  return (
    <section className={styles.sectionPaddingDark}>
      <Container size="lg">
        <div className={styles.sectionHeaderCenter}>
          <h2 className={styles.sectionTitle}>Proprietary Solutions</h2>
          <p className={styles.sectionSubtitle}>Discover our cutting-edge AI products designed to boost productivity.</p>
        </div>
        <Grid columns={3}>
          {products.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex' }}
            >
              <Card hoverable className={styles.productCard}>
                <h3>{prod.name}</h3>
                <p>{prod.desc}</p>
                <div className={styles.placeholderVisualSmall} style={{backgroundImage: \`url(https://images.unsplash.com/photo-\${1610000000000 + i}?w=400&q=80)\`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                </div>
                <div style={{marginTop: '1rem'}}>
                  <Link to="/products" style={{textDecoration: 'none'}}>
                    <Button variant="secondary" size="sm" style={{width: '100%'}}>View Details</Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </section>
  );
};
`);

// FeaturedCaseStudies
write('components/sections/FeaturedCaseStudies.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './Sections.module.css';

const stories = [
  { industry: "Healthcare", date: "17 Dec, 2024", title: "Enhancing Healthcare Personalization with AWS AI", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
  { industry: "Fintech", date: "11 Jan, 2025", title: "Boosting Fintech Startup Productivity with AI Coding Assistant", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" },
  { industry: "Supply Chain", date: "15 Feb, 2025", title: "Optimizing Manufacturing Supply Chain Resilience with Cloud Data Lake and AI", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" }
];

export const FeaturedCaseStudies = () => {
  return (
    <section className={styles.sectionPadding}>
      <Container size="xl">
        <div className={styles.sectionHeaderCenter}>
          <h2 className={styles.sectionTitle}>Real-World Transformation Stories</h2>
          <p className={styles.sectionSubtitle}>
            Explore our comprehensive case studies showcasing how Mirai Labs has helped organizations overcome complex challenges and achieve remarkable results.
          </p>
        </div>
        <div className={styles.statsLayout}>
          {stories.map((story, i) => (
            <motion.div 
              key={i}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={story.img} alt={story.industry} style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1rem'}} />
              <div style={{color: 'var(--color-brand-primary)', fontSize: 'var(--font-size-sm)', fontWeight: 'bold', marginBottom: '0.5rem'}}>{story.industry}</div>
              <h3 style={{fontSize: 'var(--font-size-xl)', marginBottom: '0.5rem', color: 'var(--color-text-primary)'}}>{story.title}</h3>
              <p style={{color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', marginBottom: '1rem'}}>{story.date} • Mirai Labs Team</p>
              <Link to="/case-studies" style={{textDecoration: 'none'}}>
                <Button variant="ghost" size="sm">Read Story</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// WhyMiraiLabs
write('components/sections/WhyMiraiLabs.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './Sections.module.css';

export const WhyMiraiLabs = () => {
  return (
    <section className={styles.sectionPaddingDark}>
      <Container size="lg">
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionBadge}>ABOUT US</span>
          <h2 className={styles.sectionTitle}>Our Company</h2>
          <p className={styles.sectionSubtitle}>
            Founded in Bangalore in 2024, Mirai Labs is at the forefront of cloud innovation and generative AI solutions.
          </p>
        </div>
        <Grid columns={2} className={styles.aboutGrid}>
          <motion.div 
            className={styles.aboutBlock}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <h3>Mirai Labs is your premier technology innovator</h3>
            <p>
              Mirai Labs is delivering cutting-edge cloud and AI solutions that transform businesses into digital powerhouses. Our team of seasoned experts brings over a decade of industry experience to every project, ensuring world-class implementation and strategic guidance.
            </p>
            <div style={{marginTop: '2rem'}}>
              <Link to="/company" style={{textDecoration: 'none'}}>
                <Button variant="secondary">Learn More</Button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className={styles.aboutBlock}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team" style={{width: '100%', borderRadius: 'var(--radius-lg)'}} />
          </motion.div>
        </Grid>
      </Container>
    </section>
  );
};
`);

// Testimonials
write('components/sections/Testimonials.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Sections.module.css';

const testimonials = [
  {
    quote: "Working with Mirai Labs has been a game-changer. They took the time to understand our challenges and delivered fantastic cloud and application solutions that truly fit our needs. They're knowledgeable, reliable, and genuinely feel like part of our team.",
    author: "Chetan G",
    role: "Co-Founder Vision Link"
  },
  {
    quote: "Mirai Labs is our go-to for cloud and app development. They're responsive, highly skilled, and deliver high-quality work consistently. They make complex IT simple.",
    author: "Shubham Sahai",
    role: "Co-Founder, AI Hiring Assistant, Singapore"
  },
  {
    quote: "Mirai Labs brought cutting-edge expertise to our projects. From streamlining our cloud infrastructure to developing innovative AI-powered applications, their team delivered exceptional results. Highly recommend them for forward-thinking tech solutions.",
    author: "Rohit Tolety",
    role: "Tools Engineer, Red Storm Entertainment"
  }
];

export const Testimonials = () => {
  return (
    <section className={styles.sectionPadding}>
      <Container size="lg">
        <div className={styles.sectionHeaderCenter}>
          <h2 className={styles.sectionTitle}>What Our Clients Say About Us</h2>
          <p className={styles.sectionSubtitle}>
            At Mirai Labs, we measure our success through the achievements of our clients. Here's what industry leaders have to say about their experience partnering with us.
          </p>
        </div>
        <div className={styles.testimonialContainer}>
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              className={styles.testimonialItem}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
            >
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.authorInfo}>
                <img src={\`https://randomuser.me/api/portraits/men/\${30 + i}.jpg\`} alt={t.author} style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '1rem'}} />
                <div>
                  <h4>{t.author}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// Update Pages module CSS for new visual needs
write('pages/Pages.module.css', read('pages/Pages.module.css').replace(
  'min-height: 80vh;', 'min-height: 80vh; transition: background-color var(--transition-normal);'
));

// Update Products Page
write('pages/Products.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../index.js';
import { Link } from 'react-router-dom';
import styles from './Pages.module.css';

const products = [
  { name: "AI Coding Assistant", desc: "A powerful tool to accelerate development workflows with AI-driven code suggestions.", img: "https://images.unsplash.com/photo-1610555356070-d1febc54e814?w=800&q=80" },
  { name: "Multi-LLM Chat", desc: "Interact seamlessly with multiple large language models through a unified conversational interface.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" },
  { name: "Realtime Voice AI Assistant", desc: "Enable instant, natural voice interactions for customer support and internal workflows.", img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80" }
];

export const Products = () => {
  return (
    <div className={styles.pageWrapperDark}>
      <Container size="lg">
        <h1 className={styles.pageTitleCenter}>Our Products</h1>
        <div className={styles.productsBands}>
          {products.map((prod, idx) => (
            <motion.div 
              key={idx} 
              className={styles.productBand}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.productBandText}>
                <h2 style={{color: 'var(--color-text-primary)'}}>{prod.name}</h2>
                <p style={{color: 'var(--color-text-secondary)', marginTop: '1rem', marginBottom: '2rem'}}>{prod.desc}</p>
                <Link to="/contact" style={{textDecoration: 'none'}}>
                  <Button variant="primary">Request Demo</Button>
                </Link>
              </div>
              <div className={styles.productBandImage}>
                <img src={prod.img} alt={prod.name} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};
`);

// Update Solutions Page
write('pages/Solutions.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../index.js';
import { Link } from 'react-router-dom';
import styles from './Pages.module.css';

const services = [
  { title: "Cloud Strategy & Consulting", desc: "Tailored cloud approaches that balance technology, security, and costs aligned with your business objectives." },
  { title: "Modern Application Development", desc: "Transform your ideas into high-performance, scalable applications for today's digital landscape. (Specializing in full-stack development, React, Android, iOS, and integrated system architectures)" },
  { title: "Generative AI & ML", desc: "Harness AI technologies to analyze data, automate processes, and drive business innovation." },
  { title: "Migration & Modernization", desc: "Seamlessly transfer and update systems to leverage new capabilities for enhanced performance." },
  { title: "Cloud Security", desc: "Comprehensive security framework that integrates across data, application, and infrastructure layers." },
  { title: "Storage Solutions", desc: "Scalable, secure storage options customized to meet your organization's specific data needs." }
];

export const Solutions = () => {
  return (
    <div className={styles.pageWrapper}>
      <Container size="xl">
        <h1 className={styles.pageTitle}>Our Services</h1>
        <div className={styles.solutionsStickyLayout}>
          <div className={styles.solutionsStickyNav}>
            <h3 style={{color: 'var(--color-text-primary)', marginBottom: '1rem'}}>Expertise</h3>
            <p style={{color: 'var(--color-text-secondary)'}}>Transforming Your Business Through Technology.</p>
          </div>
          <div className={styles.solutionsList}>
            {services.map((svc, idx) => (
              <motion.div 
                key={idx}
                className={styles.solutionCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className={styles.solutionCardImage}>
                  <img src={\`https://images.unsplash.com/photo-\${1550000000000 + idx}?w=800&q=80\`} alt={svc.title} />
                </div>
                <h2 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem'}}>{svc.title}</h2>
                <p style={{color: 'var(--color-text-secondary)', marginBottom: '1.5rem'}}>{svc.desc}</p>
                <Link to="/contact" style={{textDecoration: 'none'}}>
                  <Button variant="secondary">Discuss Your Project</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
`);

// Update Contact Page
write('pages/Contact.jsx', `
import React from 'react';
import { Container, Button, Input } from '../index.js';
import styles from './Pages.module.css';

export const Contact = () => {
  return (
    <div className={styles.contactLayout}>
      <div className={styles.contactInfo}>
        <h1 style={{color: 'var(--color-text-primary)'}}>Need Any Help? Say hello</h1>
        <p style={{color: 'var(--color-text-secondary)'}}>
          Our experts are here to assist you with seamless support across cloud, AI, and modernization challenges. Reach out for tailored solutions and prompt assistance—because your success is our priority.
        </p>
        <div style={{marginTop: '2rem'}}>
          <h3 style={{marginBottom: '0.5rem', color: 'var(--color-text-primary)'}}>Email Address</h3>
          <p style={{color: 'var(--color-brand-primary)'}}>contact@mirailabs.tech</p>
          
          <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)'}}>Phone Number</h3>
          <p style={{color: 'var(--color-brand-primary)'}}>+91 72048 47927</p>
          
          <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)'}}>Office Location</h3>
          <p style={{lineHeight: '1.5', color: 'var(--color-text-secondary)'}}>1034, 2nd Floor, 26th Main, 4th T Block, Jayanagar, Bangalore, Karnataka 560041</p>
        </div>
      </div>
      <div className={styles.contactFormArea}>
        <form className={styles.contactForm} onSubmit={e => e.preventDefault()}>
          <h2 style={{color: 'var(--color-text-primary)'}}>Get in Touch</h2>
          <Input placeholder="Full Name" />
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Phone (Optional)" type="tel" />
          <Input placeholder="Subject" />
          <textarea className={styles.textarea} placeholder="Type Message"></textarea>
          <Button size="lg" variant="primary">Send Message</Button>
        </form>
      </div>
    </div>
  );
};
`);

// Update Company Page
write('pages/Company.jsx', `
import React from 'react';
import { Container, Button } from '../index.js';
import { Link } from 'react-router-dom';
import styles from './Pages.module.css';

export const Company = () => {
  return (
    <div className={styles.companySplitLayout}>
      <div className={styles.companyLeft}>
        <div className={styles.companyLeftContent}>
          <h1 className={styles.pageTitle} style={{color: 'var(--color-text-primary)'}}>Our Company</h1>
          <p style={{color: 'var(--color-text-secondary)', marginBottom: '1.5rem'}}>Founded in Bangalore in 2024, Mirai Labs is at the forefront of cloud innovation and generative AI solutions.</p>
          <h3 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem'}}>Our Mission & Vision</h3>
          <p style={{color: 'var(--color-text-secondary)', marginBottom: '1.5rem'}}>
            Mirai Labs is your premier technology innovator. We are delivering cutting-edge cloud and AI solutions that transform businesses into digital powerhouses. Our team of seasoned experts brings over a decade of industry experience to every project, ensuring world-class implementation and strategic guidance.
          </p>
          <div style={{marginTop: '2rem'}}>
            <h3 style={{color: 'var(--color-text-primary)', marginBottom: '1rem'}}>Careers 🚀 We're Hiring!</h3>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <Button variant="primary">Join Our Team</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.companyRight}>
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" alt="Office" className={styles.companyImg} />
        <div className={styles.placeholderBox} style={{color: 'var(--color-text-secondary)'}}>
          <h3 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem'}}>Global Reach</h3>
          <p>Delivering impact from our headquarters in Bangalore.</p>
        </div>
      </div>
    </div>
  );
};
`);

// Ensure main.jsx wraps properly if needed, but App.jsx handles ThemeProvider

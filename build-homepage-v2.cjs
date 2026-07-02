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

const read = (file) => {
  const fullPath = path.join(__dirname, 'src', file);
  if (fs.existsSync(fullPath)) return fs.readFileSync(fullPath, 'utf8');
  return '';
};

// 1. Update Navigation
write('components/Navigation/Navigation.jsx', `
import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navigation.module.css';
import { Button } from '../Button/Button';

export const Navigation = ({ logo, links }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
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
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Link to="/contact" className={styles.contactBtnWrapper}>
            <Button variant="primary" size="sm">Get in touch</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
`);

write('components/Navigation/Navigation.module.css', `
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border);
  transition: background-color var(--transition-normal);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-8);
  height: 70px;
  max-width: var(--container-2xl);
  margin: 0 auto;
}

.logo {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
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
  font-size: 0.9rem;
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-fast);
}

.link:hover {
  color: var(--color-text-primary);
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
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

@media (max-width: 1024px) {
  .links {
    display: none;
  }
}
`);

// 2. Update App.jsx with all new routes
write('App.jsx', `
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navigation, Footer } from './index.js';
import { ThemeProvider } from './context/ThemeContext';

import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Products } from './pages/Products';
import { CaseStudies } from './pages/CaseStudies';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Research & Engineering', href: '/research' },
  { label: 'Resources', href: '/resources' },
  { label: 'Company', href: '/company' }
];

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Placeholder = ({ title }) => (
  <div style={{minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)'}}>
    <h1>{title}</h1>
  </div>
);

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
          <Route path="/solutions" element={<Placeholder title="Solutions (Coming Soon)" />} />
          <Route path="/products" element={<Placeholder title="Products (Coming Soon)" />} />
          <Route path="/case-studies" element={<Placeholder title="Case Studies (Coming Soon)" />} />
          <Route path="/case-studies/healthcare" element={<CaseStudyDetail />} />
          <Route path="/research" element={<Placeholder title="Research & Engineering (Coming Soon)" />} />
          <Route path="/resources" element={<Placeholder title="Resources (Coming Soon)" />} />
          <Route path="/company" element={<Placeholder title="Company (Coming Soon)" />} />
          <Route path="/contact" element={<Placeholder title="Contact (Coming Soon)" />} />
        </Routes>
      </div>
      <Footer />
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

// 3. New Sections for Homepage

// Custom section styles
write('components/sections/HomepageSections.module.css', `
.section {
  padding: var(--spacing-24) 0;
  position: relative;
  overflow: hidden;
}

.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-20) 0;
}

.heroBg {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at 50% 0%, var(--color-brand-glow) 0%, transparent 60%);
  z-index: 0;
}

.heroGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-16);
  align-items: center;
  position: relative;
  z-index: 1;
}

@media (max-width: 1024px) {
  .heroGrid {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.heroTitle {
  font-size: clamp(3rem, 5vw, 4.5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: var(--spacing-6);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heroDesc {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-8);
  max-width: 600px;
}

.heroButtons {
  display: flex;
  gap: var(--spacing-4);
}

@media (max-width: 1024px) {
  .heroButtons {
    justify-content: center;
  }
}

.heroVisual {
  position: relative;
  height: 500px;
  width: 100%;
}

.sectionHeader {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--spacing-16);
}

.sectionBadge {
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  background: var(--color-brand-glow);
  color: var(--color-brand-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-4);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.sectionTitle {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--spacing-4);
  letter-spacing: -0.01em;
}

.sectionDesc {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
}

/* Solutions Bento Grid */
.bentoGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
}
.bentoItem {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}
.bentoItem:hover {
  border-color: var(--color-brand-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Alternating Products */
.productRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-16);
  align-items: center;
  margin-bottom: var(--spacing-32);
}
.productRow:nth-child(even) {
  direction: rtl;
}
.productRow:nth-child(even) > * {
  direction: ltr;
}
@media (max-width: 1024px) {
  .productRow {
    grid-template-columns: 1fr;
    margin-bottom: var(--spacing-16);
  }
  .productRow:nth-child(even) {
    direction: ltr;
  }
}
.productImage {
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-border);
  position: relative;
}

/* Features Grid */
.featureGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-8);
}
.featureCard {
  background: var(--color-bg-primary);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
}
@media (max-width: 768px) {
  .featureGrid { grid-template-columns: 1fr; }
  .bentoGrid { grid-template-columns: 1fr; }
}
`);

// 3.1 Hero
write('components/sections/Hero.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import { Sparkles, Database, Code, Cloud } from 'lucide-react';
import styles from './HomepageSections.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <Container size="xl">
        <div className={styles.heroGrid}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className={styles.sectionBadge}>Next-Generation Technology</span>
            <h1 className={styles.heroTitle}>
              Powering Your Success Through Cloud & AI
            </h1>
            <p className={styles.heroDesc}>
              Mirai Labs delivers cutting-edge cloud architecture and generative AI solutions that transform businesses into digital powerhouses.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/solutions" style={{textDecoration: 'none'}}><Button size="lg" variant="primary">Explore Solutions</Button></Link>
              <Link to="/contact" style={{textDecoration: 'none'}}><Button size="lg" variant="secondary">Book Consultation</Button></Link>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Abstract Conceptual Illustration using DOM elements & Framer Motion */}
            <div style={{position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: 'linear-gradient(135deg, var(--color-brand-primary), #a855f7)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', opacity: 0.1, filter: 'blur(40px)'}}></div>
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{position: 'absolute', top: '20%', left: '20%', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-6)', boxShadow: 'var(--shadow-lg)'}}
            >
              <Cloud size={48} color="var(--color-brand-primary)" />
              <div style={{marginTop: '1rem', fontWeight: 'bold', color: 'var(--color-text-primary)'}}>Cloud Architecture</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              style={{position: 'absolute', bottom: '20%', right: '10%', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-6)', boxShadow: 'var(--shadow-lg)'}}
            >
              <Sparkles size={48} color="#a855f7" />
              <div style={{marginTop: '1rem', fontWeight: 'bold', color: 'var(--color-text-primary)'}}>Generative AI</div>
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              style={{position: 'absolute', top: '40%', right: '30%', background: 'var(--color-bg-primary)', border: '1px solid var(--color-brand-primary)', borderRadius: 'var(--radius-full)', padding: 'var(--spacing-4)', boxShadow: 'var(--shadow-glow)'}}
            >
              <Code size={32} color="var(--color-text-primary)" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
`);

// 3.2 Trusted By
write('components/sections/TrustedBy.jsx', `
import React from 'react';
import { Container } from '../../index.js';
import styles from './HomepageSections.module.css';

export const TrustedBy = () => {
  const logos = ["AWS", "Azure", "OpenAI", "Anthropic", "Google Cloud", "Stripe"];
  return (
    <div style={{padding: 'var(--spacing-12) 0', borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)'}}>
      <Container size="xl">
        <p style={{textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-8)'}}>Trusted by innovative teams</p>
        <div style={{display: 'flex', justifyContent: 'center', gap: 'var(--spacing-16)', flexWrap: 'wrap', opacity: 0.6}}>
          {logos.map((logo, i) => (
            <div key={i} style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text-primary)', fontFamily: 'var(--font-family-heading)'}}>{logo}</div>
          ))}
        </div>
      </Container>
    </div>
  );
};
`);

// 3.3 Solutions Preview
write('components/sections/SolutionsPreview.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import { Link } from 'react-router-dom';
import { Cloud, Cpu, Lock, Layers, Database, HardDrive } from 'lucide-react';
import styles from './HomepageSections.module.css';

export const SolutionsPreview = () => {
  const services = [
    { title: "Cloud Strategy", icon: <Cloud />, desc: "Tailored approaches balancing technology, security, and costs." },
    { title: "Generative AI", icon: <Cpu />, desc: "Harness AI to analyze data, automate processes, and innovate." },
    { title: "Cloud Security", icon: <Lock />, desc: "Comprehensive framework integrating data and infrastructure." },
    { title: "Modernization", icon: <Layers />, desc: "Seamlessly transfer and update legacy systems." },
    { title: "Data Solutions", icon: <Database />, desc: "Robust data architectures and engineering pipelines." },
    { title: "Storage", icon: <HardDrive />, desc: "Scalable, secure options for organizational data needs." }
  ];

  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Expertise</span>
          <h2 className={styles.sectionTitle}>Transforming Your Business Through Technology</h2>
          <p className={styles.sectionDesc}>Comprehensive cloud and AI services designed for enterprise scale.</p>
        </div>
        
        <div className={styles.bentoGrid}>
          {services.map((svc, i) => (
            <motion.div 
              key={i} 
              className={styles.bentoItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{color: 'var(--color-brand-primary)', marginBottom: '1rem'}}>
                {React.cloneElement(svc.icon, { size: 32 })}
              </div>
              <h3 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-xl)'}}>{svc.title}</h3>
              <p style={{color: 'var(--color-text-secondary)', marginBottom: '1.5rem'}}>{svc.desc}</p>
              <Link to="/solutions" style={{textDecoration: 'none', color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: '4px'}}>
                Explore <span style={{color: 'var(--color-brand-primary)'}}>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// 3.4 Products Preview
write('components/sections/ProductsPreview.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './HomepageSections.module.css';

export const ProductsPreview = () => {
  const products = [
    { 
      name: "AI Coding Assistant", 
      desc: "Accelerate development workflows with AI-driven code suggestions natively integrated into your environment.", 
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&q=80" 
    },
    { 
      name: "Multi-LLM Chat", 
      desc: "Interact seamlessly with multiple large language models through a unified, secure conversational interface built for enterprise data.", 
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1000&q=80" 
    },
    { 
      name: "Realtime Voice AI Assistant", 
      desc: "Enable instant, natural voice interactions for customer support and internal workflows with millisecond latency.", 
      img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1000&q=80" 
    }
  ];

  return (
    <section className={styles.section} style={{background: 'var(--color-bg-secondary)'}}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Products</span>
          <h2 className={styles.sectionTitle}>Proprietary Solutions</h2>
          <p className={styles.sectionDesc}>Discover our cutting-edge AI products designed to boost productivity.</p>
        </div>

        <div style={{marginTop: 'var(--spacing-20)'}}>
          {products.map((prod, i) => (
            <div key={i} className={styles.productRow}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h3 style={{fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text-primary)', marginBottom: '1rem', letterSpacing: '-0.02em'}}>{prod.name}</h3>
                <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.6'}}>{prod.desc}</p>
                <Link to="/products" style={{textDecoration: 'none'}}>
                  <Button variant="secondary">View Details</Button>
                </Link>
              </motion.div>
              <motion.div 
                className={styles.productImage}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Overlay gradient to make it feel like an app mockup */}
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '40px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '8px', zIndex: 1}}>
                  <div style={{width: 12, height: 12, borderRadius: '50%', background: '#ff5f56'}}></div>
                  <div style={{width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e'}}></div>
                  <div style={{width: 12, height: 12, borderRadius: '50%', background: '#27c93f'}}></div>
                </div>
                <img src={prod.img} alt={prod.name} style={{width: '100%', height: 'auto', display: 'block'}} />
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// 3.5 Industries
write('components/sections/Industries.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './HomepageSections.module.css';

export const Industries = () => {
  const industries = ["Healthcare", "Manufacturing", "Finance", "Retail", "Supply Chain", "Government"];
  
  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Industries</span>
          <h2 className={styles.sectionTitle}>Built for every sector</h2>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center'}}>
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-brand-primary)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{
                padding: 'var(--spacing-4) var(--spacing-8)', 
                border: '1px solid var(--color-border)', 
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-lg)',
                color: 'var(--color-text-primary)',
                cursor: 'default',
                transition: 'all 0.2s'
              }}
            >
              {ind}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// 3.6 Featured Case Study
write('components/sections/FeaturedCaseStudy.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './HomepageSections.module.css';

export const FeaturedCaseStudy = () => {
  return (
    <section className={styles.section} style={{background: 'var(--color-bg-primary)', overflow: 'visible'}}>
      <Container size="xl">
        <div style={{background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-12)', border: '1px solid var(--color-border)', position: 'relative'}}>
          <span className={styles.sectionBadge} style={{background: 'transparent', border: '1px solid var(--color-brand-primary)', marginBottom: 'var(--spacing-8)'}}>Featured Case Study</span>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-12)', alignItems: 'center'}}>
            <div>
              <h2 style={{fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text-primary)', marginBottom: '1.5rem', lineHeight: '1.2'}}>
                Enhancing Healthcare Personalization with AWS AI
              </h2>
              
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-lg)'}}>The Challenge</h4>
                <p style={{color: 'var(--color-text-secondary)'}}>Struggling to provide tailored care recommendations based on individual health profiles, leading to suboptimal care outcomes.</p>
              </div>

              <div style={{marginBottom: '2rem'}}>
                <h4 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-lg)'}}>Business Impact</h4>
                <p style={{color: 'var(--color-text-secondary)'}}>23% increase in patient engagement and 17% improvement in medication adherence rates.</p>
              </div>

              <Link to="/case-studies/healthcare" style={{textDecoration: 'none'}}>
                <Button variant="primary">Read Full Case Study</Button>
              </Link>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-border)', height: '100%', minHeight: '300px', backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
              {/* Architecture Mock Overlay */}
              <div style={{width: '100%', height: '100%', background: 'linear-gradient(to right, var(--color-bg-secondary), transparent)'}}></div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
`);

// 3.7 Why Mirai Labs
write('components/sections/WhyMiraiLabs.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import { Shield, Zap, Target, Server, Sparkles, Building } from 'lucide-react';
import styles from './HomepageSections.module.css';

export const WhyMiraiLabs = () => {
  const features = [
    { title: "Enterprise Grade", icon: <Building size={24} /> },
    { title: "AI Native", icon: <Sparkles size={24} /> },
    { title: "Security First", icon: <Shield size={24} /> },
    { title: "Cloud Experts", icon: <Server size={24} /> },
    { title: "Rapid Delivery", icon: <Zap size={24} /> },
    { title: "Business Outcomes", icon: <Target size={24} /> }
  ];

  return (
    <section className={styles.section} style={{background: 'var(--color-bg-secondary)'}}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Why Mirai Labs</span>
          <h2 className={styles.sectionTitle}>The Premier Technology Innovator</h2>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              className={styles.featureCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{background: 'var(--color-brand-glow)', width: '50px', height: '50px', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand-primary)', marginBottom: '1rem'}}>
                {feat.icon}
              </div>
              <h3 style={{color: 'var(--color-text-primary)', fontSize: 'var(--font-size-xl)'}}>{feat.title}</h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// 3.8 Testimonials
write('components/sections/TestimonialsSlider.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './HomepageSections.module.css';

export const TestimonialsSlider = () => {
  const testimonials = [
    {
      quote: "Mirai Labs is our go-to for cloud and app development. They make complex IT simple.",
      author: "Shubham Sahai",
      role: "Co-Founder, AI Hiring Assistant"
    },
    {
      quote: "From streamlining our cloud infrastructure to developing innovative AI apps, they delivered exceptional results.",
      author: "Rohit Tolety",
      role: "Tools Engineer, Red Storm Entertainment"
    },
    {
      quote: "They took the time to understand our challenges and delivered fantastic cloud solutions that truly fit our needs.",
      author: "Chetan G",
      role: "Co-Founder Vision Link"
    }
  ];

  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)'}}>
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{padding: 'var(--spacing-8)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)'}}
            >
              <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)', marginBottom: '2rem', fontStyle: 'italic'}}>"{t.quote}"</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div style={{width: 48, height: 48, borderRadius: '50%', background: 'var(--color-brand-glow)', backgroundImage: \`url(https://i.pravatar.cc/100?img=\${30 + i})\`, backgroundSize: 'cover'}} />
                <div>
                  <h4 style={{color: 'var(--color-text-primary)'}}>{t.author}</h4>
                  <span style={{color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)'}}>{t.role}</span>
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

// 3.9 Latest Insights
write('components/sections/LatestInsights.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './HomepageSections.module.css';

export const LatestInsights = () => {
  const articles = [
    { title: "Building Resilient AI Pipelines", date: "Mar 15, 2025", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80" },
    { title: "The Future of Cloud Cost Optimization", date: "Apr 02, 2025", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
    { title: "Securing Multi-LLM Deployments", date: "May 10, 2025", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80" }
  ];

  return (
    <section className={styles.section} style={{background: 'var(--color-bg-secondary)'}}>
      <Container size="xl">
        <div className={styles.sectionHeader} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', textAlign: 'left', maxWidth: '100%', margin: '0 0 var(--spacing-12) 0'}}>
          <div>
            <span className={styles.sectionBadge}>Resources</span>
            <h2 className={styles.sectionTitle} style={{margin: 0}}>Latest Insights</h2>
          </div>
          <Link to="/resources" style={{color: 'var(--color-text-primary)', textDecoration: 'none', fontWeight: 'bold'}}>View All →</Link>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)'}}>
          {articles.map((art, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-border)', background: 'var(--color-bg-primary)', cursor: 'pointer', display: 'flex', flexDirection: 'column'}}
            >
              <div style={{height: 200, backgroundImage: \`url(\${art.img})\`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
              <div style={{padding: 'var(--spacing-6)'}}>
                <div style={{color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', marginBottom: '0.5rem'}}>{art.date}</div>
                <h3 style={{color: 'var(--color-text-primary)', fontSize: 'var(--font-size-lg)'}}>{art.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// 3.10 Final CTA
write('components/sections/FinalCTA.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './HomepageSections.module.css';

export const FinalCTA = () => {
  return (
    <section className={styles.section} style={{padding: 'var(--spacing-32) 0'}}>
      <Container size="lg">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-brand-glow) 100%)',
            border: '1px solid var(--color-brand-primary)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-16) var(--spacing-8)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <h2 style={{fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--color-text-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em'}}>
            Looking for a collaboration?<br/>Get Started Today!
          </h2>
          <p style={{fontSize: 'var(--font-size-xl)', color: 'var(--color-text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto'}}>
            Partner with us to drive innovation and transform your business with cutting-edge cloud and AI solutions. Let's shape the future together!
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <Button size="lg" variant="primary">Reach Out Now</Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
`);

// 4. Update Home.jsx to combine them all
write('pages/Home.jsx', `
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustedBy } from '../components/sections/TrustedBy';
import { SolutionsPreview } from '../components/sections/SolutionsPreview';
import { ProductsPreview } from '../components/sections/ProductsPreview';
import { Industries } from '../components/sections/Industries';
import { FeaturedCaseStudy } from '../components/sections/FeaturedCaseStudy';
import { WhyMiraiLabs } from '../components/sections/WhyMiraiLabs';
import { TestimonialsSlider } from '../components/sections/TestimonialsSlider';
import { LatestInsights } from '../components/sections/LatestInsights';
import { FinalCTA } from '../components/sections/FinalCTA';

export const Home = () => {
  return (
    <main style={{backgroundColor: 'var(--color-bg-primary)'}}>
      <Hero />
      <TrustedBy />
      <SolutionsPreview />
      <ProductsPreview />
      <Industries />
      <FeaturedCaseStudy />
      <WhyMiraiLabs />
      <TestimonialsSlider />
      <LatestInsights />
      <FinalCTA />
    </main>
  );
};
`);

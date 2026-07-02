
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
import { Research } from './pages/Research';
import { Resources } from './pages/Resources';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Research & Engineering', href: '/research' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
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
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/research" element={<Research />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
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

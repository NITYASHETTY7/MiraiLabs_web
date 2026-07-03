import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, Search, X, ArrowRight, Globe, Languages, Code, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navigation.module.css';
import { Button } from '../Button/Button';

const groupedLinks = [
  {
    title: 'EXPLORE',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Industries', href: '/industries' },
      { label: 'Partners', href: '/partners' },
      { label: 'Products', href: '/products' },
      { label: 'Case Studies', href: '/case-studies' },
    ]
  },
  {
    title: 'KNOWLEDGE',
    items: [
      { label: 'Research & Engineering', href: '/research' },
      { label: 'Resources', href: '/resources' },
      { label: 'Blog', href: '/blog' },
    ]
  },
  {
    title: 'COMPANY',
    items: [
      { label: 'Company', href: '/company' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ]
  }
];

export const Navigation = ({ logo }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll for transparent -> solid transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Link to="/" className={styles.logo}>{logo}</Link>
          </div>
          
          <div className={styles.center}>
            {/* Kept intentionally empty as requested */}
          </div>

          <div className={styles.rightAction}>
            <button className={styles.iconBtn} aria-label="Search">
              <Search size={22} />
            </button>
            <button 
              className={styles.menuBtn} 
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-in Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className={styles.drawerBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.drawerHeader}>
                <div className={styles.logo}>{logo}</div>
                <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                  <button onClick={toggleTheme} className={styles.iconBtn} aria-label="Toggle Theme">
                    {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                  </button>
                  <button 
                    className={styles.iconBtn} 
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close Menu"
                  >
                    <X size={28} />
                  </button>
                </div>
              </div>

              <div className={styles.drawerContent}>
                {groupedLinks.map((group, gIdx) => (
                  <div key={gIdx} className={styles.navGroup}>
                    <h4 className={styles.groupTitle}>{group.title}</h4>
                    <ul className={styles.navLinks}>
                      {group.items.map((link, lIdx) => {
                        const isActive = location.pathname === link.href;
                        return (
                          <li key={lIdx}>
                            <Link 
                              to={link.href} 
                              className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                            >
                              {link.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}

                <div className={styles.tagline}>
                  Engineering the future with AI, Cloud and Modernization.
                </div>
              </div>

              <div className={styles.drawerFooter}>
                <div className={styles.footerCtas}>
                  <Link to="/contact" className={styles.primaryCta}>
                    Book Consultation <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className={styles.secondaryCta}>
                    Contact Us
                  </Link>
                </div>
                
                <div className={styles.footerBottom}>
                  <div className={styles.socialLinks}>
                    <a href="#" aria-label="Language & Region"><Languages size={18} /></a>
                    <a href="#" aria-label="Engineering"><Code size={18} /></a>
                    <a href="#" aria-label="Community"><MessageCircle size={18} /></a>
                  </div>
                  <Link to="/newsletter" className={styles.newsletterLink}>
                    Newsletter
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

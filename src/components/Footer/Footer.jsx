import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import styles from './Footer.module.css';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand & Address */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logo}>Mirai Labs</Link>
            <p className={styles.brandText}>Your Innovation partner for Cloud, AI, and Modernization.</p>
            <address className={styles.address}>
              1034, 2nd Floor, 4th T Block,<br />
              Jayanagar, Bangalore - 560041
            </address>
          </div>

          {/* Company Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/solutions">Services</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/company">Careers 🚀 We're Hiring!</Link></li>
            </ul>
          </div>

          {/* Product Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Products</h4>
            <ul className={styles.linkList}>
              <li><Link to="/products">AI Coding Assistant</Link></li>
              <li><Link to="/products">Multi-LLM chat</Link></li>
              <li><Link to="/products">Realtime Voice AI Assistant</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Get in touch</h4>
            <div className={styles.contactBlock}>
              <span className={styles.contactLabel}>Phone</span>
              <a href="tel:+917204847927" className={styles.contactLink}>+91 72048 47927</a>
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.contactLabel}>Need live support?</span>
              <a href="mailto:contact@mirailabs.tech" className={styles.contactLink}>contact@mirailabs.tech</a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterDesc}>Subscribe to receive future updates and insights.</p>
          </div>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterBtn}>
                <Send size={18} />
                <span>Subscribe</span>
              </button>
            </div>
          </form>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.bottomText}>2025 Mirai Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Globe, Shield, Sparkles, MapPin } from 'lucide-react';
import styles from './ContactBento.module.css';

export const Contact = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1>Let's build something great together.</h1>
          <p>
            Connect with our enterprise experts to explore how Mirai Labs can accelerate your cloud and AI initiatives.
          </p>
        </motion.div>
      </section>

      {/* Bento Grid */}
      <section className={styles.bentoGrid}>
        
        {/* Large Form Card */}
        <motion.div 
          className={`${styles.bentoCard} ${styles.formCard}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}><MessageSquare size={20} /></div>
            <span className={styles.cardTitle}>Send us a message</span>
          </div>

          <form className={styles.minimalForm} onSubmit={e => e.preventDefault()}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <input type="text" id="fname" placeholder=" " required />
                <label htmlFor="fname">First Name</label>
              </div>
              <div className={styles.inputGroup}>
                <input type="text" id="lname" placeholder=" " required />
                <label htmlFor="lname">Last Name</label>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Work Email</label>
              </div>
              <div className={styles.inputGroup}>
                <input type="text" id="company" placeholder=" " required />
                <label htmlFor="company">Company</label>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <textarea id="message" placeholder=" " required></textarea>
              <label htmlFor="message">How can we help?</label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message <ArrowRight size={16} />
            </button>
          </form>
        </motion.div>

        {/* Info Card 1: Enterprise Sales */}
        <motion.div 
          className={`${styles.bentoCard} ${styles.infoCard}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.iconBox}><Shield size={20} /></div>
          <h3>Enterprise Sales</h3>
          <p>Discuss custom deployments, SLA requirements, and secure infrastructure integration.</p>
          <a href="mailto:enterprise@mirailabs.com" className={styles.infoLink}>
            enterprise@mirailabs.com <ArrowRight size={14} />
          </a>
          <Shield className={styles.cardGraphic} size={120} />
        </motion.div>

        {/* Info Card 2: Global Presence */}
        <motion.div 
          className={`${styles.bentoCard} ${styles.infoCard}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.iconBox}><Globe size={20} /></div>
          <h3>Global HQ</h3>
          <p>
            <strong>San Francisco</strong><br />
            100 Market St, Suite 400<br />
            CA 94105, United States
          </p>
          <a href="#" className={styles.infoLink}>
            <MapPin size={14} /> View on Map
          </a>
          <Globe className={styles.cardGraphic} size={120} />
        </motion.div>

      </section>
    </div>
  );
};

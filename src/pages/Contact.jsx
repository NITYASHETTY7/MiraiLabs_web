import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Compass, Layers, Zap, BookOpen, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Pages.module.css';
import { Button } from '../components/Button/Button';

export const Contact = () => {
  return (
    <div className={styles.cntWrapper}>
      {/* 1. Hero */}
      <section className={styles.cntHero}>
        <div className={styles.cntHeroBg} />
        <motion.div 
          className={styles.cntHeroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.cntHeroTitle}>Let's Build Something Great Together</h1>
          <p className={styles.cntHeroDesc}>
            Our contact experience is currently being crafted.<br/>
            In the meantime, explore our solutions, products, and case studies.
          </p>
        </motion.div>
      </section>

      {/* 2. Coming Soon Card */}
      <section className={styles.cntSoonSection}>
        <motion.div 
          className={styles.cntSoonCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.cntSoonGraphic}>
            {/* Conceptual Placeholder Illustration */}
            <div className={styles.cntSoonIllustration}>
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={styles.cntSoonIconBox}
              >
                <Mail size={40} />
              </motion.div>
              <div className={styles.cntSoonRays} />
            </div>
          </div>
          <div className={styles.cntSoonText}>
            <span className={styles.cntSoonBadge}>🚧 Coming Soon</span>
            <h2>Contact Experience</h2>
            <p>We're designing a seamless way for you to connect with our enterprise experts. Estimated availability: Q3 2026.</p>
          </div>
        </motion.div>
      </section>

      {/* 3. Quick Navigation */}
      <section className={styles.cntNavSection}>
        <div className={styles.cntSectionHeader}>
          <h3>Continue Exploring</h3>
        </div>
        <div className={styles.cntNavGrid}>
          {[
            { title: 'Solutions', icon: <Compass />, href: '/solutions' },
            { title: 'Products', icon: <Layers />, href: '/products' },
            { title: 'Case Studies', icon: <Zap />, href: '/case-studies' },
            { title: 'Research & Engineering', icon: <Compass />, href: '/research' },
            { title: 'Resources', icon: <BookOpen />, href: '/resources' },
            { title: 'Company', icon: <Users />, href: '/company' }
          ].map((item, idx) => (
            <Link to={item.href} key={idx} className={styles.cntNavCard}>
              <div className={styles.cntNavIcon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <ArrowUpRight size={20} className={styles.cntNavArrow} />
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Stay Updated */}
      <section className={styles.cntNewsletter}>
        <motion.div 
          className={styles.cntNewsletterBox}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Stay Updated</h3>
          <p>Get notified when our new contact experience goes live.</p>
          <form className={styles.cntForm} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your work email" className={styles.cntInput} />
            <Button variant="primary">Notify Me</Button>
          </form>
        </motion.div>
      </section>
      
      {/* 5. Footer CTA */}
      <section className={styles.cntFooterCta}>
        <h2>Ready to learn more?</h2>
        <div className={styles.cntFooterLinks}>
          <Link to="/solutions" className={styles.cntPrimaryLink}>Explore Solutions <ArrowRight size={16} /></Link>
          <Link to="/case-studies" className={styles.cntSecondaryLink}>View Case Studies</Link>
        </div>
      </section>
    </div>
  );
};

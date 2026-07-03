import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import { Cloud, Sparkles, Shield, Database, HardDrive, Cpu, Circle } from 'lucide-react';
import styles from './HomepageSections.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Glows */}
      <div className={styles.heroBg}>
        <div className={styles.heroGlowPurple}></div>
        <div className={styles.heroGlowBlue}></div>
      </div>
      
      <Container size="xl">
        <div className={styles.heroGrid}>
          {/* LEFT SIDE (55%) */}
          <motion.div 
            className={styles.heroContentLeft}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.premiumBadge}>
              NEXT-GENERATION TECHNOLOGY
            </div>
            
            <h1 className={styles.heroTitle}>
              Powering Your<br/>
              Success Through<br/>
              Cloud &amp; AI
            </h1>
            
            <p className={styles.heroDesc}>
              We architect, deploy, and scale enterprise-grade technology infrastructure. Modernize your platform with our cutting-edge engineering solutions.
            </p>

            <div className={styles.heroButtons}>
              <Link to="/solutions" style={{textDecoration: 'none'}}>
                <button className={styles.premiumBtnPrimary}>
                  Explore Solutions
                </button>
              </Link>
              <Link to="/contact" style={{textDecoration: 'none'}}>
                <button className={styles.premiumBtnSecondary}>
                  Book Consultation
                </button>
              </Link>
            </div>
          </motion.div>
          
          {/* RIGHT SIDE (45%) - Floating Composition */}
          <div className={styles.heroVisualWrapper}>
            <motion.div 
              className={styles.floatingComposition}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {/* Central Hub / Connector Lines (Abstract) */}
              <svg className={styles.compositionLines} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <path d="M250,250 L100,100 M250,250 L380,80 M250,250 L80,320 M250,250 L400,350 M250,250 L250,450" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                <circle cx="250" cy="250" r="40" fill="var(--color-bg-secondary)" stroke="var(--color-border)" strokeWidth="2" />
              </svg>
              
              <div className={styles.centralIcon}>
                <Cpu size={32} color="#8b5cf6" />
              </div>

              {/* Floating Cards */}
              <motion.div className={`${styles.floatCard} ${styles.card1}`} animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <Cloud size={24} color="#3b82f6" />
                <span>Cloud Architecture</span>
              </motion.div>

              <motion.div className={`${styles.floatCard} ${styles.card2}`} animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <Sparkles size={24} color="#8b5cf6" />
                <span>Generative AI</span>
              </motion.div>

              <motion.div className={`${styles.floatCard} ${styles.card3}`} animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <Shield size={24} color="#10b981" />
                <span>Cloud Security</span>
              </motion.div>

              <motion.div className={`${styles.floatCard} ${styles.card4}`} animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
                <Database size={24} color="#f59e0b" />
                <span>Data Platform</span>
              </motion.div>
              
              <motion.div className={`${styles.floatCard} ${styles.card5}`} animate={{ y: [0, -12, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                <HardDrive size={24} color="#64748b" />
                <span>Storage</span>
              </motion.div>

              {/* Decorative Nodes */}
              <motion.div className={styles.nodeCircle} style={{top: '15%', left: '20%'}} animate={{ scale: [1, 1.2, 1] }} transition={{duration: 4, repeat: Infinity}} />
              <motion.div className={styles.nodeCircle} style={{top: '70%', left: '15%'}} animate={{ scale: [1, 1.2, 1] }} transition={{duration: 5, repeat: Infinity, delay: 1}} />
              <motion.div className={styles.nodeCircle} style={{top: '80%', left: '75%'}} animate={{ scale: [1, 1.2, 1] }} transition={{duration: 4.5, repeat: Infinity, delay: 0.5}} />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};


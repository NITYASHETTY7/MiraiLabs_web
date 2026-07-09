
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './Solutions.module.css';

export const SolutionsCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <Container size="xl">
        <motion.div 
          className={styles.ctaCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle Background Effects */}
          <div className={styles.ctaOrb}></div>
          <div className={styles.ctaGrid}></div>
          <svg className={styles.ctaCurve} viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 C 150 -50, 250 -50, 400 100" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1"/>
          </svg>

          {/* Centered Content */}
          <div className={styles.ctaContent}>
            <div className={styles.ctaBadge}>LET'S BUILD TOGETHER</div>
            
            <h2 className={styles.ctaHeadline}>
              Ready to architect your digital future?
            </h2>
            
            <p className={styles.ctaDesc}>
              Partner with Mirai Labs to build AI-powered, cloud-native and enterprise-grade platforms that scale with your business.
            </p>

            <div className={styles.ctaButtonGroup}>
              <Link to="/contact" className={styles.ctaBtnPrimary}>
                Schedule Consultation
              </Link>
              <Link to="/solutions" className={styles.ctaBtnSecondary}>
                Explore Solutions
                <span className={styles.ctaArrow}>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, Cloud, Cpu, Check } from 'lucide-react';
import styles from './FinalCTA.module.css';

export const FinalCTA = () => {
  return (
    <section className={styles.ctaWrapper}>
      <Container size="xl">
        <motion.div 
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Background Effects */}
          <div className={styles.ctaGlow} />
          <div className={styles.ctaGrid} />
          <div className={styles.particles} />
          
          <div className={styles.ctaIllustration}>
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Architecture Topology" />
          </div>

          {/* Main Content */}
          <div className={styles.ctaContent}>
            <div className={styles.ctaLeft}>
              <h2 className={styles.ctaHeading}>
                Ready to architect<br />the future?
              </h2>
              <p className={styles.ctaText}>
                Partner with Mirai Labs to deploy enterprise-grade infrastructure. Elevate your platform with cutting-edge engineering solutions designed for scale.
              </p>
              
              <div className={styles.trustIndicators}>
                <div className={styles.trustChip}>
                  <Shield size={16} className={styles.trustIcon} /> Enterprise Ready
                </div>
                <div className={styles.trustChip}>
                  <Cloud size={16} className={styles.trustIcon} /> Cloud Native
                </div>
                <div className={styles.trustChip}>
                  <Cpu size={16} className={styles.trustIcon} /> AI Powered
                </div>
              </div>
            </div>

            <div className={styles.ctaRight}>
              <div className={styles.buttonGroup}>
                <Link to="/contact" className={styles.btnPrimary}>
                  Contact Engineering
                </Link>
                <Link to="/solutions" className={styles.btnSecondary}>
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row Divider & Chips */}
          <div className={styles.ctaBottomRow}>
            {['Enterprise AI', 'Cloud Modernization', 'Security', 'Data Platforms'].map((item, i) => (
              <div key={i} className={styles.bottomChip}>
                <Check size={14} /> {item}
              </div>
            ))}
          </div>

        </motion.div>
      </Container>
    </section>
  );
};

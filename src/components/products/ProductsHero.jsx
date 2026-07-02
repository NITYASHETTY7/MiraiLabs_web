
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import styles from './Products.module.css';
import { Play } from 'lucide-react';

export const ProductsHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg1}></div>
      <div className={styles.heroBg2}></div>
      <Container size="lg">
        <div className={styles.heroContent}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className={styles.badge}>Proprietary Software</span>
            <h1 className={styles.heroTitle}>Engineering Intelligence</h1>
            <p className={styles.heroDesc}>
              Enterprise-grade AI products designed to eliminate bottlenecks, automate logic, and empower your engineering teams instantly.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
              <Button size="lg" variant="primary">Request Demo</Button>
              <Button size="lg" variant="secondary" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Play size={16}/> Watch Video
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className={styles.heroVisualContainer}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className={styles.laptopMockup}>
              <div className={styles.laptopScreen}>
                <div style={{width: '100%', height: '100%', backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1}}></div>
              </div>
              <div className={styles.laptopBase}></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};


import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Cloud, Sparkles, Cpu, Layers } from 'lucide-react';
import styles from './Solutions.module.css';

export const SolutionsHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <Container size="lg" style={{position: 'relative', zIndex: 1}}>
        <div className={styles.heroContent}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className={styles.badge}>Services</span>
            <h1 className={styles.heroTitle} style={{textWrap: 'balance'}}>Transforming Infrastructure <br />& Intelligence</h1>
            <p className={styles.heroDesc}>
              Enterprise-grade cloud strategies, generative AI implementation, and robust architectures designed to scale your business into the future.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContents: 'center', justifyContent: 'center'}}>
              <Button variant="primary" size="lg">Explore Our Services</Button>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Abstract Floating Data Vis */}
            <motion.div animate={{y: [0,-15,0]}} transition={{repeat: Infinity, duration: 4}} style={{position: 'absolute', top: '30%', left: '20%', color: 'var(--color-brand-primary)'}}>
              <Cloud size={64} />
            </motion.div>
            <motion.div animate={{y: [0,20,0]}} transition={{repeat: Infinity, duration: 5, delay: 1}} style={{position: 'absolute', bottom: '20%', right: '25%', color: '#a855f7'}}>
              <Sparkles size={56} />
            </motion.div>
            <motion.div animate={{scale: [1,1.1,1]}} transition={{repeat: Infinity, duration: 3}} style={{position: 'absolute', top: '40%', right: '15%', color: 'var(--color-text-primary)'}}>
              <Cpu size={48} />
            </motion.div>
            <motion.div animate={{x: [0,-10,0]}} transition={{repeat: Infinity, duration: 6}} style={{position: 'absolute', bottom: '30%', left: '10%', color: 'var(--color-text-secondary)'}}>
              <Layers size={40} />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

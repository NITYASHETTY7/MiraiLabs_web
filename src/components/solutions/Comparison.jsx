
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Solutions.module.css';
import { X, Check } from 'lucide-react';

export const Comparison = () => {
  const trad = [
    "Siloed teams & rigid methodologies",
    "Generic templates & off-the-shelf software",
    "Lengthy discovery phases (months)",
    "Security as an afterthought",
    "Vendor lock-in constraints"
  ];
  const mirai = [
    "Cross-functional agile pods",
    "Custom cloud-native & AI-first solutions",
    "Rapid prototyping & MVP delivery (weeks)",
    "Shift-left zero-trust security architecture",
    "Open-source & multi-cloud flexibility"
  ];

  return (
    <section className={styles.sectionAlt}>
      <Container size="lg">
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Why Mirai Labs</h2>
          <p className={styles.desc}>The difference between standard consulting and true engineering partnerships.</p>
        </div>
        <div className={styles.compareGrid}>
          <motion.div className={`${styles.compareCard} ${styles.compareTraditional}`} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 style={{fontSize: 'var(--font-size-2xl)', marginBottom: '1.5rem'}}>Traditional Consulting</h3>
            <ul className={styles.compareList}>
              {trad.map((item, i) => (
                <li key={i}><X color="var(--color-error)" size={20} /> <span>{item}</span></li>
              ))}
            </ul>
          </motion.div>
          <motion.div className={`${styles.compareCard} ${styles.compareMirai}`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 style={{fontSize: 'var(--font-size-2xl)', marginBottom: '1.5rem'}}>Mirai Labs</h3>
            <ul className={styles.compareList}>
              {mirai.map((item, i) => (
                <li key={i}><Check color="var(--color-success)" size={20} /> <span>{item}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

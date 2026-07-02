
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Products.module.css';

export const CustomerSuccess = () => {
  const stories = [
    {
      company: "Fintech Startup",
      title: "Reduced Code Review Time by 60%",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      metrics: [
        { val: "60%", label: "Faster Reviews" },
        { val: "10x", label: "ROI in 3 Months" }
      ]
    },
    {
      company: "Healthcare Provider",
      title: "Automated Patient Triage Voice AI",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      metrics: [
        { val: "< 300ms", label: "Voice Latency" },
        { val: "45%", label: "Op-Ex Reduction" }
      ]
    }
  ];

  return (
    <section className={styles.sectionAlt}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Customer Success</span>
          <h2 className={styles.title}>Impact at Scale</h2>
        </div>
        <div className={styles.successGrid}>
          {stories.map((story, i) => (
            <motion.div 
              key={i} 
              className={styles.successCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.successImg} style={{backgroundImage: `url(${story.img})`}}></div>
              <div className={styles.successContent}>
                <div style={{color: 'var(--color-brand-primary)', fontSize: 'var(--font-size-sm)', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase'}}>{story.company}</div>
                <h3 style={{color: 'var(--color-text-primary)', fontSize: 'var(--font-size-2xl)'}}>{story.title}</h3>
                
                <div className={styles.metricGrid}>
                  {story.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className={styles.metricVal}>{m.val}</div>
                      <div className={styles.metricLabel}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

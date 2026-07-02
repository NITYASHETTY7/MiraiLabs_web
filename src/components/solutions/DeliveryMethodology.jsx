
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Solutions.module.css';
import { Search, PenTool, LayoutTemplate, Hammer, Rocket, LineChart } from 'lucide-react';

export const DeliveryMethodology = () => {
  const steps = [
    { title: "Discover", icon: <Search size={24} /> },
    { title: "Assess", icon: <PenTool size={24} /> },
    { title: "Architect", icon: <LayoutTemplate size={24} /> },
    { title: "Build", icon: <Hammer size={24} /> },
    { title: "Deploy", icon: <Rocket size={24} /> },
    { title: "Optimize", icon: <LineChart size={24} /> }
  ];

  return (
    <section className={styles.sectionAlt}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Methodology</span>
          <h2 className={styles.title}>How We Deliver</h2>
          <p className={styles.desc}>A proven, systematic approach to guarantee project success from inception to scale.</p>
        </div>
        
        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={styles.timelineIcon}>
                {step.icon}
              </div>
              <h4 style={{color: 'var(--color-text-primary)'}}>{step.title}</h4>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

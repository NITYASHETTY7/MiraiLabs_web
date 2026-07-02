
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import { Cloud, Cpu, Server, Lock, Database, HardDrive, ArrowRight } from 'lucide-react';
import styles from './Solutions.module.css';

export const ServicesOverview = () => {
  const services = [
    { title: "Cloud Strategy & Consulting", icon: <Cloud />, desc: "Tailored approaches balancing technology, security, and costs." },
    { title: "Generative AI & ML", icon: <Cpu />, desc: "Harness AI to analyze data, automate processes, and innovate." },
    { title: "Migration & Modernization", icon: <Server />, desc: "Seamlessly transfer and update legacy systems." },
    { title: "Cloud Security", icon: <Lock />, desc: "Comprehensive framework integrating data and infrastructure." },
    { title: "Data Solutions", icon: <Database />, desc: "Robust data architectures and engineering pipelines." },
    { title: "Storage Solutions", icon: <HardDrive />, desc: "Scalable, secure options for organizational data needs." }
  ];

  return (
    <section className={styles.sectionAlt}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Our Core Expertise</h2>
          <p className={styles.desc}>Select a practice area to jump to detailed capabilities and delivery workflows.</p>
        </div>
        <div className={styles.overviewGrid}>
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              className={styles.overviewCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{color: 'var(--color-brand-primary)', marginBottom: '1rem'}}>
                {React.cloneElement(svc.icon, { size: 32 })}
              </div>
              <h3 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-xl)'}}>{svc.title}</h3>
              <p style={{color: 'var(--color-text-secondary)', marginBottom: '1.5rem'}}>{svc.desc}</p>
              <div style={{color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', cursor: 'pointer'}}>
                Explore Details <ArrowRight size={16} color="var(--color-brand-primary)" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

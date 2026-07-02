
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import { Link } from 'react-router-dom';
import { Cloud, Cpu, Lock, Layers, Database, HardDrive } from 'lucide-react';
import styles from './HomepageSections.module.css';

export const SolutionsPreview = () => {
  const services = [
    { title: "Cloud Strategy", icon: <Cloud />, desc: "Tailored approaches balancing technology, security, and costs." },
    { title: "Generative AI", icon: <Cpu />, desc: "Harness AI to analyze data, automate processes, and innovate." },
    { title: "Cloud Security", icon: <Lock />, desc: "Comprehensive framework integrating data and infrastructure." },
    { title: "Modernization", icon: <Layers />, desc: "Seamlessly transfer and update legacy systems." },
    { title: "Data Solutions", icon: <Database />, desc: "Robust data architectures and engineering pipelines." },
    { title: "Storage", icon: <HardDrive />, desc: "Scalable, secure options for organizational data needs." }
  ];

  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Expertise</span>
          <h2 className={styles.sectionTitle}>Transforming Your Business Through Technology</h2>
          <p className={styles.sectionDesc}>Comprehensive cloud and AI services designed for enterprise scale.</p>
        </div>
        
        <div className={styles.bentoGrid}>
          {services.map((svc, i) => (
            <motion.div 
              key={i} 
              className={styles.bentoItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{color: 'var(--color-brand-primary)', marginBottom: '1rem'}}>
                {React.cloneElement(svc.icon, { size: 32 })}
              </div>
              <h3 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-xl)'}}>{svc.title}</h3>
              <p style={{color: 'var(--color-text-secondary)', marginBottom: '1.5rem'}}>{svc.desc}</p>
              <Link to="/solutions" style={{textDecoration: 'none', color: 'var(--color-text-primary)', fontWeight: 'var(--font-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: '4px'}}>
                Explore <span style={{color: 'var(--color-brand-primary)'}}>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

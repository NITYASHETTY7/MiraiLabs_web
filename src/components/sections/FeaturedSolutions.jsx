
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './Sections.module.css';

const services = [
  { title: "Cloud Strategy & Consulting", desc: "Tailored cloud approaches that balance technology, security, and costs aligned with your business objectives." },
  { title: "Modern Application Development", desc: "Transform your ideas into high-performance, scalable applications for today's digital landscape. (Specializing in full-stack development, React, Android, iOS, and integrated system architectures)" },
  { title: "Generative AI & ML", desc: "Harness AI technologies to analyze data, automate processes, and drive business innovation." },
  { title: "Migration & Modernization", desc: "Seamlessly transfer and update systems to leverage new capabilities for enhanced performance." },
  { title: "Cloud Security", desc: "Comprehensive security framework that integrates across data, application, and infrastructure layers." },
  { title: "Storage Solutions", desc: "Scalable, secure storage options customized to meet your organization's specific data needs." }
];

export const FeaturedSolutions = () => {
  return (
    <section className={styles.sectionPadding}>
      <Container size="xl">
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionBadge}>SERVICES</span>
          <h2 className={styles.sectionTitle}>Transforming Your Business Through Technology</h2>
        </div>
        
        <div className={styles.solutionsList}>
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`${styles.solutionRow} ${i % 2 !== 0 ? styles.rowReverse : ''}`}
            >
              <div className={styles.solutionText}>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div style={{marginTop: '1.5rem'}}>
                  <Link to="/solutions" style={{textDecoration: 'none'}}>
                    <Button variant="ghost">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className={styles.solutionVisual}>
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=800&q=80`} 
                  alt={svc.title} 
                  style={{width: '100%', borderRadius: 'var(--radius-xl)', aspectRatio: '4/3', objectFit: 'cover'}} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

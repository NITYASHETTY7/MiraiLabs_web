
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './HomepageSections.module.css';

export const LatestInsights = () => {
  const articles = [
    { title: "Building Resilient AI Pipelines", date: "Mar 15, 2025", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80" },
    { title: "The Future of Cloud Cost Optimization", date: "Apr 02, 2025", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
    { title: "Securing Multi-LLM Deployments", date: "May 10, 2025", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80" }
  ];

  return (
    <section className={styles.section} style={{background: 'var(--color-bg-secondary)'}}>
      <Container size="xl">
        <div className={styles.sectionHeader} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', textAlign: 'left', maxWidth: '100%', margin: '0 0 var(--spacing-12) 0'}}>
          <div>
            <span className={styles.sectionBadge}>Resources</span>
            <h2 className={styles.sectionTitle} style={{margin: 0}}>Latest Insights</h2>
          </div>
          <Link to="/resources" style={{color: 'var(--color-text-primary)', textDecoration: 'none', fontWeight: 'bold'}}>View All →</Link>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)'}}>
          {articles.map((art, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-border)', background: 'var(--color-bg-primary)', cursor: 'pointer', display: 'flex', flexDirection: 'column'}}
            >
              <div style={{height: 200, backgroundImage: `url(${art.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
              <div style={{padding: 'var(--spacing-6)'}}>
                <div style={{color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', marginBottom: '0.5rem'}}>{art.date}</div>
                <h3 style={{color: 'var(--color-text-primary)', fontSize: 'var(--font-size-lg)'}}>{art.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

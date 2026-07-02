
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './Sections.module.css';

const stories = [
  { industry: "Healthcare", date: "17 Dec, 2024", title: "Enhancing Healthcare Personalization with AWS AI", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
  { industry: "Fintech", date: "11 Jan, 2025", title: "Boosting Fintech Startup Productivity with AI Coding Assistant", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" },
  { industry: "Supply Chain", date: "15 Feb, 2025", title: "Optimizing Manufacturing Supply Chain Resilience with Cloud Data Lake and AI", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" }
];

export const FeaturedCaseStudies = () => {
  return (
    <section className={styles.sectionPadding}>
      <Container size="xl">
        <div className={styles.sectionHeaderCenter}>
          <h2 className={styles.sectionTitle}>Real-World Transformation Stories</h2>
          <p className={styles.sectionSubtitle}>
            Explore our comprehensive case studies showcasing how Mirai Labs has helped organizations overcome complex challenges and achieve remarkable results.
          </p>
        </div>
        <div className={styles.statsLayout}>
          {stories.map((story, i) => (
            <motion.div 
              key={i}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={story.img} alt={story.industry} style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1rem'}} />
              <div style={{color: 'var(--color-brand-primary)', fontSize: 'var(--font-size-sm)', fontWeight: 'bold', marginBottom: '0.5rem'}}>{story.industry}</div>
              <h3 style={{fontSize: 'var(--font-size-xl)', marginBottom: '0.5rem', color: 'var(--color-text-primary)'}}>{story.title}</h3>
              <p style={{color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', marginBottom: '1rem'}}>{story.date} • Mirai Labs Team</p>
              {i === 0 ? (
                <Link to="/case-studies/healthcare" style={{textDecoration: 'none'}}>
                  <Button variant="ghost" size="sm">Read Story</Button>
                </Link>
              ) : (
                <Link to="/case-studies" style={{textDecoration: 'none'}}>
                  <Button variant="ghost" size="sm">Read Story</Button>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

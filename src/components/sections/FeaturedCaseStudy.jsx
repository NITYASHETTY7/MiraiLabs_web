
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './HomepageSections.module.css';

export const FeaturedCaseStudy = () => {
  return (
    <section className={styles.section} style={{background: 'var(--color-bg-primary)', overflow: 'visible'}}>
      <Container size="xl">
        <div style={{background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-12)', border: '1px solid var(--color-border)', position: 'relative'}}>
          <span className={styles.sectionBadge} style={{background: 'transparent', border: '1px solid var(--color-brand-primary)', marginBottom: 'var(--spacing-8)'}}>Featured Case Study</span>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-12)', alignItems: 'center'}}>
            <div>
              <h2 style={{fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text-primary)', marginBottom: '1.5rem', lineHeight: '1.2'}}>
                Enhancing Healthcare Personalization with AWS AI
              </h2>
              
              <div style={{marginBottom: '2rem'}}>
                <h4 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-lg)'}}>The Challenge</h4>
                <p style={{color: 'var(--color-text-secondary)'}}>Struggling to provide tailored care recommendations based on individual health profiles, leading to suboptimal care outcomes.</p>
              </div>

              <div style={{marginBottom: '2rem'}}>
                <h4 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-lg)'}}>Business Impact</h4>
                <p style={{color: 'var(--color-text-secondary)'}}>23% increase in patient engagement and 17% improvement in medication adherence rates.</p>
              </div>

              <Link to="/case-studies/healthcare" style={{textDecoration: 'none'}}>
                <Button variant="primary">Read Full Case Study</Button>
              </Link>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-border)', height: '100%', minHeight: '300px', backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
              {/* Architecture Mock Overlay */}
              <div style={{width: '100%', height: '100%', background: 'linear-gradient(to right, var(--color-bg-secondary), transparent)'}}></div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

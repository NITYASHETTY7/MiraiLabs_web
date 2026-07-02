
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './HomepageSections.module.css';

export const FinalCTA = () => {
  return (
    <section className={styles.section} style={{padding: 'var(--spacing-32) 0'}}>
      <Container size="lg">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-brand-glow) 100%)',
            border: '1px solid var(--color-brand-primary)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-16) var(--spacing-8)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <h2 style={{fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--color-text-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em'}}>
            Looking for a collaboration?<br/>Get Started Today!
          </h2>
          <p style={{fontSize: 'var(--font-size-xl)', color: 'var(--color-text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto'}}>
            Partner with us to drive innovation and transform your business with cutting-edge cloud and AI solutions. Let's shape the future together!
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <Button size="lg" variant="primary">Reach Out Now</Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

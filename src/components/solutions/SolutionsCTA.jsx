
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './Solutions.module.css';

export const SolutionsCTA = () => {
  return (
    <section className={styles.section} style={{padding: 'var(--spacing-32) 0'}}>
      <Container size="lg">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, var(--color-brand-primary) 0%, #a855f7 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-16) var(--spacing-8)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <h2 style={{fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#FFFFFF', margin: '0 auto 1.5rem', letterSpacing: '-0.02em', maxWidth: '800px'}}>
            Ready to architect your digital future?
          </h2>
          <p style={{fontSize: 'var(--font-size-xl)', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto'}}>
            Schedule a technical discovery session with our senior architects today.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <Button size="lg" style={{backgroundColor: '#FFFFFF', color: 'var(--color-brand-primary)'}}>Schedule Consultation</Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

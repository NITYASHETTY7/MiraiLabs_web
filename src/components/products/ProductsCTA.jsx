
import React from 'react';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';

export const ProductsCTA = () => {
  return (
    <section className={styles.section} style={{background: 'var(--color-bg-primary)', textAlign: 'center'}}>
      <Container size="lg">
        <div style={{padding: 'var(--spacing-24) 0', borderTop: '1px solid var(--color-border)'}}>
          <h2 style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-text-primary)', marginBottom: '1.5rem', letterSpacing: '-0.03em'}}>
            Ready to upgrade your stack?
          </h2>
          <p style={{fontSize: 'var(--font-size-xl)', color: 'var(--color-text-secondary)', marginBottom: '3rem'}}>
            Get full access to our enterprise software suite.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
            <Link to="/contact"><Button size="lg" variant="primary">Book Demo</Button></Link>
            <Link to="/contact"><Button size="lg" variant="secondary">Contact Sales</Button></Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

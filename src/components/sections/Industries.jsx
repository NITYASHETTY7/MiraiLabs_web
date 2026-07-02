import React from 'react';
import { Container } from '../../index.js';
import styles from './HomepageSections.module.css';

export const Industries = () => {
  const industries = ["Healthcare", "Manufacturing", "Finance", "Retail", "Supply Chain", "Government"];
  
  return (
    <section className={styles.section} style={{ background: 'var(--color-bg-primary)', borderBottom: '1px solid var(--color-border)' }}>
      <Container size="xl">
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className={styles.sectionBadge} style={{marginBottom: 'var(--spacing-6)'}}>Industries</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.1, color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-12)', letterSpacing: '-0.02em', fontWeight: 'bold' }}>
            Built for every sector.
          </h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--spacing-4) var(--spacing-8)', alignItems: 'center' }}>
            {industries.map((ind, i) => (
              <React.Fragment key={i}>
                <span 
                  style={{ 
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
                    color: 'var(--color-text-secondary)', 
                    transition: 'color 0.3s', 
                    cursor: 'default',
                    fontFamily: 'var(--font-family-heading)'
                  }} 
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-brand-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                >
                  {ind}
                </span>
                {i < industries.length - 1 && (
                  <span style={{ color: 'var(--color-border)', fontSize: 'var(--font-size-xl)' }}>/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};



import React from 'react';
import { Container } from '../../index.js';
import styles from './HomepageSections.module.css';

export const TrustedBy = () => {
  const logos = ["AWS", "GitHub", "Jira", "Slack", "VS Code", "Claude", "OpenAI", "Bedrock"];
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div style={{padding: 'var(--spacing-16) 0 var(--spacing-12) 0', borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)', overflow: 'hidden'}}>
      <Container size="xl">
        <div style={{textAlign: 'center', marginBottom: 'var(--spacing-10)'}}>
          <p style={{color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-2)'}}>Seamless Connectivity</p>
          <h2 style={{fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-text-primary)', letterSpacing: '-0.02em', fontWeight: 'bold'}}>Works with your existing stack</h2>
        </div>
        <div className={styles.marqueeWrapper} style={{opacity: 0.6}}>
          <div className={styles.marqueeContent}>
            {duplicatedLogos.map((logo, i) => (
              <div key={i} style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text-primary)', fontFamily: 'var(--font-family-heading)', whiteSpace: 'nowrap'}}>{logo}</div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

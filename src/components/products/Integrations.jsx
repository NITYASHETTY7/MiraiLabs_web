import React from 'react';
import { Cloud, GitBranch, Columns, MessageSquare, Code, Cpu, Sparkles, Database } from 'lucide-react';
import { Container } from '../../index.js';
import styles from './Products.module.css';

export const Integrations = () => {
  const integrations = [
    { name: "AWS", icon: <Cloud size={20} /> },
    { name: "GitHub", icon: <GitBranch size={20} /> },
    { name: "Jira", icon: <Columns size={20} /> },
    { name: "Slack", icon: <MessageSquare size={20} /> },
    { name: "VS Code", icon: <Code size={20} /> },
    { name: "Claude", icon: <Sparkles size={20} /> },
    { name: "OpenAI", icon: <Cpu size={20} /> },
    { name: "Bedrock", icon: <Database size={20} /> }
  ];

  return (
    <section className={styles.section} style={{paddingBottom: 'var(--spacing-32)', background: 'var(--color-bg-primary)'}}>
      <Container size="xl">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
          <p style={{color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-4)', fontWeight: 'bold', fontSize: 'var(--font-size-sm)'}}>Seamless Connectivity</p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-text-primary)', letterSpacing: '-0.02em'}}>Works with your existing stack</h2>
        </div>

        <div className={styles.elegantGrid}>
          {integrations.map((item, i) => (
            <div key={i} className={styles.elegantGridItem}>
              <div className={styles.elegantGridIconWrapper}>
                {item.icon}
              </div>
              <span className={styles.elegantGridText}>{item.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};



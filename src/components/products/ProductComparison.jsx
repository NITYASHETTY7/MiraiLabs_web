
import React from 'react';
import { Container } from '../../index.js';
import styles from './Products.module.css';
import { Check, X } from 'lucide-react';

export const ProductComparison = () => {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Comparison</span>
          <h2 className={styles.title}>The Enterprise Difference</h2>
          <p className={styles.desc}>*Illustrative sample values comparing generic software vs Mirai Labs architecture.</p>
        </div>
        
        <div className={styles.compareTableWrapper}>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th>Feature Capability</th>
                <th>Standard SaaS Tools</th>
                <th style={{background: 'var(--color-brand-glow)', color: 'var(--color-brand-primary)'}}>Mirai Labs Products</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data Privacy & VPC Deployment</td>
                <td><X size={18} color="var(--color-error)" /> Public Shared Cloud</td>
                <td><Check size={18} color="var(--color-brand-primary)" /> Secure On-Prem / VPC</td>
              </tr>
              <tr>
                <td>Model Flexibility</td>
                <td><X size={18} color="var(--color-error)" /> Locked to single vendor</td>
                <td><Check size={18} color="var(--color-brand-primary)" /> Agnostic (OpenAI, Anthropic, OSS)</td>
              </tr>
              <tr>
                <td>Custom Fine-Tuning</td>
                <td><X size={18} color="var(--color-error)" /> None</td>
                <td><Check size={18} color="var(--color-brand-primary)" /> Full proprietary tuning</td>
              </tr>
              <tr>
                <td>Latency SLA</td>
                <td>~1500ms</td>
                <td style={{color: 'var(--color-text-primary)', fontWeight: 'bold'}}>&lt; 300ms</td>
              </tr>
              <tr>
                <td>RBAC & Enterprise Auth</td>
                <td>Basic OAuth</td>
                <td><Check size={18} color="var(--color-brand-primary)" /> Native SAML/SSO & Audit Logs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

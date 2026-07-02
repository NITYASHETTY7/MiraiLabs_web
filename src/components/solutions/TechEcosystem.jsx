
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Solutions.module.css';

export const TechEcosystem = () => {
  const categories = [
    { name: "Cloud Infrastructure", tools: ["AWS", "Azure", "GCP", "Vercel", "Cloudflare"] },
    { name: "AI & ML", tools: ["OpenAI", "Anthropic", "HuggingFace", "PyTorch", "LangChain"] },
    { name: "DevOps & CI/CD", tools: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "ArgoCD"] },
    { name: "Security & Auth", tools: ["Auth0", "Clerk", "HashiCorp Vault", "Okta", "AWS KMS"] },
    { name: "Databases", tools: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Snowflake"] },
    { name: "Frontend", tools: ["React", "Next.js", "Framer Motion", "Tailwind", "Vite"] },
    { name: "Backend", tools: ["Node.js", "Python", "Go", "GraphQL", "gRPC"] }
  ];

  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Ecosystem</span>
          <h2 className={styles.title}>Technology Stack</h2>
          <p className={styles.desc}>We partner with the best tools in the industry to build robust, scalable platforms.</p>
        </div>
        <div className={styles.ecosystemGrid}>
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              className={styles.ecoCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h4 style={{color: 'var(--color-text-primary)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)'}}>{cat.name}</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {cat.tools.map((t, idx) => (
                  <li key={idx} style={{color: 'var(--color-text-secondary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-sm)'}}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Solutions.module.css';

const EcoCard = ({ cat, index, isActive, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <motion.div 
      className={`${styles.ecoCategory} ${isActive ? styles.ecoCategoryActive : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <h4>{cat.name}</h4>
      <ul>
        {cat.tools.map((t, idx) => (
          <li key={idx}>{t}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export const TechEcosystem = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
          <h2 className={styles.title}>Technology Stack</h2>
          <p className={styles.desc}>We partner with industry-leading platforms and technologies to build secure, scalable, and future-ready enterprise solutions.</p>
        </div>
        <div className={styles.ecosystemGrid}>
          {categories.map((cat, i) => (
            <EcoCard 
              key={i} 
              cat={cat} 
              index={i} 
              isActive={activeIndex === i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

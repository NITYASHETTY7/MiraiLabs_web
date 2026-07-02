
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import styles from './Solutions.module.css';
import { CheckCircle2, ShieldAlert, Zap, Box } from 'lucide-react';

export const IndividualServices = () => {
  const sections = [
    {
      title: "Cloud Strategy & Consulting",
      subtitle: "Architecting the Future",
      challenges: ["Unpredictable cloud spend", "Vendor lock-in", "Lack of clear migration roadmap"],
      benefits: ["30% cost reduction on average", "Multi-cloud resilience", "Future-proof scalability"],
      techs: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"],
      visual: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      title: "Generative AI & ML",
      subtitle: "Intelligence at Scale",
      challenges: ["Unstructured data silos", "Manual operational bottlenecks", "High LLM inference costs"],
      benefits: ["Automated content & code generation", "Custom model fine-tuning", "Secure enterprise deployments"],
      techs: ["OpenAI", "Anthropic", "LangChain", "Vector DBs", "PyTorch"],
      visual: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
    },
    {
      title: "Migration & Modernization",
      subtitle: "Zero-Downtime Transitions",
      challenges: ["Legacy monolithic tech debt", "Downtime risks during migration", "Skill gaps in cloud-native"],
      benefits: ["Microservices architecture", "Automated CI/CD pipelines", "Enhanced system performance"],
      techs: ["Docker", "Jenkins", "GitLab CI", "Prometheus", "Kafka"],
      visual: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    },
    {
      title: "Cloud Security",
      subtitle: "Zero-Trust Infrastructures",
      challenges: ["Compliance violations (HIPAA, SOC2)", "Data breaches", "Complex identity management"],
      benefits: ["End-to-end encryption", "Continuous monitoring & alerting", "Identity and access automation"],
      techs: ["Vault", "Okta", "AWS IAM", "Cloudflare", "Datadog"],
      visual: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
    },
    {
      title: "Data Solutions",
      subtitle: "Actionable Insights Engine",
      challenges: ["Fragmented analytics", "Slow query performance", "Poor data quality"],
      benefits: ["Unified Data Lakes", "Real-time streaming analytics", "Automated ETL pipelines"],
      techs: ["Snowflake", "Databricks", "Apache Spark", "Airflow", "dbt"],
      visual: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      title: "Storage Solutions",
      subtitle: "Boundless Capacity",
      challenges: ["Exponential data growth", "High storage costs", "Disaster recovery complexity"],
      benefits: ["Tiered lifecycle management", "Cross-region replication", "Cost-optimized archival"],
      techs: ["Amazon S3", "Azure Blob", "NetApp", "Ceph"],
      visual: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    }
  ];

  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Deep Dive Capabilities</h2>
        </div>
        
        {sections.map((svc, i) => (
          <div key={i} className={styles.serviceRow}>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <span className={styles.badge}>{svc.subtitle}</span>
              <h3 style={{fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text-primary)', marginBottom: '1rem'}}>{svc.title}</h3>
              
              <div style={{display: 'flex', gap: '2rem', marginBottom: '2rem'}}>
                <div>
                  <h4 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><ShieldAlert size={18} color="var(--color-error)" /> Challenges</h4>
                  <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
                    {svc.challenges.map((c, idx) => <li key={idx} style={{marginBottom: '0.25rem'}}>- {c}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><Zap size={18} color="var(--color-success)" /> Benefits</h4>
                  <ul style={{listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
                    {svc.benefits.map((b, idx) => <li key={idx} style={{marginBottom: '0.25rem'}}>- {b}</li>)}
                  </ul>
                </div>
              </div>

              <div style={{marginBottom: '2rem'}}>
                <h4 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem'}}>Tech Stack</h4>
                <div className={styles.techTags}>
                  {svc.techs.map((t, idx) => <span key={idx} className={styles.techTag}>{t}</span>)}
                </div>
              </div>

              <Button variant="secondary">Discuss Your Project</Button>
            </motion.div>

            <motion.div
              className={styles.architectureBox}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-text-primary)'}}>
                <Box size={20} />
                <span style={{fontWeight: '500'}}>Architecture Visualization</span>
              </div>
              <img src={svc.visual} alt={svc.title} style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: 'var(--radius-md)'}} />
            </motion.div>
          </div>
        ))}
      </Container>
    </section>
  );
};

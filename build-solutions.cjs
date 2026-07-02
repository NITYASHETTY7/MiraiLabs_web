const fs = require('fs');
const path = require('path');

const write = (file, content) => {
  const fullPath = path.join(__dirname, 'src', file);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content, 'utf8');
};

const read = (file) => {
  const fullPath = path.join(__dirname, 'src', file);
  if (fs.existsSync(fullPath)) return fs.readFileSync(fullPath, 'utf8');
  return '';
};

write('components/solutions/Solutions.module.css', `
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-20) 0;
  background-color: var(--color-bg-primary);
}
.heroBg {
  position: absolute;
  top: -50%; left: -50%; right: -50%; bottom: -50%;
  background: radial-gradient(circle at center, var(--color-brand-glow) 0%, transparent 40%);
  animation: rotateBg 20s linear infinite;
  z-index: 0;
  opacity: 0.5;
}
@keyframes rotateBg {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.heroContent {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
.heroTitle {
  font-size: clamp(3rem, 5vw, 4.5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: var(--spacing-6);
  color: var(--color-text-primary);
}
.heroDesc {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-8);
}
.heroVisual {
  position: relative;
  height: 300px;
  width: 100%;
  margin-top: var(--spacing-12);
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(168, 85, 247, 0.1));
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.section {
  padding: var(--spacing-24) 0;
  background-color: var(--color-bg-primary);
}
.sectionAlt {
  padding: var(--spacing-24) 0;
  background-color: var(--color-bg-secondary);
}
.sectionHeader {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--spacing-16);
}
.badge {
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  background: var(--color-brand-glow);
  color: var(--color-brand-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--spacing-4);
  color: var(--color-text-primary);
}
.desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
}

/* Services Overview Grid */
.overviewGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
}
.overviewCard {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  transition: all var(--transition-normal);
}
.overviewCard:hover {
  border-color: var(--color-brand-primary);
  transform: translateY(-4px);
}

/* Individual Services */
.serviceRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-16);
  align-items: center;
  margin-bottom: var(--spacing-32);
}
.serviceRow:nth-child(even) {
  direction: rtl;
}
.serviceRow:nth-child(even) > * {
  direction: ltr;
}
@media (max-width: 1024px) {
  .serviceRow {
    grid-template-columns: 1fr;
    margin-bottom: var(--spacing-16);
  }
  .serviceRow:nth-child(even) {
    direction: ltr;
  }
}
.architectureBox {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}
.techTags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-top: var(--spacing-4);
}
.techTag {
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  border: 1px solid var(--color-border);
}

/* Methodology */
.timeline {
  display: flex;
  justify-content: space-between;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}
.timeline::before {
  content: '';
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-border);
  z-index: 0;
}
.timelineItem {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 120px;
}
.timelineIcon {
  width: 60px;
  height: 60px;
  background: var(--color-bg-primary);
  border: 2px solid var(--color-brand-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-4);
  color: var(--color-brand-primary);
  transition: all var(--transition-fast);
}
.timelineItem:hover .timelineIcon {
  background: var(--color-brand-primary);
  color: #fff;
}
@media (max-width: 768px) {
  .timeline {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-8);
  }
  .timeline::before {
    top: 0; bottom: 0; left: 50%; right: auto;
    width: 2px; height: 100%;
  }
}

/* Ecosystem */
.ecosystemGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-8);
}
.ecoCategory {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
}

/* Comparison */
.compareGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-8);
}
.compareCard {
  padding: var(--spacing-10);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
}
.compareTraditional {
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
}
.compareMirai {
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), transparent);
  border-color: var(--color-brand-primary);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-glow);
}
.compareList {
  list-style: none;
  padding: 0;
  margin-top: var(--spacing-6);
}
.compareList li {
  margin-bottom: var(--spacing-4);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

/* FAQ */
.faqItem {
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-6) 0;
}
.faqQuestion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}
.faqAnswer {
  margin-top: var(--spacing-4);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .overviewGrid, .compareGrid {
    grid-template-columns: 1fr;
  }
}
`);

// Hero
write('components/solutions/SolutionsHero.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Cloud, Sparkles, Cpu, Layers } from 'lucide-react';
import styles from './Solutions.module.css';

export const SolutionsHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <Container size="md" style={{position: 'relative', zIndex: 1}}>
        <div className={styles.heroContent}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className={styles.badge}>Services</span>
            <h1 className={styles.heroTitle}>Transforming Infrastructure & Intelligence</h1>
            <p className={styles.heroDesc}>
              Enterprise-grade cloud strategies, generative AI implementation, and robust architectures designed to scale your business into the future.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContents: 'center', justifyContent: 'center'}}>
              <Button variant="primary" size="lg">Explore Our Services</Button>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Abstract Floating Data Vis */}
            <motion.div animate={{y: [0,-15,0]}} transition={{repeat: Infinity, duration: 4}} style={{position: 'absolute', top: '30%', left: '20%', color: 'var(--color-brand-primary)'}}>
              <Cloud size={64} />
            </motion.div>
            <motion.div animate={{y: [0,20,0]}} transition={{repeat: Infinity, duration: 5, delay: 1}} style={{position: 'absolute', bottom: '20%', right: '25%', color: '#a855f7'}}>
              <Sparkles size={56} />
            </motion.div>
            <motion.div animate={{scale: [1,1.1,1]}} transition={{repeat: Infinity, duration: 3}} style={{position: 'absolute', top: '40%', right: '15%', color: 'var(--color-text-primary)'}}>
              <Cpu size={48} />
            </motion.div>
            <motion.div animate={{x: [0,-10,0]}} transition={{repeat: Infinity, duration: 6}} style={{position: 'absolute', bottom: '30%', left: '10%', color: 'var(--color-text-secondary)'}}>
              <Layers size={40} />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
`);

// Services Overview
write('components/solutions/ServicesOverview.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import { Cloud, Cpu, Server, Lock, Database, HardDrive, ArrowRight } from 'lucide-react';
import styles from './Solutions.module.css';

export const ServicesOverview = () => {
  const services = [
    { title: "Cloud Strategy & Consulting", icon: <Cloud />, desc: "Tailored approaches balancing technology, security, and costs." },
    { title: "Generative AI & ML", icon: <Cpu />, desc: "Harness AI to analyze data, automate processes, and innovate." },
    { title: "Migration & Modernization", icon: <Server />, desc: "Seamlessly transfer and update legacy systems." },
    { title: "Cloud Security", icon: <Lock />, desc: "Comprehensive framework integrating data and infrastructure." },
    { title: "Data Solutions", icon: <Database />, desc: "Robust data architectures and engineering pipelines." },
    { title: "Storage Solutions", icon: <HardDrive />, desc: "Scalable, secure options for organizational data needs." }
  ];

  return (
    <section className={styles.sectionAlt}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Our Core Expertise</h2>
          <p className={styles.desc}>Select a practice area to jump to detailed capabilities and delivery workflows.</p>
        </div>
        <div className={styles.overviewGrid}>
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              className={styles.overviewCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{color: 'var(--color-brand-primary)', marginBottom: '1rem'}}>
                {React.cloneElement(svc.icon, { size: 32 })}
              </div>
              <h3 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-xl)'}}>{svc.title}</h3>
              <p style={{color: 'var(--color-text-secondary)', marginBottom: '1.5rem'}}>{svc.desc}</p>
              <div style={{color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', cursor: 'pointer'}}>
                Explore Details <ArrowRight size={16} color="var(--color-brand-primary)" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// Individual Services
write('components/solutions/IndividualServices.jsx', `
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
`);

// Methodology
write('components/solutions/DeliveryMethodology.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Solutions.module.css';
import { Search, PenTool, LayoutTemplate, Hammer, Rocket, LineChart } from 'lucide-react';

export const DeliveryMethodology = () => {
  const steps = [
    { title: "Discover", icon: <Search size={24} /> },
    { title: "Assess", icon: <PenTool size={24} /> },
    { title: "Architect", icon: <LayoutTemplate size={24} /> },
    { title: "Build", icon: <Hammer size={24} /> },
    { title: "Deploy", icon: <Rocket size={24} /> },
    { title: "Optimize", icon: <LineChart size={24} /> }
  ];

  return (
    <section className={styles.sectionAlt}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Methodology</span>
          <h2 className={styles.title}>How We Deliver</h2>
          <p className={styles.desc}>A proven, systematic approach to guarantee project success from inception to scale.</p>
        </div>
        
        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={styles.timelineIcon}>
                {step.icon}
              </div>
              <h4 style={{color: 'var(--color-text-primary)'}}>{step.title}</h4>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// Tech Ecosystem
write('components/solutions/TechEcosystem.jsx', `
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
`);

// Comparison
write('components/solutions/Comparison.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Solutions.module.css';
import { X, Check } from 'lucide-react';

export const Comparison = () => {
  const trad = [
    "Siloed teams & rigid methodologies",
    "Generic templates & off-the-shelf software",
    "Lengthy discovery phases (months)",
    "Security as an afterthought",
    "Vendor lock-in constraints"
  ];
  const mirai = [
    "Cross-functional agile pods",
    "Custom cloud-native & AI-first solutions",
    "Rapid prototyping & MVP delivery (weeks)",
    "Shift-left zero-trust security architecture",
    "Open-source & multi-cloud flexibility"
  ];

  return (
    <section className={styles.sectionAlt}>
      <Container size="lg">
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Why Mirai Labs</h2>
          <p className={styles.desc}>The difference between standard consulting and true engineering partnerships.</p>
        </div>
        <div className={styles.compareGrid}>
          <motion.div className={\`\${styles.compareCard} \${styles.compareTraditional}\`} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 style={{fontSize: 'var(--font-size-2xl)', marginBottom: '1.5rem'}}>Traditional Consulting</h3>
            <ul className={styles.compareList}>
              {trad.map((item, i) => (
                <li key={i}><X color="var(--color-error)" size={20} /> <span>{item}</span></li>
              ))}
            </ul>
          </motion.div>
          <motion.div className={\`\${styles.compareCard} \${styles.compareMirai}\`} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 style={{fontSize: 'var(--font-size-2xl)', marginBottom: '1.5rem'}}>Mirai Labs</h3>
            <ul className={styles.compareList}>
              {mirai.map((item, i) => (
                <li key={i}><Check color="var(--color-success)" size={20} /> <span>{item}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
`);

// FAQ
write('components/solutions/FAQ.jsx', `
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Solutions.module.css';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "How long does a typical cloud migration take?", a: "Depending on the complexity and volume of data, an MVP migration can take 4-8 weeks, while enterprise-scale migrations may take 3-6 months. We prioritize a phased approach to ensure zero downtime." },
    { q: "Do you build custom LLMs or use existing providers?", a: "We leverage both. For rapid deployment, we integrate with industry leaders like OpenAI and Anthropic. For highly sensitive data, we fine-tune open-source models (like Llama 3) and deploy them within your secure VPC." },
    { q: "What is your pricing model for consulting?", a: "We offer flexible engagement models including fixed-bid projects for defined scopes, and dedicated engineering pods on a monthly retainer for continuous development and modernization." },
    { q: "How do you ensure data security during AI implementation?", a: "We employ zero-trust architectures, end-to-end encryption, and role-based access controls. Our AI implementations never use your proprietary data to train public models." }
  ];

  return (
    <section className={styles.section}>
      <Container size="md">
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => setOpen(open === i ? -1 : i)}>
                {faq.q}
                <motion.div animate={{ rotate: open === i ? 180 : 0 }}><ChevronDown size={20} /></motion.div>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    style={{overflow: 'hidden'}}
                  >
                    <p className={styles.faqAnswer}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// CTA
write('components/solutions/SolutionsCTA.jsx', `
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
`);


// Assemble Solutions.jsx
write('pages/Solutions.jsx', `
import React from 'react';
import { SolutionsHero } from '../components/solutions/SolutionsHero';
import { ServicesOverview } from '../components/solutions/ServicesOverview';
import { IndividualServices } from '../components/solutions/IndividualServices';
import { DeliveryMethodology } from '../components/solutions/DeliveryMethodology';
import { TechEcosystem } from '../components/solutions/TechEcosystem';
import { Comparison } from '../components/solutions/Comparison';
import { FAQ } from '../components/solutions/FAQ';
import { SolutionsCTA } from '../components/solutions/SolutionsCTA';

export const Solutions = () => {
  return (
    <main style={{backgroundColor: 'var(--color-bg-primary)'}}>
      <SolutionsHero />
      <ServicesOverview />
      <IndividualServices />
      <DeliveryMethodology />
      <TechEcosystem />
      <Comparison />
      <FAQ />
      <SolutionsCTA />
    </main>
  );
};
`);

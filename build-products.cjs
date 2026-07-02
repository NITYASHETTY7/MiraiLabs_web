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

// 1. CSS Styles for Products
write('components/products/Products.module.css', `
.hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-20) 0;
  background-color: var(--color-bg-primary);
  text-align: center;
}
.heroBg1 {
  position: absolute;
  top: -10%; left: -10%;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  animation: float 10s ease-in-out infinite;
}
.heroBg2 {
  position: absolute;
  bottom: -10%; right: -10%;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  animation: float 12s ease-in-out infinite reverse;
}
@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

.heroContent {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
}
.badge {
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  background: var(--color-brand-glow);
  color: var(--color-brand-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid rgba(79, 70, 229, 0.2);
}
.heroTitle {
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: var(--spacing-6);
  background: linear-gradient(to right, var(--color-text-primary), var(--color-text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.heroDesc {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-10);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.heroVisualContainer {
  margin-top: var(--spacing-16);
  position: relative;
  perspective: 1000px;
}
.heroMockup {
  width: 100%;
  height: 400px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  box-shadow: 0 30px 60px -12px rgba(0,0,0,0.3);
  overflow: hidden;
  transform: rotateX(15deg) scale(0.95);
  transition: transform var(--transition-normal);
}
.heroMockup:hover {
  transform: rotateX(5deg) scale(1);
}
.mockupHeader {
  height: 30px;
  background: rgba(255,255,255,0.05);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 8px;
}
.mockupDot { width: 10px; height: 10px; border-radius: 50%; }

.section {
  padding: var(--spacing-24) 0;
  background-color: var(--color-bg-primary);
}
.sectionAlt {
  padding: var(--spacing-24) 0;
  background-color: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}
.sectionHeader {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--spacing-16);
}
.title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--spacing-4);
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}

/* Tabs */
.tabContainer {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-16);
  flex-wrap: wrap;
}
.tabCard {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4) var(--spacing-6);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  cursor: pointer;
  transition: all var(--transition-fast);
  min-width: 250px;
}
.tabCard:hover {
  border-color: var(--color-brand-hover);
  background: var(--color-bg-tertiary);
}
.tabActive {
  background: var(--color-brand-glow);
  border-color: var(--color-brand-primary);
  box-shadow: 0 0 20px var(--color-brand-glow);
}
.tabIcon {
  color: var(--color-text-secondary);
}
.tabActive .tabIcon {
  color: var(--color-brand-primary);
}
.tabText {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

/* Product Showcase Inside Tab */
.showcaseGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-16);
  align-items: center;
  margin-bottom: var(--spacing-24);
}
@media (max-width: 1024px) {
  .showcaseGrid { grid-template-columns: 1fr; }
}
.glassPanel {
  background: rgba(255,255,255,0.02);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  position: relative;
  overflow: hidden;
}

/* Feature Deep Dive */
.featureGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-24);
}
.featureCard {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  position: relative;
  overflow: hidden;
}
.featureCard::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--color-brand-primary), transparent);
  opacity: 0;
  transition: opacity var(--transition-fast);
}
.featureCard:hover::before {
  opacity: 1;
}

/* Workflow */
.workflowFlex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: var(--spacing-4) var(--spacing-8);
  max-width: 900px;
  margin: 0 auto;
}
.workflowNode {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--color-text-primary);
}
.workflowIcon {
  width: 50px; height: 50px;
  border-radius: 50%;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-brand-primary);
  box-shadow: var(--shadow-md);
}

/* Integrations */
.integrationTrack {
  display: flex;
  justify-content: center;
  gap: var(--spacing-8);
  flex-wrap: wrap;
  opacity: 0.6;
}
.intLogo {
  font-family: var(--font-family-heading);
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--color-text-primary);
  background: var(--color-bg-secondary);
  padding: var(--spacing-2) var(--spacing-6);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
}

/* Comparison Table */
.compareTableWrapper {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-bg-secondary);
}
.compareTable {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}
.compareTable th, .compareTable td {
  padding: var(--spacing-4) var(--spacing-6);
  border-bottom: 1px solid var(--color-border);
}
.compareTable th {
  background: var(--color-bg-tertiary);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.compareTable td {
  color: var(--color-text-secondary);
}

/* Customer Success */
.successGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-8);
}
@media (max-width: 768px) {
  .successGrid { grid-template-columns: 1fr; }
}
.successCard {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
}
.successImg {
  height: 200px;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid var(--color-border);
}
.successContent {
  padding: var(--spacing-8);
}
.metricGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4);
  margin-top: var(--spacing-6);
  padding-top: var(--spacing-6);
  border-top: 1px solid var(--color-border);
}
.metricVal {
  font-size: var(--font-size-2xl);
  font-weight: bold;
  color: var(--color-brand-primary);
}
.metricLabel {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  color: var(--color-text-secondary);
}
`);

// Hero Component
write('components/products/ProductsHero.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import styles from './Products.module.css';
import { Play } from 'lucide-react';

export const ProductsHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg1}></div>
      <div className={styles.heroBg2}></div>
      <Container size="lg">
        <div className={styles.heroContent}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className={styles.badge}>Proprietary Software</span>
            <h1 className={styles.heroTitle}>Engineering Intelligence</h1>
            <p className={styles.heroDesc}>
              Enterprise-grade AI products designed to eliminate bottlenecks, automate logic, and empower your engineering teams instantly.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
              <Button size="lg" variant="primary">Request Demo</Button>
              <Button size="lg" variant="secondary" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Play size={16}/> Watch Video
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className={styles.heroVisualContainer}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className={styles.heroMockup}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupDot} style={{background: '#ff5f56'}}></div>
                <div className={styles.mockupDot} style={{background: '#ffbd2e'}}></div>
                <div className={styles.mockupDot} style={{background: '#27c93f'}}></div>
              </div>
              <div style={{width: '100%', height: 'calc(100% - 30px)', backgroundImage: 'url(https://images.unsplash.com/photo-1610555356070-d1febc54e814?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8}}></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
`);

// Products Showcase (Tabs, Deep Dive, Workflow combined)
write('components/products/ProductsShowcase.jsx', `
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Button } from '../../index.js';
import styles from './Products.module.css';
import { Terminal, MessageSquare, Mic, Code2, ShieldCheck, Zap, Database, ArrowRight, User, Cpu, FileText } from 'lucide-react';

const productsData = [
  {
    id: 'coding',
    name: 'AI Coding Assistant',
    icon: <Terminal />,
    desc: 'Native IDE intelligence for enterprise developers.',
    tagline: 'Code 10x faster with context-aware AI.',
    overview: 'Our AI Coding Assistant deeply integrates into your secure environment, analyzing your entire codebase to provide highly relevant completions, bug fixes, and refactoring suggestions without ever exposing proprietary logic.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&q=80',
    features: [
      { title: 'Code Generation', icon: <Code2 />, desc: 'Generate entire functions and test suites from natural language.' },
      { title: 'Enterprise Security', icon: <ShieldCheck />, desc: 'Zero-retention policy. Your code never leaves your VPC.' },
      { title: 'Performance Profiling', icon: <Zap />, desc: 'Real-time optimization suggestions as you type.' }
    ],
    workflow: [
      { label: 'Developer', icon: <User /> },
      { label: 'Local Agent', icon: <Terminal /> },
      { label: 'Secure LLM', icon: <Cpu /> },
      { label: 'Optimized Code', icon: <FileText /> }
    ]
  },
  {
    id: 'chat',
    name: 'Multi-LLM Chat',
    icon: <MessageSquare />,
    desc: 'Unified conversational interface for enterprise data.',
    tagline: 'Talk to your data across any model.',
    overview: 'Stop switching contexts. Our Multi-LLM Chat aggregates the power of GPT-4, Claude 3, and your fine-tuned local models into a single, secure glass pane. Query databases, internal wikis, and cloud logs effortlessly.',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1000&q=80',
    features: [
      { title: 'Model Routing', icon: <Database />, desc: 'Automatically routes queries to the most cost-efficient model.' },
      { title: 'RAG Integration', icon: <Code2 />, desc: 'Instantly connects to internal Confluence, Jira, and Slack data.' },
      { title: 'Audit Logging', icon: <ShieldCheck />, desc: 'Full traceability and compliance for every prompt.' }
    ],
    workflow: [
      { label: 'Employee', icon: <User /> },
      { label: 'Query Router', icon: <Zap /> },
      { label: 'RAG Pipeline', icon: <Database /> },
      { label: 'Contextual Answer', icon: <MessageSquare /> }
    ]
  },
  {
    id: 'voice',
    name: 'Realtime Voice AI Assistant',
    icon: <Mic />,
    desc: 'Instant voice interactions with millisecond latency.',
    tagline: 'Human-like conversations at scale.',
    overview: 'Deploy AI that actually sounds human. Our Voice AI Assistant operates with sub-300ms latency, enabling natural interruptions, emotion recognition, and instant API triggering for customer support and internal ops.',
    img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1000&q=80',
    features: [
      { title: 'Ultra-Low Latency', icon: <Zap />, desc: 'Under 300ms response time for fluid, natural dialogue.' },
      { title: 'Voice Cloning', icon: <User />, desc: 'Deploy brand-specific voices with perfect intonation.' },
      { title: 'Action Triggers', icon: <Cpu />, desc: 'Agent can autonomously trigger webhooks during the call.' }
    ],
    workflow: [
      { label: 'Customer', icon: <Mic /> },
      { label: 'Speech to Text', icon: <Terminal /> },
      { label: 'Logic Engine', icon: <Cpu /> },
      { label: 'Voice Synthesis', icon: <MessageSquare /> }
    ]
  }
];

export const ProductsShowcase = () => {
  const [activeTab, setActiveTab] = useState(productsData[0].id);
  const activeProduct = productsData.find(p => p.id === activeTab);

  return (
    <section className={styles.sectionAlt}>
      <Container size="xl">
        {/* Navigation Tabs */}
        <div className={styles.tabContainer}>
          {productsData.map(prod => (
            <div 
              key={prod.id}
              className={\`\${styles.tabCard} \${activeTab === prod.id ? styles.tabActive : ''}\`}
              onClick={() => setActiveTab(prod.id)}
            >
              <div className={styles.tabIcon}>{prod.icon}</div>
              <div>
                <div className={styles.tabText}>{prod.name}</div>
                <div style={{fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '2px'}}>{prod.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* 1. Main Showcase */}
            <div className={styles.showcaseGrid}>
              <div>
                <span className={styles.badge}>{activeProduct.name}</span>
                <h2 style={{fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text-primary)', marginBottom: '1rem', lineHeight: '1.2'}}>
                  {activeProduct.tagline}
                </h2>
                <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.6'}}>
                  {activeProduct.overview}
                </p>
                <Button variant="primary">Deploy Now</Button>
              </div>
              <div className={styles.glassPanel}>
                <div className={styles.mockupHeader} style={{marginBottom: '-1px'}}>
                  <div className={styles.mockupDot} style={{background: '#ff5f56'}}></div>
                  <div className={styles.mockupDot} style={{background: '#ffbd2e'}}></div>
                  <div className={styles.mockupDot} style={{background: '#27c93f'}}></div>
                </div>
                <img src={activeProduct.img} alt={activeProduct.name} style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '0 0 var(--radius-xl) var(--radius-xl)'}} />
              </div>
            </div>

            {/* 2. Feature Deep Dive */}
            <div style={{marginTop: 'var(--spacing-16)'}}>
              <h3 style={{color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-8)', fontSize: 'var(--font-size-2xl)'}}>Feature Deep Dive</h3>
              <div className={styles.featureGrid}>
                {activeProduct.features.map((feat, i) => (
                  <motion.div key={i} className={styles.featureCard} whileHover={{ y: -5 }}>
                    <div style={{color: 'var(--color-brand-primary)', marginBottom: '1rem'}}>{feat.icon}</div>
                    <h4 style={{color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-lg)'}}>{feat.title}</h4>
                    <p style={{color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)'}}>{feat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 3. Product Workflow */}
            <div style={{marginTop: 'var(--spacing-16)'}}>
              <h3 style={{color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-8)', fontSize: 'var(--font-size-2xl)', textAlign: 'center'}}>Architecture Workflow</h3>
              <div className={styles.workflowFlex}>
                {activeProduct.workflow.map((node, i) => (
                  <React.Fragment key={i}>
                    <div className={styles.workflowNode}>
                      <div className={styles.workflowIcon}>{node.icon}</div>
                      <span style={{fontSize: 'var(--font-size-sm)', fontWeight: '500'}}>{node.label}</span>
                    </div>
                    {i < activeProduct.workflow.length - 1 && (
                      <ArrowRight color="var(--color-text-secondary)" size={24} style={{opacity: 0.5}} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};
`);

// Integrations
write('components/products/Integrations.jsx', `
import React from 'react';
import { Container } from '../../index.js';
import styles from './Products.module.css';

export const Integrations = () => {
  const logos = ["AWS", "GitHub", "Jira", "Slack", "VS Code", "Claude", "OpenAI", "Bedrock"];
  
  return (
    <section className={styles.section} style={{paddingBottom: 0}}>
      <Container size="xl">
        <p style={{textAlign: 'center', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-8)'}}>Works with your existing stack</p>
        <div className={styles.integrationTrack}>
          {logos.map((logo, i) => (
            <div key={i} className={styles.intLogo}>{logo}</div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// Product Comparison
write('components/products/ProductComparison.jsx', `
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
`);

// Customer Success
write('components/products/CustomerSuccess.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Products.module.css';

export const CustomerSuccess = () => {
  const stories = [
    {
      company: "Fintech Startup",
      title: "Reduced Code Review Time by 60%",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      metrics: [
        { val: "60%", label: "Faster Reviews" },
        { val: "10x", label: "ROI in 3 Months" }
      ]
    },
    {
      company: "Healthcare Provider",
      title: "Automated Patient Triage Voice AI",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      metrics: [
        { val: "< 300ms", label: "Voice Latency" },
        { val: "45%", label: "Op-Ex Reduction" }
      ]
    }
  ];

  return (
    <section className={styles.sectionAlt}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Customer Success</span>
          <h2 className={styles.title}>Impact at Scale</h2>
        </div>
        <div className={styles.successGrid}>
          {stories.map((story, i) => (
            <motion.div 
              key={i} 
              className={styles.successCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.successImg} style={{backgroundImage: \`url(\${story.img})\`}}></div>
              <div className={styles.successContent}>
                <div style={{color: 'var(--color-brand-primary)', fontSize: 'var(--font-size-sm)', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase'}}>{story.company}</div>
                <h3 style={{color: 'var(--color-text-primary)', fontSize: 'var(--font-size-2xl)'}}>{story.title}</h3>
                
                <div className={styles.metricGrid}>
                  {story.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className={styles.metricVal}>{m.val}</div>
                      <div className={styles.metricLabel}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

// Products FAQ
write('components/products/ProductsFAQ.jsx', `
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Products.module.css';
import { ChevronDown } from 'lucide-react';

export const ProductsFAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "Can I deploy the AI Coding Assistant on-premise?", a: "Yes, our proprietary software is designed for highly regulated environments and can be deployed fully air-gapped within your VPC." },
    { q: "Which models does the Multi-LLM chat support?", a: "It supports all major commercial models (OpenAI, Anthropic, Google) as well as open-source models (Llama 3, Mistral) hosted locally." },
    { q: "How is data privacy handled?", a: "We operate on a strict zero-retention policy. Your data, prompts, and codebase are never used to train our base models." }
  ];

  return (
    <section className={styles.section}>
      <Container size="md">
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Product FAQ</h2>
        </div>
        <div style={{borderTop: '1px solid var(--color-border)'}}>
          {faqs.map((faq, i) => (
            <div key={i} style={{borderBottom: '1px solid var(--color-border)', padding: 'var(--spacing-6) 0'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)'}} onClick={() => setOpen(open === i ? -1 : i)}>
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
                    <p style={{marginTop: 'var(--spacing-4)', color: 'var(--color-text-secondary)', lineHeight: '1.6'}}>{faq.a}</p>
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

// Products CTA
write('components/products/ProductsCTA.jsx', `
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
`);

// 2. Assemble Products.jsx
write('pages/Products.jsx', `
import React from 'react';
import { ProductsHero } from '../components/products/ProductsHero';
import { Integrations } from '../components/products/Integrations';
import { ProductsShowcase } from '../components/products/ProductsShowcase';
import { ProductComparison } from '../components/products/ProductComparison';
import { CustomerSuccess } from '../components/products/CustomerSuccess';
import { ProductsFAQ } from '../components/products/ProductsFAQ';
import { ProductsCTA } from '../components/products/ProductsCTA';

export const Products = () => {
  return (
    <main style={{backgroundColor: 'var(--color-bg-primary)'}}>
      <ProductsHero />
      <Integrations />
      <ProductsShowcase />
      <ProductComparison />
      <CustomerSuccess />
      <ProductsFAQ />
      <ProductsCTA />
    </main>
  );
};
`);

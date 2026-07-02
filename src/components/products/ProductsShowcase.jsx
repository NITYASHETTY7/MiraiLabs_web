
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
    img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1000&q=80',
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
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&q=80',
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
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=80',
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
              className={`${styles.tabCard} ${activeTab === prod.id ? styles.tabActive : ''}`}
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

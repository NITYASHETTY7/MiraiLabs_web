
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

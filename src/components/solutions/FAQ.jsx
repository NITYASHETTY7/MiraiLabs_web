
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

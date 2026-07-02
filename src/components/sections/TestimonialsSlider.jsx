
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './HomepageSections.module.css';

export const TestimonialsSlider = () => {
  const testimonials = [
    {
      quote: "Mirai Labs is our go-to for cloud and app development. They make complex IT simple.",
      author: "Shubham Sahai",
      role: "Co-Founder, AI Hiring Assistant"
    },
    {
      quote: "From streamlining our cloud infrastructure to developing innovative AI apps, they delivered exceptional results.",
      author: "Rohit Tolety",
      role: "Tools Engineer, Red Storm Entertainment"
    },
    {
      quote: "They took the time to understand our challenges and delivered fantastic cloud solutions that truly fit our needs.",
      author: "Chetan G",
      role: "Co-Founder Vision Link"
    }
  ];

  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)'}}>
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{padding: 'var(--spacing-8)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)'}}
            >
              <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)', marginBottom: '2rem', fontStyle: 'italic'}}>"{t.quote}"</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div style={{width: 48, height: 48, borderRadius: '50%', background: 'var(--color-brand-glow)', backgroundImage: `url(https://i.pravatar.cc/100?img=${30 + i})`, backgroundSize: 'cover'}} />
                <div>
                  <h4 style={{color: 'var(--color-text-primary)'}}>{t.author}</h4>
                  <span style={{color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)'}}>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

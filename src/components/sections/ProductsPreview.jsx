
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { Link } from 'react-router-dom';
import styles from './HomepageSections.module.css';

export const ProductsPreview = () => {
  const products = [
    { 
      name: "AI Coding Assistant", 
      desc: "Accelerate development workflows with AI-driven code suggestions natively integrated into your environment.", 
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1000&q=80" 
    },
    { 
      name: "Multi-LLM Chat", 
      desc: "Interact seamlessly with multiple large language models through a unified, secure conversational interface built for enterprise data.", 
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&q=80" 
    },
    { 
      name: "Realtime Voice AI Assistant", 
      desc: "Enable instant, natural voice interactions for customer support and internal workflows with millisecond latency.", 
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=80" 
    }
  ];

  return (
    <section className={styles.section} style={{background: 'var(--color-bg-secondary)'}}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Products</span>
          <h2 className={styles.sectionTitle}>Proprietary Solutions</h2>
          <p className={styles.sectionDesc}>Discover our cutting-edge AI products designed to boost productivity.</p>
        </div>

        <div style={{marginTop: 'var(--spacing-20)'}}>
          {products.map((prod, i) => (
            <div key={i} className={styles.productRow}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h3 style={{fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text-primary)', marginBottom: '1rem', letterSpacing: '-0.02em'}}>{prod.name}</h3>
                <p style={{fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.6'}}>{prod.desc}</p>
                <Link to="/products" style={{textDecoration: 'none'}}>
                  <Button variant="secondary">View Details</Button>
                </Link>
              </motion.div>
              <motion.div 
                className={styles.productImage}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Overlay gradient to make it feel like an app mockup */}
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '40px', background: 'var(--color-bg-tertiary)', opacity: 0.85, backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '8px', zIndex: 1}}>
                  <div style={{width: 12, height: 12, borderRadius: '50%', background: '#ff5f56'}}></div>
                  <div style={{width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e'}}></div>
                  <div style={{width: 12, height: 12, borderRadius: '50%', background: '#27c93f'}}></div>
                </div>
                <img src={prod.img} alt={prod.name} style={{width: '100%', height: 'auto', display: 'block'}} />
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

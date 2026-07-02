import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../../index.js';
import { Shield, Zap, Target, Server, Sparkles, Building } from 'lucide-react';
import styles from './WhyMiraiLabs.module.css';

export const WhyMiraiLabs = () => {
  const features = [
    { title: "Security First", icon: <Shield size={24} />, desc: "Zero-trust architecture and end-to-end encryption protecting your digital assets." },
    { title: "Cloud Experts", icon: <Server size={24} />, desc: "Multi-cloud, high-availability architectures designed for seamless scaling." },
    { title: "AI Native", icon: <Sparkles size={24} />, desc: "Deeply integrated AI models transforming operational data into predictive intelligence." },
    { title: "Rapid Delivery", icon: <Zap size={24} />, desc: "Agile engineering practices ensuring swift deployment without sacrificing quality." },
    { title: "Business Outcomes", icon: <Target size={24} />, desc: "Aligning technical solutions directly with measurable ROI and your strategic goals." },
    { title: "Enterprise Grade", icon: <Building size={24} />, desc: "Built for massive scale with unparalleled reliability and compliance standards." }
  ];

  const [activeFeature, setActiveFeature] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [radius, setRadius] = useState(220);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 640 ? 140 : 220);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animationFrame;
    const rotate = () => {
      if (!isHovered) {
        setRotation(prev => (prev + 0.08) % 360);
      }
      animationFrame = requestAnimationFrame(rotate);
    };
    animationFrame = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Why Mirai Labs</span>
          <h2 className={styles.sectionTitle}>The Premier Technology Innovator</h2>
        </div>

        <div 
          className={styles.wheelContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.ring} />

          {/* Center Content */}
          <div className={styles.wheelCenter}>
            <AnimatePresence mode="wait">
              {activeFeature ? (
                <motion.div
                  key="feature"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div style={{ color: 'var(--color-brand-primary)', marginBottom: '8px' }}>
                    {activeFeature.icon}
                  </div>
                  <h4 className={styles.centerActiveTitle}>{activeFeature.title}</h4>
                  <p className={styles.centerActiveDesc}>{activeFeature.desc}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className={styles.wheelCenterText}>Mirai<br/>Labs</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Orbiting Items */}
          {features.map((feat, index) => {
            const angle = (index * (360 / features.length)) + rotation;
            const rad = angle * (Math.PI / 180);
            
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            
            const isActive = activeFeature?.title === feat.title;

            return (
              <motion.button
                key={index}
                className={`${styles.orbitItem} ${isActive ? styles.active : ''}`}
                style={{ x, y }}
                whileHover={{ scale: 1.15 }}
                onClick={() => setActiveFeature(isActive ? null : feat)}
                aria-label={feat.title}
              >
                <div className={styles.orbitItemIcon}>{feat.icon}</div>
                <div className={styles.orbitItemLabel}>{feat.title}</div>
              </motion.button>
            );
          })}

        </div>
      </Container>
    </section>
  );
};

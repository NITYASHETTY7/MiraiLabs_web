import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../../index.js';
import { Shield, Zap, Target, Server, Sparkles, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './WhyMiraiLabs.module.css';

export const WhyMiraiLabs = () => {
  const features = [
    { 
      title: "Security First", 
      icon: <Shield size={24} color="var(--color-icon-security)" />,
      desc: "Zero-trust architecture and end-to-end encryption protecting your digital assets." 
    },
    { 
      title: "Cloud Experts", 
      icon: <Server size={24} color="var(--color-icon-cloud)" />,
      desc: "Multi-cloud, high-availability architectures designed for seamless scaling." 
    },
    { 
      title: "AI Native", 
      icon: <Sparkles size={24} color="var(--color-icon-ai)" />,
      desc: "Deeply integrated AI models transforming operational data into predictive intelligence." 
    },
    { 
      title: "Rapid Delivery", 
      icon: <Zap size={24} color="var(--color-icon-rapid)" />,
      desc: "Agile engineering practices ensuring swift deployment without sacrificing quality." 
    },
    { 
      title: "Business Outcomes", 
      icon: <Target size={24} color="var(--color-icon-business)" />,
      desc: "Aligning technical solutions directly with measurable ROI and your strategic goals." 
    },
    { 
      title: "Enterprise Grade", 
      icon: <Building size={24} color="var(--color-icon-enterprise)" />,
      desc: "Built for massive scale with unparalleled reliability and compliance standards." 
    }
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
      <div className={styles.ambientBg}>
        <div className={styles.glow1} />
        <div className={styles.glow2} />
      </div>

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

          {/* Connection Lines SVG */}
          <svg className={styles.connectionsSvg} viewBox="-300 -300 600 600">
            {features.map((feat, index) => {
              const angle = (index * (360 / features.length)) - 90 + rotation;
              const rad = angle * (Math.PI / 180);
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isActive = activeFeature?.title === feat.title;

              return (
                <g key={`line-${index}`}>
                  <line 
                    x1="0" y1="0" x2={x} y2={y} 
                    className={`${styles.connectionLine} ${isActive ? styles.connectionLineActive : ''}`}
                  />
                  {isActive && (
                    <line 
                      x1="0" y1="0" x2={x} y2={y} 
                      className={styles.pulseLine}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Center Content */}
          <div className={styles.wheelCenter}>
            <AnimatePresence mode="wait">
              {activeFeature ? (
                <motion.div
                  key="feature"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div className={styles.centerActiveIcon} style={{ marginBottom: '12px' }}>
                    {activeFeature.icon}
                  </div>
                  <h4 className={styles.centerActiveTitle}>{activeFeature.title}</h4>
                  <p className={styles.centerActiveDesc}>{activeFeature.desc}</p>
                  <Link to="/solutions" className={styles.centerLearnMore}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className={styles.wheelCenterText}>Mirai<br/>Labs</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Orbiting Items */}
          {features.map((feat, index) => {
            const angle = (index * (360 / features.length)) - 90 + rotation;
            const rad = angle * (Math.PI / 180);
            
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            
            const isActive = activeFeature?.title === feat.title;

            return (
              <motion.button
                key={index}
                className={`${styles.orbitItem} ${isActive ? styles.active : ''}`}
                style={{ x, y }}
                whileHover={{ scale: 1.05 }}
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

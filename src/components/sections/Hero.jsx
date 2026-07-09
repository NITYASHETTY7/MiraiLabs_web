import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../../index.js';
import { Link } from 'react-router-dom';
import { Cloud, Sparkles, Shield, Database, HardDrive, Cpu } from 'lucide-react';
import styles from './HomepageSections.module.css';

// ─── Layout grid ──────────────────────────────────────────────────────────────
//
//  Coordinate space: 0–100 (maps to 0%–100% of the diagramGrid container).
//  Center chip at (50, 50). SVG viewBox="0 0 100 100" matches exactly.
//
//  Layout:
//        Cloud Architecture      top:11, left:50   (top-center)
//
//  Storage                                 Generative AI
//  top:40, left:16                         top:40, left:84
//
//                [CENTER]  50, 50
//
//  Cloud Security                          Data Platform
//  top:74, left:16                         top:74, left:84
//
//  Card dimensions in % units (card 200px on ~460px container):
//    halfW ≈ 200/460*50 ≈ 21.7  → 22
//    halfH ≈  52/460*50 ≈  5.6  → 6
//  Center circle radius in % ≈ 80/460*50 ≈ 8.7 → 9

const CX = 50;
const CY = 50;
const CR = 9;    // center circle radius in % units



const CARDS = [
  {
    key: 'cloud-arch',
    label: 'Cloud Architecture',
    icon: <Cloud     size={22} color="#3b82f6" />,
    cx: 25, cy: 15,
    floatDir: 1,  delay: 0.0,
  },
  {
    key: 'gen-ai',
    label: 'Generative AI',
    icon: <Sparkles  size={22} color="#8b5cf6" />,
    cx: 75, cy: 20,
    floatDir: -1, delay: 0.15,
  },
  {
    key: 'storage',
    label: 'Storage',
    icon: <HardDrive size={22} color="#64748b" />,
    cx: 20, cy: 45,
    floatDir: 1,  delay: 0.3,
  },
  {
    key: 'cloud-sec',
    label: 'Cloud Security',
    icon: <Shield    size={22} color="#10b981" />,
    cx: 50, cy: 85,
    floatDir: -1, delay: 0.45,
  },
  {
    key: 'data-platform',
    label: 'Data Platform',
    icon: <Database  size={22} color="#f59e0b" />,
    cx: 85, cy: 75,
    floatDir: 1,  delay: 0.6,
  },
];

const CARDS_WITH_LINES = CARDS.map(card => {
  const x1 = 300;
  const y1 = 300;
  
  const x2 = card.cx * 6; // cx is percentage, 600 viewBox width
  const y2 = card.cy * 6;

  const len = Math.hypot(x2 - x1, y2 - y1);
  return { ...card, lineStartPt: { x: x1, y: y1 }, lineEnd: { x: x2, y: y2 }, lineLen: len };
});

// ─── Component ────────────────────────────────────────────────────────────────
export const Hero = () => {
  const visualRef = useRef(null);
  const isInView  = useInView(visualRef, { once: true, margin: '-60px' });

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroGlowPurple} />
        <div className={styles.heroGlowBlue} />
      </div>

      <Container size="xl">
        <div className={styles.heroGrid}>

          {/* ── LEFT: Text content ── */}
          <motion.div
            className={styles.heroContentLeft}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className={styles.premiumBadge}>NEXT-GENERATION TECHNOLOGY</div>

            <h1 className={styles.heroTitle}>
              Powering Your<br />
              Success Through<br />
              Cloud &amp; AI
            </h1>

            <p className={styles.heroDesc}>
              We architect, deploy, and scale enterprise-grade technology infrastructure.
              Modernize your platform with our cutting-edge engineering solutions.
            </p>

            <div className={styles.heroButtons}>
              <Link to="/solutions" style={{ textDecoration: 'none' }}>
                <button className={styles.premiumBtnPrimary}>Explore Solutions</button>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <button className={styles.premiumBtnSecondary}>Book Consultation</button>
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT: Radial diagram ── */}
          <div className={styles.heroVisualWrapper} ref={visualRef}>
            <div className={styles.diagramGrid}>

              <svg
                className={styles.diagramSvg}
                viewBox="0 0 600 600"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  {CARDS_WITH_LINES.map(({ key, lineStartPt, lineEnd, lineLen, delay }) => (
                    <mask id={`mask-${key}`} key={key}>
                      <line
                        x1={lineStartPt.x} y1={lineStartPt.y}
                        x2={lineEnd.x}     y2={lineEnd.y}
                        stroke="white"
                        strokeWidth="10"
                        strokeLinecap="round"
                        className={`${styles.diagramLine} ${isInView ? styles.diagramLineVisible : ''}`}
                        style={{
                          '--line-len': lineLen,
                          animationDelay: `${delay + 0.2}s`,
                        }}
                      />
                    </mask>
                  ))}
                </defs>
                {CARDS_WITH_LINES.map(({ key, lineStartPt, lineEnd }) => (
                  <line
                    key={key}
                    x1={lineStartPt.x} y1={lineStartPt.y}
                    x2={lineEnd.x}     y2={lineEnd.y}
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    mask={`url(#mask-${key})`}
                  />
                ))}
                
                {/* Decorative circles from the image */}
                <circle cx="160" cy="400" r="4" stroke="#e2e8f0" strokeWidth="2" fill="transparent" />
                <circle cx="490" cy="510" r="4" fill="#f8fafc" />
              </svg>

              {/* Center chip */}
              <motion.div
                className={styles.diagramCenter}
                style={{ x: "-50%", y: "-50%" }}
                initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                animate={isInView ? { opacity: 1, scale: 1, x: "-50%", y: "-50%" } : {}}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Cpu size={30} color="#8b5cf6" />
              </motion.div>

              {/* Feature cards */}
              {CARDS_WITH_LINES.map(({ key, label, icon, cx, cy, floatDir, delay }, i) => (
                <motion.div
                  key={key}
                  className={styles.diagramCard}
                  style={{ left: `${cx}%`, top: `${cy}%`, x: "-50%", y: "-50%" }}
                  initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-50%" }}
                  animate={isInView ? { opacity: 1, scale: 1, x: "-50%", y: "-50%" } : {}}
                  transition={{
                    duration: 0.4,
                    delay: delay + 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className={styles.diagramCardInner}
                    animate={{ y: [0, floatDir * 8, 0] }}
                    transition={{
                      duration: 4 + i * 0.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: delay + 0.4,
                    }}
                  >
                    <span className={styles.diagramCardIcon}>{icon}</span>
                    <span className={styles.diagramCardLabel}>{label}</span>
                  </motion.div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

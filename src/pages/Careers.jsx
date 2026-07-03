import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../index.js';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import styles from './Careers.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
});

const benefits = [
  'Flexible Hours',
  'Learning Budget',
  'Hybrid Work',
  'Modern Tech Stack',
  'Hackathons',
  'Health Benefits'
];

const hiringProcess = [
  'Apply',
  'Screening',
  'Technical Interview',
  'Final Discussion',
  'Offer'
];

const openPositions = [
  { title: 'Frontend Engineer', type: 'Full-time', location: 'Remote / Bangalore' },
  { title: 'Backend Engineer', type: 'Full-time', location: 'Remote' },
  { title: 'Cloud Architect', type: 'Full-time', location: 'Bangalore' },
  { title: 'AI Engineer', type: 'Full-time', location: 'Remote' },
  { title: 'DevOps Engineer', type: 'Full-time', location: 'Bangalore' },
  { title: 'UI/UX Designer', type: 'Full-time', location: 'Remote / Bangalore' },
];

export function Careers() {
  return (
    <div style={{ background: 'var(--color-bg-primary)' }}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Container size="xl">
          <div className={styles.heroGrid}>
            <motion.div {...fadeUp()}>
              <span className={styles.heroBadge}>Careers</span>
              <h1 className={styles.heroTitle}>Build The Future<br />With Mirai Labs</h1>
              <p className={styles.heroSubtitle}>
                Join an engineering-first culture where innovation, ownership, and technical excellence drive everything we do.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Button variant="primary">View Open Roles</Button>
              </div>
            </motion.div>

            <div className={styles.heroVisual}>
              <div className={styles.heroGlow} />
              <motion.div className={styles.heroImageCard} animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team Collaboration" />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHY JOIN MIRAI ── */}
      <section className={styles.section}>
        <Container size="xl">
          <motion.div {...fadeUp()}>
            <span className={styles.sectionLabel}>Why Join Mirai</span>
            <h2 className={styles.sectionTitle}>An environment built for engineers.</h2>
          </motion.div>
          
          <div className={styles.whyGrid}>
            <motion.div className={styles.whyBlock} {...fadeUp(0.1)}>
              <div className={styles.whyTitle}>Innovation</div>
              <p className={styles.whyText}>Push the boundaries of AI and cloud architecture on cutting-edge enterprise projects.</p>
            </motion.div>
            <motion.div className={styles.whyBlock} {...fadeUp(0.2)}>
              <div className={styles.whyTitle}>Ownership</div>
              <p className={styles.whyText}>Take complete end-to-end responsibility of the systems you design, build, and deploy.</p>
            </motion.div>
            <motion.div className={styles.whyBlock} {...fadeUp(0.3)}>
              <div className={styles.whyTitle}>Learning & Growth</div>
              <p className={styles.whyText}>Continuous professional development with dedicated time for learning and experimentation.</p>
            </motion.div>
            <motion.div className={styles.whyBlock} {...fadeUp(0.4)}>
              <div className={styles.whyTitle}>Engineering Excellence</div>
              <p className={styles.whyText}>Work with top-tier talent who prioritize clean, scalable, and highly available code.</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── ENGINEERING CULTURE ── */}
      <section className={styles.section} style={{ background: 'var(--color-bg-secondary)' }}>
        <Container size="xl">
          <motion.div {...fadeUp()} style={{ textAlign: 'center' }}>
            <span className={styles.sectionLabel}>Engineering Culture</span>
            <h2 className={styles.sectionTitle}>How We Work</h2>
          </motion.div>

          <div className={styles.cultureTimeline}>
            {['Ownership', 'Innovation', 'Learning', 'Collaboration', 'Impact'].map((item, i, arr) => (
              <React.Fragment key={i}>
                <motion.div className={styles.cultureItem} {...fadeUp(i * 0.1)}>
                  {item}
                </motion.div>
                {i < arr.length - 1 && (
                  <motion.div {...fadeUp(i * 0.1 + 0.05)}>
                    <ArrowDown className={styles.cultureArrow} size={24} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* ── LIFE AT MIRAI ── */}
      <section className={styles.section}>
        <Container size="xl">
          <motion.div {...fadeUp()}>
            <span className={styles.sectionLabel}>Life at Mirai</span>
            <h2 className={styles.sectionTitle}>Inside our workspace.</h2>
          </motion.div>
          
          <div className={styles.galleryGrid}>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="Workspace 1" />
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Workspace 2" />
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="Workspace 3" />
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" alt="Workspace 4" />
          </div>
        </Container>
      </section>

      {/* ── BENEFITS ── */}
      <section className={styles.section} style={{ background: 'var(--color-bg-secondary)' }}>
        <Container size="xl">
          <motion.div {...fadeUp()}>
            <span className={styles.sectionLabel}>Perks & Benefits</span>
            <h2 className={styles.sectionTitle}>Everything you need to thrive.</h2>
          </motion.div>
          
          <div className={styles.benefitsFlex}>
            {benefits.map((benefit, i) => (
              <motion.div key={i} className={styles.benefitPill} {...fadeUp(i * 0.05)}>
                {benefit}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── HIRING PROCESS ── */}
      <section className={styles.section}>
        <Container size="xl">
          <motion.div {...fadeUp()}>
            <span className={styles.sectionLabel}>Hiring Process</span>
            <h2 className={styles.sectionTitle}>What to expect.</h2>
          </motion.div>

          <div className={styles.processContainer}>
            {hiringProcess.map((step, i, arr) => (
              <React.Fragment key={i}>
                <motion.div className={styles.processStep} {...fadeUp(i * 0.1)}>
                  <div className={styles.processNumber}>{i + 1}</div>
                  <div className={styles.processLabel}>{step}</div>
                </motion.div>
                {i < arr.length - 1 && (
                  <motion.div {...fadeUp(i * 0.1 + 0.05)}>
                    <ArrowRight className={styles.processArrow} size={24} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section className={styles.section} style={{ background: 'var(--color-bg-secondary)' }}>
        <Container size="xl">
          <motion.div {...fadeUp()}>
            <span className={styles.sectionLabel}>Open Roles</span>
            <h2 className={styles.sectionTitle}>Join our engineering team.</h2>
          </motion.div>

          <div className={styles.positionsList}>
            {openPositions.map((pos, i) => (
              <motion.div key={i} className={styles.positionRow} {...fadeUp(i * 0.05)}>
                <div className={styles.posInfo}>
                  <div className={styles.posTitle}>{pos.title}</div>
                  <div className={styles.posTags}>
                    <span className={styles.posTag}>{pos.type}</span>
                    <span className={styles.posTag}>{pos.location}</span>
                  </div>
                </div>
                <Button variant="outline">Apply Now</Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className={styles.section} style={{ borderBottom: 'none' }}>
        <Container size="xl">
          <motion.div className={styles.ctaBanner} {...fadeUp()}>
            <div>
              <h2 className={styles.ctaTitle}>Ready to Build the Future?</h2>
              <p className={styles.ctaDesc}>Take the next step in your career and build state-of-the-art enterprise software.</p>
            </div>
            <Link to="/contact" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <Button variant="primary">Apply Now</Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

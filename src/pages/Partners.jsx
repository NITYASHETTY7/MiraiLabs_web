import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Button } from '../index.js';
import { Link } from 'react-router-dom';
import { ArrowDown, ChevronDown, Network } from 'lucide-react';
import styles from './Partners.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
});

const techEcosystem = [
  { name: 'AWS', desc: 'Premier Consulting Partner' },
  { name: 'Azure', desc: 'Gold Cloud Platform Partner' },
  { name: 'Google Cloud', desc: 'Advanced Solutions Partner' },
  { name: 'OpenAI', desc: 'Enterprise Integration Partner' },
  { name: 'Anthropic', desc: 'LLM Solutions Partner' },
  { name: 'Docker', desc: 'Containerization Partner' },
  { name: 'Kubernetes', desc: 'Certified Service Provider' },
  { name: 'GitHub', desc: 'Advanced Security Partner' },
  { name: 'Terraform', desc: 'Infrastructure as Code Partner' }
];

const categories = [
  {
    title: 'Cloud Providers',
    content: 'We partner with the world\'s leading cloud platforms to build highly available, scalable, and secure infrastructures for our enterprise clients.',
    partners: ['AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean']
  },
  {
    title: 'Artificial Intelligence',
    content: 'Collaborating with pioneer AI research labs and API providers to integrate state-of-the-art generative models and predictive analytics into core business workflows.',
    partners: ['OpenAI', 'Anthropic', 'Hugging Face', 'Cohere']
  },
  {
    title: 'Security & Compliance',
    content: 'Ensuring enterprise-grade security at every layer of the stack through partnerships with top-tier cybersecurity and identity management platforms.',
    partners: ['Okta', 'Auth0', 'CrowdStrike', 'Palo Alto Networks']
  },
  {
    title: 'DevOps & CI/CD',
    content: 'Automating deployment pipelines and infrastructure provisioning to accelerate time-to-market while maintaining rigorous engineering standards.',
    partners: ['GitHub', 'GitLab', 'HashiCorp', 'CircleCI']
  },
  {
    title: 'Data & Analytics',
    content: 'Harnessing the power of distributed data with leading data warehousing, streaming, and visualization partners to unlock actionable insights.',
    partners: ['Snowflake', 'Databricks', 'Confluent', 'Tableau']
  },
  {
    title: 'Observability',
    content: 'Deep integration with industry-leading monitoring tools to provide real-time visibility into system health, performance, and user experiences.',
    partners: ['Datadog', 'New Relic', 'Splunk', 'Grafana Labs']
  }
];

const showcaseSteps = [
  'Enterprise Applications',
  'Mirai Platform',
  'Cloud Services',
  'AI Models',
  'Business Outcomes'
];

export function Partners() {
  const [expandedCat, setExpandedCat] = useState(null);

  const toggleCategory = (idx) => {
    setExpandedCat(expandedCat === idx ? null : idx);
  };

  return (
    <div style={{ background: 'var(--color-bg-primary)' }}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Container size="xl">
          <div className={styles.heroGrid}>
            <motion.div {...fadeUp()}>
              <span className={styles.heroBadge}>Partner Ecosystem</span>
              <h1 className={styles.heroTitle}>Building Together<br />With Industry Leaders</h1>
              <p className={styles.heroSubtitle}>
                Our extensive network of technology partnerships enables us to architect and deliver best-in-class, future-proof solutions for global enterprises.
              </p>
            </motion.div>

            <div className={styles.heroVisual}>
              <div className={styles.heroGlow} />
              <motion.div className={styles.heroImageCard} animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Tech Ecosystem" />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── TECH ECOSYSTEM ── */}
      <section className={styles.section}>
        <Container size="xl">
          <motion.div {...fadeUp()} style={{ textAlign: 'center' }}>
            <span className={styles.sectionLabel}>Network</span>
            <h2 className={styles.sectionTitle}>Technology Ecosystem</h2>
          </motion.div>
          
          <div className={styles.ecosystemGrid}>
            {techEcosystem.map((tech, i) => (
              <motion.div key={i} className={styles.ecoNode} {...fadeUp(i * 0.05)}>
                <Network size={18} className={styles.ecoIcon} style={{ color: 'var(--color-brand-primary)' }}/>
                <span className={styles.ecoName}>{tech.name}</span>
                <div className={styles.ecoTooltip}>{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PARTNERSHIP CATEGORIES ── */}
      <section className={styles.section} style={{ background: 'var(--color-bg-secondary)' }}>
        <Container size="xl">
          <motion.div {...fadeUp()}>
            <span className={styles.sectionLabel}>Domains</span>
            <h2 className={styles.sectionTitle}>Partnership Categories</h2>
          </motion.div>

          <div className={styles.categoriesGrid}>
            {categories.map((cat, i) => (
              <motion.div key={i} className={`${styles.catCard} ${expandedCat === i ? styles.expanded : ''}`} {...fadeUp(i * 0.1)}>
                <div className={styles.catHeader} onClick={() => toggleCategory(i)}>
                  <div className={styles.catTitle}>{cat.title}</div>
                  <ChevronDown className={styles.catIcon} size={20} />
                </div>
                <AnimatePresence>
                  {expandedCat === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className={styles.catContent}>
                        <p>{cat.content}</p>
                        <div className={styles.catPartners}>
                          {cat.partners.map((p, idx) => (
                            <span key={idx} className={styles.catPartnerBadge}>{p}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHY WE PARTNER ── */}
      <section className={styles.section}>
        <Container size="xl">
          <motion.div {...fadeUp()}>
            <span className={styles.sectionLabel}>The Mirai Advantage</span>
            <h2 className={styles.sectionTitle}>Why We Partner.</h2>
          </motion.div>

          <div className={styles.whySplit}>
            <motion.div className={styles.whyContent} {...fadeUp(0.1)}>
              <p>
                At Mirai Labs, we believe that delivering robust, scalable, and enterprise-ready software requires combining our engineering excellence with the best foundational technologies available.
              </p>
              <p>
                Our strategic partnerships allow us to leverage cutting-edge tools, ensuring that our clients benefit from the highest standards of security, performance, and innovation. We don't just use tools—we build deep relationships with the teams behind them to unlock their full potential.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" alt="Partnership Advantage" className={styles.whyImage} />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── INTEGRATION SHOWCASE ── */}
      <section className={styles.section} style={{ background: 'var(--color-bg-secondary)' }}>
        <Container size="xl">
          <motion.div {...fadeUp()} style={{ textAlign: 'center' }}>
            <span className={styles.sectionLabel}>Architecture</span>
            <h2 className={styles.sectionTitle}>Integration Showcase</h2>
          </motion.div>

          <div className={styles.showcaseDiagram}>
            {showcaseSteps.map((step, i, arr) => (
              <React.Fragment key={i}>
                <motion.div className={styles.showcaseBlock} {...fadeUp(i * 0.1)}>
                  {step}
                </motion.div>
                {i < arr.length - 1 && (
                  <motion.div {...fadeUp(i * 0.1 + 0.05)}>
                    <ArrowDown className={styles.showcaseArrow} size={24} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className={styles.section} style={{ borderBottom: 'none' }}>
        <Container size="xl">
          <motion.div className={styles.ctaBanner} {...fadeUp()}>
            <div>
              <h2 className={styles.ctaTitle}>Interested in Partnering With Mirai Labs?</h2>
              <p className={styles.ctaDesc}>Let's collaborate to build next-generation enterprise solutions.</p>
            </div>
            <Link to="/contact" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <Button variant="primary">Contact Partnership Team</Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

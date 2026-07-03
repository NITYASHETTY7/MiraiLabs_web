import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Button } from '../index.js';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, DollarSign, Settings, ShoppingBag, Truck, BookOpen, Zap } from 'lucide-react';
import styles from './Industries.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
});

const industriesData = {
  'Healthcare': {
    icon: <Activity size={20} />,
    title: 'Healthcare',
    overview: 'Modernizing healthcare infrastructure with AI to improve patient outcomes and operational efficiency.',
    challenges: [
      { from: 'Fragmented Patient Data', to: 'Unified Health Records' },
      { from: 'Manual Diagnostics', to: 'AI-Assisted Imaging' },
      { from: 'Legacy Compliance Systems', to: 'Automated HIPAA Cloud' }
    ],
    solutions: 'Our AI and cloud solutions provide seamless data integration, intelligent diagnostic tools, and scalable telemedicine platforms.',
    outcomes: 'Reduced diagnostic times by 40% and improved patient data accessibility across network hospitals.',
    tech: ['AWS HealthLake', 'Azure AI', 'React', 'Python', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    caseStudy: {
      industry: 'Healthcare',
      title: 'Global Health Network Modernization',
      impact: 'Migrated 5M+ patient records to a secure, unified cloud platform with 99.99% uptime.',
      tech: 'AWS, Kubernetes, Python',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'
    }
  },
  'FinTech': {
    icon: <DollarSign size={20} />,
    title: 'FinTech',
    overview: 'Building secure, high-performance financial systems that scale securely.',
    challenges: [
      { from: 'Batch Processing', to: 'Real-Time Analytics' },
      { from: 'Rule-based Fraud Detection', to: 'AI Fraud Prevention' },
      { from: 'Monolithic Architecture', to: 'Microservices Cloud' }
    ],
    solutions: 'We deliver ultra-low latency trading platforms, advanced AI fraud detection, and scalable cloud-native architectures.',
    outcomes: 'Decreased fraud false-positives by 60% and enabled 10x transaction throughput.',
    tech: ['AWS', 'Kafka', 'Python', 'TensorFlow', 'React'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    caseStudy: {
      industry: 'FinTech',
      title: 'Next-Gen Trading Infrastructure',
      impact: 'Built a real-time analytics engine processing 100k+ transactions per second.',
      tech: 'AWS, Kafka, React',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80'
    }
  },
  'Manufacturing': {
    icon: <Settings size={20} />,
    title: 'Manufacturing',
    overview: 'Driving Industry 4.0 with predictive maintenance and IoT integration.',
    challenges: [
      { from: 'Reactive Maintenance', to: 'Predictive Maintenance' },
      { from: 'Manual Quality Control', to: 'Computer Vision QA' },
      { from: 'Data Silos', to: 'Unified IoT Dashboard' }
    ],
    solutions: 'Deploying edge AI models for real-time defect detection and optimizing supply chains with predictive cloud analytics.',
    outcomes: 'Reduced equipment downtime by 35% and improved quality yield rates by 15%.',
    tech: ['Azure IoT', 'OpenAI', 'Python', 'React', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
    caseStudy: {
      industry: 'Manufacturing',
      title: 'Smart Factory Automation',
      impact: 'Implemented a predictive maintenance system saving $2M annually in downtime costs.',
      tech: 'Azure, Python, Terraform',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
    }
  },
  'Retail': {
    icon: <ShoppingBag size={20} />,
    title: 'Retail',
    overview: 'Creating personalized omnichannel experiences with scalable cloud backends.',
    challenges: [
      { from: 'Generic Recommendations', to: 'Hyper-Personalized AI' },
      { from: 'Static Pricing', to: 'Dynamic Optimization' },
      { from: 'Fragmented Channels', to: 'Omnichannel Commerce' }
    ],
    solutions: 'Leveraging generative AI for dynamic product recommendations and building scalable headless commerce architectures.',
    outcomes: 'Increased average order value by 22% and enhanced customer retention.',
    tech: ['AWS', 'React', 'Node.js', 'Bedrock', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    caseStudy: {
      industry: 'Retail',
      title: 'AI-Powered E-Commerce Platform',
      impact: 'Delivered a headless commerce solution handling 500% traffic spikes during holiday sales.',
      tech: 'AWS, React, Kubernetes',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    }
  },
  'Supply Chain': {
    icon: <Truck size={20} />,
    title: 'Supply Chain',
    overview: 'Optimizing logistics and inventory management with AI and real-time tracking.',
    challenges: [
      { from: 'Blind Spots', to: 'End-to-End Visibility' },
      { from: 'Manual Forecasting', to: 'AI Demand Prediction' },
      { from: 'Inefficient Routing', to: 'Dynamic Route Optimization' }
    ],
    solutions: 'Building resilient supply chain platforms using advanced machine learning for forecasting and real-time data streaming.',
    outcomes: 'Cut logistics costs by 18% and improved delivery time accuracy by 30%.',
    tech: ['Google Cloud', 'Python', 'React', 'Terraform', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=800&q=80',
    caseStudy: {
      industry: 'Supply Chain',
      title: 'Global Logistics Optimization',
      impact: 'Developed an AI demand forecasting model that reduced excess inventory by 25%.',
      tech: 'Google Cloud, Python, Terraform',
      image: 'https://images.unsplash.com/photo-1504645055319-417e20ac8f43?w=800&q=80'
    }
  },
  'Education': {
    icon: <BookOpen size={20} />,
    title: 'Education',
    overview: 'Transforming learning experiences with scalable EdTech platforms.',
    challenges: [
      { from: 'One-size-fits-all', to: 'Adaptive Learning Paths' },
      { from: 'On-Premise Legacy', to: 'Scalable Cloud LMS' },
      { from: 'Manual Grading', to: 'AI-Assisted Assessment' }
    ],
    solutions: 'Developing interactive, AI-driven learning management systems (LMS) that adapt to individual student needs.',
    outcomes: 'Boosted student engagement by 40% and enabled platform scaling to 1M+ active users.',
    tech: ['AWS', 'React', 'Python', 'Bedrock', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    caseStudy: {
      industry: 'Education',
      title: 'Next-Gen Learning Management',
      impact: 'Scaled a personalized learning platform to support over 1 million concurrent students globally.',
      tech: 'AWS, React, Python',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80'
    }
  },
  'Energy': {
    icon: <Zap size={20} />,
    title: 'Energy',
    overview: 'Driving sustainability and efficiency through smart grid technologies.',
    challenges: [
      { from: 'Unpredictable Loads', to: 'AI Load Forecasting' },
      { from: 'Legacy Grids', to: 'Smart Grid Integration' },
      { from: 'Manual Inspections', to: 'Drone/AI Analysis' }
    ],
    solutions: 'Implementing cloud-based analytics for renewable energy forecasting and automated infrastructure monitoring.',
    outcomes: 'Optimized energy distribution efficiency by 12% and reduced inspection costs.',
    tech: ['Azure', 'Python', 'TensorFlow', 'React', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    caseStudy: {
      industry: 'Energy',
      title: 'Renewable Energy Forecasting',
      impact: 'Built a predictive model that improved solar output forecasting accuracy by 20%.',
      tech: 'Azure, Python, TensorFlow',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
    }
  }
};

const industryKeys = Object.keys(industriesData);

export function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(industryKeys[0]);

  const currentData = industriesData[activeIndustry];

  return (
    <div style={{ background: 'var(--color-bg-primary)' }}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Container size="xl">
          <div className={styles.heroGrid}>
            <motion.div {...fadeUp()}>
              <span className={styles.heroBadge}>Industries</span>
              <h1 className={styles.heroTitle}>AI & Cloud Solutions<br />Built For Every Industry</h1>
              <p className={styles.heroSubtitle}>
                We partner with forward-thinking enterprises across diverse sectors to architect robust, scalable, and intelligent systems tailored to unique industry challenges.
              </p>
              <div className={styles.heroCTA}>
                <Button variant="primary">Talk to Our Experts</Button>
              </div>
            </motion.div>

            <div className={styles.heroVisual}>
              <div className={styles.heroGlow} />
              <motion.div className={styles.heroImageCard} animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}>
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" alt="Enterprise Solutions" />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MAIN CONTENT (Dynamic based on selected industry) ── */}
      <section className={styles.section}>
        <Container size="xl">
          {/* Industry Navigator */}
          <div className={styles.navigatorContainer}>
            {industryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveIndustry(key)}
                className={`${styles.navButton} ${activeIndustry === key ? styles.active : ''}`}
              >
                {key}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Industry Spotlight */}
              <div className={styles.spotlightGrid}>
                <img src={currentData.image} alt={currentData.title} className={styles.spotlightImage} />
                <div className={styles.spotlightContent}>
                  <div className={styles.spotlightBlock}>
                    <span className={styles.sectionLabel}>{currentData.title} Overview</span>
                    <h2 className={styles.sectionTitle}>Transforming {currentData.title}</h2>
                    <p>{currentData.overview}</p>
                  </div>
                  <div className={styles.spotlightBlock}>
                    <h3>Mirai Solutions</h3>
                    <p>{currentData.solutions}</p>
                  </div>
                  <div className={styles.spotlightBlock}>
                    <h3>Business Outcomes</h3>
                    <p>{currentData.outcomes}</p>
                  </div>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div style={{ marginTop: '80px' }}>
                <span className={styles.sectionLabel}>Challenges & Solutions</span>
                <h2 className={styles.sectionTitle}>Modernizing Operations</h2>
                <div className={styles.challengesGrid}>
                  {currentData.challenges.map((c, i) => (
                    <div key={i} className={styles.challengeRow}>
                      <div className={styles.challengeBox}>{c.from}</div>
                      <ArrowRight size={20} className={styles.arrowIcon} />
                      <div className={styles.solutionBox}>{c.to}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div style={{ marginTop: '80px' }}>
                <span className={styles.sectionLabel}>Tech Stack</span>
                <h2 className={styles.sectionTitle}>Technologies Used</h2>
                <div className={styles.techGrid}>
                  {currentData.tech.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Featured Case Study */}
              <div style={{ marginTop: '80px' }}>
                <span className={styles.sectionLabel}>Featured Case Study</span>
                <h2 className={styles.sectionTitle}>Real-World Impact</h2>
                <div className={styles.caseStudyCard}>
                  <img src={currentData.caseStudy.image} alt="Case Study" className={styles.caseStudyImage} />
                  <div className={styles.caseStudyContent}>
                    <div className={styles.csIndustry}>{currentData.caseStudy.industry}</div>
                    <h3 className={styles.csTitle}>{currentData.caseStudy.title}</h3>
                    <p className={styles.csImpact}>{currentData.caseStudy.impact}</p>
                    <div className={styles.csTech}><strong>Technologies:</strong> {currentData.caseStudy.tech}</div>
                    <Button variant="outline" style={{ alignSelf: 'flex-start' }}>Read Case Study</Button>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className={styles.section} style={{ borderBottom: 'none' }}>
        <Container size="xl">
          <motion.div className={styles.ctaBanner} {...fadeUp()}>
            <div>
              <h2 className={styles.ctaTitle}>Let's Transform Your Industry</h2>
              <p className={styles.ctaDesc}>Discover how our AI and cloud engineering can accelerate your specific business goals.</p>
            </div>
            <Link to="/contact" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <Button variant="primary">Talk to Our Experts</Button>
            </Link>
          </motion.div>
        </Container>
      </section>

    </div>
  );
}

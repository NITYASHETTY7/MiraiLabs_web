import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, Button } from '../index.js';
import styles from './CaseStudies.module.css';

const caseStudies = [
  {
    id: "healthcare-ai",
    industryId: "healthcare",
    industryName: "Healthcare",
    title: "AI-Powered Patient Care",
    challenge: "Managing massive patient data streams securely while enabling real-time clinical decisions was straining legacy infrastructure.",
    solution: "A highly secure, compliant AWS data lake integrated with custom AI models to process and predict patient outcomes in real-time.",
    impact: [
      { label: "Processing Time", value: "-42%" },
      { label: "Data Accuracy", value: "99.9%" },
      { label: "Annual Savings", value: "$2.4M" }
    ],
    tech: ["AWS", "Machine Learning", "HIPAA Compliance", "Python", "React"],
    solutions: ["Data", "AI", "Cloud Strategy"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&q=80"
  },
  {
    id: "fintech-agent",
    industryId: "fintech",
    industryName: "FinTech",
    title: "AI Coding Assistant",
    challenge: "Engineering onboarding and feature delivery were slowed by complex legacy codebases and lack of unified documentation.",
    solution: "Deployed a secure, VPC-hosted LLM coding assistant trained on internal repositories to provide context-aware suggestions.",
    impact: [
      { label: "Onboarding Time", value: "-50%" },
      { label: "Code Quality", value: "+30%" },
      { label: "Dev Productivity", value: "+65%" }
    ],
    tech: ["LLMs", "Vector DB", "Azure", "Kubernetes", "TypeScript"],
    solutions: ["AI", "Modernization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80"
  },
  {
    id: "manufacturing-vision",
    industryId: "manufacturing",
    industryName: "Manufacturing",
    title: "Vision AI Quality Control",
    challenge: "Manual inspection of high-speed assembly lines resulted in inconsistent quality and significant product waste.",
    solution: "Implemented edge-deployed Vision AI models capable of identifying microscopic defects in milliseconds without cloud latency.",
    impact: [
      { label: "Defect Detection", value: "99.99%" },
      { label: "Waste Reduction", value: "-75%" },
      { label: "ROI", value: "6 Months" }
    ],
    tech: ["Computer Vision", "Edge Computing", "OpenAI", "IoT"],
    solutions: ["AI", "Cloud Strategy"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=80"
  },
  {
    id: "retail-forecast",
    industryId: "retail",
    industryName: "Retail",
    title: "Demand Forecasting",
    challenge: "Unpredictable consumer behavior led to frequent stockouts and overstock scenarios across global warehouse locations.",
    solution: "A modern data warehouse feeding predictive AI models that continuously analyze market signals to optimize inventory levels.",
    impact: [
      { label: "Stockouts", value: "-80%" },
      { label: "Inventory Cost", value: "-30%" },
      { label: "Sales Increase", value: "+12%" }
    ],
    tech: ["Snowflake", "Predictive AI", "Terraform", "Python"],
    solutions: ["Data", "Cloud Strategy"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80"
  },
  {
    id: "supply-digital-twin",
    industryId: "supply-chain",
    industryName: "Supply Chain",
    title: "Global Logistics Digital Twin",
    challenge: "A lack of real-time visibility across global supply networks made predicting and reacting to disruptions nearly impossible.",
    solution: "Built a fully interactive digital twin of the supply chain, processing IoT telemetry and external APIs to simulate disruption scenarios.",
    impact: [
      { label: "Visibility", value: "100%" },
      { label: "Reaction Time", value: "Real-time" },
      { label: "Cost Savings", value: "$5.1M" }
    ],
    tech: ["Digital Twin", "Azure IoT", "React", "Node.js"],
    solutions: ["Modernization", "Data"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7a?w=1000&q=80"
  }
];

export const CaseStudies = () => {
  const [activeStudyIdx, setActiveStudyIdx] = useState(0);

  const activeStudy = caseStudies[activeStudyIdx];

  return (
    <main className={styles.pageWrapper}>
      
      {/* 1. Compact Hero */}
      <section className={styles.heroSection}>
        <Container size="xl">
          <div className={styles.heroLayout}>
            <div>
              <span className={styles.heroBadge}>CASE STUDIES</span>
              <h1 className={styles.heroTitle}>
                Real Challenges.<br />
                <span>Measurable Impact.</span>
              </h1>
              <p className={styles.heroDesc}>
                We partner with leading enterprises to solve complex engineering problems and deliver outcomes that drive the bottom line.
              </p>
            </div>
            
            <div className={styles.heroStats}>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatValue}>50+</span>
                <span className={styles.heroStatLabel}>Projects Delivered</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatValue}>18+</span>
                <span className={styles.heroStatLabel}>Industries Served</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatValue}>98%</span>
                <span className={styles.heroStatLabel}>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 & 4. Featured Enterprise Project & Navigator */}
      <section className={styles.featuredSection}>
        <Container size="xl">
          <div className={styles.featuredLayout}>
            
            {/* LEFT: Project Display */}
            <div className={styles.projectDisplayWrapper}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStudy.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className={styles.projectDisplay}
                >
                  <div className={styles.projectImage}>
                    <img src={activeStudy.image} alt={activeStudy.title} />
                  </div>
                  
                  <div className={styles.projectContent}>
                    <div className={styles.projectHeader}>
                      <div className={styles.projectIndustry}>{activeStudy.industryName}</div>
                      <h2 className={styles.projectTitle}>{activeStudy.title}</h2>
                    </div>

                    <div className={styles.projectSplit}>
                      <div className={styles.projectBlock}>
                        <h4>The Challenge</h4>
                        <p>{activeStudy.challenge}</p>
                      </div>
                      <div className={styles.projectBlock}>
                        <h4>The Solution</h4>
                        <p>{activeStudy.solution}</p>
                      </div>
                    </div>

                    {/* 5. Business Impact */}
                    <div className={styles.projectMetrics}>
                      {activeStudy.impact.map((imp, idx) => (
                        <div key={idx} className={styles.metricCard}>
                          <span className={styles.metricVal}>{imp.value}</span>
                          <span className={styles.metricLabel}>{imp.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* 6. Technology Stack */}
                    <div className={styles.projectTech}>
                      <h4>Technologies Used</h4>
                      <div className={styles.techTags}>
                        {activeStudy.tech.map(t => <span key={t} className={styles.techBadge}>{t}</span>)}
                      </div>
                    </div>

                    <div className={styles.projectFooter}>
                      {/* 7. Related Solutions */}
                      <div className={styles.relatedSolutions}>
                        <span>Related Solutions:</span>
                        {activeStudy.solutions.map(sol => (
                          <Link key={sol} to="/solutions" className={styles.solutionLink}>{sol}</Link>
                        ))}
                      </div>

                      <Link to={`/case-studies/${activeStudy.id}`} className={styles.readFullBtn}>
                        View Full Case Study <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT: Case Study Navigator */}
            <div className={styles.navigatorWrapper}>
              <div className={styles.navigatorList}>
                {caseStudies.map((study, idx) => (
                  <button 
                    key={study.id} 
                    className={`${styles.navItem} ${idx === activeStudyIdx ? styles.active : ''}`}
                    onClick={() => setActiveStudyIdx(idx)}
                  >
                    <span className={styles.navItemNum}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.navItemIndustry}>{study.industryName}</span>
                    <span className={styles.navItemTitle}>{study.title}</span>
                  </button>
                ))}
              </div>
            </div>
            
          </div>
        </Container>
      </section>

      {/* 8. Call To Action */}
      <section className={styles.ctaSection}>
        <Container size="md">
          <h2 className={styles.ctaTitle}>Have a challenge to solve?</h2>
          <p className={styles.ctaDesc}>Let's build something impactful together.</p>
          <div className={styles.ctaButtons}>
            <Link to="/contact">
              <Button variant="primary" size="lg">Talk to Our Experts</Button>
            </Link>
            <Link to="/solutions">
              <Button variant="secondary" size="lg">Explore Solutions</Button>
            </Link>
          </div>
        </Container>
      </section>

    </main>
  );
};

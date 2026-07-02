import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../index.js';
import { Link, useParams } from 'react-router-dom';
import { Shield, Cloud, Zap, Database, CheckCircle, ChevronRight, BarChart, Server, Lock, Cpu, Globe, ArrowRight, Target, Trophy, Code } from 'lucide-react';
import styles from './Pages.module.css';

const HealthcareCaseStudy = () => {
  return (
    <div className={styles.pageWrapperDark}>
      {/* 1. Hero Section */}
      <section className={styles.csdHero}>
        <Container size="lg">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.csdHeroInner}
          >
            <div className={styles.csdHeroMeta}>
              <span className={styles.csdTag}>Healthcare</span>
              <span className={styles.csdMetaSeparator}>•</span>
              <span className={styles.csdMetaText}>Enterprise Client</span>
              <span className={styles.csdMetaSeparator}>•</span>
              <span className={styles.csdMetaText}>6 Months Duration</span>
            </div>
            
            <h1 className={styles.csdHeroTitle}>
              Enhancing Healthcare Personalization with AWS AI
            </h1>
            
            <div className={styles.csdHeroServices}>
              <span className={styles.csdServiceBadge}><Cloud size={16} /> Cloud Infrastructure</span>
              <span className={styles.csdServiceBadge}><Cpu size={16} /> Predictive AI</span>
              <span className={styles.csdServiceBadge}><Database size={16} /> Data Lake</span>
            </div>
            
            <div className={styles.csdHeroImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" 
                alt="Healthcare AI Implementation" 
                className={styles.csdHeroImage}
              />
              <div className={styles.csdHeroImageOverlay}></div>
            </div>
          </motion.div>
        </Container>
      </section>



      {/* 3. Business Challenge */}
      <section className={styles.csdChallenge}>
        <Container size="md">
          <h2 className={styles.csdSectionTitleCenter}>The Business Challenge</h2>
          
          <div className={styles.csdTimeline}>
            <div className={styles.csdTimelineItem}>
              <div className={styles.csdTimelineDot}></div>
              <div className={styles.csdTimelineContent}>
                <h4>Data Silos</h4>
                <p>The existing patient management system struggled to provide tailored care recommendations based on individual health profiles.</p>
              </div>
            </div>
            <div className={styles.csdTimelineItem}>
              <div className={styles.csdTimelineDot}></div>
              <div className={styles.csdTimelineContent}>
                <h4>Provider Overload</h4>
                <p>Healthcare providers were overwhelmed with generic data, making it difficult to identify high-priority interventions.</p>
              </div>
            </div>
            <div className={styles.csdTimelineItem}>
              <div className={styles.csdTimelineDot}></div>
              <div className={styles.csdTimelineContent}>
                <h4>Low Engagement</h4>
                <p>The patient portal offered the same general health information to all users, resulting in low engagement rates.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Solution & Architecture */}
      <section className={styles.csdSolution}>
        <Container size="lg">
          <div className={styles.csdSolutionHeader}>
            <h2 className={styles.csdSectionTitle}>Enterprise Architecture Solution</h2>
            <p className={styles.csdLeadText}>
              A seamless integration of existing healthcare platform data with Amazon Personalize, ensuring compliance and scalability.
            </p>
          </div>
          
          <div className={styles.csdArchitectureWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" 
              alt="Architecture Diagram Visualization" 
              className={styles.csdArchitectureImg}
            />
            <div className={styles.csdArchitectureCaption}>
              Conceptual Flow: Patient Data → S3 Data Lake → AWS Glue (ETL) → Amazon Personalize → API Gateway → Patient Dashboard
            </div>
          </div>

          <div className={styles.csdSolutionDetails}>
            <p>
              The initial step involved a seamless integration of existing healthcare platform data with Amazon Personalize. This included historical patient interactions, the complete treatment catalog, and relevant patient demographic data. Amazon S3 served as a secure repository, while AWS Glue facilitated necessary data transformations to ensure compliance with healthcare regulations.
            </p>
            <p>
              Mirai Labs strategically selected and deployed several Amazon Personalize recipes. The "Recommended for you" recipe was implemented in patient dashboards, while the "Patients with similar conditions" recipe surfaced related treatment options for providers.
            </p>
          </div>
        </Container>
      </section>

      {/* 5. Technologies Used */}
      <section className={styles.csdTechStack}>
        <Container size="md">
          <h2 className={styles.csdSectionTitleCenter}>Technology Stack</h2>
          <div className={styles.csdTechGrid}>
            <div className={styles.csdTechCategory}>
              <h4>Cloud & Data</h4>
              <div className={styles.csdTechBadges}>
                <span className={styles.csdTechBadge}>Amazon S3</span>
                <span className={styles.csdTechBadge}>AWS Glue</span>
                <span className={styles.csdTechBadge}>Redshift</span>
              </div>
            </div>
            <div className={styles.csdTechCategory}>
              <h4>AI & Machine Learning</h4>
              <div className={styles.csdTechBadges}>
                <span className={styles.csdTechBadge}>Amazon Personalize</span>
                <span className={styles.csdTechBadge}>SageMaker</span>
              </div>
            </div>
            <div className={styles.csdTechCategory}>
              <h4>Security & Compliance</h4>
              <div className={styles.csdTechBadges}>
                <span className={styles.csdTechBadge}>AWS IAM</span>
                <span className={styles.csdTechBadge}>KMS</span>
                <span className={styles.csdTechBadge}>HIPAA Compliant Architecture</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Business Impact */}
      <section className={styles.csdImpact}>
        <Container size="lg">
          <h2 className={styles.csdSectionTitleCenter}>Measurable Business Impact</h2>
          <div className={styles.csdImpactGrid}>
            <div className={styles.csdImpactCard}>
              <div className={styles.csdImpactValue}>23%</div>
              <div className={styles.csdImpactLabel}>Increase in Patient Engagement</div>
            </div>
            <div className={styles.csdImpactCard}>
              <div className={styles.csdImpactValue}>17%</div>
              <div className={styles.csdImpactLabel}>Improvement in Medication Adherence</div>
            </div>
            <div className={styles.csdImpactCard}>
              <div className={styles.csdImpactValue}>15%</div>
              <div className={styles.csdImpactLabel}>More Preventive Appointments</div>
            </div>
            <div className={styles.csdImpactCard}>
              <div className={styles.csdImpactValue}>45m</div>
              <div className={styles.csdImpactLabel}>Daily Time Saved per Provider</div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Key Benefits */}
      <section className={styles.csdBenefits}>
        <Container size="lg">
          <div className={styles.csdBenefitsGrid}>
            <div className={styles.csdBenefitItem}>
              <CheckCircle className={styles.csdBenefitIcon} />
              <h4>Holistic Treatment</h4>
              <p>Deployment of "Frequently combined treatments" allowed for comprehensive care plans addressing multiple health aspects simultaneously.</p>
            </div>
            <div className={styles.csdBenefitItem}>
              <CheckCircle className={styles.csdBenefitIcon} />
              <h4>Evidence-Based Decisions</h4>
              <p>Matching treatments effective for similar cases allows providers to make faster, more confident clinical decisions.</p>
            </div>
            <div className={styles.csdBenefitItem}>
              <CheckCircle className={styles.csdBenefitIcon} />
              <h4>Scalable Personalization</h4>
              <p>The AI model continuously learns from new interactions, ensuring recommendations remain relevant as the patient population grows.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Client Testimonial */}
      <section className={styles.csdTestimonial}>
        <Container size="md">
          <div className={styles.csdTestimonialCard}>
            <div className={styles.csdTestimonialQuote}>
              "The AI-powered personalization capabilities have completely transformed how we approach patient care. We're now able to provide truly individualized health recommendations at scale, leading to better outcomes and more engaged patients."
            </div>
            <div className={styles.csdTestimonialAuthor}>
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80" alt="Chief Medical Officer" className={styles.csdTestimonialAvatar} />
              <div>
                <strong>Dr. Sarah Jenkins</strong>
                <span>Chief Medical Officer, National Healthcare</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Related & Next Steps */}
      <section className={styles.csdFooter}>
        <Container size="lg">
          <div className={styles.csdFooterFlex}>
            <div className={styles.csdFooterBox}>
              <h3>Explore Related Solutions</h3>
              <p>Discover how our Cloud Strategy and AI services can transform your operations.</p>
              <Link to="/solutions" className={styles.csdBtnPrimary}>
                View Solutions <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.csdFooterBox}>
              <h3>Ready to Transform?</h3>
              <p>Speak with our enterprise architects about your specific challenges.</p>
              <Link to="/contact" className={styles.csdBtnSecondary}>
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

const FintechCaseStudy = () => {
  return (
    <div className={styles.pageWrapperDark}>
      {/* 1. Hero Section */}
      <section className={styles.csdHero}>
        <Container size="lg">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.csdHeroInner}
          >
            <div className={styles.csdHeroMeta}>
              <span className={styles.csdTag}>Fintech</span>
              <span className={styles.csdMetaSeparator}>•</span>
              <span className={styles.csdMetaText}>Global Innovator</span>
              <span className={styles.csdMetaSeparator}>•</span>
              <span className={styles.csdMetaText}>3 Months Duration</span>
            </div>
            
            <h1 className={styles.csdHeroTitle}>
              Boosting Fintech Startup Productivity with AI Coding Assistant
            </h1>
            
            <div className={styles.csdHeroServices}>
              <span className={styles.csdServiceBadge}><Code size={16} /> AI Coding Assistant</span>
              <span className={styles.csdServiceBadge}><Cpu size={16} /> Generative AI</span>
            </div>
            
            <div className={styles.csdHeroImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" 
                alt="Fintech AI Implementation" 
                className={styles.csdHeroImage}
              />
              <div className={styles.csdHeroImageOverlay}></div>
            </div>
          </motion.div>
        </Container>
      </section>



      {/* 3. Business Challenge */}
      <section className={styles.csdChallenge}>
        <Container size="md">
          <h2 className={styles.csdSectionTitleCenter}>The Business Challenge</h2>
          
          <div className={styles.csdTimeline}>
            <div className={styles.csdTimelineItem}>
              <div className={styles.csdTimelineDot}></div>
              <div className={styles.csdTimelineContent}>
                <h4>Tight Deadlines</h4>
                <p>The development team experienced increasing pressure to meet tight deadlines for innovative financial applications.</p>
              </div>
            </div>
            <div className={styles.csdTimelineItem}>
              <div className={styles.csdTimelineDot}></div>
              <div className={styles.csdTimelineContent}>
                <h4>Routine Bottlenecks</h4>
                <p>Considerable time was being spent on routine coding tasks, intricate debugging processes, and extensive research.</p>
              </div>
            </div>
            <div className={styles.csdTimelineItem}>
              <div className={styles.csdTimelineDot}></div>
              <div className={styles.csdTimelineContent}>
                <h4>Security Imperatives</h4>
                <p>The critical need to maintain high code quality and robust security could not be compromised for speed.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Solution & Architecture */}
      <section className={styles.csdSolution}>
        <Container size="lg">
          <div className={styles.csdSolutionHeader}>
            <h2 className={styles.csdSectionTitle}>Intelligent Development Solution</h2>
            <p className={styles.csdLeadText}>
              A seamless integration of generative AI capabilities directly into the engineering team's existing environment.
            </p>
          </div>
          
          <div className={styles.csdArchitectureWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80" 
              alt="IDE Integration Visualization" 
              className={styles.csdArchitectureImg}
            />
            <div className={styles.csdArchitectureCaption}>
              Conceptual Flow: Developer IDE → AI Assistant Plugin → Secure LLM Inference → Context-Aware Suggestions → Version Control
            </div>
          </div>

          <div className={styles.csdSolutionDetails}>
            <p>
              Mirai Labs addressed this challenge by implementing their proprietary AI Coding Assistant, a tool designed to significantly streamline the software development lifecycle. The assistant was seamlessly integrated into their existing development environment, encompassing their Integrated Development Environment (IDE) and version control system.
            </p>
            <p>
              This integration allowed developers to access the assistant's capabilities directly within their familiar workflow. A particularly valuable aspect for a fintech startup was the coding assistant's ability to proactively identify potential security vulnerabilities early in the development process, contributing to more secure and resilient applications.
            </p>
          </div>
        </Container>
      </section>

      {/* 5. Technologies Used */}
      <section className={styles.csdTechStack}>
        <Container size="md">
          <h2 className={styles.csdSectionTitleCenter}>Technology Stack</h2>
          <div className={styles.csdTechGrid}>
            <div className={styles.csdTechCategory}>
              <h4>AI & Machine Learning</h4>
              <div className={styles.csdTechBadges}>
                <span className={styles.csdTechBadge}>Generative AI</span>
                <span className={styles.csdTechBadge}>Custom LLMs</span>
                <span className={styles.csdTechBadge}>Vector Database</span>
              </div>
            </div>
            <div className={styles.csdTechCategory}>
              <h4>Development Tools</h4>
              <div className={styles.csdTechBadges}>
                <span className={styles.csdTechBadge}>IDE Plugins</span>
                <span className={styles.csdTechBadge}>Version Control Hooks</span>
              </div>
            </div>
            <div className={styles.csdTechCategory}>
              <h4>Security & Compliance</h4>
              <div className={styles.csdTechBadges}>
                <span className={styles.csdTechBadge}>Automated Code Review</span>
                <span className={styles.csdTechBadge}>Vulnerability Detection</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Business Impact */}
      <section className={styles.csdImpact}>
        <Container size="lg">
          <h2 className={styles.csdSectionTitleCenter}>Measurable Business Impact</h2>
          <div className={styles.csdImpactGrid}>
            <div className={styles.csdImpactCard}>
              <div className={styles.csdImpactValue}>70%</div>
              <div className={styles.csdImpactLabel}>Increase in Productivity</div>
            </div>
            <div className={styles.csdImpactCard}>
              <div className={styles.csdImpactValue}>Faster</div>
              <div className={styles.csdImpactLabel}>Time-to-Market for Features</div>
            </div>
            <div className={styles.csdImpactCard}>
              <div className={styles.csdImpactValue}>High</div>
              <div className={styles.csdImpactLabel}>Code Quality Assurance</div>
            </div>
            <div className={styles.csdImpactCard}>
              <div className={styles.csdImpactValue}>Early</div>
              <div className={styles.csdImpactLabel}>Security Vulnerability Detection</div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Key Benefits */}
      <section className={styles.csdBenefits}>
        <Container size="lg">
          <div className={styles.csdBenefitsGrid}>
            <div className={styles.csdBenefitItem}>
              <CheckCircle className={styles.csdBenefitIcon} />
              <h4>Intelligent Code Completion</h4>
              <p>Accelerates coding with context-aware suggestions resulting in reduced typing time and fewer errors.</p>
            </div>
            <div className={styles.csdBenefitItem}>
              <CheckCircle className={styles.csdBenefitIcon} />
              <h4>Automated Code Reviews</h4>
              <p>Identifies potential code issues early in the development cycle, reducing debugging time.</p>
            </div>
            <div className={styles.csdBenefitItem}>
              <CheckCircle className={styles.csdBenefitIcon} />
              <h4>Instant Access to Documentation</h4>
              <p>Provides developers with quick access to relevant information, yielding faster problem-solving.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Client Testimonial */}
      <section className={styles.csdTestimonial}>
        <Container size="md">
          <div className={styles.csdTestimonialCard}>
            <div className={styles.csdTestimonialQuote}>
              "Mirai Labs' AI Coding Assistant has been a game-changer for our team. It's helped us accelerate development, improve code quality, and ultimately deliver better financial solutions to our customers, faster."
            </div>
            <div className={styles.csdTestimonialAuthor}>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80" alt="Raj, CTO" className={styles.csdTestimonialAvatar} />
              <div>
                <strong>Raj</strong>
                <span>CTO at Fintech Startup</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Related & Next Steps */}
      <section className={styles.csdFooter}>
        <Container size="lg">
          <div className={styles.csdFooterFlex}>
            <div className={styles.csdFooterBox}>
              <h3>Explore Related Solutions</h3>
              <p>Discover how our Generative AI and ML services can transform your operations.</p>
              <Link to="/solutions" className={styles.csdBtnPrimary}>
                View Solutions <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.csdFooterBox}>
              <h3>Ready to Transform?</h3>
              <p>Speak with our enterprise architects about your specific challenges.</p>
              <Link to="/contact" className={styles.csdBtnSecondary}>
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export const CaseStudyDetail = () => {
  const { id } = useParams();
  
  if (id === 'fintech') {
    return <FintechCaseStudy />;
  }
  
  return <HealthcareCaseStudy />;
};

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import styles from './SuccessStoriesCarousel.module.css';
import { Container } from '../../index.js';

const studies = [
  {
    id: "healthcare",
    client: "National Healthcare Provider",
    industry: "Healthcare",
    title: "Enhancing Healthcare Personalization with AWS AI",
    summary: "A robust cloud architecture balancing massive patient data requirements with multi-layered security protocols, enabling rapid deployment.",
    tech: ["AWS AI", "Data Lake", "Predictive Analytics"],
    impact: [
      { label: "Speed", value: "3x Faster" },
      { label: "Cost", value: "-45%" }
    ],
    placeholderLabel: "Healthcare Project Placeholder",
    placeholderColors: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)"
  },
  {
    id: "fintech",
    client: "Global FinTech Innovator",
    industry: "Fintech",
    title: "Boosting FinTech Productivity with AI Assistants",
    summary: "Implementing a custom generative AI coding assistant to accelerate development cycles and reduce onboarding time for engineering teams.",
    tech: ["GenAI", "Vector DB", "LLMs"],
    impact: [
      { label: "Productivity", value: "+70%" },
      { label: "Onboarding", value: "-50%" }
    ],
    placeholderLabel: "Fintech AI Placeholder",
    placeholderColors: "linear-gradient(135deg, #065f46 0%, #022c22 100%)"
  },
  {
    id: "supply-chain",
    client: "Enterprise Logistics",
    industry: "Supply Chain",
    title: "Optimizing Supply Chain Resilience with AI",
    summary: "A comprehensive cloud data lake and predictive AI solution to forecast disruptions and provide real-time visibility across global operations.",
    tech: ["Data Lake", "Predictive AI", "IoT"],
    impact: [
      { label: "Operations", value: "+52%" },
      { label: "Resilience", value: "Real-time" }
    ],
    placeholderLabel: "Logistics Platform Placeholder",
    placeholderColors: "linear-gradient(135deg, #7c2d12 0%, #450a0a 100%)"
  },
  {
    id: "healthcare-cloud",
    client: "Healthcare Provider",
    industry: "Cloud Modernization",
    title: "Securely Modernizing a Healthcare Platform on Cloud",
    summary: "A secure cloud modernization strategy to ensure HIPAA compliance while increasing system performance and reliability.",
    tech: ["Cloud", "Security", "Compliance"],
    impact: [
      { label: "Uptime", value: "99.99%" },
      { label: "Compliance", value: "100%" }
    ],
    placeholderLabel: "Cloud Migration Placeholder",
    placeholderColors: "linear-gradient(135deg, #4c1d95 0%, #2e1065 100%)"
  },
  {
    id: "marketing-ai",
    client: "Global Marketing Agency",
    industry: "Marketing AI",
    title: "Automating Marketing Content Creation with Generative AI",
    summary: "Implemented a custom AI content engine to generate, personalize, and optimize marketing campaigns at scale.",
    tech: ["GenAI", "LLMs", "Cloud APIs"],
    impact: [
      { label: "Output", value: "5x" },
      { label: "Cost/Asset", value: "-60%" }
    ],
    placeholderLabel: "Marketing Automation Placeholder",
    placeholderColors: "linear-gradient(135deg, #be185d 0%, #831843 100%)"
  },
  {
    id: "finance-security",
    client: "Financial Institution",
    industry: "Cloud Security",
    title: "Strengthening Financial Institution Security with Cloud",
    summary: "A comprehensive security overhaul for a major financial institution using advanced cloud security frameworks and zero-trust.",
    tech: ["Zero Trust", "Cloud Security", "Detection"],
    impact: [
      { label: "Detection", value: "Real-time" },
      { label: "Incidents", value: "-85%" }
    ],
    placeholderLabel: "Security Architecture Placeholder",
    placeholderColors: "linear-gradient(135deg, #0f766e 0%, #042f2e 100%)"
  }
];

export const SuccessStoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % studies.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + studies.length) % studies.length);
  }, []);

  const goToSlide = (idx) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 10000);
  }, [nextSlide]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(timerRef.current);
      } else if (!isHovered) {
        startTimer();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isHovered, startTimer]);

  useEffect(() => {
    if (!isHovered) {
      startTimer();
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [currentIndex, isHovered, startTimer]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '10%' : '-10%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '10%' : '-10%',
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const currentStudy = studies[currentIndex];

  return (
    <section className={styles.section}>
      <Container size="xl">
        <div className={styles.splitLayout}>
          
          {/* Text Content Area */}
          <div className={styles.textContent}>
            <h2 className={styles.title}>Featured Customer Success Stories</h2>
            <p className={styles.description}>
              Explore how Mirai Labs helps organizations solve complex engineering challenges through AI, Cloud, and Modernization.
            </p>
            <div>
              <Link to="/case-studies" className={styles.ctaLink}>
                View All Case Studies <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Carousel Area */}
          <div 
            className={styles.carouselWrapper}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles.carouselSlide}
              >
                {/* Image Placeholder Background */}
                <motion.div 
                  className={styles.carouselSlideBg}
                  style={{ background: currentStudy.placeholderColors }}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 10, ease: 'linear' }}
                >
                  <span className={styles.carouselPlaceholderLabel}>{currentStudy.placeholderLabel}</span>
                </motion.div>

                {/* Dark Gradient Overlay for readability */}
                <div className={styles.carouselOverlay} />

                {/* Top Right Counter */}
                <div className={styles.carouselCounter}>
                  {String(currentIndex + 1).padStart(2, '0')} / {String(studies.length).padStart(2, '0')}
                </div>

                {/* Bottom Content */}
                <div className={styles.carouselContent}>
                  <div className={styles.carouselIndustryBadge}>
                    {currentStudy.industry}
                  </div>
                  <h3 className={styles.carouselTitle}>{currentStudy.title}</h3>
                  <p className={styles.carouselSummary}>{currentStudy.summary}</p>
                  
                  <div className={styles.carouselDetails}>
                    <div className={styles.carouselImpactGroup}>
                      {currentStudy.impact.map((imp, idx) => (
                        <div key={idx} className={styles.carouselImpactItem}>
                          <strong>{imp.value}</strong> <span>{imp.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={styles.carouselTechGroup}>
                      {currentStudy.tech.map((t, idx) => (
                        <span key={idx} className={styles.carouselTechBadge}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <Link to={`/case-studies/${currentStudy.id}`} className={styles.carouselReadBtn}>
                    Read Case Study <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className={styles.carouselControls}>
              <button 
                className={styles.carouselNavBtn} 
                onClick={prevSlide}
                aria-label="Previous Case Study"
              >
                <ArrowLeft size={20} />
              </button>
              
              <div className={styles.carouselDots}>
                {studies.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.carouselDot} ${idx === currentIndex ? styles.carouselDotActive : ''}`}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                className={styles.carouselNavBtn} 
                onClick={nextSlide}
                aria-label="Next Case Study"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, ArrowRight, Clock, BookOpen, Download, 
  Video, Calendar, Mail, FileText
} from 'lucide-react';
import styles from './Pages.module.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const CATEGORIES = ['All', 'Engineering', 'Architecture', 'AI & ML', 'Cloud', 'Security', 'Company'];

export function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className={styles.rsrcWrapper}>
      {/* Hero Section */}
      <section className={styles.rsrcHero}>
        <div className="container">
          <motion.div 
            className={styles.rsrcHeroContent}
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.h1 className={styles.rsrcHeroTitle} variants={fadeUpVariant}>
              The Knowledge <span className="text-gradient">Hub</span>
            </motion.h1>
            <motion.p className={styles.rsrcHeroDesc} variants={fadeUpVariant}>
              Deep dives, technical guides, and strategic insights for modern engineering teams.
            </motion.p>
            
            <motion.div className={styles.rsrcSearchBox} variants={fadeUpVariant}>
              <Search className={styles.rsrcSearchIcon} size={20} />
              <input type="text" placeholder="Search articles, guides, and whitepapers..." className={styles.rsrcSearchInput} />
            </motion.div>
            
            <motion.div className={styles.rsrcFilters} variants={fadeUpVariant}>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`${styles.rsrcFilterBtn} ${activeCategory === cat ? styles.rsrcFilterActive : ''}`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className={styles.rsrcSection}>
        <div className="container">
          <motion.div 
            className={styles.rsrcFeatured}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            <div className={styles.rsrcFeaturedVisual}>
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Featured Article" />
              <div className={styles.rsrcFeaturedTag}>Architecture</div>
            </div>
            <div className={styles.rsrcFeaturedBody}>
              <div className={styles.rsrcMeta}>
                <Clock size={16} /> <span>12 min read</span>
                <span className={styles.rsrcMetaDot}>•</span>
                <span>Oct 15, 2026</span>
              </div>
              <h2 className={styles.rsrcFeaturedTitle}>Building Resilient Microservices at Global Scale</h2>
              <p className={styles.rsrcFeaturedDesc}>
                Explore the architectural patterns and engineering practices we use to build highly available, fault-tolerant microservices architectures capable of handling billions of requests per day.
              </p>
              <a href="#read" className={styles.rsrcReadBtn}>
                Read Article <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className={`${styles.rsrcSection} ${styles.rsrcSectionAlt}`}>
        <div className="container">
          <motion.div 
            className={styles.rsrcSectionHeader}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            <h2>Latest Articles</h2>
            <p>Fresh insights from our engineering and research teams.</p>
          </motion.div>
          
          <motion.div 
            className={styles.rsrcGrid}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {[
              { title: "The Future of Edge AI", tag: "AI & ML", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", time: "8 min read" },
              { title: "Zero Trust Security Defaults", tag: "Security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", time: "6 min read" },
              { title: "Optimizing React Server Components", tag: "Engineering", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", time: "10 min read" }
            ].map((article, i) => (
              <motion.div key={i} className={styles.rsrcCard} variants={fadeUpVariant}>
                <div className={styles.rsrcCardImg}>
                  <img src={article.img} alt={article.title} />
                  <div className={styles.rsrcCardTag}>{article.tag}</div>
                </div>
                <div className={styles.rsrcCardBody}>
                  <h3 className={styles.rsrcCardTitle}>{article.title}</h3>
                  <div className={styles.rsrcMeta}>
                    <Clock size={14} /> <span>{article.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Whitepapers & Guides */}
      <section className={`${styles.rsrcSection} ${styles.rsrcSectionAlt}`}>
        <div className="container">
          <motion.div 
            className={styles.rsrcSplitLayout}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div className={styles.rsrcSplitCol} variants={fadeUpVariant}>
              <div className={styles.rsrcSplitHeader}>
                <FileText size={24} className={styles.rsrcSplitIcon} />
                <h2>Whitepapers</h2>
              </div>
              <div className={styles.rsrcDownloadList}>
                {[
                  { title: "State of Cloud Native 2026", size: "2.4 MB PDF" },
                  { title: "Enterprise AI Adoption Report", size: "3.1 MB PDF" },
                  { title: "Modern Threat Landscape", size: "1.8 MB PDF" }
                ].map((wp, i) => (
                  <div key={i} className={styles.rsrcDownloadItem}>
                    <div>
                      <h4 className={styles.rsrcDownloadTitle}>{wp.title}</h4>
                      <span className={styles.rsrcDownloadSize}>{wp.size}</span>
                    </div>
                    <button className={styles.rsrcDownloadBtn}><Download size={18} /></button>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div className={styles.rsrcSplitCol} variants={fadeUpVariant}>
              <div className={styles.rsrcSplitHeader}>
                <BookOpen size={24} className={styles.rsrcSplitIcon} />
                <h2>Technical Guides</h2>
              </div>
              <div className={styles.rsrcGuideList}>
                {[
                  { title: "Kubernetes Hardening Guide", type: "DevOps" },
                  { title: "Fine-Tuning LLMs for Production", type: "AI/ML" },
                  { title: "GraphQL Federation at Scale", type: "Architecture" }
                ].map((guide, i) => (
                  <div key={i} className={styles.rsrcGuideItem}>
                    <div className={styles.rsrcGuideBody}>
                      <span className={styles.rsrcGuideType}>{guide.type}</span>
                      <h4 className={styles.rsrcGuideTitle}>{guide.title}</h4>
                    </div>
                    <ArrowRight size={18} className={styles.rsrcGuideArrow} />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Webinars & Events */}
      <section className={styles.rsrcSection}>
        <div className="container">
          <motion.div 
            className={styles.rsrcSectionHeader}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            <h2>Webinars & Events</h2>
            <p>Join us live or watch on-demand sessions.</p>
          </motion.div>

          <motion.div 
            className={styles.rsrcEventTimeline}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {[
              { date: "Nov 12", title: "Mastering Distributed Tracing", type: "Upcoming Live Webinar", icon: Calendar },
              { date: "Oct 28", title: "Building RAG Pipelines", type: "On-Demand Recording", icon: Video },
              { date: "Sep 15", title: "MiraiLabs Engineering Summit", type: "Keynote Recording", icon: Video }
            ].map((ev, i) => (
              <motion.div key={i} className={styles.rsrcEventItem} variants={fadeUpVariant}>
                <div className={styles.rsrcEventDate}>{ev.date}</div>
                <div className={styles.rsrcEventContent}>
                  <span className={styles.rsrcEventType}><ev.icon size={14}/> {ev.type}</span>
                  <h3 className={styles.rsrcEventTitle}>{ev.title}</h3>
                </div>
                <button className={styles.rsrcEventBtn}>
                  {ev.type.includes('Upcoming') ? 'Register' : 'Watch Now'}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.rsrcSection}>
        <div className="container">
          <motion.div 
            className={styles.rsrcNewsletter}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            <div className={styles.rsrcNewsContent}>
              <h2>Subscribe to our Newsletter</h2>
              <p>Get the latest technical articles, guides, and engineering updates delivered directly to your inbox every two weeks.</p>
              <div className={styles.rsrcNewsForm}>
                <div className={styles.rsrcNewsInputWrap}>
                  <Mail className={styles.rsrcNewsIcon} size={20} />
                  <input type="email" placeholder="Enter your work email" className={styles.rsrcNewsInput} />
                </div>
                <button className={styles.rsrcNewsBtn}>Subscribe</button>
              </div>
            </div>
            <div className={styles.rsrcNewsVisual}>
              <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Newsletter" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

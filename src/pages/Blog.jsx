import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../index.js';
import { ArrowRight, Clock } from 'lucide-react';
import styles from './Blog.module.css';

const CATEGORIES = ['All', 'AI', 'Cloud', 'Security', 'Engineering', 'Architecture', 'Product'];

const FEATURED = {
  id: 1,
  category: 'Engineering',
  readTime: '8 min',
  date: 'Oct 15, 2026',
  title: 'The Evolution of Zero Trust Architecture in Modern Cloud Deployments',
  summary: 'How we rebuilt our core infrastructure to support globally distributed enterprise clients with absolute security guarantees — and what we learned.',
  author: 'Priya Sharma',
  img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80'
};

const ARTICLES = [
  { id: 2, category: 'AI', title: 'Scaling Generative Models for Enterprise Data Pipelines', author: 'Arjun Mehta', readTime: '6 min', date: 'Oct 10, 2026', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80' },
  { id: 3, category: 'Cloud', title: 'Optimizing Kubernetes Costs Across Multi-Cloud Environments', author: 'Sarah Jenkins', readTime: '10 min', date: 'Oct 02, 2026', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80' },
  { id: 4, category: 'Architecture', title: 'Event-Driven Microservices: Patterns and Pitfalls', author: 'David Chen', readTime: '12 min', date: 'Sep 28, 2026', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80' },
  { id: 5, category: 'Security', title: 'Designing Secure APIs in a Zero Trust World', author: 'Priya Sharma', readTime: '7 min', date: 'Sep 15, 2026', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80' },
  { id: 6, category: 'Product', title: 'Building AI-Native Products: Lessons from the Field', author: 'Rohan Gupta', readTime: '9 min', date: 'Sep 01, 2026', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80' },
  { id: 7, category: 'AI', title: 'RAG vs Fine-Tuning: What Enterprise Teams Get Wrong', author: 'Arjun Mehta', readTime: '11 min', date: 'Aug 20, 2026', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80' },
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = ARTICLES.filter(a =>
    activeCategory === 'All' || a.category === activeCategory
  );

  return (
    <div style={{ background: 'var(--color-bg-primary)' }}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container size="xl">
          <motion.div
            className={styles.heroInner}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <div className={styles.heroLabel}>Engineering Journal</div>
              <h1 className={styles.heroTitle}>Mirai Labs Blog</h1>
            </div>
            <p className={styles.heroSubtitle}>
              Thoughts on AI, cloud infrastructure, security, and enterprise software engineering.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container size="xl">
        {/* Category filters */}
        <div className={styles.catFilters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`${styles.catPill} ${activeCategory === cat ? styles.catPillActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured — only show when All or matching category */}
        {(activeCategory === 'All' || activeCategory === FEATURED.category) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Link to={`/blog/${FEATURED.id}`} className={styles.featured}>
              <div className={styles.featuredImgWrap}>
                <img src={FEATURED.img} alt={FEATURED.title} className={styles.featuredImg} />
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.featuredMeta}>
                  <span className={styles.featuredCat}>{FEATURED.category}</span>
                  <span>·</span>
                  <span>{FEATURED.readTime} read</span>
                  <span>·</span>
                  <span>{FEATURED.date}</span>
                </div>
                <h2 className={styles.featuredTitle}>{FEATURED.title}</h2>
                <p className={styles.featuredSummary}>{FEATURED.summary}</p>
                <div className={styles.featuredFooter}>
                  <span className={styles.authorLine}>{FEATURED.author}</span>
                  <span className={styles.readMore}>Read article <ArrowRight size={13} /></span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Article grid */}
        <div className={styles.gridHeader}>
          <span className={styles.gridLabel}>
            {activeCategory === 'All' ? 'All Articles' : activeCategory} — {filtered.length} posts
          </span>
        </div>

        <div className={styles.articleGrid}>
          {filtered.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link to={`/blog/${a.id}`} className={styles.articleCard}>
                <img src={a.img} alt={a.title} className={styles.cardThumb} />
                <div className={styles.cardMeta}>
                  <span className={styles.cardCat}>{a.category}</span>
                  <span>·</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <Clock size={10} /> {a.readTime}
                  </span>
                  <span>·</span>
                  <span>{a.date}</span>
                </div>
                <div className={styles.cardTitle}>{a.title}</div>
                <div className={styles.cardAuthor}>{a.author}</div>
              </Link>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: '48px', color: 'var(--color-text-tertiary)', fontSize: '0.9375rem', gridColumn: '1 / -1' }}>
              No articles in this category yet.
            </div>
          )}
        </div>

        {/* Newsletter strip */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterText}>
            <div className={styles.newsletterTitle}>Stay in the loop</div>
            <div className={styles.newsletterDesc}>New articles on AI, cloud, and engineering — delivered weekly.</div>
          </div>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="your@email.com" className={styles.newsletterInput} />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

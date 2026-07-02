import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Container, Button } from '../index.js';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Mail, Link as LinkIcon, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import styles from './Blog.module.css';

export function BlogPost() {
  const { id } = useParams();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div style={{ background: 'var(--color-bg-primary)', position: 'relative' }}>
      {/* Reading progress */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      <Container size="xl">

        {/* Post Hero */}
        <div className={styles.postHero}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600, marginBottom: '28px' }}>
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className={styles.postMeta}>
            <span className={styles.postCat}>Engineering</span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> 8 min read</span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> Oct 15, 2026</span>
          </div>

          <h1 className={styles.postTitle}>
            The Evolution of Zero Trust Architecture in Modern Cloud Deployments
          </h1>

          <div className={styles.postAuthorRow}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" alt="Author" className={styles.postAuthorImg} />
            <div style={{ textAlign: 'left' }}>
              <div className={styles.postAuthorName}>Priya Sharma</div>
              <div className={styles.postAuthorRole}>CTO at Mirai Labs</div>
            </div>
          </div>
        </div>

        {/* Cover */}
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
          alt="Cover"
          className={styles.postCover}
        />

        {/* Post layout: TOC + Body */}
        <div className={styles.postLayout}>

          {/* TOC */}
          <div className={styles.postTOC}>
            <div className={styles.tocTitle}>Contents</div>
            <ul className={styles.tocList}>
              <li className={styles.tocItem}>1. The Legacy Perimeter Model</li>
              <li className={styles.tocItem}>2. Enter Zero Trust</li>
              <li className={styles.tocItem}>3. Identity-Aware Proxies</li>
              <li className={styles.tocItem}>4. Microsegmentation in K8s</li>
              <li className={styles.tocItem}>5. Results & Telemetry</li>
            </ul>

            <div className={styles.tocTitle}>Share</div>
            <div style={{ display: 'flex', gap: '14px', color: 'var(--color-text-secondary)' }}>
              <Mail size={18} style={{ cursor: 'pointer' }} />
              <MessageCircle size={18} style={{ cursor: 'pointer' }} />
              <Share2 size={18} style={{ cursor: 'pointer' }} />
              <Bookmark size={18} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          {/* Body */}
          <article className={styles.postBody}>
            <p>
              As enterprise architectures move further into multi-cloud environments, the traditional castle-and-moat security model has become obsolete. At Mirai Labs, we recently undertook a major migration to a fully Zero Trust architecture across all our globally distributed workloads.
            </p>

            <h2>1. The Legacy Perimeter Model</h2>
            <p>
              Historically, securing a network meant building a strong perimeter. Once inside, users and services had broad access. With the rise of remote work and cloud-native services, that perimeter has dissolved. The assumption that internal traffic is implicitly trustworthy is a dangerous fallacy.
            </p>
            <p>
              Our initial architecture relied heavily on VPNs and private subnets. While effective for a localized workforce, it became a bottleneck as our team and client base expanded globally.
            </p>

            <h2>2. Enter Zero Trust</h2>
            <p>
              Zero Trust is built on a simple premise: never trust, always verify. Every request — whether originating from inside or outside the network — must be authenticated, authorized, and encrypted.
            </p>

            <h2>3. Identity-Aware Proxies</h2>
            <p>
              Instead of relying on network-level access, we shifted to identity-based access. By deploying Identity-Aware Proxies (IAP), we could enforce granular access controls based on user identity, device posture, and contextual signals.
            </p>
            <blockquote>
              "The shift to identity-aware proxies reduced our attack surface by 80% while simultaneously improving the developer experience."
            </blockquote>

            <h2>4. Microsegmentation in K8s</h2>
            <p>
              In our Kubernetes clusters, we implemented strict network policies to enforce microsegmentation. Pods communicate with other pods only when explicitly permitted. A service mesh handles mutual TLS (mTLS) for all service-to-service communication.
            </p>

            <h2>5. Results & Telemetry</h2>
            <p>
              The transition wasn't without challenges — primarily around observability. But the end result is a highly resilient architecture where lateral movement is nearly impossible. Our mean time to detect (MTTD) anomalies dropped by over 60%.
            </p>

            {/* Author bio */}
            <div className={styles.authorBio}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" alt="Author" className={styles.authorBioImg} />
              <div>
                <div className={styles.authorBioName}>Priya Sharma</div>
                <div className={styles.authorBioRole}>CTO at Mirai Labs</div>
                <p className={styles.authorBioText}>Passionate about distributed systems, cloud security, and open-source engineering.</p>
              </div>
            </div>

          </article>
        </div>

        {/* Newsletter CTA */}
        <div className={styles.ctaBanner}>
          <h3 className={styles.ctaTitle}>Join 10,000+ engineers</h3>
          <p className={styles.ctaDesc}>Get our latest technical articles every week.</p>
          <div className={styles.ctaInputRow}>
            <input type="email" placeholder="Email address" className={styles.ctaInput} />
            <Button variant="primary" style={{ flexShrink: 0 }}>Subscribe</Button>
          </div>
        </div>

        {/* Related Articles */}
        <div className={styles.relatedSection}>
          <h3 className={styles.relatedTitle}>Related Articles</h3>
          <div className={styles.relatedGrid}>
            <Link to="/blog/2" className={styles.relatedCard}>
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80" alt="AI" className={styles.relatedImg} />
              <div className={styles.relatedInfo}>
                <div className={styles.relatedCat}>AI</div>
                <div className={styles.relatedCardTitle}>Scaling Generative Models for Enterprise Data Pipelines</div>
              </div>
            </Link>
            <Link to="/blog/4" className={styles.relatedCard}>
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" alt="Architecture" className={styles.relatedImg} />
              <div className={styles.relatedInfo}>
                <div className={styles.relatedCat}>Architecture</div>
                <div className={styles.relatedCardTitle}>Event-Driven Microservices: Patterns and Pitfalls</div>
              </div>
            </Link>
          </div>
        </div>

      </Container>
    </div>
  );
}

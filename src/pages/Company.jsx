import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../index.js';
import { Link } from 'react-router-dom';
import { Lightbulb, ShieldCheck, ExternalLink } from 'lucide-react';
import pageStyles from './Pages.module.css';
import styles from './Company.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
});

export function Company() {
  const storyItems = [
    { year: '2024', title: 'Founded', text: 'Founded to democratize enterprise AI and cloud technologies for businesses worldwide.' },
    { year: '2025', title: 'Global Expansion', text: 'Expanded globally, onboarding 50+ enterprise clients across FinTech, Healthcare, and Manufacturing.' },
    { year: '2026', title: 'Product Innovation', text: 'Launched a proprietary generative AI suite tailored for enterprise workloads.' }
  ];

  const values = [
    { title: 'Innovation', desc: 'Pushing boundaries to discover novel solutions.' },
    { title: 'Ownership', desc: 'Taking full responsibility for our code and clients.' },
    { title: 'Engineering Excellence', desc: 'Writing clean, scalable, and secure systems.' },
    { title: 'Customer Success', desc: 'Our success is defined by our clients\' growth.' },
    { title: 'Continuous Learning', desc: 'Always curious, always improving.' },
    { title: 'Collaboration', desc: 'Great minds build better products together.' }
  ];

  const team = [
    { name: 'Arjun Mehta', role: 'CEO & Founder', bio: 'Former VP of Eng at TechCorp. 15 years in Cloud & AI.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
    { name: 'Priya Sharma', role: 'CTO', bio: 'Open-source contributor and AI systems architect.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
    { name: 'Rohan Gupta', role: 'VP Engineering', bio: 'Scaling distributed systems to millions of users.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
    { name: 'Sneha Patel', role: 'Head of Design', bio: 'Creating intuitive, premium user experiences.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' }
  ];

  const testimonials = [
    { quote: "Mirai Labs completely transformed our data infrastructure. Their engineering rigor is unmatched.", author: "Sarah Jenkins", role: "CTO, FinTech Innovators", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
    { quote: "Partnering with Mirai Labs was the best decision we made for our cloud migration journey.", author: "David Chen", role: "VP Engineering, HealthCorp", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
    { quote: "The AI solutions built by Mirai Labs increased our operational efficiency by over 40%.", author: "Emily Watson", role: "Director of Ops, Retail Giant", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" }
  ];

  const partners = ['GitHub', 'AWS', 'Microsoft', 'Google Cloud'];

  return (
    <div style={{ background: 'var(--color-bg-primary)' }}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Container size="xl">
          <div className={styles.heroGrid}>
            <motion.div {...fadeUp()}>
              <span className={styles.heroBadge}>About Mirai Labs</span>
              <h1 className={styles.heroTitle}>Building the Future,<br />Together.</h1>
              <p className={styles.heroSubtitle}>
                Mirai Labs is an engineering-led company delivering world-class generative AI and cloud solutions to enterprises worldwide.
              </p>
              <div className={styles.heroCTA}>
                <Button variant="primary">Our Story</Button>
                <Button variant="outline">Join Our Journey</Button>
              </div>
            </motion.div>

            <div className={styles.heroVisual}>
              <div className={styles.heroGlow} />
              <motion.div className={`${styles.collageCard} ${styles.cA}`} animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Team" />
              </motion.div>
              <motion.div className={`${styles.collageCard} ${styles.cB}`} animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 1 }}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" alt="Engineers" />
              </motion.div>
              <motion.div className={`${styles.collageCard} ${styles.cC}`} animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 2 }}>
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" alt="Cloud" />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── OUR STORY ── */}
      <section className={styles.section}>
        <Container size="xl">
          <div className={styles.storyGrid}>
            <motion.div className={styles.storyLeft} {...fadeUp()}>
              <span className={styles.sectionLabel}>Our Story</span>
              <h2 className={styles.sectionTitle}>From day one to global impact.</h2>
              <p className={styles.sectionDesc}>A timeline of key milestones that shaped who we are today.</p>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80"
                alt="Mirai Labs Office"
                className={styles.storyImg}
              />
            </motion.div>

            <div className={styles.timeline}>
              {storyItems.map((item, i) => (
                <motion.div key={i} className={styles.timelineEntry} {...fadeUp(i * 0.12)}>
                  <div className={styles.tDot} />
                  <div>
                    <div className={styles.tYear}>{item.year}</div>
                    <div className={styles.tTitle}>{item.title}</div>
                    <p className={styles.tText}>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className={styles.section} style={{ background: 'var(--color-bg-secondary)' }}>
        <Container size="xl">
          <motion.div {...fadeUp()} style={{ marginBottom: '32px' }}>
            <span className={styles.sectionLabel}>What Drives Us</span>
            <h2 className={styles.sectionTitle}>Vision & Mission</h2>
          </motion.div>
          <div className={styles.vmRow}>
            <motion.div className={styles.vmCard} {...fadeUp(0.05)}>
              <div className={styles.vmIcon}><Lightbulb size={20} /></div>
              <div className={styles.vmLabel}>Our Vision</div>
              <p className={styles.vmText}>Empowering businesses to unlock their true potential through artificial intelligence and modern cloud architectures.</p>
            </motion.div>
            <motion.div className={styles.vmCard} {...fadeUp(0.12)}>
              <div className={styles.vmIcon} style={{ background: 'rgba(139,92,246,0.08)', color: 'rgb(139,92,246)' }}><ShieldCheck size={20} /></div>
              <div className={styles.vmLabel}>Our Mission</div>
              <p className={styles.vmText}>Delivering cutting-edge software with engineering excellence. We build robust, scalable systems that solve real-world enterprise challenges.</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── OUR VALUES ── */}
      <section className={styles.section}>
        <Container size="xl">
          <motion.div {...fadeUp()} style={{ marginBottom: '32px' }}>
            <span className={styles.sectionLabel}>Our Values</span>
            <h2 className={styles.sectionTitle}>Principles we build on.</h2>
          </motion.div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <motion.div key={i} className={styles.valueCell} {...fadeUp(i * 0.07)}>
                <div className={styles.valueCellNum}>0{i + 1}</div>
                <div className={styles.valueCellTitle}>{v.title}</div>
                <p className={styles.valueCellDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── MEET THE TEAM ── */}
      <section className={styles.section} style={{ background: 'var(--color-bg-secondary)' }}>
        <Container size="xl">
          <motion.div {...fadeUp()} style={{ marginBottom: '32px' }}>
            <span className={styles.sectionLabel}>The People</span>
            <h2 className={styles.sectionTitle}>Meet the team.</h2>
          </motion.div>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <motion.div key={i} className={styles.teamCard} {...fadeUp(i * 0.08)}>
                <img src={member.img} alt={member.name} className={styles.teamImg} />
                <div className={styles.teamInfo}>
                  <div className={styles.teamName}>{member.name}</div>
                  <div className={styles.teamRole}>{member.role}</div>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── LIFE AT MIRAI ── */}
      <section className={styles.section}>
        <Container size="xl">
          <motion.div {...fadeUp()} style={{ marginBottom: '32px' }}>
            <span className={styles.sectionLabel}>Culture</span>
            <h2 className={styles.sectionTitle}>Life at Mirai.</h2>
            <p className={styles.sectionDesc}>A vibrant, inclusive, engineering-first workplace where curiosity drives everything.</p>
          </motion.div>
          <div className={styles.galleryGrid}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Culture" />
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="Culture" />
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" alt="Culture" />
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Culture" />
          </div>
        </Container>
      </section>

      {/* ── CAREERS ── */}
      <section className={styles.section} style={{ background: 'var(--color-bg-secondary)' }}>
        <Container size="xl">
          <motion.div {...fadeUp()} style={{ marginBottom: '32px' }}>
            <span className={styles.sectionLabel}>Careers</span>
            <h2 className={styles.sectionTitle}>Join Mirai Labs.</h2>
          </motion.div>
          <div className={styles.careersStack}>
            {[
              { title: 'Senior AI Engineer', type: 'Full-time', location: 'Bangalore / Remote', desc: 'Lead the development of our next-generation LLM orchestration platform.' },
              { title: 'Cloud Solutions Architect', type: 'Full-time', location: 'Remote', desc: 'Design highly available architectures for enterprise clients on AWS.' },
              { title: 'Product Designer (UX/UI)', type: 'Full-time', location: 'Bangalore', desc: 'Shape the visual identity and user experience of our SaaS products.' }
            ].map((job, i) => (
              <motion.div key={i} className={styles.careerRow} {...fadeUp(i * 0.08)}>
                <div className={styles.careerInfo}>
                  <div className={styles.careerTitle}>{job.title}</div>
                  <div className={styles.careerTags}>
                    <span className={styles.careerTag}>{job.type}</span>
                    <span className={styles.careerTag}>{job.location}</span>
                  </div>
                </div>
                <p className={styles.careerDesc}>{job.desc}</p>
                <Button variant="outline" style={{ flexShrink: 0 }}>Apply</Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.section}>
        <Container size="xl">
          <motion.div {...fadeUp()} style={{ marginBottom: '32px' }}>
            <span className={styles.sectionLabel}>Client Stories</span>
            <h2 className={styles.sectionTitle}>What our clients say.</h2>
          </motion.div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <motion.div key={i} className={styles.testimonialCard} {...fadeUp(i * 0.1)}>
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <img src={t.img} alt={t.author} className={styles.testimonialAvatar} />
                  <div>
                    <div className={styles.testimonialName}>{t.author}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PARTNERS ── */}
      <section className={styles.section} style={{ background: 'var(--color-bg-secondary)' }}>
        <Container size="xl">
          <motion.div {...fadeUp()} style={{ marginBottom: '32px' }}>
            <span className={styles.sectionLabel}>Partners & Certifications</span>
            <h2 className={styles.sectionTitle}>Built with the best.</h2>
          </motion.div>
          <div className={styles.partnersRow}>
            {partners.map((p, i) => (
              <div key={i} className={styles.partnerBadge}>
                <span className={styles.partnerIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
                </span>
                {p}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className={styles.section} style={{ borderBottom: 'none' }}>
        <Container size="xl">
          <motion.div className={styles.ctaBanner} {...fadeUp()}>
            <div>
              <h2 className={styles.ctaTitle}>Ready to start your journey?</h2>
              <p className={styles.ctaDesc}>Get in touch with our experts to discover how Mirai Labs can accelerate your business.</p>
            </div>
            <Link to="/contact" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <Button variant="primary">Contact Us</Button>
            </Link>
          </motion.div>
        </Container>
      </section>

    </div>
  );
}

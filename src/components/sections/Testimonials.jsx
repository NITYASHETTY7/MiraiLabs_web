
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Sections.module.css';

const testimonials = [
  {
    quote: "Working with Mirai Labs has been a game-changer. They took the time to understand our challenges and delivered fantastic cloud and application solutions that truly fit our needs. They're knowledgeable, reliable, and genuinely feel like part of our team.",
    author: "Chetan G",
    role: "Co-Founder Vision Link"
  },
  {
    quote: "Mirai Labs is our go-to for cloud and app development. They're responsive, highly skilled, and deliver high-quality work consistently. They make complex IT simple.",
    author: "Shubham Sahai",
    role: "Co-Founder, AI Hiring Assistant, Singapore"
  },
  {
    quote: "Mirai Labs brought cutting-edge expertise to our projects. From streamlining our cloud infrastructure to developing innovative AI-powered applications, their team delivered exceptional results. Highly recommend them for forward-thinking tech solutions.",
    author: "Rohit Tolety",
    role: "Tools Engineer, Red Storm Entertainment"
  }
];

export const Testimonials = () => {
  return (
    <section className={styles.sectionPadding}>
      <Container size="lg">
        <div className={styles.sectionHeaderCenter}>
          <h2 className={styles.sectionTitle}>What Our Clients Say About Us</h2>
          <p className={styles.sectionSubtitle}>
            At Mirai Labs, we measure our success through the achievements of our clients. Here's what industry leaders have to say about their experience partnering with us.
          </p>
        </div>
        <div className={styles.testimonialContainer}>
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              className={styles.testimonialItem}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
            >
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.authorInfo}>
                <img src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`} alt={t.author} style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '1rem'}} />
                <div>
                  <h4>{t.author}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const sectionsDir = path.join(srcDir, 'components', 'sections');
if (!fs.existsSync(sectionsDir)) {
  fs.mkdirSync(sectionsDir, { recursive: true });
}

const write = (file, content) => fs.writeFileSync(path.join(srcDir, file), content);

write('components/sections/Hero.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './Sections.module.css';

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <Container size="lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.heroContent}
        >
          <div className={styles.heroBadge}>
            <Sparkles size={16} />
            <span>Your Innovation Partner</span>
          </div>
          <h1 className={styles.heroTitle}>
            Powering Your Success Through Cloud & AI
          </h1>
          <p className={styles.heroSubtitle}>
            Empowering businesses through cutting-edge cloud, AI, and modernization strategies to drive innovation and sustainable growth for organizations of all sizes.
          </p>
          <div className={styles.heroActions}>
            <Button size="lg" icon={ArrowRight}>Explore Solutions</Button>
            <Button variant="ghost" size="lg">Our Services</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
`);

write('components/sections/FeaturedSolutions.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid } from '../../index.js';
import styles from './Sections.module.css';

const services = [
  { title: "Cloud Strategy & Consulting", desc: "Tailored cloud approaches that balance technology, security, and costs aligned with your business objectives." },
  { title: "Data Solutions", desc: "Transform raw data into actionable insights enabling informed business decisions for growth." },
  { title: "Generative AI & ML", desc: "Harness AI technologies to analyze data, automate processes, and drive business innovation." },
  { title: "Migration & Modernization", desc: "Seamlessly transfer and update systems to leverage new capabilities for enhanced performance." },
  { title: "Cloud Security", desc: "Comprehensive security framework that integrates across data, application, and infrastructure layers." },
  { title: "Storage Solutions", desc: "Scalable, secure storage options customized to meet your organization's specific data needs." }
];

export const FeaturedSolutions = () => {
  return (
    <section className={styles.sectionPadding}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>SERVICES</span>
          <h2 className={styles.sectionTitle}>Transforming Your Business Through Technology</h2>
        </div>
        
        {/* Alternating Layout instead of repetitive cards */}
        <div className={styles.solutionsList}>
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={\`\${styles.solutionRow} \${i % 2 !== 0 ? styles.rowReverse : ''}\`}
            >
              <div className={styles.solutionText}>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
              <div className={styles.solutionVisual}>
                <div className={styles.placeholderVisual}>
                  <span>Visual Placeholder</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

write('components/sections/ProductsPreview.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Card } from '../../index.js';
import styles from './Sections.module.css';

const products = ["AI Coding Assistant", "Libre Chat", "AI Sales Assistant", "Wishper"];

export const ProductsPreview = () => {
  return (
    <section className={styles.sectionPaddingDark}>
      <Container size="lg">
        <div className={styles.sectionHeaderCenter}>
          <h2 className={styles.sectionTitle}>Proprietary Solutions</h2>
          <p className={styles.sectionSubtitle}>[Placeholder description for products]</p>
        </div>
        <Grid columns={2}>
          {products.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card hoverable className={styles.productCard}>
                <h3>{prod}</h3>
                <p>[Placeholder short description for {prod}]</p>
                <div className={styles.placeholderVisualSmall}>UI Preview</div>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </section>
  );
};
`);

write('components/sections/Industries.jsx', `
import React from 'react';
import { Container } from '../../index.js';
import styles from './Sections.module.css';

export const Industries = () => {
  return (
    <section className={styles.sectionPadding}>
      <Container size="lg">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>INDUSTRIES</span>
          <h2 className={styles.sectionTitle}>[Placeholder for Industries Headline]</h2>
          <p className={styles.sectionSubtitle}>[Placeholder content for industries Mirai Labs serves]</p>
        </div>
      </Container>
    </section>
  );
};
`);

write('components/sections/FeaturedCaseStudies.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Sections.module.css';

const studies = [
  { client: "Mustard Glasses", metric: "38%", metricDesc: "Reduced Costs" },
  { client: "Red Storm Entertainment", metric: "70%", metricDesc: "More Productive" },
  { client: "AICET", metric: "52%", metricDesc: "Increased Productivity" }
];

export const FeaturedCaseStudies = () => {
  return (
    <section className={styles.sectionPadding}>
      <Container size="xl">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>CASE STUDIES</span>
          <h2 className={styles.sectionTitle}>Transforming Businesses</h2>
        </div>
        <div className={styles.statsLayout}>
          {studies.map((study, i) => (
            <motion.div 
              key={i}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className={styles.statMetric}>{study.metric}</div>
              <div className={styles.statDesc}>{study.metricDesc}</div>
              <div className={styles.statClient}>{study.client}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

write('components/sections/WhyMiraiLabs.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid } from '../../index.js';
import styles from './Sections.module.css';

export const WhyMiraiLabs = () => {
  return (
    <section className={styles.sectionPaddingDark}>
      <Container size="lg">
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionBadge}>ABOUT US</span>
          <h2 className={styles.sectionTitle}>Our Company</h2>
          <p className={styles.sectionSubtitle}>
            Founded in Bangalore in 2024, Mirai Labs is at the forefront of cloud innovation and generative AI solutions.
          </p>
        </div>
        <Grid columns={2} className={styles.aboutGrid}>
          <motion.div 
            className={styles.aboutBlock}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <h3>Premier Technology Innovator</h3>
            <p>
              Mirai Labs is delivering cutting-edge cloud and AI solutions that transform businesses into digital powerhouses. Our team of seasoned experts brings over a decade of industry experience to every project, ensuring world-class implementation and strategic guidance.
            </p>
          </motion.div>
          <motion.div 
            className={styles.aboutBlock}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <h3>Revolutionizing Businesses</h3>
            <p>
              Revolutionizing businesses through accessible, powerful cloud and generative AI solutions that drive measurable growth and innovation. Our team combines deep technical expertise with creative problem-solving, delivering solutions that consistently exceed client expectations.
            </p>
          </motion.div>
        </Grid>
      </Container>
    </section>
  );
};
`);

write('components/sections/Testimonials.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../index.js';
import styles from './Sections.module.css';

const testimonials = [
  {
    quote: "Mirai Labs designed a cloud solution for our AR/VR needs to handle our massive rendering requirements while reducing costs by 38%. They built a flexible architecture for our immersive technology needs, enabling us to deploy new virtual environments in hours instead of days.",
    author: "Vineet Shetty",
    role: "Co-Founder Mustard Glasses"
  },
  {
    quote: "Mirai Labs' GenAI coding assistant revolutionized our workflow, completing in minutes what took days. The chatbot understands our development environment and suggests relevant solutions. Our developers are 70% more productive, and onboarding is significantly easier.",
    author: "Rohit Tolety",
    role: "Tools Engineer, Red Storm Entertainment"
  },
  {
    quote: "Mirai Labs delivered a robust enterprise application balancing functionality with security. Their team implemented multi-layered security protocols without compromising performance, resulting in 52% increased productivity. Their approach to development and security was exactly what we needed.",
    author: "Shubham Sahai",
    role: "Senior Software Engineer, AICET"
  }
];

export const Testimonials = () => {
  return (
    <section className={styles.sectionPadding}>
      <Container size="lg">
        <div className={styles.sectionHeaderCenter}>
          <h2 className={styles.sectionTitle}>What Our Clients Say About Us</h2>
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
                <h4>{t.author}</h4>
                <span>{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
`);

write('components/sections/FinalCTA.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../../index.js';
import { ArrowRight } from 'lucide-react';
import styles from './Sections.module.css';

export const FinalCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <Container size="md">
        <motion.div 
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Business?</h2>
          <p>[Placeholder for CTA subtext]</p>
          <Button size="lg" icon={ArrowRight}>Contact Us</Button>
        </motion.div>
      </Container>
    </section>
  );
};
`);

write('components/sections/Sections.module.css', `
.sectionPadding {
  padding: var(--spacing-24) 0;
}
.sectionPaddingDark {
  padding: var(--spacing-24) 0;
  background-color: var(--color-bg-tertiary);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

/* Hero */
.heroSection {
  padding: var(--spacing-32) 0 var(--spacing-24);
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.heroContent {
  max-width: 800px;
}
.heroBadge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4);
  background-color: rgba(74, 108, 247, 0.1);
  color: var(--color-brand-primary);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-8);
  border: 1px solid rgba(74, 108, 247, 0.2);
}
.heroTitle {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-6);
  letter-spacing: -0.02em;
}
.heroSubtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-10);
  max-width: 600px;
}
.heroActions {
  display: flex;
  gap: var(--spacing-4);
}

/* Common Header */
.sectionHeader {
  margin-bottom: var(--spacing-16);
  max-width: 600px;
}
.sectionHeaderCenter {
  margin-bottom: var(--spacing-16);
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.sectionBadge {
  display: block;
  color: var(--color-brand-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-4);
}
.sectionTitle {
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-tight);
  letter-spacing: -0.01em;
  margin-bottom: var(--spacing-4);
}
.sectionSubtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
}

/* Solutions */
.solutionsList {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-20);
}
.solutionRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;
}
.rowReverse {
  direction: rtl;
}
.rowReverse > * {
  direction: ltr;
}
.solutionText h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-4);
}
.solutionText p {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
}
.placeholderVisual {
  width: 100%;
  aspect-ratio: 4/3;
  background-color: var(--color-bg-tertiary);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-family: var(--font-family-body);
}

/* Products */
.productCard {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.productCard h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-2);
}
.productCard p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-6);
}
.placeholderVisualSmall {
  margin-top: auto;
  height: 150px;
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
}

/* Case Studies */
.statsLayout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-8);
  border-top: 1px solid var(--color-border);
  padding-top: var(--spacing-12);
}
.statItem {
  padding: var(--spacing-6);
}
.statMetric {
  font-size: var(--font-size-5xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  color: var(--color-brand-primary);
  line-height: 1;
  margin-bottom: var(--spacing-2);
}
.statDesc {
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-4);
}
.statClient {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* About Grid */
.aboutGrid {
  gap: var(--spacing-12);
}
.aboutBlock h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-4);
}
.aboutBlock p {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

/* Testimonials */
.testimonialContainer {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
}
.testimonialItem {
  background-color: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-10);
}
.quote {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-8);
  font-family: var(--font-family-heading);
}
.authorInfo h4 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-1);
}
.authorInfo span {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

/* CTA */
.ctaSection {
  padding: var(--spacing-32) 0;
  text-align: center;
  background: linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-tertiary) 100%);
}
.ctaContent h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-4);
}
.ctaContent p {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-8);
}

@media (max-width: 768px) {
  .heroTitle { font-size: 2.5rem; }
  .solutionRow { grid-template-columns: 1fr; }
  .statsLayout { grid-template-columns: 1fr; }
  .quote { font-size: var(--font-size-lg); }
}
`);

// Write App.jsx
write('App.jsx', `
import React from 'react';
import { Navigation, Footer } from './index.js';
import { Hero } from './components/sections/Hero';
import { FeaturedSolutions } from './components/sections/FeaturedSolutions';
import { ProductsPreview } from './components/sections/ProductsPreview';
import { Industries } from './components/sections/Industries';
import { FeaturedCaseStudies } from './components/sections/FeaturedCaseStudies';
import { WhyMiraiLabs } from './components/sections/WhyMiraiLabs';
import { Testimonials } from './components/sections/Testimonials';
import { FinalCTA } from './components/sections/FinalCTA';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'Blog', href: '#' }
];

const footerColumns = [
  {
    title: 'Solutions',
    links: [
      { label: 'AI Coding Assistant', href: '#' },
      { label: 'Libre Chat', href: '#' },
      { label: 'AI Sales Assistant', href: '#' },
      { label: 'Wishper', href: '#' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Cloud Strategy', href: '#' },
      { label: 'Generative AI', href: '#' },
      { label: 'Migration', href: '#' },
      { label: 'Security', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  }
];

function App() {
  return (
    <>
      <Navigation 
        logo="Mirai Labs" 
        links={navLinks} 
        rightAction={<button style={{padding: '8px 16px', background: '#4A6CF7', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer'}}>Contact Us</button>} 
      />
      <main>
        <Hero />
        <FeaturedSolutions />
        <ProductsPreview />
        <Industries />
        <FeaturedCaseStudies />
        <WhyMiraiLabs />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer columns={footerColumns} bottomText="© 2024 Mirai Labs. All rights reserved." />
    </>
  );
}

export default App;
`);

// Write main.jsx
write('main.jsx', `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/tokens.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`);

// Write index.css to reset defaults
write('index.css', `
/* Base resets handled by tokens.css */
* {
  box-sizing: border-box;
}
`);

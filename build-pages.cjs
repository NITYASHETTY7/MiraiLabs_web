const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');
const stylesDir = path.join(srcDir, 'styles');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const write = (file, content) => fs.writeFileSync(path.join(srcDir, file), content);

// 1. Home Page (Moving App.jsx content here)
write('pages/Home.jsx', `
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { FeaturedSolutions } from '../components/sections/FeaturedSolutions';
import { ProductsPreview } from '../components/sections/ProductsPreview';
import { Industries } from '../components/sections/Industries';
import { FeaturedCaseStudies } from '../components/sections/FeaturedCaseStudies';
import { WhyMiraiLabs } from '../components/sections/WhyMiraiLabs';
import { Testimonials } from '../components/sections/Testimonials';
import { FinalCTA } from '../components/sections/FinalCTA';

export const Home = () => {
  return (
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
  );
};
`);

// 2. Solutions Page
write('pages/Solutions.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../index.js';
import styles from './Pages.module.css';

const services = [
  { title: "Cloud Strategy & Consulting", desc: "Tailored cloud approaches that balance technology, security, and costs aligned with your business objectives." },
  { title: "Data Solutions", desc: "Transform raw data into actionable insights enabling informed business decisions for growth." },
  { title: "Generative AI & ML", desc: "Harness AI technologies to analyze data, automate processes, and drive business innovation." },
  { title: "Migration & Modernization", desc: "Seamlessly transfer and update systems to leverage new capabilities for enhanced performance." },
  { title: "Cloud Security", desc: "Comprehensive security framework that integrates across data, application, and infrastructure layers." },
  { title: "Storage Solutions", desc: "Scalable, secure storage options customized to meet your organization's specific data needs." }
];

export const Solutions = () => {
  return (
    <div className={styles.pageWrapper}>
      <Container size="xl">
        <h1 className={styles.pageTitle}>Our Solutions</h1>
        <div className={styles.solutionsStickyLayout}>
          <div className={styles.solutionsStickyNav}>
            <h3>Expertise</h3>
            <p>Content will be added.</p>
          </div>
          <div className={styles.solutionsList}>
            {services.map((svc, idx) => (
              <motion.div 
                key={idx}
                className={styles.solutionCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className={styles.solutionCardImage}>
                  <img src={\`https://images.unsplash.com/photo-\${1550000000000 + idx}?w=800&q=80\`} alt="Placeholder" />
                </div>
                <h2>{svc.title}</h2>
                <p>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
`);

// 3. Products Page
write('pages/Products.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../index.js';
import styles from './Pages.module.css';

const products = ["AI Coding Assistant", "Libre Chat", "AI Sales Assistant", "Wishper"];

export const Products = () => {
  return (
    <div className={styles.pageWrapperDark}>
      <Container size="lg">
        <h1 className={styles.pageTitleCenter}>Products</h1>
        <div className={styles.productsBands}>
          {products.map((prod, idx) => (
            <motion.div 
              key={idx} 
              className={styles.productBand}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.productBandText}>
                <h2>{prod}</h2>
                <p>Coming Soon</p>
              </div>
              <div className={styles.productBandImage}>
                <img src={\`https://images.unsplash.com/photo-1610555356070-d1febc54e814?w=800&q=80\`} alt="Placeholder" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};
`);

// 4. Case Studies Page
write('pages/CaseStudies.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../index.js';
import styles from './Pages.module.css';

const studies = [
  {
    client: "Mustard Glasses",
    challenge: "Massive rendering requirements.",
    solution: "Designed a cloud solution for AR/VR needs. Built a flexible architecture for immersive technology needs.",
    tech: "Content will be added.",
    impact: "Reduced costs by 38%. Enabled deployment of new virtual environments in hours instead of days.",
    quote: "Mirai Labs designed a cloud solution for our AR/VR needs to handle our massive rendering requirements while reducing costs by 38%. They built a flexible architecture for our immersive technology needs, enabling us to deploy new virtual environments in hours instead of days.",
    author: "Vineet Shetty, Co-Founder",
    related: "Cloud Strategy & Consulting"
  },
  {
    client: "Red Storm Entertainment",
    challenge: "Content will be added.",
    solution: "GenAI coding assistant that understands development environment and suggests relevant solutions.",
    tech: "AI Coding Assistant",
    impact: "Developers are 70% more productive, and onboarding is significantly easier. Completes in minutes what took days.",
    quote: "Mirai Labs' GenAI coding assistant revolutionized our workflow, completing in minutes what took days. The chatbot understands our development environment and suggests relevant solutions. Our developers are 70% more productive, and onboarding is significantly easier.",
    author: "Rohit Tolety, Tools Engineer",
    related: "Generative AI & ML"
  },
  {
    client: "AICET",
    challenge: "Need for robust enterprise application balancing functionality with security.",
    solution: "Delivered enterprise application with multi-layered security protocols.",
    tech: "Content will be added.",
    impact: "52% increased productivity without compromising performance.",
    quote: "Mirai Labs delivered a robust enterprise application balancing functionality with security. Their team implemented multi-layered security protocols without compromising performance, resulting in 52% increased productivity. Their approach to development and security was exactly what we needed.",
    author: "Shubham Sahai, Senior Software Engineer",
    related: "Cloud Security"
  }
];

export const CaseStudies = () => {
  return (
    <div className={styles.pageWrapper}>
      <Container size="md">
        <h1 className={styles.pageTitleCenter}>Case Studies</h1>
        <div className={styles.caseStudyList}>
          {studies.map((s, idx) => (
            <motion.div 
              key={idx} 
              className={styles.caseStudyItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.caseClient}>{s.client}</h2>
              <div className={styles.caseDetails}>
                <div className={styles.caseDetailRow}><strong>Challenge:</strong> <p>{s.challenge}</p></div>
                <div className={styles.caseDetailRow}><strong>Solution:</strong> <p>{s.solution}</p></div>
                <div className={styles.caseDetailRow}><strong>Technologies Used:</strong> <p>{s.tech}</p></div>
                <div className={styles.caseDetailRow}><strong>Business Impact:</strong> <p>{s.impact}</p></div>
                <div className={styles.caseDetailRow}><strong>Related Services:</strong> <p>{s.related}</p></div>
              </div>
              <div className={styles.caseArchitecture}>
                <span>Architecture Placeholder</span>
                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" alt="Architecture Placeholder" />
              </div>
              <blockquote className={styles.caseQuote}>
                <p>"{s.quote}"</p>
                <footer>— {s.author}</footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};
`);

// 5. Research & Engineering Page
write('pages/Research.jsx', `
import React from 'react';
import { Container } from '../index.js';
import styles from './Pages.module.css';

export const Research = () => {
  return (
    <div className={styles.pageWrapperDark}>
      <Container size="xl">
        <h1 className={styles.pageTitle}>Research & Engineering</h1>
        <div className={styles.masonryPlaceholder}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className={styles.masonryItem}>
              <img src={\`https://images.unsplash.com/photo-\${1510000000000 + i}?w=400&q=80\`} alt="Placeholder" />
              <p>Content will be added.</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
`);

// 6. Resources Page
write('pages/Resources.jsx', `
import React from 'react';
import { Container } from '../index.js';
import styles from './Pages.module.css';

export const Resources = () => {
  return (
    <div className={styles.pageWrapper}>
      <Container size="xl">
        <div className={styles.resourcesLayout}>
          <aside className={styles.resourcesSidebar}>
            <h3>Categories</h3>
            <ul>
              <li>Coming Soon</li>
            </ul>
          </aside>
          <main className={styles.resourcesMain}>
            <h1 className={styles.pageTitle}>Resources</h1>
            <div className={styles.placeholderBox}>
              Coming Soon
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
};
`);

// 7. Company Page
write('pages/Company.jsx', `
import React from 'react';
import { Container } from '../index.js';
import styles from './Pages.module.css';

export const Company = () => {
  return (
    <div className={styles.companySplitLayout}>
      <div className={styles.companyLeft}>
        <div className={styles.companyLeftContent}>
          <h1 className={styles.pageTitle}>Company</h1>
          <p>Founded in Bangalore in 2024, Mirai Labs is at the forefront of cloud innovation and generative AI solutions.</p>
          <p>Mirai Labs is your premier technology innovator. To revolutionize businesses.</p>
        </div>
      </div>
      <div className={styles.companyRight}>
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" alt="Placeholder" className={styles.companyImg} />
        <div className={styles.placeholderBox}>Content will be added.</div>
      </div>
    </div>
  );
};
`);

// 8. Contact Page
write('pages/Contact.jsx', `
import React from 'react';
import { Container, Button, Input } from '../index.js';
import styles from './Pages.module.css';

export const Contact = () => {
  return (
    <div className={styles.contactLayout}>
      <div className={styles.contactInfo}>
        <h1>Contact</h1>
        <p>Coming Soon</p>
      </div>
      <div className={styles.contactFormArea}>
        <form className={styles.contactForm} onSubmit={e => e.preventDefault()}>
          <h2>Get in Touch</h2>
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <textarea className={styles.textarea} placeholder="Message"></textarea>
          <Button size="lg" variant="primary">Submit</Button>
        </form>
      </div>
    </div>
  );
};
`);

// Pages.module.css
write('pages/Pages.module.css', `
.pageWrapper {
  padding: var(--spacing-24) 0;
  min-height: 80vh;
}
.pageWrapperDark {
  padding: var(--spacing-24) 0;
  min-height: 80vh;
  background-color: var(--color-bg-tertiary);
}
.pageTitle {
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-16);
}
.pageTitleCenter {
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-16);
  text-align: center;
}

/* Solutions Sticky Layout */
.solutionsStickyLayout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--spacing-16);
  align-items: start;
}
.solutionsStickyNav {
  position: sticky;
  top: 100px;
}
.solutionsList {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
}
.solutionCard {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
}
.solutionCardImage img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-6);
}

/* Products Bands */
.productsBands {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-20);
}
.productBand {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-8);
  background: var(--color-bg-primary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border);
}
.productBandText {
  padding: var(--spacing-12);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.productBandImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Case Studies */
.caseStudyList {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
}
.caseStudyItem {
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-12);
}
.caseClient {
  font-size: var(--font-size-3xl);
  color: var(--color-brand-primary);
  margin-bottom: var(--spacing-8);
}
.caseDetails {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
}
.caseDetailRow {
  display: flex;
  gap: var(--spacing-4);
}
.caseDetailRow strong {
  color: var(--color-text-primary);
  min-width: 150px;
}
.caseArchitecture {
  background: var(--color-bg-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-8);
  text-align: center;
}
.caseArchitecture img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin-top: var(--spacing-4);
  border-radius: var(--radius-sm);
}
.caseQuote {
  border-left: 4px solid var(--color-brand-primary);
  padding-left: var(--spacing-6);
  margin: 0;
  font-size: var(--font-size-xl);
  font-style: italic;
}
.caseQuote footer {
  margin-top: var(--spacing-4);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

/* Research Masonry */
.masonryPlaceholder {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-8);
}
.masonryItem {
  background: var(--color-bg-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}
.masonryItem img {
  width: 100%;
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-4);
}

/* Resources Layout */
.resourcesLayout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: var(--spacing-12);
}
.placeholderBox {
  padding: var(--spacing-16);
  background: rgba(255,255,255,0.05);
  border: 1px dashed var(--color-border);
  text-align: center;
  border-radius: var(--radius-lg);
}

/* Company Split */
.companySplitLayout {
  display: flex;
  min-height: 80vh;
}
.companyLeft {
  width: 50%;
  padding: var(--spacing-24);
  display: flex;
  align-items: center;
}
.companyLeftContent {
  max-width: 500px;
}
.companyRight {
  width: 50%;
  background: var(--color-bg-tertiary);
  padding: var(--spacing-24);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
}
.companyImg {
  width: 100%;
  border-radius: var(--radius-lg);
}

/* Contact */
.contactLayout {
  display: flex;
  min-height: 80vh;
}
.contactInfo {
  width: 40%;
  background: var(--color-bg-primary);
  padding: var(--spacing-24);
}
.contactFormArea {
  width: 60%;
  background: var(--color-bg-tertiary);
  padding: var(--spacing-24);
  display: flex;
  align-items: center;
  justify-content: center;
}
.contactForm {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}
.textarea {
  width: 100%;
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  border-radius: var(--radius-md);
  padding: var(--spacing-3) var(--spacing-4);
  min-height: 120px;
  font-family: var(--font-family-body);
}

@media (max-width: 768px) {
  .solutionsStickyLayout, .productsBands, .resourcesLayout, .companySplitLayout, .contactLayout {
    grid-template-columns: 1fr;
    flex-direction: column;
  }
  .companyLeft, .companyRight, .contactInfo, .contactFormArea {
    width: 100%;
  }
}
`);

// Update App.jsx to include routing
write('App.jsx', `
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navigation, Footer } from './index.js';

import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Products } from './pages/Products';
import { CaseStudies } from './pages/CaseStudies';
import { Research } from './pages/Research';
import { Resources } from './pages/Resources';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Research', href: '/research' },
  { label: 'Resources', href: '/resources' },
  { label: 'Company', href: '/company' }
];

const footerColumns = [
  {
    title: 'Solutions',
    links: [
      { label: 'AI Coding Assistant', href: '/products' },
      { label: 'Libre Chat', href: '/products' },
      { label: 'AI Sales Assistant', href: '/products' },
      { label: 'Wishper', href: '/products' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Cloud Strategy', href: '/solutions' },
      { label: 'Generative AI', href: '/solutions' },
      { label: 'Migration', href: '/solutions' },
      { label: 'Security', href: '/solutions' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/company' },
      { label: 'Contact', href: '/contact' }
    ]
  }
];

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navigation 
        logo={<Link to="/" style={{color: 'white', textDecoration: 'none'}}>Mirai Labs</Link>} 
        links={navLinks} 
        rightAction={<Link to="/contact" style={{padding: '8px 16px', background: '#4A6CF7', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: '500'}}>Contact Us</Link>} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/research" element={<Research />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer columns={footerColumns} bottomText="© 2024 Mirai Labs. All rights reserved." />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
`);

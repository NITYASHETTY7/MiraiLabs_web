const fs = require('fs');
const path = require('path');

const write = (file, content) => {
  const fullPath = path.join(__dirname, 'src', file);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content, 'utf8');
};
const read = (file) => fs.readFileSync(path.join(__dirname, 'src', file), 'utf8');

// 1. Create CaseStudyDetail page
write('pages/CaseStudyDetail.jsx', `
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../index.js';
import styles from './Pages.module.css';

export const CaseStudyDetail = () => {
  return (
    <div className={styles.pageWrapper}>
      <Container size="md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{marginBottom: '2rem'}}>
            <span className={styles.tag}>Healthcare AI</span>
            <span style={{color: 'var(--color-text-secondary)', marginLeft: '1rem'}}>17 Dec, 2024 • Mirai Labs Team</span>
          </div>
          
          <h1 style={{fontSize: 'var(--font-size-5xl)', lineHeight: '1.2', marginBottom: '2rem', color: 'var(--color-text-primary)'}}>
            Enhancing Healthcare Personalization with AWS AI
          </h1>
          
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173ff9e583e?w=1200&q=80" 
            alt="Healthcare AI Hero" 
            style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--radius-xl)', marginBottom: '3rem'}}
          />

          <div className={styles.articleContent}>
            <p>
              A rapidly expanding healthcare provider specializing in patient care management, encountered challenges in delivering personalized treatment recommendations to its growing patient base. This limitation resulted in suboptimal care outcomes and diminished patient engagement. The existing recommendation system lacked the sophistication to understand and cater to the unique needs of individual patients, leading to missed opportunities for preventive care and a less compelling overall healthcare experience.
            </p>
            <p>
              To address this challenge, Mirai Labs proposed and implemented a solution leveraging the capabilities of Amazon Personalize, a fully managed machine learning service designed for building and deploying personalized recommendation models. This case study explores how we transformed their patient experience and care outcomes through AI-powered personalization.
            </p>

            <img 
              src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&q=80" 
              alt="Healthcare Implementation" 
              style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', margin: '2rem 0'}}
            />

            <h2>Healthcare AI implementation</h2>
            
            <h3>The Challenge</h3>
            <p>
              The existing patient management system struggled to provide tailored care recommendations based on individual health profiles. Healthcare providers were overwhelmed with generic data, making it difficult to identify high-priority interventions for specific patients. Additionally, the patient portal offered the same general health information to all users, regardless of their unique health conditions, resulting in low engagement rates and missed opportunities for preventive care.
            </p>

            <h3>The Solution Approach</h3>
            <p>
              The initial step involved a seamless integration of existing healthcare platform data with Amazon Personalize. This included historical patient interactions (such as appointment types and medication adherence), the complete treatment catalog with details like procedures and medications, and relevant patient data encompassing demographics and medical history. Amazon Simple Storage Service (S3) served as a scalable and secure repository for this data, while AWS Glue facilitated the necessary data transformations to ensure compliance with healthcare regulations and compatibility with Amazon Personalize's requirements.
            </p>
            <p>
              Mirai Labs then strategically selected and deployed several Amazon Personalize recipes tailored to different stages of the patient journey. For instance, the "Recommended for you" recipe was implemented in patient dashboards to provide personalized health tips based on individual profiles, while the "Patients with similar conditions" recipe was integrated into provider dashboards to surface related treatment options that had been effective for similar cases. Additionally, the "Frequently combined treatments" recipe was deployed to suggest complementary care options for comprehensive treatment plans.
            </p>

            <blockquote className={styles.quoteBlock}>
              <p>"The AI-powered personalization capabilities have completely transformed how we approach patient care. We're now able to provide truly individualized health recommendations at scale, leading to better outcomes and more engaged patients."</p>
              <footer>— Chief Medical Officer</footer>
            </blockquote>

            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" 
              alt="Data Validation" 
              style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', margin: '2rem 0'}}
            />

            <h3>Implementation and Validation</h3>
            <p>
              To validate the effectiveness of the new personalized recommendations, Mirai Labs implemented a rigorous A/B testing framework. This allowed for a direct comparison of the performance metrics (such as patient engagement rates, appointment follow-through, and health outcome improvements) between the new system and the previous, more generic approach. The implementation was conducted in phases, starting with a pilot group before expanding to entire patient population.
            </p>

            <h3>Key Results and Benefits</h3>
            <p>The implementation of Amazon Personalize yielded significant positive outcomes:</p>
            <ul>
              <li>23% increase in patient engagement with their healthcare portal</li>
              <li>17% improvement in medication adherence rates</li>
              <li>15% increase in preventive care appointment bookings</li>
              <li>Healthcare providers reported saving an average of 45 minutes per day by having more relevant patient information immediately available</li>
              <li>Patient satisfaction scores improved by 28% in the six months following implementation</li>
            </ul>
            <p>
              Beyond direct metrics, the enhanced personalization led to improved patient outcomes, evidenced by better chronic disease management and early intervention in developing health issues. The strategic deployment of the "Frequently combined treatments" feature also contributed to more comprehensive care plans, addressing multiple aspects of patient health simultaneously.
            </p>

            <h3>Data-Driven Insights</h3>
            <p>
              The data generated by Amazon Personalize provided valuable insights into patient behavior and treatment effectiveness, which could leverage for future care protocol development and resource allocation strategies. The ability of Amazon Personalize to analyze various data points, including medical history and treatment responses, offers a comprehensive understanding of patient needs, allowing Mirai Labs to provide a more effective solution compared to basic recommendation systems.
            </p>

            <div style={{overflowX: 'auto', margin: '2rem 0'}}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Recipe Name</th>
                    <th>Goal</th>
                    <th>Key Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Recommended for you</td>
                    <td>Provide personalized health recommendations based on patient history</td>
                    <td>Personalized experience, increased engagement, better preventive care</td>
                  </tr>
                  <tr>
                    <td>Patients with similar conditions</td>
                    <td>Recommend treatments effective for similar cases</td>
                    <td>Discovery of effective treatments, improved care planning, evidence-based decisions</td>
                  </tr>
                  <tr>
                    <td>Frequently combined treatments</td>
                    <td>Recommend complementary care options</td>
                    <td>Comprehensive care planning, holistic treatment approach, improved outcomes</td>
                  </tr>
                  <tr>
                    <td>Most viewed resources</td>
                    <td>Highlight popular health information</td>
                    <td>Increased health literacy, patient empowerment, community knowledge sharing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Conclusion</h3>
            <p>
              Our case study demonstrates the implementation of AWS AI through Amazon Personalize transformed their healthcare delivery model from a generalized approach to a truly personalized care experience. By leveraging machine learning and AI, we not only improved immediate patient engagement metrics but also set the foundation for long-term improvements in health outcomes. This case study demonstrates the significant potential of AI technologies to address complex healthcare challenges and create more effective, patient-centered care systems.
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};
`);

// 2. Add styles for article content and table to Pages.module.css
let pagesCss = read('pages/Pages.module.css');
pagesCss += `
.tag {
  background-color: var(--color-brand-glow);
  color: var(--color-brand-primary);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}
.articleContent {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
}
.articleContent h2 {
  font-size: var(--font-size-3xl);
  color: var(--color-text-primary);
  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-6);
}
.articleContent h3 {
  font-size: var(--font-size-2xl);
  color: var(--color-text-primary);
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-4);
}
.articleContent p {
  margin-bottom: var(--spacing-6);
}
.articleContent ul {
  margin-bottom: var(--spacing-6);
  padding-left: var(--spacing-6);
}
.articleContent li {
  margin-bottom: var(--spacing-2);
}
.quoteBlock {
  border-left: 4px solid var(--color-brand-primary);
  padding-left: var(--spacing-6);
  margin: var(--spacing-10) 0;
  font-size: var(--font-size-xl);
  font-style: italic;
  color: var(--color-text-primary);
}
.quoteBlock footer {
  margin-top: var(--spacing-4);
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  font-style: normal;
}
.table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.table th, .table td {
  padding: var(--spacing-4);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}
.table th {
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
}
.table td {
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
}
`;
write('pages/Pages.module.css', pagesCss);

// 3. Update App.jsx to include the new route
let appJsx = read('App.jsx');
appJsx = appJsx.replace(
  "import { CaseStudies } from './pages/CaseStudies';",
  "import { CaseStudies } from './pages/CaseStudies';\nimport { CaseStudyDetail } from './pages/CaseStudyDetail';"
);
appJsx = appJsx.replace(
  "<Route path=\"/case-studies\" element={<CaseStudies />} />",
  "<Route path=\"/case-studies\" element={<CaseStudies />} />\n          <Route path=\"/case-studies/healthcare\" element={<CaseStudyDetail />} />"
);
write('App.jsx', appJsx);

// 4. Update the link in CaseStudies.jsx list so clicking the first one goes to the detail page.
let caseStudiesJsx = read('pages/CaseStudies.jsx');
// Also ensure images are visually rich per "every image need to be present, no empty placeholders"
// I already set Unsplash URLs in CaseStudies.jsx, I just need to make the Healthcare card clickable.
caseStudiesJsx = caseStudiesJsx.replace(
  '<h2 className={styles.caseClient}>{s.client}</h2>',
  `{idx === 0 ? <Link to="/case-studies/healthcare" style={{textDecoration: 'none'}}><h2 className={styles.caseClient} style={{color: 'var(--color-brand-primary)'}}>{s.client} <span style={{fontSize:'1rem'}}>→ Read Full Story</span></h2></Link> : <h2 className={styles.caseClient}>{s.client}</h2>}`
);
write('pages/CaseStudies.jsx', caseStudiesJsx);

// Let's also make sure FeaturedCaseStudies.jsx (on Home page) links to the detail page for Healthcare
let featuredCases = read('components/sections/FeaturedCaseStudies.jsx');
featuredCases = featuredCases.replace(
  '<Link to="/case-studies" style={{textDecoration: \'none\'}}>',
  '{i === 0 ? <Link to="/case-studies/healthcare" style={{textDecoration: \'none\'}}> : <Link to="/case-studies" style={{textDecoration: \'none\'}}>}'
);
write('components/sections/FeaturedCaseStudies.jsx', featuredCases);

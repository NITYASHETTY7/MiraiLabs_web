const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath, target, replacement) => {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(target, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
}

// 1. Final CTA
replaceInFile(path.join(__dirname, 'src/components/sections/FinalCTA.jsx'), 
    '<h2>Ready to Transform Your Business?</h2>', 
    '<h2>Looking for a collaboration? Get Started Today!</h2>');
replaceInFile(path.join(__dirname, 'src/components/sections/FinalCTA.jsx'), 
    '<p>[Placeholder for CTA subtext]</p>', 
    "<p>Partner with us to drive innovation and transform your business with cutting-edge cloud and AI solutions. Let's shape the future together!</p>");

// 2. Contact Page
const contactPagePath = path.join(__dirname, 'src/pages/Contact.jsx');
let contactContent = fs.readFileSync(contactPagePath, 'utf8');
contactContent = contactContent.replace('<p>Coming Soon</p>', 
    `<p>Our experts are here to assist you with seamless support across cloud, AI, and modernization challenges. Reach out for tailored solutions and prompt assistance—because your success is our priority.</p>
        <div style={{marginTop: '2rem'}}>
          <h3 style={{marginBottom: '0.5rem'}}>Email Address</h3>
          <p style={{color: 'var(--color-brand-primary)'}}>contact@mirailabs.tech</p>
          
          <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>Phone Number</h3>
          <p style={{color: 'var(--color-brand-primary)'}}>+91 72048 47927</p>
          
          <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>Office Location</h3>
          <p style={{lineHeight: '1.5'}}>1034, 2nd Floor, 26th Main, 4th T Block, Jayanagar, Bangalore, Karnataka 560041</p>
        </div>`);
fs.writeFileSync(contactPagePath, contactContent, 'utf8');

// 3. Footer Copyright
replaceInFile(path.join(__dirname, 'src/App.jsx'), 
    '© 2024 Mirai Labs. All rights reserved.', 
    '2025 Mirai Labs. All rights reserved');

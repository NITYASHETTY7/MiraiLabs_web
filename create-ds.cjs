const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');
const stylesDir = path.join(srcDir, 'styles');

const dirs = [
  stylesDir,
  componentsDir,
  path.join(componentsDir, 'Button'),
  path.join(componentsDir, 'Card'),
  path.join(componentsDir, 'Tag'),
  path.join(componentsDir, 'Badge'),
  path.join(componentsDir, 'Input'),
  path.join(componentsDir, 'Navigation'),
  path.join(componentsDir, 'Footer'),
  path.join(componentsDir, 'Container')
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

// tokens.css
const tokensCss = `:root {
  /* Colors */
  --color-bg-primary: #0A0A0A;
  --color-bg-secondary: #111111;
  --color-bg-tertiary: #1A1A1A;
  
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A1A1AA;
  --color-text-inverse: #0A0A0A;
  
  --color-brand-primary: #4A6CF7;
  --color-brand-hover: #3A5CE5;
  --color-brand-glow: rgba(74, 108, 247, 0.4);
  
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-hover: rgba(255, 255, 255, 0.2);
  
  --color-error: #EF4444;
  --color-success: #10B981;
  --color-warning: #F59E0B;

  /* Typography */
  --font-family-heading: 'Space Grotesk', 'Inter', system-ui, sans-serif;
  --font-family-body: 'Inter', system-ui, sans-serif;
  
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.2;
  --line-height-base: 1.5;
  --line-height-relaxed: 1.75;

  /* Spacing */
  --spacing-1: 0.25rem; /* 4px */
  --spacing-2: 0.5rem;  /* 8px */
  --spacing-3: 0.75rem; /* 12px */
  --spacing-4: 1rem;    /* 16px */
  --spacing-5: 1.25rem; /* 20px */
  --spacing-6: 1.5rem;  /* 24px */
  --spacing-8: 2rem;    /* 32px */
  --spacing-10: 2.5rem; /* 40px */
  --spacing-12: 3rem;   /* 48px */
  --spacing-16: 4rem;   /* 64px */
  --spacing-20: 5rem;   /* 80px */
  --spacing-24: 6rem;   /* 96px */
  --spacing-32: 8rem;   /* 128px */

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.4), 0 2px 4px -1px rgba(0,0,0,0.2);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.4), 0 4px 6px -2px rgba(0,0,0,0.2);
  --shadow-glow: 0 0 20px var(--color-brand-glow);

  /* Container Widths & Grid (Using variables for reference in modules) */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;
  
  --grid-columns: 12;
  --grid-gap: var(--spacing-6);

  /* Animations */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

body {
  background-color: var(--color-bg-primary);
  color: var(--color-text-secondary);
  font-family: var(--font-family-body);
  line-height: var(--line-height-base);
  margin: 0;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--color-text-primary);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}
`;
fs.writeFileSync(path.join(stylesDir, 'tokens.css'), tokensCss);

// Container
fs.writeFileSync(path.join(componentsDir, 'Container', 'Container.jsx'), `import React from 'react';
import styles from './Container.module.css';

export const Container = ({ children, className = '', size = 'xl' }) => {
  return (
    <div className={\`\${styles.container} \${styles[size]} \${className}\`}>
      {children}
    </div>
  );
};

export const Grid = ({ children, className = '', columns = 12 }) => {
  return (
    <div className={\`\${styles.grid} \${styles[\`cols-\${columns}\`]} \${className}\`}>
      {children}
    </div>
  );
};
`);
fs.writeFileSync(path.join(componentsDir, 'Container', 'Container.module.css'), `.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
}

.sm { max-width: var(--container-sm); }
.md { max-width: var(--container-md); }
.lg { max-width: var(--container-lg); }
.xl { max-width: var(--container-xl); }
.2xl { max-width: var(--container-2xl); }

.grid {
  display: grid;
  gap: var(--grid-gap);
  grid-template-columns: repeat(var(--grid-columns), 1fr);
}

/* Responsive Grid Overrides could go here */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
`);

// Button
fs.writeFileSync(path.join(componentsDir, 'Button', 'Button.jsx'), `import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon,
  className = '',
  ...props 
}) => {
  return (
    <motion.button 
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      className={\`\${styles.button} \${styles[variant]} \${styles[size]} \${className}\`}
      {...props}
    >
      {Icon && <Icon className={styles.icon} size={18} />}
      {children}
    </motion.button>
  );
};
`);
fs.writeFileSync(path.join(componentsDir, 'Button', 'Button.module.css'), `.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  border-radius: var(--radius-md);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  border: 1px solid transparent;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

/* Variants */
.primary {
  background-color: var(--color-brand-primary);
  color: #FFFFFF;
}
.primary:hover {
  background-color: var(--color-brand-hover);
  box-shadow: var(--shadow-glow);
}

.secondary {
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  border-color: var(--color-border);
}
.secondary:hover {
  background-color: var(--color-bg-secondary);
  border-color: var(--color-border-hover);
}

.ghost {
  background-color: transparent;
  color: var(--color-text-secondary);
}
.ghost:hover {
  color: var(--color-text-primary);
  background-color: var(--color-bg-tertiary);
}

/* Sizes */
.sm {
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-sm);
}
.md {
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-base);
}
.lg {
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--font-size-lg);
}

.icon {
  flex-shrink: 0;
}
`);

// Card
fs.writeFileSync(path.join(componentsDir, 'Card', 'Card.jsx'), `import React from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

export const Card = ({ children, className = '', hoverable = false, ...props }) => {
  const Component = hoverable ? motion.div : 'div';
  const motionProps = hoverable ? {
    whileHover: { y: -4, boxShadow: '0 0 20px rgba(255,255,255,0.05)' },
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  } : {};

  return (
    <Component 
      className={\`\${styles.card} \${hoverable ? styles.hoverable : ''} \${className}\`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
};
`);
fs.writeFileSync(path.join(componentsDir, 'Card', 'Card.module.css'), `.card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  color: var(--color-text-secondary);
  transition: border-color var(--transition-fast);
}

.hoverable {
  cursor: pointer;
}

.hoverable:hover {
  border-color: var(--color-border-hover);
}
`);

// Tag
fs.writeFileSync(path.join(componentsDir, 'Tag', 'Tag.jsx'), `import React from 'react';
import styles from './Tag.module.css';

export const Tag = ({ children, variant = 'default', className = '' }) => {
  return (
    <span className={\`\${styles.tag} \${styles[variant]} \${className}\`}>
      {children}
    </span>
  );
};
`);
fs.writeFileSync(path.join(componentsDir, 'Tag', 'Tag.module.css'), `.tag {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.default {
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.primary {
  background-color: rgba(74, 108, 247, 0.1);
  color: var(--color-brand-primary);
  border: 1px solid rgba(74, 108, 247, 0.2);
}
`);

// Badge
fs.writeFileSync(path.join(componentsDir, 'Badge', 'Badge.jsx'), `import React from 'react';
import styles from './Badge.module.css';

export const Badge = ({ count, max = 99, children }) => {
  const displayCount = count > max ? \`\${max}+\` : count;
  return (
    <div className={styles.container}>
      {children}
      {count > 0 && <span className={styles.badge}>{displayCount}</span>}
    </div>
  );
};
`);
fs.writeFileSync(path.join(componentsDir, 'Badge', 'Badge.module.css'), `.container {
  position: relative;
  display: inline-flex;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--color-brand-primary);
  color: #fff;
  font-size: 0.65rem;
  font-weight: var(--font-weight-bold);
  padding: 0 var(--spacing-1);
  min-width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
`);

// Input
fs.writeFileSync(path.join(componentsDir, 'Input', 'Input.jsx'), `import React from 'react';
import styles from './Input.module.css';
import { Search } from 'lucide-react';

export const Input = React.forwardRef(({ icon: Icon, error, className = '', ...props }, ref) => {
  return (
    <div className={\`\${styles.wrapper} \${className}\`}>
      {Icon && <Icon className={styles.icon} size={18} />}
      <input 
        ref={ref}
        className={\`\${styles.input} \${Icon ? styles.hasIcon : ''} \${error ? styles.hasError : ''}\`}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
});
Input.displayName = 'Input';
`);
fs.writeFileSync(path.join(componentsDir, 'Input', 'Input.module.css'), `.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input {
  width: 100%;
  background-color: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  border-radius: var(--radius-md);
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-base);
  font-family: var(--font-family-body);
  transition: all var(--transition-fast);
  outline: none;
}

.input::placeholder {
  color: var(--color-text-secondary);
}

.input:focus {
  border-color: var(--color-brand-primary);
  box-shadow: 0 0 0 2px rgba(74, 108, 247, 0.2);
}

.hasIcon {
  padding-left: var(--spacing-10);
}

.icon {
  position: absolute;
  left: var(--spacing-3);
  top: var(--spacing-3);
  color: var(--color-text-secondary);
  pointer-events: none;
}

.hasError {
  border-color: var(--color-error);
}
.hasError:focus {
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}

.errorMessage {
  color: var(--color-error);
  font-size: var(--font-size-xs);
  margin-top: var(--spacing-1);
}
`);

// Navigation
fs.writeFileSync(path.join(componentsDir, 'Navigation', 'Navigation.jsx'), `import React from 'react';
import { motion } from 'framer-motion';
import styles from './Navigation.module.css';

export const Navigation = ({ logo, links, rightAction }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>{logo}</div>
      <ul className={styles.links}>
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.rightAction}>
        {rightAction}
      </div>
    </nav>
  );
};
`);
fs.writeFileSync(path.join(componentsDir, 'Navigation', 'Navigation.module.css'), `.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) var(--spacing-8);
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 50;
}

.logo {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.links {
  display: flex;
  gap: var(--spacing-8);
  list-style: none;
  margin: 0;
  padding: 0;
}

.link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-fast);
}

.link:hover {
  color: var(--color-text-primary);
}

.rightAction {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .links {
    display: none;
  }
}
`);

// Footer
fs.writeFileSync(path.join(componentsDir, 'Footer', 'Footer.jsx'), `import React from 'react';
import styles from './Footer.module.css';

export const Footer = ({ columns, bottomText }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {columns.map((col, idx) => (
          <div key={idx} className={styles.column}>
            <h4 className={styles.columnTitle}>{col.title}</h4>
            <ul className={styles.columnLinks}>
              {col.links.map((link, lidx) => (
                <li key={lidx}>
                  <a href={link.href} className={styles.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <p className={styles.bottomText}>{bottomText}</p>
      </div>
    </footer>
  );
};
`);
fs.writeFileSync(path.join(componentsDir, 'Footer', 'Footer.module.css'), `.footer {
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg-primary);
  padding: var(--spacing-16) var(--spacing-8) var(--spacing-8);
}

.top {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-16);
}

.columnTitle {
  color: var(--color-text-primary);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.columnLinks {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
}
.link:hover {
  color: var(--color-text-primary);
}

.bottom {
  border-top: 1px solid var(--color-border);
  padding-top: var(--spacing-8);
  text-align: center;
}

.bottomText {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin: 0;
}
`);

// index.js to export everything
fs.writeFileSync(path.join(srcDir, 'index.js'), `
import './styles/tokens.css';
export { Container, Grid } from './components/Container/Container';
export { Button } from './components/Button/Button';
export { Card } from './components/Card/Card';
export { Tag } from './components/Tag/Tag';
export { Badge } from './components/Badge/Badge';
export { Input } from './components/Input/Input';
export { Navigation } from './components/Navigation/Navigation';
export { Footer } from './components/Footer/Footer';
`);

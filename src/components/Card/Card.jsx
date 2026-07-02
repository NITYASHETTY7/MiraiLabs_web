import React from 'react';
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
      className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
};

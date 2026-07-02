import React from 'react';
import styles from './Tag.module.css';

export const Tag = ({ children, variant = 'default', className = '' }) => {
  return (
    <span className={`${styles.tag} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};

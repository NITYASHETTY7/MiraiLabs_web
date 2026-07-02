import React from 'react';
import styles from './Container.module.css';

export const Container = ({ children, className = '', size = 'xl' }) => {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`}>
      {children}
    </div>
  );
};

export const Grid = ({ children, className = '', columns = 12 }) => {
  return (
    <div className={`${styles.grid} ${styles[`cols-${columns}`]} ${className}`}>
      {children}
    </div>
  );
};

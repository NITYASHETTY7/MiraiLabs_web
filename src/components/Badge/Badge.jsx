import React from 'react';
import styles from './Badge.module.css';

export const Badge = ({ count, max = 99, children }) => {
  const displayCount = count > max ? `${max}+` : count;
  return (
    <div className={styles.container}>
      {children}
      {count > 0 && <span className={styles.badge}>{displayCount}</span>}
    </div>
  );
};

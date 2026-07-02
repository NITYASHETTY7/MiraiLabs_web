import React from 'react';
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
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className={styles.icon} size={18} />}
      {children}
    </motion.button>
  );
};

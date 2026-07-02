import React from 'react';
import styles from './Input.module.css';
import { Search } from 'lucide-react';

export const Input = React.forwardRef(({ icon: Icon, error, className = '', ...props }, ref) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {Icon && <Icon className={styles.icon} size={18} />}
      <input 
        ref={ref}
        className={`${styles.input} ${Icon ? styles.hasIcon : ''} ${error ? styles.hasError : ''}`}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
});
Input.displayName = 'Input';

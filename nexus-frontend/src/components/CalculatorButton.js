import React from 'react';
import styles from './CalculatorButton.module.css';

const Button = ({ type, className, onClick, children }) => {
  return (
    <button type={type} className={`${styles.calculatorBtn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

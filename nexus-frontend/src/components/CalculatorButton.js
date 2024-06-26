import React from 'react';
import styles from './CalculatorButton.module.css';

const Button = ({ variant, children }) => {
    const addString = (input) => {
        document.getElementById('inputField').value += input
      };
    
      const submitForm = () => {
        console.log('Form Submitted'); 
      };
    
      const resetField = () => {
        document.getElementById('inputField').value = ''; 
      };

    switch (variant) {
        case "number":
            return (
                <button 
                    type="button" 
                    className={`${styles.calculatorBtn} btn btn-primary`} 
                    onClick={() => addString(children)}>
                  {children}
                </button>
              );
        case "operator":
            return (
                <button 
                    type="button" 
                    className={`${styles.calculatorBtn} btn btn-secondary`} 
                    onClick={() => addString(children)}>
                  {children}
                </button>
            );
        case "submit":
            return (
                <button 
                    type="button" 
                    className={`${styles.calculatorBtn} btn btn-success`} 
                    onClick={submitForm}>
                  {children}
                </button>
            );
        case "reset":
            return (
                <button 
                    type="reset" 
                    className={`${styles.calculatorBtn} btn btn-danger`} 
                    onClick={resetField}>
                  {children}
                </button>
            );
    }
    
};

export default Button;

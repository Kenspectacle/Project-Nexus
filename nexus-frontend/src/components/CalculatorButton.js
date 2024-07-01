import React from 'react';
import styles from './CalculatorButton.module.css';

const Button = ({ variant, children, triggerHistoryUpdate }) => {
    const addString = (input) => {
        document.getElementById('inputField').value += input
      };
    
      const backDelete = () => {
        const inputField = document.getElementById('inputField');
        inputField.value = inputField.value.slice(0, -1);
    }

      // helper function
    function encodeOperator(operator) {
    if (operator === "+") {
        return "%2B"
    } else if (operator === "/") {
        return "%2F"
    } else if (operator === "*") {
        return "%2A"
    } else {
        return operator
    }
    }
    
      async function submitForm() {
        let inputField = document.getElementById("inputField");

        // create fetch url
        let url = "http://localhost:8080/calculateAndAddHistoryEntry";
        console.log(url);
    
        // decode input
        let input = inputField.value;
        input = input.split("").map(encodeOperator).join("");
        console.log(input);
    
        let queryString = "?input=" + input;
        console.log(queryString)
    
        await fetch(url + queryString)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('response success');
                return response.text();
            })
            .then(text => {
                console.log('Response:', text);
    
                // Create a new entry in the history table
                triggerHistoryUpdate();
    
                // update input field
                let resultingValue = text.split("=")[1].trim()
                inputField.value = resultingValue;
    
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error); // Handle errors here
            });
    
    }
    
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
        case "backspace":
            return (
                <button 
                    type="button" 
                    className={`${styles.calculatorBtn} btn btn-warning`} 
                    onClick={backDelete}>
                  {children}
                </button>
            );
    }
    
};

export default Button;

import React from 'react'
import Button from './CalculatorButton';

function CalculatorDisplay() {

    return (
        <>
            <input type="text" id="inputField" className="form-control" />
                    
            <div className="button-row">
                <Button variant="number">(</Button>
                <Button variant="number">)</Button>
                <Button variant="reset">Reset</Button>
                <Button variant="backspace">&#60;=</Button>
            </div>

            <div className="button-row">
                <Button variant="number">1</Button>
                <Button variant="number">2</Button>
                <Button variant="number">3</Button>
                <Button variant="operator">+</Button>
            </div>

            <div className="button-row">
                <Button variant="number">4</Button>
                <Button variant="number">5</Button>
                <Button variant="number">6</Button>
                <Button variant="operator">-</Button>
            </div>

            <div className="button-row">
                <Button variant="number">7</Button>
                <Button variant="number">8</Button>
                <Button variant="number">9</Button>
                <Button variant="operator">*</Button>
            </div>

            <div className="button-row">
                <Button variant="submit">Submit</Button>
                <Button variant="number">0</Button>
                <Button variant="operator">.</Button>
                <Button variant="operator">/</Button>
            </div>
        </>
    )
}

export default CalculatorDisplay;
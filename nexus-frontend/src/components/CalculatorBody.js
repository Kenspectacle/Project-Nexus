import React from 'react';
import Button from './CalculatorButton';

function CalculatorBody() {
    const addString = (value) => {
        console.log(value); // Replace this with your actual logic
      };
    
      const submitForm = () => {
        console.log('Form Submitted'); // Replace this with your actual logic
      };
    
      const resetField = () => {
        document.getElementById('inputField').value = ''; // Replace this with your actual logic
      };
      
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <input type="text" id="inputField" className="form-control" />
                    
                    <div className="button-row">
                        <Button type="button" className="btn btn-primary" onClick={() => addString('(')}>(</Button>
                        <Button type="button" className="btn btn-primary" onClick={() => addString(')')}>)</Button>
                    </div>

                    <div className="button-row">
                        <Button type="button" className="btn btn-primary" onClick={() => addString(1)}>1</Button>
                        <Button type="button" className="btn btn-primary" onClick={() => addString(2)}>2</Button>
                        <Button type="button" className="btn btn-primary" onClick={() => addString(3)}>3</Button>
                        <Button type="button" className="btn btn-secondary" onClick={() => addString('+')}>+</Button>
                    </div>

                    <div className="button-row">
                        <Button type="button" className="btn btn-primary" onClick={() => addString(4)}>4</Button>
                        <Button type="button" className="btn btn-primary" onClick={() => addString(5)}>5</Button>
                        <Button type="button" className="btn btn-primary" onClick={() => addString(6)}>6</Button>
                        <Button type="button" className="btn btn-secondary" onClick={() => addString('-')}>-</Button>
                    </div>

                    <div className="button-row">
                        <Button type="button" className="btn btn-primary" onClick={() => addString(7)}>7</Button>
                        <Button type="button" className="btn btn-primary" onClick={() => addString(8)}>8</Button>
                        <Button type="button" className="btn btn-primary" onClick={() => addString(9)}>9</Button>
                        <Button type="button" className="btn btn-secondary" onClick={() => addString('*')}>*</Button>
                    </div>

                    <div className="button-row">
                        <Button type="button" className="btn btn-success" onClick={submitForm}>Submit</Button>
                        <Button type="button" className="btn btn-primary" onClick={() => addString(0)}>0</Button>
                        <Button type="reset" className="btn btn-danger" onClick={resetField}>Reset</Button>
                        <Button type="button" className="btn btn-secondary" onClick={() => addString('/')}>/</Button>
                    </div>
                </div>

        
                <div className="col-6">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">History Calculation</th>
                    </tr>
                    </thead>
                    <tbody id="table-body">
                    <tr>
                        <th>1+1=3</th>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>                    
    );
}

export default CalculatorBody;
import React from 'react';

function CalculatorApp() {
    return (
        <div className="container">
      <div className="row">
        <div className="col-6">
          <input type="text" id="inputField" className="form-control" />
          <div className="button-row">
            <button type="button" className="btn btn-primary" onclick="addString('(')">(</button>
            <button type="button" className="btn btn-primary" onclick="addString(')')">)</button>
          </div>
          <div className="button-row">
              <button type="button" className="btn btn-primary" onclick="addString(1)">1</button>
              <button type="button" className="btn btn-primary" onclick="addString(2)">2</button>
              <button type="button" className="btn btn-primary" onclick="addString(3)">3</button>
            <button type="button" className="btn btn-secondary" onclick="addString('+')">+</button>
          </div>
          <div className="button-row">
              <button type="button" className="btn btn-primary" onclick="addString(4)">4</button>
              <button type="button" className="btn btn-primary" onclick="addString(5)">5</button>
              <button type="button" className="btn btn-primary" onclick="addString(6)">6</button>
            <button type="button" className="btn btn-secondary" onclick="addString('-')">-</button>
          </div>
          <div className="button-row">
              <button type="button" className="btn btn-primary" onclick="addString(7)">7</button>
              <button type="button" className="btn btn-primary" onclick="addString(8)">8</button>
              <button type="button" className="btn btn-primary" onclick="addString(9)">9</button>
            <button type="button" className="btn btn-secondary" onclick="addString('*')">*</button>
          </div>
          <div className="button-row">
              <button type="button" className="btn btn-success" onclick="submitForm()">Submit</button>
            <button type="button" className="btn btn-primary" onclick="addString(0)">0</button>
            <button type="reset" className="btn btn-danger" onclick="resetField()">Reset</button>
            <button type="button" className="btn btn-secondary" onclick="addString('/')">/</button>
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

export default CalculatorApp;
import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import HistoryTable from './HistoryTable';

function CalculatorBody() {
    
      
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <CalculatorDisplay />
                </div>
                <div className="col-6">
                    <HistoryTable />
                </div>
            </div>
        </div>                    
    );
}

export default CalculatorBody;
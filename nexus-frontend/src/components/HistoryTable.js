import React from 'react';

function HistoryTable() {
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Calculation History</th>
            </tr>
            </thead>
            <tbody id="table-body">
            <tr>
                <th>1+1=3</th>
            </tr>
            </tbody>
        </table>
    );
}

export default HistoryTable;
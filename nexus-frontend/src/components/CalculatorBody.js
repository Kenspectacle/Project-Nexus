import React from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import HistoryTable from "./HistoryTable";

function CalculatorBody() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <CalculatorDisplay />
          </div>
          <div className="col-md-6 col-12">
            <HistoryTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorBody;

import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import HistoryTable from "./HistoryTable";

function CalculatorBody() {
  const [updateHistory, setUpdateHistory] = useState(false);

  const triggerHistoryUpdate = () => {
    setUpdateHistory(prev => !prev);
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <CalculatorDisplay triggerHistoryUpdate={triggerHistoryUpdate}/>
          </div>
          <div className="col-md-6 col-12">
            <HistoryTable  updateHistory={updateHistory}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorBody;

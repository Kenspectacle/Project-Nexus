import React from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import HistoryTable from "./HistoryTable";
import NavBar from "./NavBar";
import Footer from "./Footer";

function CalculatorBody() {
  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-6">
            <CalculatorDisplay />
          </div>
          <div className="col-6">
            <HistoryTable />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CalculatorBody;

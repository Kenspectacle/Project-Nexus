import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import CalculatorApp  from "./components/CalculatorApp";

function App() {
  return (
    <Routes>
      <Route path="/calcApp" element={<CalculatorApp />} />
    </Routes>
  );
}



export default App;

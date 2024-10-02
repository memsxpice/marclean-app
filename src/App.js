import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPV from './Components/LoginPV/LoginPV';
import PuntoVenta from './Components/PuntoVenta/PuntoVenta';

function App() {
  return (
      <Router>
      <Routes>
        <Route exact path="/puntoVenta" element={<PuntoVenta />} />
        <Route exact path="/" element={<LoginPV />} />
      </Routes>
    </Router>
  );
}

export default App;

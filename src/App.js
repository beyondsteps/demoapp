import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CartoMapComponent from './components/CartoMapComponent.js';
import StamenMapComponent from './components/StamenMapComponent.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/carto">Carto Map</Link>
            </li>
            <li>
              <Link to="/stamen">Stamen Map</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/carto" element={<CartoMapComponent />} />
          <Route path="/stamen" element={<StamenMapComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


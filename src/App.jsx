import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage.jsx'
import HomeService from './Components/HomeService/HomeService'
import Household from './Components/Household/Household'
import Convenience from './Components/Convenience/Convenience'
import Specialized from './Components/Specialized/Specialized'
import Form from './Components/Form/Form'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homeservice" element={<HomeService />} />
        <Route path="/household" element={<Household/>} />
        <Route path="/convenience" element={<Convenience/>} />
        <Route path="/specialized" element={<Specialized/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </Router>
  );
}

export default App;

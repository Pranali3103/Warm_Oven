import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
   
      <div>
         {/* <Navbar/> */}
         <Routes>
         
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    
  );
}

export default App;

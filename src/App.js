import React from 'react';
import Main from './pages/main/index';
import Description from './pages/description/index';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => (
  <Router basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/description" element={<Description />} />
        {/* <Route path="/step-two" element={<MainOne />} />
        <Route path="/step-three" element={<MainOne />} />
        <Route path="/step-four" element={<MainOne />} /> */}
      </Routes>
    </Router>
)

export default App;
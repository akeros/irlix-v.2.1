import React from 'react';
import Email from './pages/Email/index';
import Main from './pages/main/index';
import Description from './pages/description/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => (
  <Router basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/step-two" element={<Email />} />
        {/* <Route path="/step-three" element={<MainOne />} />
        <Route path="/step-four" element={<MainOne />} /> */}
      </Routes>
    </Router>
)

export default App;
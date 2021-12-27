import React from 'react';
import Email from './pages/Email/index';
import Main from './pages/main/index';
import Description from './pages/description/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useToast} from "./hooks";



const App = () => {
  const { renderToast } = useToast();
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/favorites" element={<Email />} />
          {/* <Route path="/step-three" element={<MainOne />} />
        <Route path="/step-four" element={<MainOne />} /> */}
        </Routes>
      </Router>
      {renderToast()}
    </>
  )
}

export default App;
import React from 'react';
import Email from './pages/Email/index';
import Searching from './pages/Searching/index';
import Main from './pages/main/index';
import Description from './pages/description/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useToast} from "./hooks";
import Header from "@components/Header";
import Footer from "@components/Footer";
import {baseUrl, descriptionUrl, favoritesUrl, searchUrl} from "@utils/routes";



const App = () => {
  const { renderToast } = useToast();
  return (
    <>
      <div className="main">
        <Router basename={baseUrl}>
          <Header />
            <Routes>
              <Route path={baseUrl} element={<Main />} />
              <Route path={`${descriptionUrl}/:id`} element={<Description />} />
              <Route path={favoritesUrl} element={<Email />} />
              <Route path={searchUrl} element={<Searching />} />
            </Routes>
          <Footer/>
        </Router>
      </div>
      {renderToast()}
    </>
  )
}

export default App;
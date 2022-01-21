import React from 'react';
import Email from './pages/Email/index';
import Searching from './pages/Searching/index';
import Main from './pages/main/index';
import Description from './pages/description/index';
import {FullPageRoutes} from './utils/routes/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useToast} from "./hooks";
import {baseUrl, descriptionUrl, favoritesUrl, searchUrl } from "@utils/routes";





const App = () => {
  const { renderToast } = useToast();
  return (
    <>
      <div className="main">
        <Router basename={baseUrl}>
          <Routes>
            <Route exact path={`${descriptionUrl}/:id`} element={<Description />} />
            <Route path="/" element={<FullPageRoutes/>}>
              <Route path={baseUrl} element={<Main />} />      
              <Route path={favoritesUrl} element={<Email />} />
              <Route path={searchUrl} element={<Searching />} />
            </Route>
          </Routes>
        </Router>
      </div>
      {renderToast()}
    </>
  )
}

export default App;

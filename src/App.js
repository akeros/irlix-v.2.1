import React from "react";
import {Email} from "./pages/Email/index";
import {Searching} from "./pages/Searching/index";
import {Main} from "./pages/Main/index";
import {Description} from "./pages/Description";
import {FullPageRoutes} from "@components/FullPageRoutes";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useToast} from "@hooks/useToast";
import {domain, baseUrl, descriptionUrl, favoritesUrl, searchUrl} from "src/utils/routes";

export const App = () => {
  const { renderToast } = useToast();
  return (
    <>
      <div className="main">
        <Router basename={domain}>
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

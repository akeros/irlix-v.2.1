
import Header from "@components/Header";
// import Footer from "@components/Footer";
import { Outlet , useLocation, Route, Routes } from 'react-router-dom';
import Footer from '@components/Footer';
export const baseUrl = '/';
export const descriptionUrl = '/description';
export const favoritesUrl = '/favorites';
export const searchUrl = '/search';



export const routeHeaders = {
  [baseUrl]: 'Главная',
  [favoritesUrl]: 'Избранное',
  [searchUrl]: 'Поиск',
}



export const Routes123 = () => {
  const location = useLocation();
  return (
  <>
    <Header title = {routeHeaders[location.pathname]}/>
      <Outlet/>
      <Routes>
            <Route path={baseUrl} element={<Footer />} /> 
            <Route path={favoritesUrl} element={<Footer />} />      
            <Route path={searchUrl} element={<Footer />} />   
      </Routes>
  </>
  );
};


import {Outlet , useLocation, Route, Routes} from 'react-router-dom';
import {Header} from "@components/Header";
import {Footer, FavoriteFooter} from '@components/Footer';
import {Search} from "@components/Search";
import {baseUrl, favoritesUrl, searchUrl, routeHeaders} from "@utils/routes";


export const FullPageRoutes = () => {
  const location = useLocation();
  return (
    <>
        <Header title = {routeHeaders[location.pathname]}/>
        <main>
            <Outlet/>
        </main>
        <div className="footer">
            <Routes>
                <Route path={baseUrl} element={<Footer />} /> 
                <Route path={favoritesUrl} element={<FavoriteFooter />} />
                <Route path={searchUrl} element={<Search />} />
            </Routes>
        </div>
    </>
  );
};
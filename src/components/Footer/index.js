import './index.css';
import search from '../../search.svg';
import {useNavigate} from 'react-router';
import Search from '../Search';
import {useLocation} from "react-router-dom";

const favoritesUrl = '/favorites';
const searchUrl = '/search';

function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isFavoritesUrl = pathname === favoritesUrl;
  const isSearchUrl = pathname === searchUrl;

  function show() {
    navigate("/search");
  }

  function handleClick() {
    navigate(isFavoritesUrl ? '/' : favoritesUrl)
  }

  return (
    <div className="footer">
      {isSearchUrl
        ? <Search />
        : (
          <>
            <button className="footertext" onClick={handleClick}>{isFavoritesUrl ? 'Назад' : 'Избранные'}</button>
            <button className="footersearch" onClick={show}><img src={search}/></button>
          </>
        )
      }
    </div>
  );
}

export default Footer;

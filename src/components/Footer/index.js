import './index.css';
import search from '@images/search.svg'
import {useNavigate} from 'react-router';
import Search from '../Search';
import {useLocation} from "react-router-dom";
import {baseUrl, favoritesUrl, getUrlName, notHeaderAndFooterUrl, searchUrl} from "@utils/routes";

const Footer = () =>  {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const qwe = useLocation();
  console.log(pathname.split('/')[1])

  const isFavoritesUrl = pathname === favoritesUrl;
  const isSearchUrl = pathname === searchUrl;
  const urlName = getUrlName(pathname);
  const isEmpty = notHeaderAndFooterUrl.includes(urlName);

  const show = () => {
    navigate(searchUrl);
  }

  const handleClick = () => {
    navigate(isFavoritesUrl ? baseUrl : favoritesUrl)
  }

  if (isEmpty) {
    return null;
  }

  return (
    <div className="footer">
      {isSearchUrl
        ? <Search />
        : (
          <>
            <button className="footer-text" onClick={handleClick}>{isFavoritesUrl ? 'Назад' : 'Избранные'}</button>
            <button className="footer-search" onClick={show}><img src={search}/></button>
          </>
        )
      }
    </div>
  );
}

export default Footer;

import './footer.css';
import search from '@images/search.svg'
import {useNavigate} from 'react-router';
import {favoritesUrl, searchUrl} from "@utils/routes";

export const Footer = () =>  {
  const navigate = useNavigate();

  const showSearch = () => {
    navigate(searchUrl);
  }

  const handleClick = () => {
    navigate(favoritesUrl)
  }

  return (
    <>
      <button className="footer-text" onClick={handleClick}>
        Избранные
      </button>
      <button className="footer-search" onClick={showSearch}>
        <img src={search} alt='logo'/>
      </button>
    </>
  );
}
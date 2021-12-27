import './index.css';
import search from '../../search.svg';
import {useNavigate} from 'react-router';
import Search from '../Search';
import {useDispatch, useSelector} from "react-redux";
import {showSearch} from "../../redux/appSlice";
import {useLocation} from "react-router-dom";

const favoritesUrl = '/favorites';

function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isSearchVisible = useSelector(state => state.app.isSearchVisible);

  const isFavoritesUrl = pathname === favoritesUrl;

  function show() {
    dispatch(showSearch())
  }

  function handleClick() {
    navigate(isFavoritesUrl ? '/' : favoritesUrl)
  }

  return (
    <div className="footer">
      {isSearchVisible
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

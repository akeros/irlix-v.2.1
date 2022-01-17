import './index.css';
import logo from '@images/logo.svg'
import {useNavigate} from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "@redux/appSlice";
import {useLocation} from "react-router-dom";
import {baseUrl, getUrlName, notHeaderAndFooterUrl, routeHeaders} from "@utils/routes";

const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Ноября',
  'Декабря',
];

const Header = () => {
  const dispatch = useDispatch();
  const filterType = useSelector(state => state.app.filterType);
  const date = new Date();
  const navigate = useNavigate();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = months[date.getMonth()];

  const { pathname } = useLocation();

  const urlName = getUrlName(pathname);
  const isEmpty = notHeaderAndFooterUrl.includes(urlName);

  const title = routeHeaders[urlName];

  const cards = useSelector((state) => state.app.cards);

  // collect all filters and remove duplicate values
  const headers = Array.from(new Set(cards.map(card => card?.type))).filter(type => type);

  const handleClick = () => {
    navigate(baseUrl)
  }

  const handleHeader= (header) => {
    dispatch(setFilter(filterType !== header && header));
  }

  if (isEmpty) {
    return null;
  }

  return (
    <header>
      <div className="razmet">
        <div className="wrapper">
          <div className="text" onClick={handleClick}>{title}</div>
          <div className="date">{day} {month} {year}</div>
        </div>
          <div><img src={logo}/></div>
      </div>
      <nav>
        {headers.map((header) => (
          <button
            className={`nav-button ${header === filterType && 'nav-button-active'}`}
            onClick={() => handleHeader(header)}
            key={header}
          >
            {header}
          </button>
        ))}
      </nav>
    </header>

  );
}

export default Header;
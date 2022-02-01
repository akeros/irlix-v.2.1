import logo from "@images/logo.svg"
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {clearSearch, setFilter} from "@redux/AppSlice";
import {baseUrl, favoritesUrl, searchUrl} from "src/utils/routes";
import {useLocation} from "react-router-dom";

import "./header.scss";
import {useEffect, useRef} from "react";

const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Ноября",
  "Декабря",
];

export const Header = ({ title }) => {
  const favorites = useSelector((state => state.app.favorites));
  const {pathname}= useLocation();
  const isFavoriteUrl = pathname === favoritesUrl
  const isSearchUrl = pathname === searchUrl
  const dispatch = useDispatch();
  const filterType = useSelector(state => state.app.filterType);
  const date = new Date();
  const navigate = useNavigate();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const currentUrl = useRef(pathname);

  useEffect(() => {
    if (filterType && pathname !== currentUrl.current) {
      dispatch(setFilter(undefined));
    }
    currentUrl.current = pathname;
  }, [currentUrl?.current, pathname, filterType])

  const cards = useSelector((state) => state.app.cards);
  const search = useSelector((state) => state.app.search);

  // collect all filters and remove duplicate values
  const headers = !(isSearchUrl && search === "") && Array.from(new Set(cards.filter(card => !isFavoriteUrl ||
      favorites?.includes(card.id)).map(card => card?.type))).filter(type => type) || [];

  const handleClick = () => {
    dispatch(clearSearch());
    navigate(baseUrl);
  }

  const handleSwitch = (header) => {
    dispatch(setFilter(filterType !== header && header));
  }

  return (
    <header>
      <div className="table">
        <div className="table-wrapper">
          <div className="table-wrapper-text" onClick={handleClick}>{title}</div>
          <div className="table-wrapper-date">{day} {month} {year}</div>
        </div>
          <div>
            <img src={logo} alt="logo"/>
          </div>
      </div>
      <nav>
        {headers.map((header) => (
          <button
            className={`nav-button ${header === filterType && "nav-button-active"}`}
            onClick={() => handleSwitch(header)}
            key={header}
          >
            {header}
          </button>
        ))}
      </nav>
    </header>

  );
}
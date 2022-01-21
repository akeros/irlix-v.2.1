import logo from '@images/logo.svg'
import {useNavigate} from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "@redux/appSlice";
import {baseUrl} from "@utils/routes";

import './index.css';

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

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const filterType = useSelector(state => state.app.filterType);
  const date = new Date();
  const navigate = useNavigate();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = months[date.getMonth()];

  const cards = useSelector((state) => state.app.cards);

  // collect all filters and remove duplicate values
  const headers = Array.from(new Set(cards.map(card => card?.type))).filter(type => type);

  const handleClick = () => {
    navigate(baseUrl)
  }

  const handleHeader= (header) => {
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
            <img src={logo} alt='logo'/>
          </div>
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
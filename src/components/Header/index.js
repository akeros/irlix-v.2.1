import './index.css';
import line from "../../line.svg";
import logo from "../../logo.svg";
import pub from "../../pub.svg";
import {useNavigate} from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../redux/appSlice";

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

const Header = ({title}) => {
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

  function handleClick() {
    navigate("/")
  }

  function handleHeader(header) {
    dispatch(setFilter(filterType !== header && header));
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
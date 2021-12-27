import './index.css';
import line from "../../line.svg";
import Vector from "../../Vector.svg";
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

function Header({ title }) {
  const dispatch = useDispatch();
  const filterType = useSelector(state => state.app.filterType);
  const date = new Date();
  const navigate = useNavigate();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = months[date.getMonth() - 1];

  const isSearchVisible = useSelector((state) => state.app.isSearchVisible);
  const cards = useSelector((state) => state.app.cards);

  // собираем все фильтры и убираем повторяющиеся значения
  const headers = Array.from(new Set(cards.map(card => card?.filters).flat()));

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
          <div className="text" onClick={handleClick}>{isSearchVisible ? 'Поиск' : title}</div>
          <div className="date">{day} {month} {year}</div>
        </div>
        <div>
          <div className="logo-three"><img src={line}/></div>
          <div className="logo"><img src={Vector}/></div>
          <div className="logo-two"><img src={pub}/></div>
        </div>
      </div>
      <nav>
        {headers.map((header) => (
          <button
            className={`nav-button ${header === filterType && 'nav-button-active'}`}
            onClick={() => handleHeader(header)}
          >
            {header}
          </button>
        ))}
        {/*<button className="nav-button">Новинки</button>*/}
        {/*<button className="nav-button">Сладкие</button>*/}
        {/*<button className="nav-button">Хит</button>*/}
        {/*<button className="nav-button">Крепкие</button>*/}
        {/*<button className="nav-button">Лонг</button>*/}
        {/*<button className="nav-button">Шот</button>*/}
      </nav>
    </header>

  );
}

export default Header;
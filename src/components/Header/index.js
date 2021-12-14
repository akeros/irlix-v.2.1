import './index.css';
import line from "../../line.svg";
import Vector from "../../Vector.svg";
import pub from "../../pub.svg";

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

function Header() {
  const date = new Date();

  const year = date.getFullYear();
  const day = date.getDate();
  const month = months[date.getMonth() - 1];

  return (
    <header>
      <div className="razmet">
        <div className="wrapper">
          <div className="text">Главная</div>
          <div className="date">{day} {month} {year}</div>
        </div>
        <div>
          <div className="logo-three"><img src={line}/></div>
          <div className="logo"><img src={Vector}/></div>
          <div className="logo-two"><img src={pub}/></div>
        </div>
      </div>
      <nav>
        <button className="nav-button">Новинки</button>
        <button className="nav-button">Сладкие</button>
        <button className="nav-button">Хит</button>
        <button className="nav-button">Крепкие</button>
        <button className="nav-button">Лонг</button>
        <button className="nav-button">Шот</button>
      </nav>
      <div className="opacity"/>
    </header>

  );
}

export default Header;
import Vector from './Vector.svg';
import pub from './pub.svg';
import line from './line.svg';
import card from './card.svg';
import cardtwo from './cardtwo.svg';
import cardblack from './cardblack.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="razmet">
      <div className="wrapper">
          <div className="text">Главная</div>
          <div className="date">17 июля 2021</div>
      </div>
      <div>
        <div className="logo-three"><img src={line}/></div>
          <div className="logo"><img src={Vector}/></div>
          <div className="logo-two"><img src={pub}/></div>
      </div>
      </div>
      <div className="Breadcrumbs">
        <button  className="Breadcrumbs-button">Новинки</button>
        <button className="Breadcrumbs-button">Сладкие</button>
        <button className="Breadcrumbs-button">Хит</button>
        <button className="Breadcrumbs-button">Крепкие</button>
        <button className="Breadcrumbs-button">Лонг</button>
        <button className="Breadcrumbs-button">Шот</button>
      </div>
      <div className="card">
        <img src={card}/>
          <div className="cardblack">
          <img src={cardblack}/>
          <div className="cardblacktext">30%</div>
          <div className="cardblacktextalc">Алкоголь</div>
          </div>
      </div>
          <div className="cardrazmet">
            <div className="cardtext">Blackberry</div>
            <div className="cardtexttwo">Fresh drink</div>
          </div>
      <div className="card-two">
        <img src={cardtwo}/>
        <div className="cardblack">
          <img src={cardblack}/>
          <div className="cardblacktext">10%</div>
          <div className="cardblacktextalc">Алкоголь</div>
          </div>
      </div>
      <div className="cardrazmettwo">
            <div className="cardtext">Blackberry</div>
            <div className="cardtexttwo">Fresh drink</div>
      </div>      
     </div>
  );
}

export default App;

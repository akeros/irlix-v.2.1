import card from '../../card.svg';
import cardtwo from '../../cardtwo.svg';
import search from '../../search.svg';
import Card from '../../components/Card/index';
import Header from '../../components/Header/index';
import './index.css';

function Main() {
  return (
    <div className="main">
      <Header/>
      <main>
        <div className="cards-list">
          <Card
            img={card}
            percents={30}
            title="Blackberry"
            description="Fresh drink"
          />
          <Card
            img={cardtwo}
            percents={40}
            title="Мохито"
            description="Fresh drink"
          />
        </div>
      </main>
        <div className="footer">
          <button className="footertext">Избранные</button>
          <button className="footersearch"> <img src={search}/> </button>
        </div>
      </div>  
  );
}

export default Main;

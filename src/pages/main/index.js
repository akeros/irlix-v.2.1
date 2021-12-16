import card from '../../card.svg';
import cardtwo from '../../cardtwo.svg';
import Card from '../../components/Card/index';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
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
        <Footer/>
      </div>  
  );
}

export default Main;

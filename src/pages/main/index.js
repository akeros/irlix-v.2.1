import Card from '../../components/Card/index';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import './index.css';
import { cardArray } from "../../mock/cards";

function Main() {
  return (
    <div className="main">
      <Header/>
      <main>
        <div className="cards-list">
          {cardArray.map((item) => (
            <Card
              img={item.img}
              percents={item.percents}
              title={item.title}
              description={item.description}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      </main>
        <Footer/>
      </div>  
  );
}

export default Main;

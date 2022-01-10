import './index.css';
import { useSelector } from "react-redux";
import {cardArray} from '../../mock/cards';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';


function Email() {
  const favorites = useSelector((state => state.app.favorites));
  const cards = useSelector((state => state.app.cards));
 
     return (
        <div className="main">
          <Header title="Избранные" />
          <main>
            <div className="cards-list">
              {cards.filter(card => favorites.includes(card.id)).map((item) => (
                <Card
                  img={item.img}
                  percents={item.percents}
                  title={item.title}
                  description={item.description}
                  key={item.id}
                  id={item.id}
                  isEmpty={item?.isEmpty}
                />
              ))}
            </div>
          </main>
          <Footer/>
         </div> 
  )
}
  
  export default Email;
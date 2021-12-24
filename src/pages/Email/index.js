import './index.css';
import { useSelector } from "react-redux";
import {cardArray} from '../../mock/cards';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Header';


function Email() {
  const favorites = useSelector((state => state.app.favorites));

 
     return (
        <div className="main">
          <Header/>
          <main>
            <div className="cards-list">
              {cardArray.filter(card => favorites.includes(card.id)).map((item) => (
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
  )
}
  
  export default Email;
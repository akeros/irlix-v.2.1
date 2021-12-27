import Card from '../../components/Card/index';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import './index.css';
// import { cardArray } from "../../mock/cards";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCards} from "../../redux/appSlice";

function Main() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.app.cards);

  useEffect(async () => {
    await getData();
  }, [])

  async function getData() {
    try {
      const response = await fetch('https://61c9d20d20ac1c0017ed8ea7.mockapi.io/api/v1/cards');

      if (response.ok) {
        const data = await response.json();

        dispatch(setCards(data || []));
      } else {
        console.error("Ошибка HTTP: " + response.status);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="main">
      <Header title="Главная" />
      <main>
        <div className="cards-list">
          {cards?.map((item) => (
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
  );
}

export default Main;

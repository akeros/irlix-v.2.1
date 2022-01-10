import Card from '../../components/Card/index';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import CardSearch from '../../components/CardSearch/index';
import './index.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCards} from "../../redux/appSlice";

function Searching() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.app.cards);
  const search = useSelector(state => state.app.search);
  const filterType = useSelector(state => state.app.filterType);

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
      <Header title="Поиск" />
      <main>
        <div className="cards-list">
          {
            search
            ? cards?.filter(card => !filterType || card?.type === filterType)?.map((item) => (
                <Card
                  img={item.img}
                  percents={item.percents}
                  title={item.title}
                  description={item.description}
                  key={item.id}
                  id={item.id}
                  isEmpty={item?.isEmpty}
                />
              ))
            : <CardSearch/>
          }
        </div>
      </main>
        <Footer/>
      </div>  
  );
}

export default Searching;

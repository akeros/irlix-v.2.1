import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Card from '@components/Card/index';
import {getCards} from "@api";
import {setCards} from "@redux/appSlice";

import './index.css';

function Main() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.app.cards);
  const filterType = useSelector(state => state.app.filterType);

  useEffect(async () => {
    const cards = await getCards();
    dispatch(setCards(cards));
  }, [])

  return (
    <div className="cards-list">

      {cards?.filter(card => !filterType || card?.type === filterType)?.map((item) => (
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
  );
}

export default Main;

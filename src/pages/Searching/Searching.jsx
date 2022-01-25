import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Card} from "@components/Card/index";
import {CardSearch} from "@components/CardSearch/index";

import {getCards} from "@api";

import {setCards} from "src/Redux/AppSlice";

export const Searching = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.app.cards);
  const search = useSelector(state => state.app.search);
  const filterType = useSelector(state => state.app.filterType);

  useEffect(() => {
    async function fetchDataCards() {
        const cards = await getCards();
        dispatch(setCards(cards))
    }
    fetchDataCards();
  }, [dispatch]);

  return (
    <div className="card-list">
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
  );
}


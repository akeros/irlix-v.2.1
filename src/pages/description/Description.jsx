import arrow from '@images/arrow.svg'
import kriv from '@images/kriv.svg'
import './description.css';
import {useNavigate} from 'react-router';
import {useEffect, useRef, useState } from "react";
import {useParams} from "react-router-dom";
import {Button} from "@components/Button";
import {DrinkDescription} from "@components/DrinkDescription";
import {useDispatch, useSelector} from "react-redux";
import {setCards, toggleFavorite} from "@redux/appSlice";
import {getCards} from "@api";
import {baseUrl} from "@utils/routes";
import {useToast} from "../../hooks";

const DOT = '.';

const INGRIDIENTS = [
    {
    title: 'Джин',
    value: 40 ,
    valueType: 'мл', 
  },
  {
    title: 'Шнапс',
    value: 10 ,
    valueType: 'мл', 
  },
  {
    title: 'Ликёр',
    value: 25 ,
    valueType: 'мл', 
  },
  {
    title: 'Сок',
    value: 25 ,
    valueType: 'мл', 
  },
  {
    title: 'Жасмин',
    value: 15 ,
    valueType: 'мл', 
  },
  {
      title: 'Ежевика',
      value: 2 ,
      valueType: 'шт', 
  },
  {
    title: 'Белок',
    value: 20 ,
    valueType: 'мл', 
  },
];

export const Description = () => {
  const dispatch = useDispatch();
  const [length, setLength] = useState();
  const { handlerToast } = useToast();
  const refDots = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  const cards = useSelector((state) => state.app.cards);
  const card = cards.find(item => item.id === id);
  
  const favorites = useSelector((state => state.app.favorites));

  const isFavorite = favorites.includes(id);

  const favoriteClick = () => {
    if (!isFavorite) {
      handlerToast('Добавлено в избранное');
    }
    dispatch(toggleFavorite(id));
  };

  useEffect(() => {
    if (refDots?.current?.offsetWidth) {
      setLength(refDots.current.offsetWidth);
    } else {
      setTimeout(() => setLength({}), 0)}
  }, [length]);

   
  const drawDots = () => {
    return DOT.repeat(length)
  }

  const handleClick = () => {
    navigate(baseUrl)
  }
  
  useEffect(() => {
    async function fetchData() {
        if (!card?.img) {
            const cards = await getCards();
            dispatch(setCards(cards));
        }
    }
    fetchData();
  }, [dispatch, card]);

  if (!card?.img) {
    return null;
  }

  return (
    <div className="wrapp" ref={refDots}>
      <button className="wrapp__fullback" onClick={handleClick}>
        <img src={arrow} alt='logo'/>
      </button>
      <div className="src">
          <img className="src__img" src={card.img} alt='logo'/>
      </div>
      <div className="description-text">
        <div className="description-text__marker">
            <Button className="marker-flag" onClick={favoriteClick} isFavorite={isFavorite} />
        </div>
        <div className="top-bar-segment">
          <div className="top-bar-segment__over">{card.title}</div>
          <div className="top-bar-segment__text">{card.description}</div>
          <div className="top-bar-segment__distruction">Ингредиенты</div>
          <div className="top-bar-segment__distruction-text">
            <div className='kriv'><img src={kriv} alt='logo'/></div>
            {INGRIDIENTS.map(ingredient => (
              <DrinkDescription 
              {...ingredient}
              dots={drawDots}/>
              ))}
          </div>
        </div>
        <div className="main-segment">
          <div className="main-segment__title">Как готовить</div>
          <div className="main-segment__title-text">Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок.
            Тщательно взбить и процедить в бокал.
            Украсить ежевикой.
            Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок.
            Тщательно взбить и процедить в бокал.
            Украсить ежевикой.
            Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            Добавить джин, шнапс
            Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок.
            Тщательно взбить и процедить в бокал.
            Украсить ежевикой.
            Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок.
            Тщательно взбить и процедить в бокал.
            Украсить ежевикой.
            Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            Добавить джин, шнапсыЕжевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок.
            Тщательно взбить и процедить в бокал.
            Украсить ежевикой.
            Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            Добавить джин, шнапс, ликёр, сок, жасмин лемонграсс и белок.
            Тщательно взбить и процедить в бокал.
            Украсить ежевикой.
            Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
            Добавить джин, шнапс
          </div>
        </div>
      </div>
    </div>
  );
}

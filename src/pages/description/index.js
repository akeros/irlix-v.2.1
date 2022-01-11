import arrow from '../../arrow.svg';
import kriv from '../../kriv.svg';
import './index.css';
import {useNavigate} from 'react-router';
import {useEffect, useRef, useState, useLayoutEffect} from "react";
import {useParams} from "react-router-dom";
import Button from "../../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {setCards} from "../../redux/appSlice";

function Description() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const cards = useSelector((state) => state.app.cards);
  const card = cards.find(item => item.id === id);
  const ref = useRef();

  function handleClick() {
    navigate("/")
  }

  const [length, setLength] = useState();

  useEffect(() => {
    if (ref?.current?.offsetWidth) {
      setLength(ref.current.offsetWidth);
    } else {
      setTimeout(() => setLength({}), 0)}
  }, [length]);

  const dot = '.';

  function drawDots() {
    return dot.repeat(length)
  }


  useEffect(async () => {
    if (!card?.img) {
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
  }, [card]);

  if (!card?.img) {
    return null;
  }

  return (
    <div className="wrapp" ref={ref}>
      <button className="fullback" onClick={handleClick}>
        <img src={arrow}/>
      </button>
      <div className="src">
          <img className="img" src={card.img}/>
      </div>
      <div className="description-text">
        <div className="marker">
            <Button id={id} style="marker-flag" />
        </div>
        <div className="top-bar-segment">
          <div className="glav">{card.title}</div>
          <div className="podglav-text">{card.description}</div>
          <div className="distruction">Ингредиенты</div>
          <div className="distruction-text">
            <div className='kriv'><img src={kriv}/></div>
            <div className="inner">
              <div className="inner-dots">{`Джин\u00A0${drawDots()}`}</div>
              <div className="inner-text-right">40 мл</div>
            </div>
            <div className="inner">
              <div className="inner-dots">{`Шнапс\u00A0яблоко\u00A0${drawDots()}`}</div>
              <div className="inner-text-right">10 мл</div>
            </div>
            <div className="inner">
              <div className="inner-dots">{`Ликёр\u00A0кассис\u00A0${drawDots()}`}</div>
              <div className="inner-text-right">25 мл</div>
            </div>
            <div className="inner">
              <div className="inner-dots">{`Сок\u00A0лимона\u00A0${drawDots()}`}</div>
              <div className="inner-text-right">25 мл</div>
            </div>
            <div className="inner">
              <div className="inner-dots">{`Жасмин\u00A0лемонграсс\u00A0${drawDots()}`}</div>
              <div className="inner-text-right">15 мл</div>
            </div>
            <div className="inner">
              <div className="inner-dots">{`Ежевика\u00A0свежая\u00A0${drawDots()}`}</div>
              <div className="inner-text-right">2 шт</div>
            </div>
            <div className="inner">
              <div className="inner-dots">{`Белок\u00A0${drawDots()}`}</div>
              <div className="inner-text-right">20 мл</div>
            </div>
          </div>
        </div>
        <div className="main-segment">
          <div className="titlemain">Как готовить</div>
          <div className="titletext">Ежевику (одну штуку) размять в шейкере, засыпать лёд на 2/3 шейкера.
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

export default Description;

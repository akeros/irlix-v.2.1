import cardtitle from '../../cardtitle.svg';
import arrow from '../../arrow.svg';
// import fon from '../../fon.svg';
import flag from '../../images/flag.svg';
import kriv from '../../kriv.svg';
import flaggrey from '../../images/flaggrey.svg';
import './index.css';
import {useNavigate} from 'react-router';
import {useEffect, useRef, useState} from "react";

function Description() {
  const navigate = useNavigate();


  function handleClick() {
    navigate("/")
  }

  const dot = '.';

  function drawDots() {
    return dot.repeat(window.innerWidth)
  }

  // console.log(drawDots());
  console.log(window.innerWidth);

  const [isFavorite, setFavorite] = useState(false);
  useEffect(() => {
    if (isFavorite) {
      alert('ахтунг')
    }
  },[isFavorite]);

  function handleFlag() {
    setFavorite((prevState) => !prevState);
  }

  return (
    <div className="wrapp">
      <button className="fullback" onClick={handleClick}>
        <img src={arrow}/>
      </button>
      <div className="src">
        <img src={cardtitle}/>
      </div>
      <div className="description-text">
        <div className="marker">
            <button className="marker-flag" onClick={handleFlag}>
                <img src={isFavorite ? flag : flaggrey}/>
            </button>
        </div>
        <div className="top-bar-segment">
          <div className="glav">Blackberry</div>
          <div className="podglav-text">Fresh drink</div>
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

import cardtitle from '../../cardtitle.svg';
import arrow from '../../arrow.svg';
// import fon from '../../fon.svg';
import './index.css';
import { useNavigate } from 'react-router';

function Description() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/")
    }
  return (
    <div className="wrapp">
        <button className="fullback" onClick={handleClick}><img src={arrow}/></button>
        <div className="src">
            <img src={cardtitle}/>
        </div>
        <div className="description-text">
            <div className="glav">Blackberry</div>
            <div className="podglav-text">Fresh drink</div>
            <div className="distruction">Ингредиенты</div>
            <div className="distruction-text">Джин .................................................. 40 мл 
                Шнапс яблоко .................................10 мл 
                Ликёр кассис..................................  25 мл 
                Сок лимона .....................................  25 мл 
                Жасмин лемонграсс ......................15 мл 
                Ежевика свежая ............................... 2 шт 
                Белок ................................................. 20 мл</div>
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
            </div>
            {/* <div><img src={fon}/></div> */}
        </div>
    </div>
  );
}

export default Description;

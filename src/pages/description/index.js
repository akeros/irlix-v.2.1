import cardtitle from '../../cardtitle.svg';
import arrow from '../../arrow.svg';
// import fon from '../../fon.svg';
import flag from '../../images/flag.svg';
import kriv from '../../kriv.svg';
import './index.css';
import { useNavigate } from 'react-router';

function Description() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/")
    }

    let tochka = '.';
    function Tochka() {
        return tochka.repeat(10)
    }

    console.log(Tochka(10));
  return (
    <div className="wrapp">
        <button className="fullback" onClick={handleClick}><img src={arrow}/></button>
        <div className="src">
            <img src={cardtitle}/>
        </div>
            <div className="description-text">
                    {/* <div className='kriv'><img src={kriv}/></div> */}
                   <div className="marker"><img src={flag}/></div>
                <div className="glav">Blackberry</div>
                <div className="podglav-text">Fresh drink</div>
                <div className="distruction">Ингредиенты</div>
                <div className="distruction-text">
                    <div className="inner" >
                        <div>Джин</div>
                        {/* <div>{Tochka}</div> */}
                        <div>40 мл</div>
                    </div>
                    <div className="inner" >
                        <div>Шнапс яблоко</div>
                        <div>.................................</div>
                        <div>10 мл</div>
                    </div>
                    <div className="inner" >
                        <div>Ликёр кассис</div>
                        <div>..................................</div>
                        <div>25 мл</div>
                    </div>
                    <div className="inner" >
                        <div>Сок лимона</div>
                        <div>.....................................</div>
                        <div>25 мл</div>
                    </div>
                    <div className="inner" >
                        <div>Жасмин лемонграсс</div>
                        <div>......................</div>
                        <div>15 мл</div>
                    </div>
                    <div className="inner" >
                        <div>Ежевика свежая</div>
                        <div>...............................</div>
                        <div>2 шт</div>
                    </div>
                    <div className="inner" >
                        <div>Белок</div>
                        <div>.................................................</div>
                        <div>20 мл</div>
                    </div>
                   </div>
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
  );
}

export default Description;

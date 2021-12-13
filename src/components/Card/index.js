import './index.css';
import card from '../../card.svg';
import cardblack from '../../cardblack.svg';

function Card() {
  return (
      <>
    <div className="main">
      <div className="card">
      <img src={card}/>
        <div className="cardblack">
        <img src={cardblack}/>
        <div className="cardblacktext">30%</div>
        <div className="cardblacktextalc">Алкоголь</div>
        </div>
    </div>
      <div className="cardrazmett">
      <div className="cardtextt">Blackberry</div>
      <div className="cardtexttwoo">Fresh drink</div>
    </div>
  </div>
</>
  );
}

export default Card;
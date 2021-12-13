import './index.css';
import flag from '../../images/flag.svg';

function Card({ img, percents, title, description }) {
  return (
    <div className="card">
      <img src={img}/>
      <div className="cardblack">
        <div className="cardblacktext">{percents}%</div>
        <div className="cardblacktextalc">Алкоголь</div>
      </div>
      <div className="flag">
        <img src={flag}/>
      </div>
      <div className="cardrazmett">
        <div className="cardtextt">{title}</div>
        <div className="cardtexttwoo">{description}</div>
      </div>
    </div>
  );
}

export default Card;
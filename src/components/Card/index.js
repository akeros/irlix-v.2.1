import './index.css';
import flag from '../../images/flag.svg';
import { useNavigate } from 'react-router';

function Card({ img, percents, title, description }) {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/description")
    }
  return (
    <div className="card">
      <button className="style" onClick={handleClick}><img src={img}/></button>
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
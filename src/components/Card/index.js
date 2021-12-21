import './index.css';
import flag from '../../images/flag.svg';
import Button from '../Button';
import flaggrey from '../../images/flaggrey.svg';
import {useNavigate} from 'react-router';
import {useState} from "react";

function Card({img, percents, title, description}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/description")
  }

  const [isFavorite, setFavorite] = useState(false);

  function handleFlag() {
    setFavorite((prevState) => !prevState);
  }

  return (
    <div className="card">
      <Button/>
      <button className="style" onClick={handleClick}><img src={img}/></button>
      <div className="cardblack">
        <div className="cardblacktext">{percents}%</div>
        <div className="cardblacktextalc">Алкоголь</div>
      </div>
      <button className="flag" onClick={handleFlag}>
        <img src={isFavorite ? flag : flaggrey}/>
      </button>
      <div className="cardrazmett">
        <div className="cardtextt">{title}</div>
        <div className="cardtexttwoo">{description}</div>
      </div>
    </div>
  );
}

export default Card;
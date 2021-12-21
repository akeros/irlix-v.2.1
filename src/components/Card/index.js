import './index.css';
import Button from '../Button';
import {useNavigate} from 'react-router';

function Card({img, percents, title, description, id}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/description/${id}`)
  }

  return (
    <div className="card">
      <button className="style" onClick={handleClick}><img src={img}/></button>
      <div className="cardblack">
        <div className="cardblacktext">{percents}%</div>
        <div className="cardblacktextalc">Алкоголь</div>
      </div>
      <Button style="flag" id={id} />
      <div className="cardrazmett">
        <div className="cardtextt">{title}</div>
        <div className="cardtexttwoo">{description}</div>
      </div>
    </div>
  );
}

export default Card;
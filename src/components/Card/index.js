import './index.css';
import Button from '../Button';
import {useNavigate} from 'react-router';
import empty from '../../empty.png'

function Card({img, percents, title, description, id, isEmpty}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/description/${id}`)
  }

  return (
    <div className="card">
      <button className="style" onClick={handleClick}><img src={isEmpty ? empty : img}/></button>
      {isEmpty
        ? <div className="notResult">Нет результатов</div>
        : (
          <>
            <div className="cardblack">
              <div className="cardblacktext">{percents}%</div>
              <div className="cardblacktextalc">Алкоголь</div>
            </div>
            <Button style="flag" id={id} />
          </>
        )
      }
      <div className="cardrazmett">
        <div className="cardtextt">{title}</div>
        <div className="cardtexttwoo">{description}</div>
      </div>
    </div>
  );
}

export default Card;
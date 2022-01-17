import './index.css';
import Button from '../Button';
import {useNavigate} from 'react-router';
import empty from '@images/empty.png';
import {descriptionUrl} from "@utils/routes";
import {useDispatch, useSelector} from "react-redux";
import {useToast} from "../../hooks";
import {toggleFavorite} from "@redux/appSlice";

const Card = ({img, percents, title, description, id, isEmpty}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isEmpty) {
      navigate(`${descriptionUrl}/${id}`)
    }
  }

  const favorites = useSelector((state => state.app.favorites));

  const isFavorite = favorites.includes(id);

  const { handlerToast } = useToast();

  const favoriteClick = () => {
    if (!isFavorite) {
      handlerToast('Добавлено в избранное');
    }
    dispatch(toggleFavorite(id));
  };

  return (
    <div className="container-content">
      <div className="card">
          <button className="style" onClick={handleClick}>
            <img className='content' src={isEmpty ? empty : img}/>
          </button>
        {isEmpty
          ? <div className="notResult">Нет результатов</div>
          : (
            <>
              <div className="cardblack">
                <div className="cardblacktext">{percents}%</div>
                <div className="cardblacktextalc">Алкоголь</div>
              </div>
              <Button style="flag" isFavorite={isFavorite} onClick={favoriteClick} />
            </>
          )
        }
        <div className="cardrazmett">
          <div className="cardtextt">{title}</div>
          <div className="cardtexttwoo">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
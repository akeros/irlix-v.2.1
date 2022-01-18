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
    <div className="container">
      <div className="container__card">
          <button className="container__card-style" onClick={handleClick}>
            <img className='container__card-style-content' src={isEmpty ? empty : img}/>
          </button>
        {isEmpty
          ? <div className="container__noResult">Нет результатов</div>
          : (
            <>
              <div className="container__cardblack">
                <div className="container__percents">{percents}%</div>
                <div className="container__alcohol">Алкоголь</div>
              </div>
              <Button style="flag" isFavorite={isFavorite} onClick={favoriteClick} />
            </>
          )
        }
        <div className="table-text">
          <div className="table-text__title">{title}</div>
          <div className="table-text__description">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
import "./card.scss";
import {Button} from "@components/Button";
import empty from "@images/empty.png";
import {descriptionUrl} from "src/utils/routes";
import {useDispatch, useSelector} from "react-redux";
import {useToast} from "@hooks/useToast";
import {toggleFavorite} from "../../Redux/AppSlice";
import {Link} from "react-router-dom";

export const Card = ({img, percents, title, description, id, isEmpty}) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state => state.app.favorites));

  const isFavorite = favorites.includes(id);

  const { handlerToast } = useToast();

  const favoriteClick = () => {
    if (!isFavorite) {
      handlerToast("Добавлено в избранное");
    }
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={ isEmpty ? "cardEmpty" : "col" } >
      <div className="card">
        <Link className="card__link" to={!isEmpty && `${descriptionUrl}/${id}`}>
            <img className="card__image" alt="logo" src={isEmpty ? empty : img}/>
        </Link>
        {isEmpty
          ? <div className="card__noResult">Нет результатов</div>
          : (
            <>
              <div className="card__cardblack">
                <div className="card__cardblack-percents">{percents}%</div>
                <div className="card__cardblack-alcohol">Алкоголь</div>
              </div>
              <Button className="card__flag" isFavorite={isFavorite} onClick={favoriteClick} />
            </>
          )
        }
        <div className="card__text">
          <div className="card__title">{title}</div>
          <div className="card__subtitle">{description}</div>
        </div>
      </div>
    </div>
  );
}

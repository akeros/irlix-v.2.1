import "./card.css";
import {Button} from "@components/Button";
import empty from "@images/empty.png";
import {descriptionUrl} from "src/utils/routes";
import {useDispatch, useSelector} from "react-redux";
import {useToast} from "@hooks";
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
    <div className="container">
      <div className="container__card">
        <Link to={!isEmpty && `${descriptionUrl}/${id}`}>
          <div className="container__card-style">
            <img className="container__card-style-content" alt="logo" src={isEmpty ? empty : img}/>
          </div>
        </Link>
        {isEmpty
          ? <div className="container__noResult">Нет результатов</div>
          : (
            <>
              <div className="container__cardblack">
                <div className="container__percents">{percents}%</div>
                <div className="container__alcohol">Алкоголь</div>
              </div>
              <Button className="flag" isFavorite={isFavorite} onClick={favoriteClick} />
            </>
          )
        }
        <div className="description">
          <div className="description__title">{title}</div>
          <div className="description__title-down">{description}</div>
        </div>
      </div>
    </div>
  );
}

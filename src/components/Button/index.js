import './index.css';
import flag from '../../images/flag.svg';
import flaggrey from '../../images/flaggrey.svg';
import {useDispatch, useSelector} from "react-redux";
import {toggleFavorite} from "../../redux/appSlice";
import {useToast} from "../../hooks";

function Button({ style, id }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state => state.app.favorites));

  const isFavorite = favorites.includes(id);

  const { handlerToast } = useToast();

  function handleFlag() {
    if (!isFavorite) {
      handlerToast('Добавлено в избранное');
    }
    dispatch(toggleFavorite(id));
  }

  return (
      <button className={style} onClick={handleFlag}>
        <img src={isFavorite ? flag : flaggrey}/>
      </button>
  );
}

export default Button;
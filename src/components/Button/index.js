import './index.css';
import flag from '@images/flag.svg';
import flaggrey from '@images/flaggrey.svg';
import {useDispatch, useSelector} from "react-redux";
import {toggleFavorite} from "@redux/appSlice";
import {useToast} from "../../hooks";

  const Button = ({ isFavorite, onClick, style}) => {
    return (
        <button className={style} onClick={onClick}>
          <img src={isFavorite ? flag : flaggrey}/>
        </button>
    );
}

export default Button;
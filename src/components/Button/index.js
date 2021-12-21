import './index.css';
import flag from '../../images/flag.svg';
import flaggrey from '../../images/flaggrey.svg';
import {useState} from "react";

function Button({style}) {
  const [isFavorite, setFavorite] = useState(false);

  function handleFlag() {
    setFavorite((prevState) => !prevState);
  }

  return (
      <button className={style} onClick={handleFlag}>
        <img src={isFavorite ? flag : flaggrey}/>
      </button>
  );
}

export default Button;
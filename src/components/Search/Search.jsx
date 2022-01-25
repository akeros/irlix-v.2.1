import "./search.css";
import {useDispatch, useSelector} from "react-redux";
import cancel from "@images/cancel.svg"
import {clearSearch, searching,} from "src/Redux/AppSlice";
import {useNavigate} from "react-router";
import {baseUrl} from "src/Utils/Routes";

export const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchString = useSelector(state => state.app.search);

  const handleChange = (event) => {
    dispatch(searching(event.target.value));
  }

  const handleClear = () => {
    if (searchString) {
      dispatch(clearSearch());
    } else {
      navigate(baseUrl);
    }
  }

  return (
    <div className="cancel-table">
      <input className="cancel-table-input" value={searchString} onChange={handleChange} autoFocus />
      <div className="cancel-top">
        <button className="button-top" onClick={handleClear}><img src={cancel} alt="logo"/></button>
      </div>
    </div>
  );
}

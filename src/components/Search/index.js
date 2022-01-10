import './index.css';
import {useDispatch, useSelector} from "react-redux";
import krest from '../../images/krest.svg';
import {clearSearch, searching,} from "../../redux/appSlice";
import {useNavigate} from "react-router";

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const value = useSelector(state => state.app.search);

  function handleChange(event) {
    dispatch(searching(event.target.value));
  }

  function handleClear() {
    if (value) {
      dispatch(clearSearch());
    } else {
      navigate('/');
    }
  }

  return (
    <div className='krest-table'>
      <input className='input' value={value} onChange={handleChange} autoFocus />
      <div className='krest-top'>
        <button className='button-top' onClick={handleClear}><img src={krest}/></button>
      </div>
    </div>
  );
}

export default Search;